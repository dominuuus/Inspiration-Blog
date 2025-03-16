import { Component, input, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from '../../data/posts';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-main-post',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-post.component.html',
  styleUrl: './main-post.component.css'
})

export class MainPostComponent implements OnInit {

 
  @Input() id:string | null = ""
  @Input() photoCover:string = ""
  @Input() cardTitle:string = "Título"
  @Input() cardTime:string = ""
  @Input() cardTag:string = ""
  @Input() cardAuthor:string = ""
  @Input() cardAuthorAge:number = 0
  @Input() cardAuthorOccupation = ""
  @Input() url:string | null = ""
  @Input() cardPublishedAt:string = ""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe( value => {
      this.id = value.get("id");
      this.setValueToComponent(this.id);
  })
}

  setValueToComponent(id:string | null) {
    const result = posts.find(post => post.id === id);

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
    this.cardPublishedAt = result.cardPublishedAt;
  }
  }
}
