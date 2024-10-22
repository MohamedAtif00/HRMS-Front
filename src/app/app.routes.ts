import { Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { DepartmentComponent } from './page/department/department.component';

export const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'employees',
        component: EmployeeComponent,
      },
      {
        path: 'department',
        component: DepartmentComponent,
      },
    ],
  },
];
