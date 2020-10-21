import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { ShoppingCartService } from '../shopping-cart.service';



@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.css']
})
export class ProdcutDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute,  private cartService: ShoppingCartService) {}
  
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
     });
  }
}
