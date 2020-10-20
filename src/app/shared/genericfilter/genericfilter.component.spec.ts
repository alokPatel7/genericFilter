import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericfilterComponent } from './genericfilter.component';

describe('GenericfilterComponent', () => {
  let component: GenericfilterComponent;
  let fixture: ComponentFixture<GenericfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
