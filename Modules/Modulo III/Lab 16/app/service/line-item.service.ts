import { Injectable } from "@angular/core";
import { LINEITEMS } from "../mock/line-item-mock";
import { LineItem } from "../model/line-item";

@Injectable()
export class LineItemService{
    getLineItems() : Promise<LineItem[]>{
        return Promise.resolve(LINEITEMS);
    }

    getLineItemsSalesInvoice(salesInvoiceId: number): Promise<LineItem[]> {
    	return this.getLineItems()
    		.then(lineItems => { 
    			return lineItems.filter(lineItem => {
    				if (lineItem.salesInvoiceId === salesInvoiceId)
    				{
    					return true;
    				}
    			});
    		});
    }
}