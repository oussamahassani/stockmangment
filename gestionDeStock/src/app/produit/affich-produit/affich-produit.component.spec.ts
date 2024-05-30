import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichProduitComponent } from './affich-produit.component';

describe('AffichProduitComponent', () => {
  let component: AffichProduitComponent;
  let fixture: ComponentFixture<AffichProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
