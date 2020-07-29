import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansaComponent } from './deansa.component';

describe('DeansaComponent', () => {
  let component: DeansaComponent;
  let fixture: ComponentFixture<DeansaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeansaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeansaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
