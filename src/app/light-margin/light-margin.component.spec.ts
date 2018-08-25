import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightMarginComponent } from './light-margin.component';

describe('LightMarginComponent', () => {
  let component: LightMarginComponent;
  let fixture: ComponentFixture<LightMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
