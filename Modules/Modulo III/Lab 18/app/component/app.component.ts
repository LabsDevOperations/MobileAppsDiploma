import { Component } from '@angular/core';
import { Product } from '../model/product';
import {ProductService} from "../service/product.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class AppComponent {
    title: string = "los productos del Año";

    productNew = new Product();

    selected: Product;

    products: Product[];

    constructor(private productService: ProductService) {

    }

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

    onSelect(product: Product){
        this.selected = product;
    }

    add(): void {
        this.productService.create(this.productNew)
            .subscribe(product => {
                this.products.push(product);
                this.selected = null;
            });
    }

    save(): void {
        this.productService.update(this.selected)
            .subscribe(
                response => { console.log(response) },
                err => { console.log(err) }
            );
    }

   
}