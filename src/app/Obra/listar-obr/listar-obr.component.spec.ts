import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarObrComponent } from './listar-obr.component';

describe('ListarObrComponent', () => {
  let component: ListarObrComponent;
  let fixture: ComponentFixture<ListarObrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarObrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarObrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
