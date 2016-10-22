import { Component } from '@angular/core';

 export class Product { //modelo
 	id: number;
 	name: string;
 	description: string;
 	type: string;
 	price: number;
 	quantity: number;
 }

/*@Component({   
  selector: 'my-app',
  template: '<h1>{{product.id}}</h1><br />' +  // esto se traslado a app/templates/product.html
  			'<h2>{{product.name}}</h2><br />' +
  			'<h2>{{product.description}}</h2><br />' +
  			'<h2>{{product.type}}</h2><br />' +
  			'<h2>{{product.price}}</h2><br />' +
  			'<h2>{{product.quantity}}</h2><br />'
})*/

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})


/*
export class AppComponent {
	product: Product = {      // metadata de modelo definido por mí, es reemplazado luego por el array de products 
		id: 1,
		name: "Galax7 7",
		description: "Granada de mano",
		type: "smartphone",
		price: 500000,
		quantity: 10
	}
}
*/
export class AppComponent {

	title = "Mi producto";
	products: Product[] = PRODUCTS;

	onSelect(product: Product) {
		this.selected = product;
	}
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    }
];