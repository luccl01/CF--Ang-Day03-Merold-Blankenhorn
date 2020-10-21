import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = products;
  
  // animals = [{
	// 	animal:"Fish",
	// 	type:"Clown",
	// 	image:"/assets/clown.jpg",
	// 	color:"red",
	// 	price:5000
	// },{
	// 	animal:"Fish",
	// 	type:"Gold",
	// 	image:"/assets/gold.jpg",
	// 	color:"blue",
	// 	price:3000
	// },{
	// 	animal:"Fish",
	// 	type:"Shark",
	// 	image:"/assets/shark.jpg",
	// 	color:"silver",
	// 	price:12000
	// },{
	// 	animal:"Fish",
	// 	type:"Cow",
	// 	image:"/assets/cowfish.jpg",
	// 	color:"silver",
	// 	price:29000
	// }]
  constructor() { }

  ngOnInit(): void {
  }

}
