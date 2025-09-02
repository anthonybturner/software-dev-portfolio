// ProjectCard Component TSimport { Component, Input } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Project } from '../../services/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}