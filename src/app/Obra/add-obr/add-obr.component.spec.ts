import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObrComponent } from './add-obr.component';

describe('AddObrComponent', () => {
  let component: AddObrComponent;
  let fixture: ComponentFixture<AddObrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddObrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
