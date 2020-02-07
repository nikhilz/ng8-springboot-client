import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';


const routes: Routes = [
  {
    path:'employeeList', component: EmployeeListComponent
  },
  {
    path:'createEmployee', component : CreateEmployeeComponent
  },
  {
    path: 'employeeDetails/:id', component: EmployeeDetailsComponent
  },
  {
    path: 'updateEmployee/:id', component: EmployeeUpdateComponent
  },
  {
    path: '', redirectTo : 'employeeList',pathMatch: 'full'
  },
  {
    path: '**', redirectTo : '/employeeList',pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
