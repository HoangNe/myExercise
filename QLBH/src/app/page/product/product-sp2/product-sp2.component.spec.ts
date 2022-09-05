import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSp2Component } from './product-sp2.component';

describe('ProductSp2Component', () => {
  let component: ProductSp2Component;
  let fixture: ComponentFixture<ProductSp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
