import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptedsComponent } from './adopteds.component';

describe('AdoptedsComponent', () => {
  let component: AdoptedsComponent;
  let fixture: ComponentFixture<AdoptedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
