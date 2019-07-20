import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute,CanActivate,Router  } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements CanActivate {
items;
 checkoutForm;
  constructor( private route: Router,private cartService: CartService,public afAuth:AngularFireAuth,private formBuilder: FormBuilder,) {
    this.items=this.cartService.getItems();
     this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

   canActivate(): boolean {
    if (!this.afAuth.auth) {
      this.route.navigate(['']);
      return false;
    }
    return true;
  }

   onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();

    this.checkoutForm.reset();
  }

}