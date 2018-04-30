import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();
  }
  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null) this.employeeService.insertEmployee(employeeForm.value);
    else this.employeeService.updateEmployee(employeeForm.value);
    this.resetForm();
    this.toastr.success('Submitted Successfully', 'Employee Register');
    console.log('Added');
  }
  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null) employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0
    };
    console.log('reset form');
  }
}
