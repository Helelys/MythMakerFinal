import { Component } from '@angular/core';

@Component({
  selector: 'app-missao-gerador-dnd',
  imports: [],
  templateUrl: './missao-gerador-dnd.html',
  styleUrl: './missao-gerador-dnd.scss',
})
export class MissaoGeradorDnd {
  objetivo: any;
  contratanteNome: any;
  classeSocial: any;
  motivacao: any;
  local: any;
  situacao: any;
  recompensa: any;

  exiberMissao: boolean = false;

  private gerarObjetivo() {
    const objetivoDaMissao: string[] = [
      "Resgate", "Escolta", 
      "Investigar", "Matar/Derrotar",
      "Roubar", "Recuperar Itetm",
      "Espionar", "Explorar um lugar"
    ];

      return this.objetivo = objetivoDaMissao[Math.floor(Math.random() * objetivoDaMissao.length)];
  }

  private gerarContratante() {
    const classesSociais: string[] = [
      "Nobre", "Mercador", "Camponês", "Cavaleiro",
      "Membro de Ordem Religiosa", "Informante", "Membro da Guilda"
    ];
    const motivacoes: string[] = [
      "Ganância", "Vingança", "Dever", "Curiosidade",
      "Medo", "Ambição", "Altruísmo"
    ]
    this.contratanteNome = this.gerarNomes();
    this.classeSocial = classesSociais[Math.floor(Math.random() * classesSociais.length)];
    this.motivacao = motivacoes[Math.floor(Math.random() * motivacoes.length)];
  }

  private lugar(){
    const lugares: string[] = [
      "Floresta", "Caverna", "Montanha", "Ruínas Antigas",
      "Cidade Grande", "Cidade Pequena", "Ilha Remota",
      "Subterrâneo", "Pântano", "Deserto"
    ]
    return this.local = lugares[Math.floor(Math.random() * lugares.length)];
  }

  private reviravolta() {
    const situacoes: string[] = [
      "O contratante mentiu!", "O alvo não é o vilão", "O item é amaldiçoado", "Há um demônio envolvido",
      "O local é assombrado", "O contratante tem um segredo obscuro",
      "O alvo é um parente do contratante", "O item é mais poderoso do que se imagina", "O local é uma armadilha"
    ]
    return this.situacao = situacoes[Math.floor(Math.random() * situacoes.length)];
  }


  private recompensas() {
    const recompensasPossiveis: string[] = [
      "Ouro", "Item Mágico", "Informação Valiosa", "Aliança com um NPC Poderoso", "Favor futuro"
    ];
    return this.recompensa = recompensasPossiveis[Math.floor(Math.random() * recompensasPossiveis.length)];
  }

  public gerarMissao() {
    this.exiberMissao = true;
    this.gerarObjetivo();
    this.gerarContratante();
    this.lugar();
    this.reviravolta();
    this.recompensas();
  }

  public deletarMissao() {
    this.exiberMissao = false;
  }

  private gerarNomes(): string {
    const nomes:string[] = [
        "Aric", "Liora", "Borin", "Kael", "Selene", "Dorian", "Thalia", "Rurik", "Elira", "Garrick", "Nyx", "Cedric", "Vera",
        "Orin", "Lyra", "Magnus", "Seraphine", "Torvin", "Isolde", "Fenric", "Alaric", "Mira", "Kieran", "Brunna", "Eldrin", "Helga", 
        "Cassian", "Rowan", "Sylas", "Tarin", "Vex", "Noren", "Zara", "Blaine", "Eira", "Draven", "Fiora", "Galen", "Harkin", "Iris", 
        "Joran", "Kaida", "Luken", "Marek", "Nyla", "Orla", "Perrin", "Quin", "Rhea", "Soren"
    ]

    const sobrenomes:string[] = [
      "Valen", "Thorne", "Stonehand", "Draven", "Virel", "Blackwood", "Moonbrook", "Ironfist", "Dawnstar", "Hollow",
      "Shadowveil", "Ashford", "Nightshade", "Feldspar", "Windwhisper", "Crowley", "Larkspur", "Emberforge", "Ravenscar", "Wolfborn",
      "Stormbane", "Goldleaf", "Duskwalker", "Oakshield", "Faewood", "Frostbeard", "Grimward", "Brighthelm", "Darkmoor", "Silverkeep",
      "Redwyne", "Winterborn", "Firebrand", "Deepdelver", "Lightbringer", "Gravesend", "Ironwood", "Stormcaller", "Mistvale", "Highmore",
      "Thornfield", "Duskryn", "Flintforge", "Emberfall", "Nightbloom", "Stonevale", "Ravencrest", "Frostvale", "Goldcrest", "Shadowmere"
    ]

    return `${nomes[Math.floor(Math.random() * nomes.length)]} ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`;
  }
}
