import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { WhatsappIconComponent } from './components/whatsapp-icon/whatsapp-icon.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    BreadcrumbsComponent,
    WhatsappIconComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    BreadcrumbsComponent,
    WhatsappIconComponent,
    TestimonialsComponent
  ]
})
export class SharedModule { }
