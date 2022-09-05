import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './page/product/product.component';
import { BlogComponent } from './page/blog/blog.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ProductSp1Component } from './page/product/product-sp1/product-sp1.component';
import { ProductSp2Component } from './page/product/product-sp2/product-sp2.component';
import { DetailComponent } from './page/product/detail/detail.component';
import { ProductDetailAbcComponent } from './page/product/product-detail-abc/product-detail-abc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    ProductComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    ProductSp1Component,
    ProductSp2Component,
    DetailComponent,
    ProductDetailAbcComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
