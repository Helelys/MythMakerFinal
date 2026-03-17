import { Component } from '@angular/core';

@Component({
  selector: 'app-missao-gerador',
  imports: [],
  templateUrl: './missao-gerador.html',
  styleUrl: './missao-gerador.scss',
})
export class MissaoGerador {

  informante: any;
  responsavel: any;
  acao1: any;
  acao2: any;
  local: any;
  situacao: any;
  estado: any;
  exiberMissao: boolean = false;

  private gerarInformante() {
    const informantes: string[] = [
      "Sobrevivente/Testemunha", "Policial", 
      "Ocultista", "Inquisidores"];

      return this.informante = informantes[Math.floor(Math.random() * informantes.length)];
  }

  private gerarResponsavel() {
    const responsaveis: string[] = [
      "Criatura de sangue", "Criatura de Morte", 
      "Criatura de Conhecimento", "Criatura de Energia", 
      "Ordem de Cultistas", "Criminoso", 
      "Ocultista Poderoso", "Item Amaldiçoado", 
      "Civil Curioso", "Grupo Convicto"
    ]
    return this.responsavel = responsaveis[Math.floor(Math.random() * responsaveis.length)];
  }

  private gerarAcao(){
    const acoes: string[] = [
        "Buscando Sacrifícios", "Invocando Criatura de Sangue",
        "Invocando Criatura de Morte", "Invocando Criatura de Conhecimento",
        "Invocando Criatura de Energia", "Caçando Agentes (Jogadores ou NPCs)",
        "Coletando Itens Paranormais", "Aterrorizando",
        "Completando um Ritual"
    ]

    this.acao1 = Math.floor(Math.random() * acoes.length);
    this.acao2 = Math.floor(Math.random() * acoes.length);

    while(this.acao1 === this.acao2){
      this.acao2 = Math.floor(Math.random() * acoes.length);
    }

    return this.acao1 = acoes[this.acao1], this.acao2 = acoes[this.acao2];
  }

  private gerarLocal() {
    const locais: string[] = [
      "Hospital", "Ilha remota", "Pequeno vilarejo",
      "Becos e ruelas de cidade grande", "Prédio abandonado", "Condomínio fechado",
      "Escola", "Prédio histórico", "Zona rural da cidade",
      "Subterrâneo/Esgotos", "Floresta", "Deserto",
      "Pântano", "Montanhas", "Cemitério",
      "Cidade Grande", "Cidade pequena"
    ]
    return this.local = locais[Math.floor(Math.random() * locais.length)];
  }

  private gerarSituacao() {
    const situacoes: string[] = [
      "Abandonado", "Levemente Ocupado", "Muito Ocupado", "Interditado"
    ]
    return this.situacao = situacoes[Math.floor(Math.random() * situacoes.length)];
  }


private gerarEstado(): string {
  const mapa: Record<string, string[]> = {
    Norte: ["Acre", "Amapá", "Amazonas", "Pará", "Rondônia", "Roraima", "Tocantins"],
    Nordeste: ["Alagoas", "Bahia", "Ceará", "Maranhão", "Paraíba", "Pernambuco", "Piauí", "Rio Grande do Norte", "Sergipe"],
    "Centro-Oeste": ["Distrito Federal", "Goiás", "Mato Grosso", "Mato Grosso do Sul"],
    Sudeste: ["Espírito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"],
    Sul: ["Paraná", "Rio Grande do Sul", "Santa Catarina"]
  };

  const regioes = Object.keys(mapa);
  const regiao = regioes[Math.floor(Math.random() * regioes.length)];
  const estados = mapa[regiao];

  return this.estado = estados[Math.floor(Math.random() * estados.length)];
}

  public gerarMissao() {
    this.exiberMissao = true;
    this.gerarInformante();
    this.gerarResponsavel();
    this.gerarAcao();
    this.gerarLocal();
    this.gerarSituacao();
    this.gerarEstado();
  }

  public deletarMissao() {
    this.exiberMissao = false;
  }
}
