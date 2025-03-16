import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MainCardComponent } from "../../components/main-card/main-card.component"
import { BrowseTopicsComponent } from "../../components/browse-topics/browse-topics.component"
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { LatestArticles } from "../../components/latest-articles/latest-articles.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, MenuTitleComponent, MainCardComponent, BrowseTopicsComponent, MenuBarComponent, FooterComponent, LatestArticles],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
