import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `<div class="skills-page"><h2>Skills</h2><p>Skills content coming soon.</p></div>`,
  standalone: true
})
export class SkillsComponent {

skills = [
  { icon: 'angular', name: 'Angular', category: 'Frontend', proficiency: 90 },
  { icon: 'typescript', name: 'TypeScript', category: 'Frontend', proficiency: 85 },
  { icon: 'js', name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 88 },
  { icon: 'html5', name: 'HTML5 & CSS3', category: 'Frontend', proficiency: 95 },
  { icon: 'sass', name: 'SASS/SCSS', category: 'Frontend', proficiency: 92 },
  { icon: 'dotnet', name: '.NET Core/8', category: 'Backend', proficiency: 87 },
  { icon: 'python', name: 'Python/Django', category: 'Backend', proficiency: 80 },
  { icon: 'database', name: 'SQL Server', category: 'Database', proficiency: 90 },
  { icon: 'postgresql', name: 'PostgreSQL', category: 'Database', proficiency: 82 },
  { icon: 'azure', name: 'Azure DevOps', category: 'DevOps', proficiency: 78 },
  { icon: 'docker', name: 'Docker', category: 'DevOps', proficiency: 75 },
  { icon: 'git', name: 'Git/GitHub', category: 'Tools', proficiency: 93 },
  { icon: 'cicd', name: 'CI/CD', category: 'DevOps', proficiency: 80 },
  { icon: 'agile', name: 'Agile/Scrum', category: 'Process', proficiency: 85 }
];

}