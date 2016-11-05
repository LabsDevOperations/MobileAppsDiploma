import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

 export class Product { //modelo
 	id: number;
 	name: string;
 	type: string;
 	price: number;
 	quantity: number;
 }


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	products: Product[] = PRODUCTS;

	constructor(public navCtrl: NavController) {

	}

}


const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 3,
        name: "Samsung galaxy 20",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    }
];