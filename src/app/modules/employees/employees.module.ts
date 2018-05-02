import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
// Components
import { SharedModule } from '../../shared/shared.module';
import { EmployeeService } from './shared/employee.service';
import { EmployeesComponent } from './employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeesRoutingModule,
    SharedModule
  ],
  providers: [EmployeeService],
  declarations: [EmployeesComponent, EmployeeListComponent, EmployeeComponent]
})
export class EmployeesModule { }
