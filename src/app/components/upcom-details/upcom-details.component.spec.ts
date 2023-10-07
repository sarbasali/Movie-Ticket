import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomDetailsComponent } from './upcom-details.component';

describe('UpcomDetailsComponent', () => {
  let component: UpcomDetailsComponent;
  let fixture: ComponentFixture<UpcomDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomDetailsComponent]
    });
    fixture = TestBed.createComponent(UpcomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
