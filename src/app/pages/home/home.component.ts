import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

    featuredSkills = [
    { id: 1, name: 'Angular', level: 'Intermediate', category: 'Frontend', proficiency: 90, icon: 'angular-icon' },
    { id: 2, name: 'TypeScript', level: 'Intermediate', category: 'Frontend', proficiency: 95, icon: 'typescript-icon' },
    { id: 3, name: 'HTML/CSS', level: 'Advanced', category: 'Frontend', proficiency: 100, icon: 'htmlcss-icon' },
    { id: 4, name: 'Node.js', level: 'Intermediate', category: 'Backend', proficiency: 75, icon: 'nodejs-icon' },
    { id: 5, name: '.Net Framework (4.x) Backend', level: 'Intermediate', category: 'Backend', proficiency: 95, icon: 'dot-net-icon' },
    { id: 6, name: '.Net Framework (4.x) Frontend', level: 'Intermediate', category: 'Frontend', proficiency: 90, icon: 'dot-net-icon/' },
    { id: 7, name: '.Net Core Backend', level: 'Intermediate', category: 'Backend', proficiency: 95, icon: 'dot-net-core-icon/' },
    { id: 7, name: '.Net Core Frontend', level: 'Intermediate', category: 'Frontend', proficiency: 90, icon: 'dot-net-core-icon/' },
  ];

  featuredProjects: any[] = []; // Add your project objects here or fetch from a service

  constructor() {}

  ngOnInit(): void {}
}