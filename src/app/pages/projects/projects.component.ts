import { Component, inject, signal } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { Project, ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ProjectCardComponent, CommonModule]
})
export class ProjectsComponent {  
  projects = signal<Project[]>([]);
  isLoading = signal(false);
  error = signal<string | null>(null);

  constructor(private projectService:ProjectService) {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects.set(projects);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Failed to load projects:', err);
        this.error.set('Failed to load projects. Please try again later.');
        this.isLoading.set(false);
      }
    });
  }
}