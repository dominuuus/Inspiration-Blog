import { Component, Input, OnInit } from '@angular/core';
import { posts } from '../../data/posts';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
  selector: 'app-post-card',
  imports: [RouterModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})

export class PostCardComponent implements OnInit{

  @Input() cardAuthorPhoto:string = ""
  @Input() cardTitle:string = ""
  @Input() cardAuthor:string = ""
  @Input() url:string | null = ""
  @Input() id:string | null = ""

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.id = value.get("url");
      this.setValueToComponent(this.id);   
  })

  }

  setValueToComponent(id:string | null) {
    const result = posts.find(post => post.id === id);

    if(result) {
    this.id = result.id;
    this.url = result.url;
    this.cardTitle = result.cardTitle;
    this.cardAuthor = result.cardAuthor;
    this.cardAuthorPhoto = result.cardAuthorPhoto;
  }
  }
  

    

}
