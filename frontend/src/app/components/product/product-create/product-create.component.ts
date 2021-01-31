import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  /**
    Injetando o ProductService no componente de criação de produtos
   */
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void 
  {
    console.log(this.product);
    
    this.productService.create(this.product)
      .subscribe(() => {
        this.productService.showMessage('Produto criado com sucesso...');
      }); 
    this.router.navigate(['/products']);
  }

  cancelProduct(): void {
    this.router.navigate(['/products']);
  }  

}
