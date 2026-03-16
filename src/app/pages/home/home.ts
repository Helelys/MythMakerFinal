import { Component } from '@angular/core';
import { NpcGenerator } from "../../components/npc-generator/npc-generator";

@Component({
  selector: 'app-home',
  imports: [NpcGenerator],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
