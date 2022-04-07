import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugActivitiesComponent } from './bug-activities.component';

describe('BugActivitiesComponent', () => {
  let component: BugActivitiesComponent;
  let fixture: ComponentFixture<BugActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
