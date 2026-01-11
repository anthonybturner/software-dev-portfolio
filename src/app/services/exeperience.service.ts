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
      description: 'Modernized Angular/.NET Framework apps to Angular 19 and .NET 8. Developed scalable APIs with ASP.NET Core, RxJS, and TypeScript; implemented DTO/entity mapping. Integrated CI/CD pipelines in Azure DevOps for automated testing and deployments.',
      techTags: ['Angular 19', '.NET 8', 'ASP.NET Core', 'TypeScript', 'Azure DevOps', 'CI/CD']
    },
    {
      id: 'constellation',
      jobTitle: 'Cloud Software Engineer',
      company: 'Constellation Software Engineering',
      isContract: true,
      startDate: 'Sept 2023',
      endDate: 'Aug 2024',
      location: 'Remote',
      locationType: 'Remote',
      description: 'Built secure cloud applications for federal Navy projects using Azure, ASP.NET, .NET Core, and Python/Django. Implemented OAuth authentication systems; optimized SQL Server/PostgreSQL queries. Participated in Agile sprints, code reviews, and deployments.',
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
      description: 'Migrated legacy VB.NET applications to C#/.NET 4, improving maintainability and execution speed. Automated bulk email and Weather API systems, reducing manual processes and errors.',
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
      description: 'Built full-stack solutions using C#, VB.NET, ASP.NET, Angular, and JavaScript. Implemented XML/XSD integrations with ASP.NET Web Forms; optimized SQL Server/Oracle databases. Designed API logic to cache third-party data locally, improving performance and reducing redundant calls.',
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