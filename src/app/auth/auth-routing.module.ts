import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.component').then((mod) => mod.RegisterComponent),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
