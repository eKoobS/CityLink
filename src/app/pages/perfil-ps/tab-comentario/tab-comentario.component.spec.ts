import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComentarioComponent } from './tab-comentario.component';

describe('TabComentarioComponent', () => {
  let component: TabComentarioComponent;
  let fixture: ComponentFixture<TabComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
