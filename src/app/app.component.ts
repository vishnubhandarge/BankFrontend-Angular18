import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AccountOpeningFormComponent } from "./components/account-opening-form/account-opening-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, RouterLink, AccountOpeningFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
