import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { marked } from 'marked';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { posts } from '../../data/posts';
import { LatestArticles } from '../../components/latest-articles/latest-articles.component';


@Component({
  selector: 'app-article',
  imports: [CommonModule, MenuBarComponent, MenuTitleComponent, FooterComponent, LatestArticles],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  latestPosts = posts.slice(0, 2);

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
        this.url = value.get("url");
        this.setValueToComponent(this.url);
      }
      )

      
  }

  async setValueToComponent(url:string | null) {
    const result = posts.find(post => post.url === url);

    if(result) {
      this.url = result.url;
      this.cardTitle = result.cardTitle;
      this.cardAuthor = result.cardAuthor;
      this.cardPublishedAt = result.cardPublishedAt;
      this.cardTag = result.cardTag.join(', ');
      this.cardContent = await marked(result.cardContent);
      this.photoCover = result.photoCover;
    }
  }
}
