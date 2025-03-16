import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { posts } from '../../data/posts';



@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  @Input() cardTitle:string = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet."
  @Input() cardAuthor:string = "Antonio Bernardo"
  @Input() url:string = "/"
  @Input() private id:string | null = ""

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
      this.id = result.id;
      this.url = result.url;
      this.cardTitle = result.cardTitle;
      this.cardAuthor = result.cardAuthor;
    }
    }
    
  

}
