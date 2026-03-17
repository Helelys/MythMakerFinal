import { Component } from '@angular/core';
import { NpcGenerator } from "../../components/npc-generator/npc-generator";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-npc',
  imports: [NpcGenerator, Header],
  templateUrl: './npc.html',
  styleUrl: './npc.scss',
})
export class Npc {

}
