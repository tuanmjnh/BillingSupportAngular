import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';
import { EmployeeComponent } from './employee/employee.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmployeeComponent
  ]
})
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private employeeComponent: EmployeeComponent) { }

  ngOnInit() {
  }

}
