import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,CanActivate,Router  } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements CanActivate  {
 product;
 //The ActivatedRoute is specific to each routed component loaded by the Angular Router. It contains //information about the route, its parameters, and additional data associated with the route.
  constructor(private route: Router,private cartService: CartService,public afAuth:AngularFireAuth) {
   }

   addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  canActivate(): boolean {
    if (!this.afAuth.auth.currentUser) {
      this.route.navigate(['']);
      return false;
    }
    return true;
  }

}