import { Component, computed, input } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { SkillCategory } from '../../models/skill-category';

@Component({
  selector: 'app-technical-skills',
  imports: [],
  templateUrl: './technical-skills.html',
  styleUrl: './technical-skills.scss'
})
export class TechnicalSkills {
  limit = input<number>(4);
  categories = input<SkillCategory[]>([
    { id: 'Frontend', name: 'Frontend Development', icon: 'fa-solid fa-palette', description: 'Client-side technologies and user interface development skills.' },
    { id: 'Backend', name: 'Backend Development', icon: 'fa-solid fa-server', description: 'Server-side technologies, APIs, and database management expertise.' },
    { id: 'DevOps', name: 'DevOps Development', icon: 'fa-solid fa-tools', description: 'Server-side technologies, APIs, and database management expertise.' }
  ]);

  constructor(private skillsService: SkillService) { }

  skillsByCategory = computed(() => {
    return this.categories().map(category => ({
      ...category,
      skills: this.skillsService.getSkillsByCategory(category.id).slice(0, this.limit() || undefined)
    }))
  });
}