import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Department {
  id: number;
  name: string;
  manager: string;
}

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent {
  departments: Department[] = [
    { id: 1, name: 'IT', manager: 'Alice Johnson' },
    { id: 2, name: 'Marketing', manager: 'Bob Smith' },
    { id: 3, name: 'HR', manager: 'Charlie Lee' },
    // Add more departments as needed
  ];
}
