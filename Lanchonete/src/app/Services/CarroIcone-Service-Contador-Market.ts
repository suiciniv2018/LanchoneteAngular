import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import{ Produto } from '../Typscript/Modelo-Interface-Market';

@Injectable({
providedIn:'root'
})

export class cartcount {

  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();
  getcartCount: any;
  constructor() {}
setcartCount(count:number){
  this.cartCount.next(count);
}
gercartCount(count:number){
  return this.cartCount.value;
}

}