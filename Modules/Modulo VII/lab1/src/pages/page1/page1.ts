import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ListaProductos } from '../listaproductos/listaproductos';
//import { ListaUsuarios } from '../pages/listausuarios/lista-usuarios';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
//@ViewChild(Nav) nav: Nav;
	//productPage: any = ListaProductos;
	//usuarioPage: any = ListaUsuarios;

  	constructor(public navCtrl: NavController) {
    
  	}

  	loadProductos()
	{
		console.log('load products');
		//this.navCtrl.push(ListaProductos);  	
		//this.nav(ListaProductos);
	}

	loadUsuarios()
	{
		//this.navCtrl.push(ListaUsuarios);  	
	}

}
