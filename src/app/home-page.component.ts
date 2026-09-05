import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class HomePageComponent {
  domainName = 'hassanconstruction.com';

  estimatorType = 'Commercial Construction';
  estimatorSqFt = 2500;
  estimatedCostRange = '$375,000 - $625,000';

  activeProjectCategory = 'ALL';
  projects = [
    {
      id: 1,
      title: 'Grand Horizon Commercial Tower',
      category: 'COMMERCIAL',
      location: 'Downtown Business District',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop',
      budget: '$12.5M'
    },
    {
      id: 2,
      title: 'The Crestwood Luxury Estate',
      category: 'RESIDENTIAL',
      location: 'North Hills Heights',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      budget: '$2.8M'
    },
    {
      id: 3,
      title: 'Harbor Bay Bridge & Skyway',
      category: 'CIVIL',
      location: 'Harbor Port Authority',
      image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=800&auto=format&fit=crop',
      budget: '$45M'
    },
    {
      id: 4,
      title: 'Metropolis Eco-Tech Park',
      category: 'COMMERCIAL',
      location: 'Tech Valley Sector 4',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      budget: '$18M'
    }
  ];

  galleryImages = [
    'assets/img/3.jpeg',
    'assets/img/4.jpeg',
    'assets/img/5.jpeg',
    'assets/img/6.jpeg',
    'assets/img/7.jpeg',
    'assets/img/8.jpeg',
    'assets/img/9.jpeg',
    'assets/img/10.jpeg',
    'assets/img/11.jpeg',
    'assets/img/12.jpeg',
    'assets/img/13.jpeg',
    'assets/img/14.jpeg',
    'assets/img/15.jpeg',
    'assets/img/16.jpeg'
  ];
  galleryStartIndex = 0;

  isScrolled = false;

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  filterProjects(category: string): void {
    this.activeProjectCategory = category;
  }

  get filteredProjects() {
    if (this.activeProjectCategory === 'ALL') return this.projects;
    return this.projects.filter(project => project.category === this.activeProjectCategory);
  }

  get visibleGalleryImages(): string[] {
    return Array.from({ length: 3 }, (_, offset) =>
      this.galleryImages[(this.galleryStartIndex + offset) % this.galleryImages.length]
    );
  }

  showNextGalleryImages(): void {
    const lastVisibleStart = this.galleryImages.length - 3;
    this.galleryStartIndex =
      this.galleryStartIndex < lastVisibleStart ? this.galleryStartIndex + 1 : 0;
  }

  showPreviousGalleryImages(): void {
    const lastVisibleStart = this.galleryImages.length - 3;
    this.galleryStartIndex =
      this.galleryStartIndex > 0 ? this.galleryStartIndex - 1 : lastVisibleStart;
  }

  trackGalleryImage(_index: number, image: string): string {
    return image;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}