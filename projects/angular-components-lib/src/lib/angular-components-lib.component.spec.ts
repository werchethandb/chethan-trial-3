import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentsLibComponent } from './angular-components-lib.component';

describe('AngularComponentsLibComponent', () => {
  let component: AngularComponentsLibComponent;
  let fixture: ComponentFixture<AngularComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularComponentsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
