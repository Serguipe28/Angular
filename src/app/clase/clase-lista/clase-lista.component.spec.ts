import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseListaComponent } from './clase-lista.component';

describe('ClaseListaComponent', () => {
  let component: ClaseListaComponent;
  let fixture: ComponentFixture<ClaseListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
