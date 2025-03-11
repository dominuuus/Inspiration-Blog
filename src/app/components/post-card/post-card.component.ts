import { Component, OnInit } from '@angular/core';
import { posts } from '../../data/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {

  cardAuthorPhoto:string = ""
  cardTitle:string = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet."
  cardAuthor:string = "Nome do author"
  url:string | null = ""

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.url = value.get("url")   
    )

    this.setValueToComponent(this.url);
  }

  setValueToComponent(url:string | null) {
      const result = posts.filter(post => post.url === url)[0]
  
      this.url = result.url
      this.cardTitle = result.cardTitle
      this.cardAuthor = result.cardAuthor
      this.cardAuthorPhoto = result.cardAuthorPhoto
    }

}
