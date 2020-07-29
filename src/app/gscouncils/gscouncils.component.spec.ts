import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GscouncilsComponent } from './gscouncils.component';

describe('GscouncilsComponent', () => {
  let component: GscouncilsComponent;
  let fixture: ComponentFixture<GscouncilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GscouncilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GscouncilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
