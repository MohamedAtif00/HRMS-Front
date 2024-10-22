import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  openSidebar(content: any) {
    this.offcanvasService.open(content, { position: 'start' });
  }
}
