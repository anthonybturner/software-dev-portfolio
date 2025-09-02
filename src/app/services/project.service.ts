import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment processing.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'assets/images/project1.jpg',
      projectUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/example/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Angular', 'Firebase', 'Material Design', 'RxJS'],
      imageUrl: 'assets/images/project2.jpg',
      projectUrl: 'https://example-tasks.com',
      githubUrl: 'https://github.com/example/taskmanager'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts for multiple locations.',
      technologies: ['Angular', 'OpenWeather API', 'Chart.js', 'Bootstrap'],
      imageUrl: 'assets/images/project3.jpg',
      projectUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/example/weather'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics platform for social media metrics with data visualization and reporting features.',
      technologies: ['Angular', 'Python', 'D3.js', 'PostgreSQL'],
      imageUrl: 'assets/images/project4.jpg',
      projectUrl: 'https://example-analytics.com',
      githubUrl: 'https://github.com/example/analytics'
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    const project = this.projects.find(p => p.id === id);
    return of(project);
  }
}