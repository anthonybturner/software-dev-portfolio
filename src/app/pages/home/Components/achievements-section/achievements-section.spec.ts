import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsSection } from './achievements-section';

describe('AchievementsSection', () => {
  let component: AchievementsSection;
  let fixture: ComponentFixture<AchievementsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
