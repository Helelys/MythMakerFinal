import { Component } from '@angular/core';
import { MissaoGerador } from '../../components/missao-gerador/missao-gerador';
import { MissaoGeradorDnd } from '../../components/missao-gerador-dnd/missao-gerador-dnd';

@Component({
  selector: 'app-missao',
  imports: [MissaoGerador, MissaoGeradorDnd],
  templateUrl: './missao.html',
  styleUrl: './missao.scss',
})
export class Missao {
  
  tipo: any;

  public gerarOrdem() {
    this.tipo = 'ordem';
  }

  public gerarDnD() {
    this.tipo = 'dnd';
  }

}
