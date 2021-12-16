import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoConvertitoreComponent } from './nuovo-convertitore.component';

describe('NuovoConvertitoreComponent', () => {
  let component: NuovoConvertitoreComponent;
  let fixture: ComponentFixture<NuovoConvertitoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoConvertitoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoConvertitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
