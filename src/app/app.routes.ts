import { Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
import { HomePageComponent } from './home-page.component';
import { PortfolioPageComponent } from './portfolio-page.component';
import { ServicesPageComponent } from './services-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];