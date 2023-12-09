import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyWithEvComponent } from './study-with-ev.component';

describe('StudyWithEvComponent', () => {
  let component: StudyWithEvComponent;
  let fixture: ComponentFixture<StudyWithEvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyWithEvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyWithEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
