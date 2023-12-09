import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesComponent } from './components/features/features.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApplyComponent } from './components/apply/apply.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    FeaturesComponent,
    ApplyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
