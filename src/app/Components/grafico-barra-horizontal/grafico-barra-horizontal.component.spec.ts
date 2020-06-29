import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficobarraHorizontalComponent } from './grafico-barra-horizontal.component';

describe('GraficobarraHorizontalComponent', () => {
  let component: GraficobarraHorizontalComponent;
  let fixture: ComponentFixture<GraficobarraHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficobarraHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficobarraHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
