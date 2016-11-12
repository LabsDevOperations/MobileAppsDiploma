import { Component, Input } from '@angular/core';
import { AppComponent } from '../component/app.component';
import { Product } from '../model/product';
import { ProductService } from "../service/product.service";

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html'
})

export class ProductDetailComponent {
    title: string = "Detail";
    @Input()

    product: Product;

    constructor(private productService: ProductService,
        private appComponent: AppComponent){

    }

    save(): void {
        this.productService.update(this.product)
            .subscribe(
                response => {console.log(response)},
                err => { console.log(err)});
    }

    remove(): void {
        this.productService.remove1(this.product)
            .subscribe(
                response => { console.log(response); this.appComponent.getProducts(); },
                err => { console.log(err) }
            );
        
    }
}

