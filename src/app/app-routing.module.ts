import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeactivateGuard } from './deactivate.guard';
import { CanactivateGuard } from './canactivate.guard';




const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'home', component:HomeComponent, canActivate: [CanactivateGuard],canDeactivate: [DeactivateGuard]},
  {path:'contact', component:ContactComponent,canDeactivate: [DeactivateGuard]},
  {path:'register', component:RegisterComponent,canDeactivate: [DeactivateGuard]},
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [CanactivateGuard],
  //   canDeactivate: [DeactivateGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
