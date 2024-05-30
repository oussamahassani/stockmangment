import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichCommandeComponent } from './affich-commande.component';

describe('AffichCommandeComponent', () => {
  let component: AffichCommandeComponent;
  let fixture: ComponentFixture<AffichCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
