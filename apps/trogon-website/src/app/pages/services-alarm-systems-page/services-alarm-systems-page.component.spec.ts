import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAlarmSystemsPageComponent } from './services-alarm-systems-page.component';

describe('ServicesAlarmSystemsPageComponent', () => {
  let component: ServicesAlarmSystemsPageComponent;
  let fixture: ComponentFixture<ServicesAlarmSystemsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesAlarmSystemsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAlarmSystemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
