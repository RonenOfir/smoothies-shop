import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { SuccessComponent } from './success/success.component';
import { GeneralOrderComponent } from './general-order/general-order.component';
import { PaddleModule } from 'ngx-paddle-wrapper';

@NgModule({
  declarations: [AppComponent, HomeComponent, PaymentComponent, SuccessComponent, GeneralOrderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule,
    PaddleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
