// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Library API',
      description:
        "A Web Api for managing data about the library, books, authors and users' book rentals.",
      imageUrl: '././assets/images/LibraryProjectAPI.webp',
      link: 'https://github.com/MilosMoskic/LibraryProject',
    },
    {
      id: 2,
      title: 'Fitness Training App',
      description:
        'A WPF app for tracking workouts, nutrition, and health progress.',
      imageUrl: '././assets/images/trainingApp.png',
      link: 'https://github.com/MilosMoskic/TrainingApp',
    },
    {
      id: 3,
      title: 'Tennis Players API',
      description: 'A .NET Web API for managing tennis players data.',
      imageUrl: '././assets/images/tennisPlayersAPI.png',
      link: 'https://github.com/MilosMoskic/TennisPlayersApi',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
