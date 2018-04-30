import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from '../modules/auth/auth.component';
import { HomeComponent } from '../modules/home/home.component';
import { IntegrateComponent } from '../modules/Integrate/integrate.component';
// import { EmployeesComponent } from '../modules/Employees/employees.component';
import { FormComponent } from '../modules/form/form.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'integrate', component: IntegrateComponent },
  { path: '**', component: NotFoundComponent }
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuardService],
  //   loadChildren: '../admin/admin.module#AdminModule'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
export const routingComponents = [
  AuthComponent,
  HomeComponent,
  IntegrateComponent,
  // EmployeesComponent,
  // EmployeeListComponent,
  FormComponent,
  NotFoundComponent
];
