import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationComponent } from './authentication/authentication.component';
import { ComponentsModule } from '../components/components.module';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/produt-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    AdminComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [CommonModule, ComponentsModule],
})
export class PagesModule {}
