import { Component, HostListener, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="navbar-sticky" [class.scrolled]="isScrolled" [class.dark-header]="darkHeader">
      <div class="nav-container">
        <a routerLink="/" class="brand-logo" aria-label="Hassan Construction home">
          <img src="assets/img/lHC.png" alt="Hassan Construction Logo" />
        </a>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
          <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
          <li><a routerLink="/portfolio" routerLinkActive="active">Portfolio</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact Us</a></li>
        </ul>

      </div>
    </header>
  `,
  styleUrls: ['../styles.css']
})
export class SiteHeaderComponent {
  @Input() darkHeader = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}