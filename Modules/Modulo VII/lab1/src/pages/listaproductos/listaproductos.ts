import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Listaproductos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listaproductos',
  templateUrl: 'listaproductos.html'
})
export class ListaProductos {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListaproductosPage Page');
  }

}
