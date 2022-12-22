import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlimnosComponent } from './lista-alimnos.component';

describe('ListaAlimnosComponent', () => {
  let component: ListaAlimnosComponent;
  let fixture: ComponentFixture<ListaAlimnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlimnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlimnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
