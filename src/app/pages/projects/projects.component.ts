import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { Project, ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ProjectCardComponent, CommonModule]
})
export class ProjectsComponent implements OnInit, OnDestroy{
  
  projects: Project[] = [];
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void{
    this.projectService.getProjects().subscribe( projects => {
      this.projects = projects;
    })

  }

  ngOnDestroy(): void {
      
  }

}