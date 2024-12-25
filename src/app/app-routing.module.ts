import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/produt-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AdminComponent } from './pages/admin/admin.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProductListComponent },
  { path: 'produtos/:id', component: ProductDetailsComponent },
  { path: 'carrinho', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
