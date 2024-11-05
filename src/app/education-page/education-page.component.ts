import { Component, OnInit } from '@angular/core';
import { Education } from './eduation.model';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education-page',
  standalone: true,
  imports: [],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.css',
})
export class EducationPageComponent implements OnInit {
  educations: Education[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educations = this.educationService.getEducations();
  }
}
