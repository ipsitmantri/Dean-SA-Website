import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcuComponent } from './hcu.component';

describe('HcuComponent', () => {
  let component: HcuComponent;
  let fixture: ComponentFixture<HcuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
