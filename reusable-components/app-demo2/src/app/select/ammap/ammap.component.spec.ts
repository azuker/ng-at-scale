import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmapComponent } from './ammap.component';

describe('AmmapComponent', () => {
  let component: AmmapComponent;
  let fixture: ComponentFixture<AmmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
