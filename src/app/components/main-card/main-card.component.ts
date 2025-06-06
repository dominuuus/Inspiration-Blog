import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from '../../data/posts';
import { MainPostComponent } from "../main-post/main-post.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-card',
  imports: [MainPostComponent, CommonModule],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css',
})
export class MainCardComponent implements OnInit {

  hihglightedPosts = posts.filter(post => post.cardTag.includes("Highlighted") === true).slice(0, 3);
  
  @Input() id:string | null = ""
  @Input() photoCover:string = ""
  @Input() cardTitle:string = ""
  @Input() cardTime:string = ""
  @Input() cardTag:string = ""
  @Input() cardAuthor:string = ""
  @Input() cardAuthorAge:number = 0
  @Input() cardAuthorOccupation = ""
  @Input() url:string | null = ""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value => {
      this.url = value.get("url");
      this.setValueToComponent(this.url);
  })
}

  setValueToComponent(url:string | null) {
    const result = posts.find(post => post.url === url);

    if(result) {
    this.id = result.id;
    this.url = result.url;
    this.photoCover = result.photoCover;
    this.cardTitle = result.cardTitle;
    this.cardTime = result.cardTime;
    this.cardTag = result.cardTag.join(", ");
    this.cardAuthor = result.cardAuthor;
    this.cardAuthorAge = result.cardAuthorAge;
    this.cardAuthorOccupation = result.cardAuthorOccupation;
  }
  }
}
