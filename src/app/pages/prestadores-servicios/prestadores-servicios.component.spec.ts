import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadoresServiciosComponent } from './prestadores-servicios.component';

describe('PrestadoresServiciosComponent', () => {
  let component: PrestadoresServiciosComponent;
  let fixture: ComponentFixture<PrestadoresServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestadoresServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadoresServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
