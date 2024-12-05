import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  toggleIcon = 'fa-solid fa-bars';

  constructor(private viewportScroller: ViewportScroller) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleIcon = this.isMenuOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  }

  scrollToSection(fragment: string): void {
    this.viewportScroller.scrollToAnchor(fragment);
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.toggleIcon = 'fa-solid fa-bars';
    }
  }
}
