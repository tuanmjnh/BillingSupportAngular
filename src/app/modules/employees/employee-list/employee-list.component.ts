import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    const x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(e => {
        const y = e.payload.toJSON();
        y['$key'] = e.key;
        this.employeeList.push(y as Employee);
      });
    });
  }
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
    console.log('Edit');
  }
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record?') === true) {
      this.employeeService.deleteEmployee(key);
      this.toastr.warning('Deleted Successfully', 'Employee');
      console.log('Delete');
    }
  }
}
