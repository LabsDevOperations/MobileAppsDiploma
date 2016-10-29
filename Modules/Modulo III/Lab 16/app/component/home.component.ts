import { Component, OnInit } from '@angular/core';

import { SalesInvoice } from '../model/sales-invoice';
import { SalesInvoiceService } from '../service/sales-invoice.service';

/*import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';*/

import { Router } from "@angular/router";

@Component({ /* metadata */
	selector: 'sales-invoice-list-app',
	templateUrl: 'app/templates/home.html',
    providers: [SalesInvoiceService/*, CustomerService*/]
})
export class HomeComponent implements OnInit {
	title: string = "Home List Sales Invoices";
    selected: SalesInvoice;
    salesInvoices: SalesInvoice[];

    constructor(private router: Router,
        private salesInvoiceService: SalesInvoiceService
        //, private customerService: CustomerService
    ) {}

    getSalesInvoices() {
        this.salesInvoiceService.getSalesInvoices().then(salesInvoices => this.salesInvoices = salesInvoices);
    }

    ngOnInit(): void {
        this.getSalesInvoices();
    }

    onSelect(salesInvoice: SalesInvoice) {
        this.selected = salesInvoice;
    }

    /*getCustomerNameAsociated(customerId: number) : string {
        var customer: Customer;
        this.customerService.getCustomer(customerId).then(customer => customer = customer);
        return customer.name;
    }*/

    gotoDetail(): void {
        this.router.navigate(['sales-invoice/detail/', this.selected.id]);
    }
}