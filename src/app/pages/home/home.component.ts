import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from "./Components/hero-section/hero-section";
import { TechnicalSkills } from "../../components/technical-skills/technical-skills";
import { ShowcaseSection } from "./Components/showcase-section/showcase-section";
import { ExperienceSection } from "./Components/experience-section/experience-section";
import { SkillsSection } from "./Components/skills-section/skills-section";
import { AchievementsSection } from "./Components/achievements-section/achievements-section";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, TechnicalSkills, ShowcaseSection, ExperienceSection, SkillsSection, AchievementsSection]
})
export class HomeComponent {
}