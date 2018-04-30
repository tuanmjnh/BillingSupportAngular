import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Modules
import { AuthComponent } from './modules/auth/auth.component';
import { HomeComponent } from './modules/home/home.component';
import { IntegrateComponent } from './modules/integrate/integrate.component';
// import { EmployeesComponent } from './employees/employees.component';
// import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'home', component: HomeComponent },
    { path: 'integrate', component: IntegrateComponent },
    // { path: 'employees', component: EmployeesComponent },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            // { enableTracing: true } // <-- debugging purposes only
        )],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [
    AuthComponent,
    HomeComponent,
    IntegrateComponent,
    // EmployeesComponent,
    // EmployeeListComponent,
    // PageNotFoundComponent
];
