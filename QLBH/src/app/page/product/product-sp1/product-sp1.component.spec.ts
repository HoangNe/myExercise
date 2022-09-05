import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSp1Component } from './product-sp1.component';

describe('ProductSp1Component', () => {
  let component: ProductSp1Component;
  let fixture: ComponentFixture<ProductSp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
