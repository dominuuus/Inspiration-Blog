import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-main-card',
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css'
})
export class MainCardComponent {

  @Input()
  id:string = "0"
  @Input()
  photoCover:string = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  @Input()
  cardTitle:string = "Título principal do podcast"
  @Input()
  cardTime:string = "39:22"
  @Input()
  cardTag:string = "Morging Talk"
  @Input()
  cardAuthor:string = "Thomas Felipe"
  @Input()
  cardAuthorAge:number = 39
  @Input()
  cardAuthorOccupation = "Journalist"
}
