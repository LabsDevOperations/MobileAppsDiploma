import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "../component/home.component";
//import { SalesInvoiceListComponent } from "../component/sales-invoice-list.component";

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent }
	//,{ path: 'sales-invoice/detail/:id', component: SalesInvoiceListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}