import { Component } from '@angular/core';
import { SiteHeaderComponent } from './site-header.component';
import { SiteFooterComponent } from './site-footer.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [SiteHeaderComponent, SiteFooterComponent],
  template: `
    <app-site-header [darkHeader]="true" />
    <main class="inner-page">
      <section class="inner-page-hero">
        <span class="section-tag">What We Do</span>
        <h1>Construction services built for lasting value.</h1>
        <p>From the first drawing to final delivery, our team brings practical expertise, disciplined execution, and thoughtful design to every project.</p>
      </section>

      <section class="inner-page-section">
        <div class="services-grid">
          <article class="service-card"><div class="service-icon-box"><i class="bi bi-building"></i></div><h2>Residential Construction</h2><p>Modern apartments, homes, and housing developments designed for comfort, safety, and contemporary lifestyles.</p></article>
          <article class="service-card"><div class="service-icon-box"><i class="bi bi-house-heart"></i></div><h2>Commercial Construction</h2><p>Efficient commercial spaces with quality materials, modern presentation, and long-term usability.</p></article>
          <article class="service-card"><div class="service-icon-box"><i class="bi bi-tools"></i></div><h2>Land Development</h2><p>Site preparation, infrastructure development, and planning solutions for residential and commercial land.</p></article>
          <article class="service-card"><div class="service-icon-box"><i class="bi bi-globe-americas"></i></div><h2>Project Development</h2><p>Integrated project planning and execution with quality control, coordination, and timely delivery.</p></article>
          <article class="service-card"><div class="service-icon-box"><i class="bi bi-rulers"></i></div><h2>Architectural Design &amp; 3D BIM</h2><p>3D BIM modeling, CAD blueprint creation, structural calculations, and permit submission management.</p></article>
          <article class="service-card"><div class="service-icon-box"><i class="bi bi-shield-check"></i></div><h2>Construction Management</h2><p>Coordination of contractors, materials, timelines, safety, and quality standards for smooth execution.</p></article>
        </div>
      </section>
    </main>
    <app-site-footer />
  `,
  styleUrls: ['../styles.css']
})
export class ServicesPageComponent {}