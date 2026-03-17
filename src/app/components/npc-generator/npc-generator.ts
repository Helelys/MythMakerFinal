import { Component } from '@angular/core';

@Component({
  selector: 'app-npc-generator',
  imports: [],
  templateUrl: './npc-generator.html',
  styleUrl: './npc-generator.scss',
})
export class NpcGenerator {

  numeroAleatorio:number = Math.floor(Math.random() * 3) + 1;
  forca: any;
  destreza: any;
  vigor: any;
  inteligencia: any;
  presenca: any;
  mostrarAtributos: boolean = false;
  nome: any;
  sobrenome: any;
  personalidade: any;
  personalidade2: any;
  pericia: any;
  cargo: any;
  idade: any;
  
  nomes: string[] = [
            "João", "Gabriel", "Lucas", "Mateus", "Pedro",
            "Rafael", "Gustavo", "Felipe", "Bruno", "Daniel",
            "Marcos", "André", "Rodrigo", "Fernando", "Ricardo",
            "Eduardo", "Diego", "Thiago", "Leandro", "Vinícius",
            "Paulo", "Roberto", "Marcelo", "Alexandre", "Leonardo",
            "Maria", "Ana", "Juliana", "Fernanda", "Patrícia",
            "Camila", "Amanda", "Larissa", "Beatriz", "Carolina",
            "Gabriela", "Letícia", "Renata", "Vanessa", "Aline",
            "Bianca", "Daniela", "Natália", "Priscila", "Tatiane",
            "Mariana", "Isabela", "Bruna", "Cristiane", "Elaine"
          ]

  sobrenomes: string[] = [
            "Silva", "Santos", "Oliveira", "Souza", "Rodrigues",
            "Ferreira", "Alves", "Pereira", "Lima", "Gomes",
            "Ribeiro", "Carvalho", "Almeida", "Lopes", "Soares",
            "Fernandes", "Vieira", "Barbosa", "Rocha", "Dias",
            "Monteiro", "Cardoso", "Reis", "Araújo", "Nascimento",
            "Correia", "Teixeira", "Cavalcanti", "Moura", "Freitas",
            "Batista", "Campos", "Farias", "Medeiros", "Peixoto",
            "Rezende", "Borges", "Machado", "Queiroz", "Duarte",
            "Moreira", "Pacheco", "Tavares", "Mendes", "Castro",
            "Azevedo", "Brito", "Neves", "Coelho", "Aguiar"
          ]

  ocupacao: string[] = [
            "Pedreiro", "Servente de Pedreiro", "Eletricista", "Encanador", "Pintor",
            "Carpinteiro", "Mecânico", "Motorista Particular", "Motorista de Uber", "Motoboy",
            "Entregador", "Vendedor", "Vendedor Ambulante", "Caixa", "Atendente",
            "Garçom", "Cozinheiro", "Auxiliar de Cozinha", "Padeiro", "Confeiteiro",
            "Açougueiro", "Frentista", "Segurança", "Vigilante", "Porteiro",
            "Zelador", "Faxineiro", "Diarista", "Lavador de Carros", "Desempregado",
            "Cabeleireiro", "Barbeiro", "Manicure", "Costureira", "Agricultor",
            "Pescador", "Marceneiro", "Serralheiro", "Técnico de Informática", "Programador",
            "Designer Gráfico", "Fotógrafo", "Professor", "Professor Particular", "Enfermeiro",
            "Cuidador de Idosos", "Babá", "Taxista", "Caminhoneiro", "Empresário"
          ]

  personalidades: string[] = [
          "Extrovertido", "Introvertido", "Calmo", "Ansioso", "Otimista",
          "Pessimista", "Carismático", "Tímido", "Impulsivo", "Racional",
          "Criativo", "Pragmático", "Teimoso", "Empático", "Competitivo"
          ]

  gerarNPC() {
    this.mostrarAtributos = true;
    this.gerarAtributos();
    this.gerarNome();
    this.gerarPersonalidade();
    this.gerarPericia();
    this.gerarOcupacao();
    this.gerarIdade();
  }

  deletarNPC() {
    this.mostrarAtributos = false;
  }

  private gerarAtributos() {
  const atributos = ['forca', 'destreza', 'vigor', 'inteligencia', 'presenca'] as const;

  this.forca = 1;
  this.destreza = 1;
  this.vigor = 1;
  this.inteligencia = 1;
  this.presenca = 1;

  for (let i = 0; i < 4; i++) {
    const atributo = atributos[Math.floor(Math.random() * atributos.length)];

    if (this[atributo] < 3) {
      this[atributo]++;
    } else {
      i--;
    }
  }
  }

  private gerarNome() {
    this.nome = this.nomes[Math.floor(Math.random() * this.nomes.length)];
    this.sobrenome = this.sobrenomes[Math.floor(Math.random() * this.sobrenomes.length)];
    return `${this.nome} ${this.sobrenome}`;
  }

  private gerarPersonalidade() {
    this.personalidade = this.personalidades[Math.floor(Math.random() * this.personalidades.length)];
    this.personalidade2 = this.personalidades[Math.floor(Math.random() * this.personalidades.length)];
    if (this.personalidade === this.personalidade2) {
      this.personalidade = this.personalidades[Math.floor(Math.random() * this.personalidades.length)];
      return `${this.personalidade} e ${this.personalidade2}`;
    } else {
      return `${this.personalidade} e ${this.personalidade2}`;
    }
  }

  private gerarPericia() {
    if (this.forca > this.destreza && this.forca > this.vigor) {
      this.pericia = "Luta + 5";
    } else if (this.destreza > this.forca && this.destreza > this.vigor) {
      this.pericia = "Pontaria + 5";
    } else if (this.vigor > this.forca && this.vigor > this.destreza) {
      this.pericia = "Fortitude + 5";
    } else if (this.presenca > this.forca && this.presenca > this.destreza && this.presenca > this.vigor) {
      this.pericia = "Diplomacia + 5 e Percepção + 5";
    } else {
      this.pericia = "Luta + 5, Pontaria + 5 e Percepção + 5";
    }
  }

  private gerarOcupacao() {
    this.cargo = this.ocupacao[Math.floor(Math.random() * this.ocupacao.length)];
    return this.ocupacao;
  }
  
  private gerarIdade() {
    this.idade = Math.floor(Math.random() * 60) + 18;
    return this.idade;
  }
}
