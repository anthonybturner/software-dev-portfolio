import { Component, computed, OnDestroy, OnInit } from '@angular/core';
import { SkillCardComponent } from '../../components/skill-card/skill-card.component';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [SkillCardComponent, CommonModule],
  standalone: true
})
export class SkillsComponent implements OnInit, OnDestroy {

  constructor(private skillsService: SkillService){
    
  }

  skills = computed(()=> {
    return this.skillsService.skills();
  });

  ngOnInit(): void {
   
  }
  ngOnDestroy(): void {
      

  }
}