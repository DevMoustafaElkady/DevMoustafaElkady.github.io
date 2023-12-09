import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //Other tabs
  {path: '', loadChildren: () => import('./modules/home/home.module').then(h => h.HomeModule)},
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'about', loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'services', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule)},
  {path: 'study', loadChildren: () => import('./modules/study-with-ev/study-with-ev.module').then(m => m.StudyWithEvModule)},
  {path: 'placementtest', loadChildren: () => import('./modules/placement-test/placement-test.module').then(m => m.PlacementTestModule)},
  {path: 'contact', loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
