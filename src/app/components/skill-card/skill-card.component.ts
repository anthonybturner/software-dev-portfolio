import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}