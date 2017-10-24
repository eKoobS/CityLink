import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrestadoresServiciosComponent } from './lista-prestadores-servicios.component';

describe('ListaPrestadoresServiciosComponent', () => {
  let component: ListaPrestadoresServiciosComponent;
  let fixture: ComponentFixture<ListaPrestadoresServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPrestadoresServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrestadoresServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
