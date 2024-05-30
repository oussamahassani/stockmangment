import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFComponent } from './update-f.component';

describe('UpdateFComponent', () => {
  let component: UpdateFComponent;
  let fixture: ComponentFixture<UpdateFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
