import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichFComponent } from './affich-f.component';

describe('AffichFComponent', () => {
  let component: AffichFComponent;
  let fixture: ComponentFixture<AffichFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
