import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-sp1',
  templateUrl: './product-sp1.component.html',
  styleUrls: ['./product-sp1.component.scss'],
})
export class ProductSp1Component implements OnInit {
  public sizes = ['Rất Nhỏ', 'Nhỏ', 'Vừa', 'To', 'Rất To'];
  constructor() {}

  ngOnInit(): void {}
}
