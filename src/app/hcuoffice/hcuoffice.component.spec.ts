import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcuofficeComponent } from './hcuoffice.component';

describe('HcuofficeComponent', () => {
  let component: HcuofficeComponent;
  let fixture: ComponentFixture<HcuofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcuofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcuofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
