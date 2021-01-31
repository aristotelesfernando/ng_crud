import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' //quando dizemos que o serviço vai estar disponivel ao nível de root, significa que ele é um singleton
})
export class ProductService {

  baseUrl = "http://localhost:5020/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void 
  {
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(product: Product): Observable<Product> 
  {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl);
  }

}
