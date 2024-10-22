import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'IT',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      department: 'Marketing',
    },
    // Add more employees as needed
  ];
}
