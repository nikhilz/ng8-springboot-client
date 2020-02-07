import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee: Employee = new Employee();
 
  formGroup: FormGroup;
  id: number;

  
  
  constructor(private employeeService: EmployeeServiceService,private route: ActivatedRoute,
    private router: Router, private formBuiilder: FormBuilder) {
      this.formGroup = this.formBuiilder.group({
        'firstname' : new FormControl('',Validators.required),
        'lastname' : new FormControl('',Validators.required),
        'emailId' : new FormControl('',[Validators.required, Validators.email])
      });
     }

  ngOnInit() {


    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployee(this.id).subscribe(
      data => {
        console.table(data);
        this.employee = data;
        this.formGroup.controls['firstname'].setValue(this.employee.firstname);
        this.formGroup.controls['lastname'].setValue(this.employee.lastname);
        this.formGroup.controls['emailId'].setValue(this.employee.emailId);
      }, error => console.log(error)
    );

    
    
  }

  updateEmployee(){
    this.employee.firstname = this.formGroup.controls['firstname'].value;
    this.employee.lastname = this.formGroup.controls['lastname'].value;
    this.employee.emailId = this.formGroup.controls['emailId'].value;
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => {console.log(data)},error => {console.log(error)}
    );
    this.employee = new Employee();
    this.router.navigate(['employeeDetails', this.id]);
  }

}
