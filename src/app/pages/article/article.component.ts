import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { posts } from '../../data/posts';

@Component({
  selector: 'app-article',
  imports: [MenuBarComponent, MenuTitleComponent, SmallCardComponent, FooterComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

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
      this.route.paramMap.subscribe( value =>
        this.url = value.get("url")   
      )

      this.setValueToComponent(this.url)
  }

  setValueToComponent(url:string | null) {
    const result = posts.filter(post => post.url === url)[0]

    this.url = result.url
    this.cardTitle = result.cardTitle
    this.cardAuthor = result.cardAuthor
    this.cardPublishedAt = result.cardPublishedAt
    this.cardTag = result.cardTag
    this.cardContent = result.cardContent
    this.photoCover = result.photoCover
  }
}
