import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavActive = false;

  toggleNav() {
    this.isNavActive = !this.isNavActive;
    console.log("isNavActive:", this.isNavActive); // Check if this logs on each click
  }
}
