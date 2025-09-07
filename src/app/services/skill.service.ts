import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number; // 1-100
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skills: Skill[] = [
    // Frontend
    { id: 1, name: 'Angular', category: 'Frontend', proficiency: 90, icon: 'fa-brands fa-angular' },
    { id: 2, name: 'TypeScript', category: 'Frontend', proficiency: 85, icon: 'fa-brands fa-js' },
    { id: 3, name: 'JavaScript', category: 'Frontend', proficiency: 95, icon: 'fa-brands fa-js' },
    { id: 4, name: 'HTML5', category: 'Frontend', proficiency: 95, icon: 'fa-brands fa-html5' },
    { id: 5, name: 'CSS/CSS3', category: 'Frontend', proficiency: 90, icon: 'fa-brands fa-css3-alt' },
    { id: 6, name: 'SASS/SCSS', category: 'Frontend', proficiency: 90, icon: 'fa-brands fa-sass' },
    { id: 7, name: 'RxJS', category: 'Frontend', proficiency: 80, icon: 'fa-solid fa-bolt' },
    { id: 8, name: 'jQuery/AJAX', category: 'Frontend', proficiency: 85, icon: 'fa-brands fa-js' },
    
    // Backend
    { id: 9, name: '.NET Core', category: 'Backend', proficiency: 95, icon: 'fa-brands fa-microsoft' },
    { id: 10, name: '.NET Framework', category: 'Backend', proficiency: 95, icon: 'fa-brands fa-microsoft' },
    { id: 11, name: 'C#', category: 'Backend', proficiency: 95, icon: 'fa-brands fa-microsoft' },
    { id: 12, name: 'Node.js', category: 'Backend', proficiency: 85, icon: 'fa-brands fa-node-js' },
    { id: 13, name: 'Python', category: 'Backend', proficiency: 75, icon: 'fa-brands fa-python' },
    { id: 14, name: 'Entity Framework', category: 'Backend', proficiency: 90, icon: 'fa-solid fa-database' },
    { id: 15, name: 'ASP.NET Core', category: 'Backend', proficiency: 95, icon: 'fa-brands fa-microsoft' },
    { id: 16, name: 'RESTful APIs', category: 'Backend', proficiency: 90, icon: 'fa-solid fa-code' },

    // DevOps & Tools  
    { id: 17, name: 'Git', category: 'DevOps', proficiency: 90, icon: 'fa-brands fa-git-alt' },
    { id: 18, name: 'Docker', category: 'DevOps', proficiency: 75, icon: 'fa-brands fa-docker' },
    { id: 19, name: 'Azure', category: 'DevOps', proficiency: 80, icon: 'fa-brands fa-microsoft' },
    { id: 20, name: 'CI/CD', category: 'DevOps', proficiency: 85, icon: 'fa-solid fa-cogs' },
    { id: 21, name: 'Azure DevOps', category: 'DevOps', proficiency: 80, icon: 'fa-brands fa-microsoft' },
    { id: 22, name: 'Vercel', category: 'DevOps', proficiency: 85, icon: 'fa-solid fa-cloud' },
    
    // Database
    { id: 23, name: 'SQL Server', category: 'Database', proficiency: 85, icon: 'fa-solid fa-database' },
    { id: 24, name: 'PostgreSQL', category: 'Database', proficiency: 75, icon: 'fa-solid fa-database' },
    { id: 25, name: 'MySQL', category: 'Database', proficiency: 70, icon: 'fa-solid fa-database' },
    { id: 26, name: 'MongoDB', category: 'Database', proficiency: 70, icon: 'fa-solid fa-database' },
    
    // Professional Skills
    { id: 27, name: 'Ownership', category: 'Professional', proficiency: 100, icon: 'fa-solid fa-user-check' },
    { id: 28, name: 'Communication Skills', category: 'Professional', proficiency: 95, icon: 'fa-solid fa-comments' },
  ];

  constructor() { }

  getSkills(): Observable<Skill[]> {
      const sortedSkills = [...this.skills].sort((a, b) => b.proficiency - a.proficiency);
      return of(sortedSkills);
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    const filteredSkills = this.skills.filter(skill => skill.category === category);
    return of(filteredSkills);
  }

  getCategories(): Observable<string[]> {
    const categories = Array.from(new Set(this.skills.map(skill => skill.category)));
    return of(categories);
  }
}