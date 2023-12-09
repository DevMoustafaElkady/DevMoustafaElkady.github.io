import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyWithEvComponent } from './study-with-ev.component';

const routes: Routes = [
  {
    path: '',
    component: StudyWithEvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyWithEvRoutingModule { }
