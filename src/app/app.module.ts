import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CanDeactivateGuard } from './can-deactivate.guard';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanactivateGuard } from './canactivate.guard';
import { DeactivateGuard } from './deactivate.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CanactivateGuard, DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
