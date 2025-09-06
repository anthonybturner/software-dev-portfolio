import { Component, Input } from '@angular/core';
import { Skill } from '../../services/skill.service';
import { CommonModule } from '@angular/common';

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