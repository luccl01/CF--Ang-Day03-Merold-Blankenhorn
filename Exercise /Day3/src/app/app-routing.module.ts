import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdcutDetailsComponent } from './prodcut-details/prodcut-details.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {
    path : "", component : HomeComponent
  },{
   path : 'products/:productId' , component : ProdcutDetailsComponent
  },
  {
    path : 'cart' , component : CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
