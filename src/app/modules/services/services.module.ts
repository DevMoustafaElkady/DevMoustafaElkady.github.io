import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { ServiceBoxComponent } from './components/service-box/service-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ServicesComponent,
    ServiceBoxComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class ServicesModule { }
