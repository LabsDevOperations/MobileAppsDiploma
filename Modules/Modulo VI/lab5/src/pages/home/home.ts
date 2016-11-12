import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

export class Product { //modelo
 	id: number;
 	name: string;
 	type: string;
 	price: number;
 	quantity: number;
 	constructor()
	{
		this.id = 127,
		this.name = "Naranja mecánica",
		this.type = "video",
		this.price = 50000,
		this.quantity = 1
	}
 }

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public product = new Product();

	constructor(public navCtrl: NavController) {
		
	}



}
