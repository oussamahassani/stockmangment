import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichFactureComponent } from './affich-facture.component';

describe('AffichFactureComponent', () => {
  let component: AffichFactureComponent;
  let fixture: ComponentFixture<AffichFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
