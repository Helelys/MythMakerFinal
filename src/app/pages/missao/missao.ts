import { Component } from '@angular/core';
import { MissaoGerador } from '../../components/missao-gerador/missao-gerador';



@Component({
  selector: 'app-missao',
  imports: [MissaoGerador],
  templateUrl: './missao.html',
  styleUrl: './missao.scss',
})
export class Missao {

}
