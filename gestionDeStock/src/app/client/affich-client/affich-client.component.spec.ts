import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichClientComponent } from './affich-client.component';

describe('AffichClientComponent', () => {
  let component: AffichClientComponent;
  let fixture: ComponentFixture<AffichClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
