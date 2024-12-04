import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

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

  selectedSection: string = 'front-page';

  @ViewChild('front-page') frontPageSection!: ElementRef;
  @ViewChild('projects') projectsPageSection!: ElementRef;
  @ViewChild('education') ecucationPageSection!: ElementRef;
  @ViewChild('experience') experiencePageSection!: ElementRef;
  @ViewChild('contact') contactPageSection!: ElementRef;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleIcon = this.isMenuOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  }

  showSection(section: string) {
    this.selectedSection = section;
    this.scrollToSection(section);
  }

  scrollToSection(section: string) {
    let target: ElementRef;

    switch (section) {
      case 'front-page':
        target = this.frontPageSection;
        break;
      case 'projects':
        target = this.projectsPageSection;
        break;
      case 'education':
        target = this.ecucationPageSection;
        break;
      case 'experience':
        target = this.experiencePageSection;
        break;
      case 'contact':
        target = this.contactPageSection;
        break;
      default:
        return;
    }

    if (target) {
      target.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
