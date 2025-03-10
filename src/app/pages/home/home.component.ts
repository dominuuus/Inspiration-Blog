import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MainCardComponent } from "../../components/main-card/main-card.component"
import { SmallCardComponent } from "../../components/small-card/small-card.component"
import { BrowseTopicsComponent } from "../../components/browse-topics/browse-topics.component"
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { FooterComponent } from "../../components/footer/footer.component"

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, MainCardComponent, SmallCardComponent, BrowseTopicsComponent, MenuBarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
