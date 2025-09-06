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
  { id: 1, name: '.Net 4.x', category: 'Frontend', proficiency: 95, icon: 'fa-brands fa-microsoft' },
  { id: 2, name: 'Angular', category: 'Frontend', proficiency: 90, icon: 'fa-brands fa-angular' },
  { id: 3, name: 'TypeScript', category: 'Frontend', proficiency: 85, icon: 'fa-brands fa-js' },
  { id: 4, name: 'JavaScript', category: 'Frontend', proficiency: 95, icon: 'fa-brands fa-js' },
  { id: 5, name: 'HTML5', category: 'Frontend', proficiency: 95, icon: 'fa-brands fa-html5' },
  { id: 6, name: 'CSS/CSS3', category: 'Frontend', proficiency: 90, icon: 'fa-brands fa-css3-alt' },
  { id: 7, name: 'RxJS', category: 'Frontend', proficiency: 80, icon: 'fa-solid fa-bolt' },
  { id: 8, name: 'SASS', category: 'Frontend', proficiency: 90, icon: 'fa-brands fa-sass' },
  { id: 9, name: 'SCSS', category: 'Frontend', proficiency: 90, icon: 'fa-brands fa-sass' },
  { id: 10, name: 'CSS3', category: 'Frontend', proficiency: 90, icon: 'fa-brands fa-css3-alt' },
    
    
    // Backend
  { id: 11, name: '.Net Core', category: 'Backend', proficiency: 95, icon: 'fa-brands fa-microsoft' },
  { id: 12, name: 'Express.js', category: 'Backend', proficiency: 80, icon: 'fa-brands fa-node-js' },
  { id: 13, name: 'Python', category: 'Backend', proficiency: 75, icon: 'fa-brands fa-python' },
  { id: 14, name: 'Java', category: 'Backend', proficiency: 70, icon: 'fa-brands fa-java' },
  { id: 15, name: 'Node.js', category: 'Backend', proficiency: 85, icon: 'fa-brands fa-node-js' },

    // Database
  { id: 16, name: 'MongoDB', category: 'Database', proficiency: 80, icon: 'fa-solid fa-database' },
  { id: 17, name: 'PostgreSQL', category: 'Database', proficiency: 75, icon: 'fa-solid fa-database' },
  { id: 18, name: 'MySQL', category: 'Database', proficiency: 70, icon: 'fa-solid fa-database' },
    
    // Tools
  { id: 19, name: 'Git', category: 'Tools', proficiency: 90, icon: 'fa-brands fa-git-alt' },
  { id: 20, name: 'Docker', category: 'Tools', proficiency: 75, icon: 'fa-brands fa-docker' },
  { id: 21, name: 'Azure', category: 'Tools', proficiency: 80, icon: 'fa-brands fa-microsoft' },
  { id: 22, name: 'LINQ', category: 'Backend', proficiency: 85, icon: 'fa-solid fa-stream' },
  { id: 23, name: 'Lambda', category: 'Backend', proficiency: 80, icon: 'fa-solid fa-code' },
  { id: 24, name: 'Entity Framework', category: 'Backend', proficiency: 90, icon: 'fa-solid fa-database' },
  { id: 25, name: 'jQuery/AJAX', category: 'Frontend', proficiency: 85, icon: 'fa-brands fa-js' },
  { id: 26, name: 'Object Oriented Programming', category: 'Backend', proficiency: 95, icon: 'fa-solid fa-cubes' },
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