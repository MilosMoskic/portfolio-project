// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { Education } from './eduation.model';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educations: Education[] = [
    {
      id: 1,
      degree: "Master's degree of Software Engineering",
      institution: 'Technical Faculty "Mihajlo Pupin"',
      institutionUrl: 'http://147.91.177.109/',
      location: 'Zrenjanin, Serbia',
      educationStartDate: 'October 2024',
      graduationDate: 'Present',
      logoUrl: '././assets/tfzr.jpg',
    },
    {
      id: 2,
      degree: 'Bachelor of Software Engineering',
      institution: 'Technical Faculty "Mihajlo Pupin"',
      institutionUrl: 'http://147.91.177.109/',
      location: 'Zrenjanin, Serbia',
      educationStartDate: 'July 2020',
      graduationDate: 'September 2024',
      logoUrl: '././assets/tfzr.jpg',
    },
    {
      id: 3,
      degree: 'Pharmaceutical technician',
      institution: 'Chemical-Medical School',
      institutionUrl: 'https://hms.edu.rs/cms/',
      location: 'Vršac, Serbia',
      educationStartDate: 'July 2016',
      graduationDate: 'July 2020',
      logoUrl: '././assets/chemical-medical.jpg',
    },
  ];

  getEducations(): Education[] {
    return this.educations;
  }
}
