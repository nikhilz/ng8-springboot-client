import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Router } from '@angular/router';
import { Employee } from '../model/Employee';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
 
  formGroup: FormGroup;


  constructor(private employeeService: EmployeeServiceService,
    private router: Router, private formBuiilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuiilder.group({
      'firstname' : new FormControl('',Validators.required),
      'lastname' : new FormControl('',Validators.required),
      'emailId' : new FormControl('',[Validators.required, Validators.email])
    });
  }

  save() {
    this.employee.firstname = this.formGroup.controls['firstname'].value;
    this.employee.lastname = this.formGroup.controls['lastname'].value;
    this.employee.emailId = this.formGroup.controls['emailId'].value;

    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employeeList']);
  }




}
