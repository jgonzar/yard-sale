import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [
    {
    id:'1',
    name:'Dark Souls 1',
    price:19.99,
    img:'./assets/ds1.jpg'
    },
    {
      id:'2',
      name:'Dark Souls 2',
      price:19.99,
      img:'./assets/ds2.jpg'
    },
    {
      id:'3',
      name:'Dark Souls 3',
      price:19.99,
      img:'./assets/ds3.jpg'
    },
    {
      id:'4',
      name:'Sekiro',
      price:19.99,
      img:'./assets/sekiro.jpg'
    },
    {
      id:'5',
      name:'Bloodborne',
      price:19.99,
      img:'./assets/bloodborne.jpg'
    },
    {
      id:'6',
      name:'Elden Ring',
      price:19.99,
      img:'./assets/eldenring.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
