import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusComponent } from './add-mus.component';

describe('AddMusComponent', () => {
  let component: AddMusComponent;
  let fixture: ComponentFixture<AddMusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
