import { Component } from '@angular/core';

import { products } from '../products';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
items: Observable<any[]>;
  constructor(db: AngularFireDatabase,public afAuth:AngularFireAuth) {
   this.items = db.list('items').valueChanges();
    console.log();
  }

login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }


  share() {
    window.alert('The product has been shared!');
    
  }

 onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/