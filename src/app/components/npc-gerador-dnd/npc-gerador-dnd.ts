import { Component } from '@angular/core';

@Component({
  selector: 'app-npc-gerador-dnd',
  imports: [],
  templateUrl: './npc-gerador-dnd.html',
  styleUrl: './npc-gerador-dnd.scss',
})
export class NpcGeradorDnd {

  nome: any;
  especie: any;
  forca: any;
  destreza: any;
  constituicao: any
  inteligencia: any;
  sabedoria: any
  carisma: any;
  classe: any;

  deletar: boolean = false;

  bonusForca: any;
  bonusDestreza: any;
  bonusConstituicao: any
  bonusInteligencia: any;
  bonusSabedoria: any
  bonusCarisma: any;

  pericia1: any;
  pericia2: any;
  pericia3: any;

  private gerarAtributos() {
    this.forca = Math.floor(Math.random() * 20) + 1;
    this.destreza = Math.floor(Math.random() * 20) + 1;
    this.constituicao = Math.floor(Math.random() * 20) + 1;
    this.inteligencia = Math.floor(Math.random() * 20) + 1;
    this.sabedoria = Math.floor(Math.random() * 20) + 1;
    this.carisma = Math.floor(Math.random() * 20) + 1;
  }

  private gerarPericias() {
    const pericias: string[] = [
      "Acrobacia - Destreza", "Arcanismo - Inteligência", 
      "Atletismo - Força", "Atuação - Carisma",
      "Enganação - Carisma", "Furtividade - Destreza",
      "História - Inteligência", "Intimidação - Carisma",
      "Intuição - Sabedoria", "Investigação - Inteligência",
      "Lidar com Animais - Sabedoria", "Medicina - Sabedoria",
      "Natureza - Inteligência", "Percepção - Sabedoria",
      "Persuasão - Carisma", "Prestidigitação - Destreza",
      "Religião - Inteligência", "Sobrevivência - Sabedoria"
    ];

    this.pericia1 = pericias[Math.floor(Math.random() * pericias.length)];
    this.pericia2 = pericias[Math.floor(Math.random() * pericias.length)];
    this.pericia3 = pericias[Math.floor(Math.random() * pericias.length)];

    if (this.pericia1 === this.pericia2) {
      this.pericia2 = pericias[Math.floor(Math.random() * pericias.length)];
    } else if (this.pericia1 === this.pericia3) {
      this.pericia3 = pericias[Math.floor(Math.random() * pericias.length)];
    } else if (this.pericia2 === this.pericia3) {
      this.pericia3 = pericias[Math.floor(Math.random() * pericias.length)];
    }
  }

  private calcularBonusForca() {
    if (this.forca == 1) {
      this.bonusForca = -5;
    } else if (this.forca >= 2 && this.forca <= 3) {
      this.bonusForca = -4;
    } else if (this.forca >= 4 && this.forca <= 5) {
      this.bonusForca = -3;
    } else if (this.forca >= 6 && this.forca <= 7) {
      this.bonusForca = -2;
    } else if (this.forca >= 8 && this.forca <= 9) {
      this.bonusForca = -1;
    } else if (this.forca >= 10 && this.forca <= 11) {
      this.bonusForca = 0;
    } else if (this.forca >= 12 && this.forca <= 13) {
      this.bonusForca = 1;
    } else if (this.forca >= 14 && this.forca <= 15) {
      this.bonusForca = 2;
    } else if (this.forca >= 16 && this.forca <= 17) {
      this.bonusForca = 3;
    } else if (this.forca >= 18 && this.forca <= 19) {
      this.bonusForca = 4;
    } else if (this.forca == 20) {
      this.bonusForca = 5;
    }
  }

  private calcularBonusDestreza() {
    if (this.destreza == 1) {
      this.bonusDestreza = -5;
    } else if (this.destreza >= 2 && this.destreza <= 3) {
      this.bonusDestreza = -4;
    } else if (this.destreza >= 4 && this.destreza <= 5) {
      this.bonusDestreza = -3;
    } else if (this.destreza >= 6 && this.destreza <= 7) {
      this.bonusDestreza = -2;
    } else if (this.destreza >= 8 && this.destreza <= 9) {
      this.bonusDestreza = -1;
    } else if (this.destreza >= 10 && this.destreza <= 11) {
      this.bonusDestreza = 0;
    } else if (this.destreza >= 12 && this.destreza <= 13) {
      this.bonusDestreza = 1;
    } else if (this.destreza >= 14 && this.destreza <= 15) {
      this.bonusDestreza = 2;
    } else if (this.destreza >= 16 && this.destreza <= 17) {
      this.bonusDestreza = 3;
    } else if (this.destreza >= 18 && this.destreza <= 19) {
      this.bonusDestreza = 4;
    } else if (this.destreza == 20) {
      this.bonusDestreza = 5;
    }
  }

  private calcularBonusConstituicao() {
    if (this.constituicao == 1) {
      this.bonusConstituicao = -5;
    } else if (this.constituicao >= 2 && this.constituicao <= 3) {
      this.bonusConstituicao = -4;
    } else if (this.constituicao >= 4 && this.constituicao <= 5) {
      this.bonusConstituicao = -3;
    } else if (this.constituicao >= 6 && this.constituicao <= 7) {
      this.bonusConstituicao = -2;
    } else if (this.constituicao >= 8 && this.constituicao <= 9) {
      this.bonusConstituicao = -1;
    } else if (this.constituicao >= 10 && this.constituicao <= 11) {
      this.bonusConstituicao = 0;
    } else if (this.constituicao >= 12 && this.constituicao <= 13) {
      this.bonusConstituicao = 1;
    } else if (this.constituicao >= 14 && this.constituicao <= 15) {
      this.bonusConstituicao = 2;
    } else if (this.constituicao >= 16 && this.constituicao <= 17) {
      this.bonusConstituicao = 3;
    } else if (this.constituicao >= 18 && this.constituicao <= 19) {
      this.bonusConstituicao = 4;
    } else if (this.constituicao == 20) {
      this.bonusConstituicao = 5;
    }
  }

   private calcularBonusInteligencia() { 
    if (this.inteligencia == 1) {
      this.bonusInteligencia = -5;
    } else if (this.inteligencia >= 2 && this.inteligencia <= 3) {
      this.bonusInteligencia = -4;
    } else if (this.inteligencia >= 4 && this.inteligencia <= 5) {
      this.bonusInteligencia = -3;
    } else if (this.inteligencia >= 6 && this.inteligencia <= 7) {
      this.bonusInteligencia = -2;
    } else if (this.inteligencia >= 8 && this.inteligencia <= 9) {
      this.bonusInteligencia = -1;
    } else if (this.inteligencia >= 10 && this.inteligencia <= 11) {
      this.bonusInteligencia = 0;
    } else if (this.inteligencia >= 12 && this.inteligencia <= 13) {
      this.bonusInteligencia = 1;
    } else if (this.inteligencia >= 14 && this.inteligencia <= 15) {
      this.bonusInteligencia = 2;
    } else if (this.inteligencia >= 16 && this.inteligencia <= 17) {
      this.bonusInteligencia = 3;
    } else if (this.inteligencia >= 18 && this.inteligencia <= 19) {
      this.bonusInteligencia = 4;
    } else if (this.inteligencia == 20) {
      this.bonusInteligencia = 5;
    }
  }

    private calcularBonusSabedoria() {
    if (this.sabedoria == 1) {
      this.bonusSabedoria = -5;
    } else if (this.sabedoria >= 2 && this.sabedoria <= 3) {
      this.bonusSabedoria = -4;
    } else if (this.sabedoria >= 4 && this.sabedoria <= 5) {
      this.bonusSabedoria = -3;
    } else if (this.sabedoria >= 6 && this.sabedoria <= 7) {
      this.bonusSabedoria = -2;
    } else if (this.sabedoria >= 8 && this.sabedoria <= 9) {
      this.bonusSabedoria = -1;
    } else if (this.sabedoria >= 10 && this.sabedoria <= 11) {
      this.bonusSabedoria = 0;
    } else if (this.sabedoria >= 12 && this.sabedoria <= 13) {
      this.bonusSabedoria = 1;
    } else if (this.sabedoria >= 14 && this.sabedoria <= 15) {
      this.bonusSabedoria = 2;
    } else if (this.sabedoria >= 16 && this.sabedoria <= 17) {
      this.bonusSabedoria = 3;
    } else if (this.sabedoria >= 18 && this.sabedoria <= 19) {
      this.bonusSabedoria = 4;
    } else if (this.sabedoria == 20) {
      this.bonusSabedoria = 5;
    }
  }

    private calcularBonusCarisma() {
    if (this.carisma == 1) {
      this.bonusCarisma = -5;
    } else if (this.carisma >= 2 && this.carisma <= 3) {
      this.bonusCarisma = -4;
    } else if (this.carisma >= 4 && this.carisma <= 5) {
      this.bonusCarisma = -3;
    } else if (this.carisma >= 6 && this.carisma <= 7) {
      this.bonusCarisma = -2;
    } else if (this.carisma >= 8 && this.carisma <= 9) {
      this.bonusCarisma = -1;
    } else if (this.carisma >= 10 && this.carisma <= 11) {
      this.bonusCarisma = 0;
    } else if (this.carisma >= 12 && this.carisma <= 13) {
      this.bonusCarisma = 1;
    } else if (this.carisma >= 14 && this.carisma <= 15) {
      this.bonusCarisma = 2;
    } else if (this.carisma >= 16 && this.carisma <= 17) {
      this.bonusCarisma = 3;
    } else if (this.carisma >= 18 && this.carisma <= 19) {
      this.bonusCarisma = 4;
    } else if (this.carisma == 20) {
      this.bonusCarisma = 5;
    }
  }

   private calculaTodosBonus() {
    this.calcularBonusForca();
    this.calcularBonusDestreza();
    this.calcularBonusConstituicao();
    this.calcularBonusInteligencia();
    this.calcularBonusSabedoria();
    this.calcularBonusCarisma();
  }

   private gerarNomes() {
    const nomes: string[] = [
      "Aldric", "Baldwin", "Cedric", "Darian", "Edric",
      "Fendrel", "Gareth", "Hadrian", "Isen", "Jareth",
      "Kael", "Leoric", "Merrick", "Nerian", "Odrin",
      "Percival", "Quint", "Roderic", "Soren", "Theron",
      "Ulric", "Valen", "Wystan", "Xander", "Yorick",
      "Alaric", "Berengar", "Cassian", "Dorian", "Emeric",
      "Faelan", "Godric", "Hector", "Ivar", "Jorund",
      "Kendric", "Lucan", "Magnus", "Niall", "Orin",
      "Peregrin", "Quillon", "Rowan", "Stefan", "Tristan"
      ];

    const sobrenomesMedievais: string[] = [
      "Blackwood", "Stormborn", "Ironfist", "Ravencrest", "Darkmoor",
      "Silverhand", "Wolfbane", "Grimward", "Ashford", "Thornfield",
      "Stonehelm", "Nightfall", "Duskryn", "Brightblade", "Frostborn",
      "Oakenshield", "Redwyne", "Goldhart", "Shadowmere", "Emberfall",
      "Hawthorne", "Drakewell", "Coldbrook", "Stormvale", "Ironwood",
      "Mistbrook", "Falconer", "Wintermere", "Dawnhammer", "Ravenwood",
      "Grimsbane", "Blackthorn", "Windrider", "Stormcloak", "Firebrand",
      "Lightbringer", "Ashenford", "Deepwater", "Nightbreeze", "Stonegrave",
      "Brightwood", "Darkwater", "Frostvale", "Emberstone", "Wildmere",
      "Steelbane", "Moonfall", "Starwhisper", "Ironbane", "Dreadmoor"
      ];

    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const sobrenome = sobrenomesMedievais[Math.floor(Math.random() * sobrenomesMedievais.length)];
    return this.nome = `${nome} ${sobrenome}`;
  }

   private gerarEspecies() {
    const especies: string[] = [
      "Aasimar", "Anão", "Draconato", "Elfo", "Gnomo",
      "Golias", "Humano", "Orc", "Meio-Elfo", "Meio-Orc", "Tiefling",
    ]

    return this.especie = especies[Math.floor(Math.random() * especies.length)];
  }

  private gerarClasse() {
    const classes: string[] = [
      "Bárbaro", "Bardo", "Clérigo", "Druida", "Feiticeiro",
      "Guardião", "Guerreiro", "Ladino", "Mago", "Monge", "Paladino"
    ]

    return this.classe = classes[Math.floor(Math.random() * classes.length)];
  }

  gerarNpc() {
    this.deletar = true;
    this.gerarAtributos();
    this.gerarPericias();
    this.calculaTodosBonus();
    this.gerarNomes();
    this.gerarEspecies();
    this.gerarClasse();
  }

  deletarNpc() {
    this.deletar = false;
  }

  
}