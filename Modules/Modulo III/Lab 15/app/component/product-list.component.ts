import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service'

/*
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
];*/


@Component({
    selector: 'product-list-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    title: string = "Products";
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts()
        .then(products => this.products = products)
        .catch(error => console.log(error));
    }

    onSelect(product: Product) {
        this.selected = product;
    }
}
