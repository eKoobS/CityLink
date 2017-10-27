import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarComentarioComponent } from './enviar-comentario.component';

describe('EnviarComentarioComponent', () => {
  let component: EnviarComentarioComponent;
  let fixture: ComponentFixture<EnviarComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
