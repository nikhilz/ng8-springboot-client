import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/Employee';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeServiceService, 
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.employees = this.employeeService.getAllEmployees();
   /* .subscribe(
      (data) => {
        console.log('Employees ='+data);
        this.employees = data;
      }
    );*/
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      }, error => console.log(error)
    );
  }

  employeeDetails(id:number){
    this.router.navigate(['employeeDetails',id]);
  }

  createEmployee(){
    this.router.navigate(['createEmployee']);
  }

}
