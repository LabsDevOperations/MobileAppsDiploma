import { Component, OnInit } from '@angular/core';

import { SalesInvoice } from '../model/sales-invoice';
import { SalesInvoiceService } from '../service/sales-invoice.service';

import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

import { LineItem } from '../model/line-item'
import { LineItemService } from '../service/line-item.service';

import { Router } from "@angular/router";

@Component({ /* metadata */
	selector: 'sales-invoice-list-app',
	templateUrl: 'app/templates/home.html',
    providers: [SalesInvoiceService, CustomerService, LineItemService]
})
export class HomeComponent implements OnInit {
	title: string = "Home List Sales Invoices";
    salesInvoiceSelected: SalesInvoice;
    salesInvoices: SalesInvoice[];
    customerAsociated: Customer;
    lineItemsAsociated: LineItem[];

    constructor(private router: Router,
        private salesInvoiceService: SalesInvoiceService,
        private customerService: CustomerService,
        private lineItemService: LineItemService
    ) {}

    getSalesInvoices() {
        this.salesInvoiceService.getSalesInvoices().then(salesInvoices => this.salesInvoices = salesInvoices);
    }

    ngOnInit(): void {
        this.getSalesInvoices();
    }

    onSelect(salesInvoice: SalesInvoice) {
        this.salesInvoiceSelected = salesInvoice;
        this.getCustomerNameAsociated(salesInvoice.customerId);
        this.getLineItemsAsociated(salesInvoice.id);
    }

    getCustomerNameAsociated(customerId: number) : void {
        //var customer: Customer;
        this.customerService.getCustomer(customerId).then(customer => this.customerAsociated = customer);
    }

    getLineItemsAsociated(salesInvoiceId: number) : void {
        this.lineItemService.getLineItemsSalesInvoice(salesInvoiceId).then(lineItems => this.lineItemsAsociated = lineItems);
    }


    gotoDetail(): void {
        this.router.navigate(['sales-invoice/detail/', this.salesInvoiceSelected.id]);
    }
}