import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { MoviesModule } from './movies/movies.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from '../auth/navbar/navbar.component';






@NgModule({
  declarations: [DashboardComponent,NavbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProfileModule,MoviesModule,RouterModule
  ],
})
export class DashboardModule { }
