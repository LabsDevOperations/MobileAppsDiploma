import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { Product } from '../../model/product';
import { Service } from '../../providers/service';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [Service]
})
export class DetailPage {

	productId: number;
	product: Product;

  constructor(public navCtrl: NavController, private navParams: NavParams,
		private productService: Service) {
  	this.productId = navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('Hello DetailPage Page' + this.productId);
	  this.productService.getProduct(this.productId)
            .subscribe(
            product => {
                this.product = product;
            },
            error => {
                console.log('app.component.getProducts' + error);
            }
        );
  }

  save(): void {
        this.productService.update(this.product)
            .subscribe(
                response => {console.log(response)},
                err => { console.log(err)});
  }

}
