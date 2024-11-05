import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FrontPageComponent } from "./front-page/front-page.component";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { EducationPageComponent } from './education-page/education-page.component';
import { ExperiencePageComponent } from "./experience-page/experience-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FrontPageComponent, ProjectsPageComponent, EducationPageComponent, ExperiencePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-project';
}
