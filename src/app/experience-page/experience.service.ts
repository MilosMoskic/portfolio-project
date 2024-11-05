// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { Experience } from './experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences: Experience[] = [
    {
      id: 1,
      title: "Substitute Teacher for subject of Computer Science",
      company: 'School Center "Nikola Tesla"',
      type: 'Part-time',
      companyUrl: 'https://www.teslavs.edu.rs/',
      location: 'Vršac, Serbia',
      startDate: 'September, 2024',
      endDate: 'October 2024',
      description: '',
      logoUrl: '././assets/schoolCenterNikolaTesla.jpg',
      inOffice: 'On-Site'
    },
    {
      id: 2,
      title: ".NET Developer Internship",
      company: 'Valcon',
      companyUrl: 'https://valcon.com/en/',
      type: 'Internship',
      location: 'Novi Sad, Serbia',
      startDate: 'May 2024',
      endDate: 'May 2024',
      description: '',
      logoUrl: '././assets/valcon.png',
      inOffice: 'On-site'
    },
    {
      id: 3,
      title: ".NET Winter Workshop",
      company: 'Levi9 Technologies Services',
      type: 'Internship ',
      companyUrl: 'https://www.levi9.com/',
      location: 'Zrenjanin, Serbia',
      startDate: 'March 2023.',
      endDate: 'April 2024',
      description: '',
      logoUrl: '././assets/levi9.png',
      inOffice: 'Hybrid'
    },
  ];

  getExperiences(): Experience[] {
    return this.experiences;
  }
}
