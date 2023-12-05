import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastriesComponent } from './pastries/pastries.component';

export const pastriesRoutes: Routes = [
  {
      path: 'pastries',
      component: PastriesComponent
  },
  {
      path: '',
      redirectTo: '/pastries',
      pathMatch: 'full'
  },
  {
      path: 'login',
      // component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(pastriesRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
