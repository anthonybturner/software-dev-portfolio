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
    { id: 1, name: '.Net 4.x', category: 'Frontend', proficiency: 95, icon: 'assets/icons/dot-net.svg' },
    { id: 2, name: 'Angular', category: 'Frontend', proficiency: 90, icon: 'assets/icons/angular.svg' },
    { id: 3, name: 'TypeScript', category: 'Frontend', proficiency: 85, icon: 'assets/icons/typescript.svg' },
    { id: 4, name: 'JavaScript', category: 'Frontend', proficiency: 95, icon: 'assets/icons/javascript.svg' },
    { id: 5, name: 'HTML5', category: 'Frontend', proficiency: 95, icon: 'assets/icons/html5.svg' },
    { id: 6, name: 'CSS3/SCSS', category: 'Frontend', proficiency: 90, icon: 'assets/icons/css3.svg' },
    { id: 7, name: 'RxJS', category: 'Frontend', proficiency: 80, icon: 'assets/icons/rxjs.svg' },
    
    
    // Backend
    { id: 7, name: '.Net Core', category: 'Backend', proficiency: 95, icon: 'assets/icons/dot-net-core.svg' },
    { id: 8, name: 'Express.js', category: 'Backend', proficiency: 80, icon: 'assets/icons/express.svg' },
    { id: 9, name: 'Python', category: 'Backend', proficiency: 75, icon: 'assets/icons/python.svg' },
    { id: 10, name: 'Java', category: 'Backend', proficiency: 70, icon: 'assets/icons/java.svg' },
    { id: 11, name: 'Node.js', category: 'Backend', proficiency: 85, icon: 'assets/icons/nodejs.svg' },

    // Database
    { id: 12, name: 'MongoDB', category: 'Database', proficiency: 80, icon: 'assets/icons/mongodb.svg' },
    { id: 13, name: 'PostgreSQL', category: 'Database', proficiency: 75, icon: 'assets/icons/postgresql.svg' },
    { id: 14, name: 'MySQL', category: 'Database', proficiency: 70, icon: 'assets/icons/mysql.svg' },
    
    // Tools
    { id: 15, name: 'Git', category: 'Tools', proficiency: 90, icon: 'assets/icons/git.svg' },
    { id: 16, name: 'Docker', category: 'Tools', proficiency: 75, icon: 'assets/icons/docker.svg' },
    { id: 17, name: 'AWS', category: 'Tools', proficiency: 70, icon: 'assets/icons/aws.svg' }
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