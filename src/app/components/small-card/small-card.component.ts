import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input()
  id:string = "0"
  @Input()
  cardTitle:string = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet."
  @Input()
  cardAuthor:string = "Nome do author"
}
