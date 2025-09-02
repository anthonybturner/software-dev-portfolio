import { Component, OnDestroy, OnInit } from '@angular/core';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { CommonModule } from '@angular/common';
import { Skill, SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [SkillCardComponent, CommonModule],
  standalone: true
})
export class SkillsComponent implements OnInit, OnDestroy {

  skills: Skill[] = [];
  constructor(private skillsService: SkillService){

  }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe( skills =>{
      this.skills = skills;
    });
  }
  ngOnDestroy(): void {
      

  }
}