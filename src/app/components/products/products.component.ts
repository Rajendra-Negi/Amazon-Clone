import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  public slides = [
    { src: './../../../assets/carousel1.jpg' },
    { src: './../../../assets/carousel2.png' },
    { src: './../../../assets/carousel3.jpg' },
  ];

  constructor() {}
}
