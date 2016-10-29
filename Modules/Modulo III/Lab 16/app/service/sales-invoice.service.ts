import { Injectable } from "@angular/core";
import { SALESINVOICES } from "../mock/sales-invoice-mock";
import { SalesInvoice } from "../model/sales-invoice";

@Injectable()
export class SalesInvoiceService{
    getSalesInvoices() : Promise<SalesInvoice[]>{
        return Promise.resolve(SALESINVOICES);
    }

    getSalesInvoice(id: number): Promise<SalesInvoice> {
    	return this.getSalesInvoices()
    		.then(salesInvoices => salesInvoices.find(salesInvoice => salesInvoice.id === id));
    }
}