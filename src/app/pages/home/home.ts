import { Component } from '@angular/core';
import { HeroBanner } from "../../components/hero-banner/hero-banner";

@Component({
  selector: 'app-home',
  imports: [HeroBanner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
