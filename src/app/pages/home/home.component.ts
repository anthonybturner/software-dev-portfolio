import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from "../skills/skills.component";
import { SkillService, Skill } from '../../services/skill.service';

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

  // New categorized skills for graphs
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  devopsSkills: Skill[] = [];

  featuredProjects: any[] = []; // Add your project objects here or fetch from a service

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.loadSkillsByCategory();
  }

  private loadSkillsByCategory(): void {
    // Load frontend skills
    this.skillService.getSkillsByCategory('Frontend').subscribe((skills: Skill[]) => {
      this.frontendSkills = skills.slice(0, 6); // Show top 6 skills
    });

    // Load backend skills
    this.skillService.getSkillsByCategory('Backend').subscribe((skills: Skill[]) => {
      this.backendSkills = skills.slice(0, 6); // Show top 6 skills
    });

    // Load devops/tools skills
    this.skillService.getSkillsByCategory('DevOps').subscribe((skills: Skill[]) => {
      this.devopsSkills = skills.slice(0, 6); // Show top 6 skills
    });
  }
}