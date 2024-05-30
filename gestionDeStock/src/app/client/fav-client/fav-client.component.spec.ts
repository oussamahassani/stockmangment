import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavClientComponent } from './fav-client.component';

describe('FavClientComponent', () => {
  let component: FavClientComponent;
  let fixture: ComponentFixture<FavClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
