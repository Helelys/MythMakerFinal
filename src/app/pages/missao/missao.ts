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
  seletor: string = '';

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    if (value === 'ordem') {
      this.seletor = 'ordem';
    } else if (value === 'dnd') {
      this.seletor = 'dnd';
    } else {
      this.seletor = '';
    }
  }
}
