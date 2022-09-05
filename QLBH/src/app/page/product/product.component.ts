import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  public prices = [
    'Giá dưới 1.000.000đ',
    '1.000.000đ - 2.000.000đ',
    '3.000.000đ - 4.000.000đ',
    '5.000.000đ - 10.000.000đ',
    'Giá trên 10.000.000đ',
  ];

  public kinds = ['Đồ Điện', 'Phụ Kiện', 'Thức Ăn - Sản Phẩm Hỗ Trợ'];

  public suppliers = [
    'Aquario',
    'Thuỷ Sinh Tím',
    'Modoro',
    'Extrabio',
    'Ybai Affiliate',
    'HAILEA',
    'Liên Hiệp Phát TECHNO',
    'SEAChem',
    'Nhập Khẩu',
  ];

  public filter = [
    'Mặc định',
    'Giá tăng dần',
    'Giá giảm dần',
    'Từ A-Z',
    'Từ Z-A',
    'Cũ đến mới',
    'Mới đến cũ',
  ];

  constructor() {}

  ngOnInit(): void {}
}
