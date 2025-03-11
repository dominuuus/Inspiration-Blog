import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet."
  @Input()
  cardAuthor:string = "Nome do author"

}
