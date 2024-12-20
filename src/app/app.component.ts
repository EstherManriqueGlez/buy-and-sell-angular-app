import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingsPageComponent } from "./listings-page/listings-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListingsPageComponent, NavBarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'buy-and-sell';
}
