import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdeansaComponent } from './adeansa.component';

describe('AdeansaComponent', () => {
  let component: AdeansaComponent;
  let fixture: ComponentFixture<AdeansaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdeansaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdeansaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
