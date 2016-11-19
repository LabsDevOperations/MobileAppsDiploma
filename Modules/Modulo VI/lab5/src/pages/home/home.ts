import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Product } from '../../model/product';
import { Service } from "../../providers/service";

import { ListPage } from '../list/list';
import { DetailPage } from '../detail/detail';

/*export class Product { //modelo
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
 }*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Service]
})
export class HomePage {

	products: Product[];

	selected:any = false;

	constructor(public navCtrl: NavController,
		private productService: Service) {
		
	}
	
	public product = new Product();
	
	getProducts() {
        this.productService.getProducts()
            .subscribe(
            products => {
                this.products = products;
            },

            error => {
                console.log('app.component.getProducts' + error);
            }
        );
    }

    ngOnInit(): void {
        this.getProducts();
    }

    loadDetail(selProduct: Product)
    {
		this.navCtrl.push(DetailPage, { id: selProduct.id });  	
    }

	loadInfo() {
		this.selected = true;
		//this.navCtrl.push(ListPage);
	}

	loadList() {
	  	this.navCtrl.push(ListPage);
	}


	remove(product: Product): void {
        this.productService.remove(product)
            .subscribe(
                response => { console.log(response); this.getProducts(); },
                err => { console.log(err) }
            );
        
    }

    getItems(ev: any) {
    	console.log('filtering');
	    // Reset items back to all of the items
	    this.getProducts(); 

	    // set val to the value of the searchbar
	    let val = ev.target.value;

	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '') {
	      this.products = this.products.filter((item) => {
	        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    }
	}

}
