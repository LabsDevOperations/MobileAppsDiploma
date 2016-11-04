/*import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { SalesInvoiceService } from '../service/sales-invoice.service'

@Component({
    selector: 'product-list-app',
    templateUrl: 'app/templates/product-list.html',
    providers: [SalesInvoiceService]
})
export class ProductListComponent implements OnInit {
    title: string = "Products";
    selected: Product;
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
*/ 
//# sourceMappingURL=sales-invoice-list.component.js.map