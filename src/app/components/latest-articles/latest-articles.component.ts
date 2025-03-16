import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SmallCardComponent } from "../small-card/small-card.component";
import { posts } from '../../data/posts';


@Component({
  selector: 'app-latest-articles',
  imports: [SmallCardComponent, CommonModule],
  standalone: true,
  templateUrl: './latest-articles.component.html',
  styleUrl: './latest-articles.component.css'
})
export class LatestArticles implements OnInit{

  highlightPosts = posts.filter(post => post.cardTag.includes("Highlights")).slice(0, 3);
  latestPosts = posts.slice(0, 5);

    url:string | null = ""
    photoCover:string = ""
    cardTitle:string = ""
    cardAuthor:string = ""
    cardPublishedAt:string = ""
    cardTag:string = ""
    cardContent:string = ""
    private id:string | null = ""
  
    constructor(
      private route:ActivatedRoute
    ) {}
  
    ngOnInit(): void {
      this.route.paramMap.subscribe( value => {
        this.id = value.get("id");
        this.setValueToComponent(this.id);
      })
  
  
  }
  setValueToComponent(id:string | null) {
    const result = posts.find(post => post.id === id);
  
    if(result) {
      this.url = result.url;
      this.cardTitle = result.cardTitle;
      this.cardAuthor = result.cardAuthor;
      this.cardPublishedAt = result.cardPublishedAt;
      this.cardTag = result.cardTag.join(', ');
      this.cardContent = result.cardContent;
      this.photoCover = result.photoCover;
    }
  
  }

}
