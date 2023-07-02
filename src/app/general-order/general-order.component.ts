import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {
  PaddleService,
  PaddleCheckoutOptions,
  PaddleEventCallbackData,
  PADDLE_EVENT_TYPE,
} from 'ngx-paddle-wrapper';
 
@Component({
  selector: 'app-general-order',
  templateUrl: './general-order.component.html',
  styleUrls: ['./general-order.component.css']
})
export class GeneralOrderComponent implements OnInit, AfterViewInit  {

  private paddleOptions: PaddleCheckoutOptions = {
    product: 597286,
    title: 'Test Title',
    message: 'Test Message',
    coupon: 'TEST',
    email: 'test@test.com',
  };
 
  constructor(private paddleServ: PaddleService) {}
 
  // Create and open programatically once the library is loaded.
  ngAfterViewInit() {
    this.paddleServ.create({
      vendor: 116060,
      eventCallback: this.checkoutEvent,
    });
  }
 
  pay() {
    console.log('pay');
    this.paddleServ.open(this.paddleOptions);
  }

  ngOnInit(): void {
    
  }

  checkoutEvent(event: any): void {
    console.log('checkout', event);
  }
}
