import { Component, Input } from '@angular/core';
import { Skill } from '../../services/skill.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
  standalone: true,
})
export class SkillCardComponent {
  @Input() skill!: Skill;
}