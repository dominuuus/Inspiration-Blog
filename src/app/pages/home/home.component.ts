import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MainCardComponent } from "../../components/main-card/main-card.component"

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, MainCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
