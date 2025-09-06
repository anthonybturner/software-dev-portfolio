import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  projectUrl: string;
  githubUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 0,
      title: 'Marvel Rivals Stats',
      description: 'Creator of Marvel Rivals Stats, a full-stack web application for tracking player stats, match history, and leaderboards. Built with Angular, TypeScript, and .NET APIs, deployed on Vercel. Features real-time data, advanced filtering, and a modern UI for competitive gamers.',
      technologies: ['Angular', 'TypeScript', '.NET', 'Vercel', 'RxJS', 'API Integration'],
      images: ['./images/projects/marvel-rivals-main.png','./images/projects/marvel-rivals-alt.png'],
      projectUrl: 'https://marvelrivalsstats.vercel.app/',
      githubUrl: 'https://github.com/anthonybturner/marvel-rivals-stats'
    },
    {
      id: 1,
      title: 'CinemaPostersAnywhere',
      description: 'CinemaPostersAnywhere is an Android application that displays movie and game posters and information dynamically, providing users with an engaging way to explore films and related content. The app integrates with various APIs, including YouTube, Steam, and TMDB, to enhance user experience and functionality.\n\nDynamic Movie Posters: Showcases current movie posters with real-time updates, allowing users to see the latest films.\nDynamic Game Posters: Displays detailed information about Steam games during gameplay.',
      technologies: ['Android', 'Java', 'REST API', 'Git', 'Database Management'],
      images: ['./images/projects/cinema-posters-main.png', './images/projects/cinema-posters-alt.png'],
      projectUrl: 'https://www.upwork.com/freelancers/~0105c5d5dd83fb868a?p=1858197300578816000',
      githubUrl: 'https://github.com/anthonybturner/CinemaPostersAnywhere/'
    },

    {

      id: 1,
      title: 'Angular/.NET Modernization',
      description: 'Migrated legacy Angular/.NET Framework apps to Angular 19 and .NET 8. Implemented scalable APIs and CI/CD pipelines.',
      technologies: ['Angular', '.NET 8', 'Azure DevOps', 'CI/CD'],
      images: ['./images/projects/csengineering-navy.jpg'],
      projectUrl: 'https://marvelrivalsapi.com/rivals/ranked/gold.png',
      githubUrl: 'https://github.com/anthonybturner'
    },
    {
      id: 2,
      title: 'Cloud Navy Applications',
      description: 'Built secure Navy cloud systems with Azure services, OAuth authentication, and optimized database queries.',
      technologies: ['Azure', 'ASP.NET', 'OAuth', 'SQL Server'],
      images: ['./images/projects/csengineering-navy.jpg'],
      projectUrl: 'https://yourportfolio.com/projects/cloud-navy-apps',
      githubUrl: 'https://github.com/anthonybturner'
    },
    {
      id: 3,
      title: 'Legacy VB.NET Migration',
      description: 'Converted legacy VB.NET apps to C#/.NET 4, automating processes and improving performance.',
      technologies: ['VB.NET', 'C#', '.NET 4', 'Automation'],
      images: ['./images/projects/csengineering-navy.jpg'],
      projectUrl: 'https://yourportfolio.com/projects/vbnet-migration',
      githubUrl: 'https://github.com/anthonybturner'
    },
    {
      id: 4,
      title: 'WordPress Sites',
      description: 'Built and customized WordPress websites with PHP/MySQL, responsive UI/UX, and optimized dynamic content.',
      technologies: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
      images: ['./images/projects/csengineering-navy.jpg'],
      projectUrl: 'https://yourportfolio.com/projects/wordpress-sites',
      githubUrl: 'https://github.com/anthonybturner'
    },
    {
      id: 5,
      title: 'Mobile Fitness Apps',
      description: 'Created cross-platform iOS/Android apps with Swift/Java, integrating APIs and tracking user activity metrics.',
      technologies: ['Swift', 'Java', 'REST APIs', 'Mobile'],
      images: ['./images/projects/csengineering-navy.jpg'],
      projectUrl: 'https://yourportfolio.com/projects/mobile-fitness-apps',
      githubUrl: 'https://github.com/anthonybturner'
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