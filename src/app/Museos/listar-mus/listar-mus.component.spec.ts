import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMusComponent } from './listar-mus.component';

describe('ListarMusComponent', () => {
  let component: ListarMusComponent;
  let fixture: ComponentFixture<ListarMusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
