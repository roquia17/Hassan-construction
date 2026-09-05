import { Component } from '@angular/core';
import { SiteHeaderComponent } from './site-header.component';
import { SiteFooterComponent } from './site-footer.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [SiteHeaderComponent, SiteFooterComponent],
  template: `
    <app-site-header [darkHeader]="true" />
    <main class="inner-page">
      <section class="inner-page-hero">
        <span class="section-tag">Selected Work</span>
        <h1>Spaces shaped with care and built to endure.</h1>
        <p>Explore a selection of residential, commercial, and development work from Hassan Construction.</p>
      </section>

      <section class="inner-page-section">
        <div class="projects-grid">
          <article class="project-card"><img src="assets/img/1.png" alt="Azure Heights Apartment" /><div class="project-overlay"><span class="project-category">RESIDENTIAL</span><h2 class="project-title">Azure Heights Apartment</h2><div class="project-location"><i class="bi bi-geo-alt"></i> Nousha, Phulwari Sharif, Patna</div></div></article>
          <article class="project-card"><img src="assets/img/2.jpg" alt="Patna Business Centre" /><div class="project-overlay"><span class="project-category">COMMERCIAL</span><h2 class="project-title">Patna Business Centre</h2><div class="project-location"><i class="bi bi-geo-alt"></i> Patliputra Colony, Patna</div></div></article>
          <article class="project-card"><img src="assets/img/3.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/4.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/5.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/6.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/7.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/8.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/9.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/10.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/11.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/12.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/13.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/14.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/15.jpeg" alt="Hassan Construction project" /></article>
          <article class="project-card"><img src="assets/img/16.jpeg" alt="Hassan Construction project" /></article>
        </div>
      </section>
    </main>
    <app-site-footer />
  `,
  styleUrls: ['../styles.css']
})
export class PortfolioPageComponent {}