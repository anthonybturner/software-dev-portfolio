import { Injectable } from "@angular/core";
import { Experience } from "../models/Experience";

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private experiences: Experience[] = [
    {
      id: 'apptech',
      jobTitle: 'Applications Developer',
      company: 'AppTech',
      isContract: true,
      startDate: 'Apr 2025',
      endDate: 'Jun 2025',
      location: 'Norwalk, CT',
      locationType: 'Hybrid',
      description: 'Modernizing legacy Angular applications to Angular 19 and working with .NET Framework systems. Working with existing APIs using ASP.NET Core, RxJS, and TypeScript; managing and implementing efficient DTO/entity mapping. Contributing to CI/CD pipeline integration in Azure DevOps for automated testing and deployments. Participating in daily standups in an agile environment.',
      techTags: ['Angular 19', '.NET 8', 'ASP.NET Core', 'TypeScript', 'Azure DevOps', 'CI/CD']
    },
    {
      id: 'constellation',
      jobTitle: 'Cloud Software Engineer',
      company: 'Constellation Software Engineering',
      isContract: true,
      startDate: 'Sept 2023',
      endDate: 'Aug 2024',
      location: 'Annapolis, MD',
      locationType: 'Remote',
      description: 'Migrated, managed, and built secure cloud applications using Python/Django for federal Navy projects. Managed reporting systems with .NET Core and SQL Server, handling data management and report generation. Worked on OAuth authentication systems. Participated in Agile development with code reviews and automated deployments.',
      techTags: ['Azure', '.NET Core', 'Python/Django', 'OAuth', 'SQL Server', 'PostgreSQL']
    },
    {
      id: 'ryan-specialties',
      jobTitle: '.NET Software Developer',
      company: 'Ryan Specialties',
      isContract: true,
      startDate: 'Jan 2023',
      endDate: 'Aug 2023',
      location: 'Rockhill, NY',
      locationType: 'On-site',
      description: 'Worked on legacy system modernization, migrating VB.NET applications to C#/.NET 4, improving maintainability and execution speed by 60%. Created bulk email applications for automating email processes and modernized a Weather API application from legacy VB code, reducing manual processes and operational errors.',
      techTags: ['C#', '.NET Framework', 'VB.NET', 'API Integration', 'Automation']
    },
    {
      id: 'infoed',
      jobTitle: '.NET Full-Stack Developer',
      company: 'InfoEd Global',
      isContract: false,
      startDate: 'Nov 2018',
      endDate: 'Nov 2022',
      location: 'Albany, NY',
      locationType: 'On-site',
      description: 'Developed and maintained enterprise solutions for government and educational sectors using full-stack .NET technologies (C#, ASP.NET MVC, WebForms, legacy ASP), JavaScript, and jQuery. Enhanced user interfaces with Telerik component libraries and implemented robust data processing through XML/XSD integrations and REST API development.',
      techTags: ['ASP.NET', 'Angular', 'C#', 'SQL Server', 'Oracle', 'XML/XSD']
    },
    {
      id: 'rev-design',
      jobTitle: 'WordPress / PHP Developer',
      company: 'Rev Design',
      isContract: false,
      startDate: 'Dec 2017',
      endDate: 'Nov 2018',
      location: 'Patterson, NY',
      locationType: 'On-site',
      description: 'Built dynamic WordPress sites with PHP and boilerplate templates; optimized MySQL databases. Designed responsive UI/UX using HTML5, CSS3, Bootstrap, and jQuery.',
      techTags: ['WordPress', 'PHP', 'MySQL', 'HTML5/CSS3', 'Bootstrap', 'jQuery']
    },
    {
      id: 'digital-catnip',
      jobTitle: 'iOS/Android Mobile Developer',
      company: 'Digital Catnip',
      isContract: true,
      startDate: 'Jan 2016',
      endDate: 'Jun 2016',
      location: 'Beacon, NY',
      locationType: 'On-site',
      description: 'Developed cross-platform fitness apps using Swift (iOS) and Java (Android). Integrated RESTful APIs for data tracking, synchronization, and analysis. Managed mobile databases and designed responsive, user-friendly UI/UX.',
      techTags: ['Swift', 'Java', 'iOS', 'Android', 'RESTful APIs', 'Mobile UI/UX']
    }
  ];

  getExperience() {
    return this.experiences;
  }
}