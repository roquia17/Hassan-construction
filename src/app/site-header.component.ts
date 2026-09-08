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
        <button
          type="button"
          class="menu-toggle"
          aria-label="Toggle navigation menu"
          [attr.aria-expanded]="mobileMenuOpen"
          aria-controls="site-navigation"
          (click)="toggleMobileMenu()"
        >
          <i class="bi" [class.bi-list]="!mobileMenuOpen" [class.bi-x-lg]="mobileMenuOpen" aria-hidden="true"></i>
        </button>
        <ul id="site-navigation" class="nav-links" [class.mobile-open]="mobileMenuOpen" (click)="closeMobileMenu()">
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
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}