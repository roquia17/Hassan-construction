import { Component } from '@angular/core';
import { SiteHeaderComponent } from './site-header.component';
import { SiteFooterComponent } from './site-footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [SiteHeaderComponent, SiteFooterComponent],
  template: `
    <app-site-header [darkHeader]="true" />
    <main class="inner-page">
      <section class="inner-page-hero">
        <span class="section-tag">Start a Conversation</span>
        <h1>Tell us what you want to build.</h1>
        <p>Speak directly with the Hassan Construction team about your next residential, commercial, or development project.</p>
      </section>

      <section class="inner-page-section contact-page-grid">
        <div class="contact-details-panel">
          <h2>Contact Details</h2>
          <p>Our team is ready to discuss your goals, timeline, and project requirements.</p>
          <a href="tel:+917870704668" class="contact-detail"><i class="bi bi-telephone-fill"></i><span><strong>Call us</strong>+91 7870704668 / 7061696510</span></a>
          <a href="mailto:info@hc.co.in" class="contact-detail"><i class="bi bi-envelope-fill"></i><span><strong>Email us</strong>info&#64;hc.co.in</span></a>
          <div class="contact-detail"><i class="bi bi-geo-alt-fill"></i><span><strong>Visit us</strong>152, Patliputra Colony, PNB Campus, Patna - 800013</span></div>
        </div>
        <div class="contact-card">
          <span class="section-tag">Project Enquiries</span>
          <h2>Let’s discuss your vision.</h2>
          <p>For quotations and project consultations, call or email us and our team will get back to you with the next steps.</p>
          <div class="contact-actions"><a href="tel:+917870704668" class="btn-primary-custom"><i class="bi bi-telephone-fill"></i> Call Hassan Construction</a><a href="mailto:info@hc.co.in" class="btn-secondary-custom"><i class="bi bi-envelope-fill"></i> Send an Email</a></div>
        </div>
        <div class="contact-map-panel">
          <div class="contact-map-heading">
            <div>
              <span class="section-tag">Find Us</span>
              <h2>Our office location</h2>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=152%20Patliputra%20Colony%20PNB%20Campus%20Patna%20800013" target="_blank" rel="noopener">Open in Google Maps <i class="bi bi-arrow-up-right"></i></a>
          </div>
          <iframe
            title="Hassan Construction office location"
            src="https://www.google.com/maps?q=152%20Patliputra%20Colony%20PNB%20Campus%20Patna%20800013&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
    <app-site-footer />
  `,
  styleUrls: ['../styles.css']
})
export class ContactPageComponent {}