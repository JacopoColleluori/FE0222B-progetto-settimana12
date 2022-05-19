import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { ProfileModule } from './profile/profile.module';
import { MoviesModule } from './movies/movies.module';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ProfileModule,MoviesModule
  ]
})
export class DashboardModule { }
