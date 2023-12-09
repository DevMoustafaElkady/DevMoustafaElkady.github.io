import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacementTestRoutingModule } from './placement-test-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlacementTestRoutingModule,
    SharedModule
  ]
})
export class PlacementTestModule { }
