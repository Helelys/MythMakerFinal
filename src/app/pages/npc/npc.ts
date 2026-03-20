import { Component } from '@angular/core';
import { NpcGenerator } from "../../components/npc-generator/npc-generator";
import { NpcGeradorDnd } from '../../components/npc-gerador-dnd/npc-gerador-dnd';


@Component({
  selector: 'app-npc',
  imports: [NpcGenerator, NpcGeradorDnd],
  templateUrl: './npc.html',
  styleUrl: './npc.scss',
})
export class Npc {
seletor: string = '';

  onChange(event: Event) {
  const value = (event.target as HTMLSelectElement).value;

  if (value === 'ordem') {
    this.seletor = 'ordem';
  } else if (value === 'dnd') {
    this.seletor = 'dnd';
  } else {    this.seletor = '';
  }
}
}
