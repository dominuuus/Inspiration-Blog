import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from "../post-card/post-card.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { posts } from '../../data/posts';


@Component({
  selector: 'app-browse-topics',
  standalone: true,
  imports: [PostCardComponent, RouterModule, CommonModule],
  templateUrl: './browse-topics.component.html',
  styleUrl: './browse-topics.component.css'
})
export class BrowseTopicsComponent implements OnInit {

  morningRunTalk = posts.filter(post => post.cardTag.includes("Highlights")).slice(0, 3);
  warmingUpSession = posts.filter(post => post.cardTag.includes("Helth Pod")).slice(0, 3);
  myFirstMarathon = posts.filter(post => post.cardTag.includes("Inspirational Pod")).slice(0, 3);

  private url:string | null = ""
  photoCover:string = ""
  cardTitle:string = ""
  cardAuthor:string = ""
  cardPublishedAt:string = ""
  cardTag:string = ""
  cardContent:string = ""
  id:string | null = ""

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.url = value.get("url");
      this.setValueToComponent(this.url);
    })


}
setValueToComponent(url:string | null) {
  const result = posts.find(post => post.url === url);

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