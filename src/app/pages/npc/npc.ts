import { Component } from '@angular/core';
import { NpcGenerator } from "../../components/npc-generator/npc-generator";

@Component({
  selector: 'app-npc',
  imports: [NpcGenerator],
  templateUrl: './npc.html',
  styleUrl: './npc.scss',
})
export class Npc {

}
