import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavFComponent } from './fav-f.component';

describe('FavFComponent', () => {
  let component: FavFComponent;
  let fixture: ComponentFixture<FavFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
