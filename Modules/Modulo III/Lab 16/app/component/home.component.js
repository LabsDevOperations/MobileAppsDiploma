"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var sales_invoice_service_1 = require('../service/sales-invoice.service');
var customer_service_1 = require('../service/customer.service');
var line_item_service_1 = require('../service/line-item.service');
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router, salesInvoiceService, customerService, lineItemService) {
        this.router = router;
        this.salesInvoiceService = salesInvoiceService;
        this.customerService = customerService;
        this.lineItemService = lineItemService;
        this.title = "Home List Sales Invoices";
    }
    HomeComponent.prototype.getSalesInvoices = function () {
        var _this = this;
        this.salesInvoiceService.getSalesInvoices().then(function (salesInvoices) { return _this.salesInvoices = salesInvoices; });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getSalesInvoices();
    };
    HomeComponent.prototype.onSelect = function (salesInvoice) {
        this.salesInvoiceSelected = salesInvoice;
        this.getCustomerNameAsociated(salesInvoice.customerId);
        this.getLineItemsAsociated(salesInvoice.id);
    };
    HomeComponent.prototype.getCustomerNameAsociated = function (customerId) {
        var _this = this;
        //var customer: Customer;
        this.customerService.getCustomer(customerId).then(function (customer) { return _this.customerAsociated = customer; });
    };
    HomeComponent.prototype.getLineItemsAsociated = function (salesInvoiceId) {
        var _this = this;
        this.lineItemService.getLineItemsSalesInvoice(salesInvoiceId).then(function (lineItems) { return _this.lineItemsAsociated = lineItems; });
    };
    HomeComponent.prototype.gotoDetail = function () {
        this.router.navigate(['sales-invoice/detail/', this.salesInvoiceSelected.id]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'sales-invoice-list-app',
            templateUrl: 'app/templates/home.html',
            providers: [sales_invoice_service_1.SalesInvoiceService, customer_service_1.CustomerService, line_item_service_1.LineItemService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, sales_invoice_service_1.SalesInvoiceService, customer_service_1.CustomerService, line_item_service_1.LineItemService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map