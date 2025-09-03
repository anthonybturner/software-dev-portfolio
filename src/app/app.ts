import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'software-developer-portfolio';
}
