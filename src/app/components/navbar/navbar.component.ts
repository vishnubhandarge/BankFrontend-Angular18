import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private elementRef: ElementRef) { }

  toggleNavbar() {
    const navbar = this.elementRef.nativeElement.querySelector('#navbarNav');
    navbar.classList.toggle('collapse');
  }
}
