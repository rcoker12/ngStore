import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NullRoot } from "./shared/null.component";
import { Login } from './login/login.component';

import { ProductList } from "./product/productList.component";
import { CartList } from "./cart/cartList.component";
import { CheckoutList } from "./checkout/checkoutList.component";
import { SupplierList } from "./supplier/supplierList.component";
import { CustomerList } from "./customer/customerList.component";

import { ProductService } from "./services/productService";
import { OrderService } from "./services/orderService";
import { LoginService } from "./services/loginService";
import { CartService } from "./services/cartService";
import { SupplierService } from "./services/supplierService";
import { CustomerService } from "./services/customerService";

import { YesNoBooleanPipe } from './shared/yesno.pipe';

let routes = [
    { path: "Product", component: ProductList },
    { path: "Cart", component: CartList },
    { path: "Checkout", component: CheckoutList },
    { path: "Login", component: Login },
    { path: "Account/Login", component: NullRoot },
    { path: "Account/Register", component: NullRoot },
    { path: "Account/ResetPassword", component: NullRoot },
    { path: "Supplier", component: SupplierList },
    { path: "Customer", component: CustomerList },
    { path: "Cms", component: NullRoot }
];

@NgModule({
    declarations: [
        AppComponent,
        NullRoot,
        ProductList,
        CartList,
        CheckoutList,
        SupplierList,
        CustomerList,
        YesNoBooleanPipe,
        Login
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    exports: [
        RouterModule,
        YesNoBooleanPipe
    ],  
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        ProductService,
        OrderService,
        LoginService,
        CartService,
        SupplierService,
        CustomerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
