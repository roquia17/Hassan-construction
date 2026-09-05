import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer>
      <div class="container-custom">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="nav-container">
              <a routerLink="/" class="brand-logo">
                <img src="assets/img/lHC.png" alt="Hassan Construction Logo" />
                <h3>HASSAN CONSTRUCTION</h3>
              </a>
            </div>
            <p>Foundation for Life - Premium Construction &amp; Real Estate Development. Established 2019, Patna, Bihar.</p>
            <div class="footer-domain">
              <i class="bi bi-globe"></i>
              Official Domain: <strong>hassanconstruction.com</strong>
            </div>
          </div>

          <div>
            <h4 class="footer-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/services">Services</a></li>
              <li><a routerLink="/portfolio">Portfolio</a></li>
              <li><a routerLink="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Specializations</h4>
            <ul class="footer-links">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Land Development</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 class="footer-title">Contact &amp; Offices</h4>
            <p class="footer-contact"><i class="bi bi-geo-alt"></i> 152, Patliputra Colony, PNB Campus, Patna - 800013</p>
            <p class="footer-contact"><i class="bi bi-envelope"></i> info&#64;hc.co.in</p>
            <p class="footer-contact"><i class="bi bi-telephone"></i> +91 7870704668 / 7061696510</p>
          </div>
        </div>

        <div class="footer-bottom">
          <div>&copy; 2026 Hassan Construction. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['../styles.css']
})
export class SiteFooterComponent {}
