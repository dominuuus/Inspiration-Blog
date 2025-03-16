import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  imports: [],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css',
})
export class MainCardComponent {
  
  @Input()
  id:string = "0"
  @Input()
  photoCover:string = "https://rundna.com/wp-content/uploads/2024/07/reasons-your-running-is-slow.jpg"
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
post: any;


}
