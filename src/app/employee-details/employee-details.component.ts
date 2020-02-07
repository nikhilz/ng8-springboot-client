import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private employeeService: EmployeeServiceService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();

    this.employeeService.getEmployee(this.id).subscribe(
      data => {
        console.table(data);
        this.employee  = data;
      }, error => console.log(error)
    );
  }

  list(){
    this.router.navigate(['employeeList']);
  }

  editDetails(id:number){
    this.router.navigate(['updateEmployee',id]);
  }

}
