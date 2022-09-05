import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailAbcComponent } from './product-detail-abc.component';

describe('ProductDetailAbcComponent', () => {
  let component: ProductDetailAbcComponent;
  let fixture: ComponentFixture<ProductDetailAbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailAbcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailAbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
