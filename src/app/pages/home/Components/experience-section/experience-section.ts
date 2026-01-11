import { Component, computed } from '@angular/core';
import { ExperienceService } from '../../../../services/exeperience.service';

@Component({
  selector: 'app-experience-section',
  imports: [],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss'
})
export class ExperienceSection {

  constructor(private experienceService:ExperienceService){}

  experiences = computed(()=> this.experienceService.getExperience())

}
