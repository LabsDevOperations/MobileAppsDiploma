import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service'; // instancia del servicio que obtiene los datos

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html',
  providers: [ProductService]
})

export class AppComponent implements OnInit { // interface oninit

    /*  es buena practica declarar atributos previo al constructor  */
    title: string = "Mis productos";
    selected: Product;
    products: Product[];
    

    constructor(private productService: ProductService) {}

    

    ngOnInit() {
        this.productService.getProducts()
        .then(products => this.products = products)
        .catch(error => console.log(error)); // el then es un ejemplo callback de typescript
    }

    onSelect(product: Product) {
        this.selected = product;
    }
}