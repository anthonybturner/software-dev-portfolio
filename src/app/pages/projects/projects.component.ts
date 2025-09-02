import { Component } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ProjectCardComponent, CommonModule]
})
export class ProjectsComponent{

  projects = [
  {
    id: 1,
    title: 'Angular/.NET Modernization',
    description: 'Migrated legacy Angular/.NET Framework apps to Angular 19 and .NET 8. Implemented scalable APIs and CI/CD pipelines.',
    technologies: ['Angular', '.NET 8', 'Azure DevOps', 'CI/CD'],
    imageUrl:'assets/projects/photo-1461749280684-dccba630e2f6.avif',
    projectUrl: 'https://marvelrivalsapi.com/rivals//ranked/gold.png',
    githubUrl: 'https://github.com/yourusername/angular-dotnet-modernization'
  },
  {
    id: 2,
    title: 'Cloud Navy Applications',
    description: 'Built secure Navy cloud systems with Azure services, OAuth authentication, and optimized database queries.',
    technologies: ['Azure', 'ASP.NET', 'OAuth', 'SQL Server'],
    imageUrl: 'https://marvelrivalsapi.com/rivals//ranked/gold.png',
    projectUrl: 'https://yourportfolio.com/projects/cloud-navy-apps',
    githubUrl: 'https://github.com/yourusername/cloud-navy-apps'
  },
  {
    id: 3,
    title: 'Legacy VB.NET Migration',
    description: 'Converted legacy VB.NET apps to C#/.NET 4, automating processes and improving performance.',
    technologies: ['VB.NET', 'C#', '.NET 4', 'Automation'],
    imageUrl: 'https://marvelrivalsapi.com/rivals//ranked/gold.png',
    projectUrl: 'https://yourportfolio.com/projects/vbnet-migration',
    githubUrl: 'https://github.com/yourusername/vbnet-migration'
  },
  {
    id: 4,
    title: 'WordPress Sites',
    description: 'Built and customized WordPress websites with PHP/MySQL, responsive UI/UX, and optimized dynamic content.',
    technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
    imageUrl: 'https://marvelrivalsapi.com/rivals//ranked/gold.png',
    projectUrl: 'https://yourportfolio.com/projects/wordpress-sites',
    githubUrl: 'https://github.com/yourusername/wordpress-sites'
  },
  {
    id: 5,
    title: 'Mobile Fitness Apps',
    description: 'Created cross-platform iOS/Android apps with Swift/Java, integrating APIs and tracking user activity metrics.',
    technologies: ['Swift', 'Java', 'REST APIs', 'Mobile'],
    imageUrl: 'https://marvelrivalsapi.com/rivals//ranked/gold.png',
    projectUrl: 'https://yourportfolio.com/projects/mobile-fitness-apps',
    githubUrl: 'https://github.com/yourusername/mobile-fitness-apps'
  }
];
  constructor() {
   
  }

}