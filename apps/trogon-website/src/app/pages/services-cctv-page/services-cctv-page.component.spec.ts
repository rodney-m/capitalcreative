import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCctvPageComponent } from './services-cctv-page.component';

describe('ServicesCctvPageComponent', () => {
  let component: ServicesCctvPageComponent;
  let fixture: ComponentFixture<ServicesCctvPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesCctvPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesCctvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
