import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyWithEvRoutingModule } from './study-with-ev-routing.module';
import { StudyWithEvComponent } from './study-with-ev.component';
import { SharedModule } from '../shared/shared.module';
import { CourseBoxComponent } from './course-box/course-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StudyWithEvComponent,
    CourseBoxComponent
  ],
  imports: [
    CommonModule,
    StudyWithEvRoutingModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class StudyWithEvModule { }
