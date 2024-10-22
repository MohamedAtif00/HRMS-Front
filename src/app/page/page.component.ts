import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HeaderComponent, RouterModule, DashboardComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {}
