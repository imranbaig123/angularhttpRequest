import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImportProvidersSource } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './model/products';
import { ProductService } from './service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularHttpRequest';
  allProducts: Product[] = [];
  isFetching: boolean = false;

  constructor(private http: HttpClient,private productService:ProductService){

  }

  ngOnInit(){
    this.fetchProducts();
  }
  onProductFetch(){
    this.fetchProducts();
  }

  onProductCreate(products: {pName:string, desc:string, price:string}){
    console.log(products);
    const headers = new HttpHeaders({'myHeader': 'procadamey'});
    this.http.post<{name: string}>('https://tayeeangularproject-default-rtdb.firebaseio.com/products.json',
     products, {headers: headers})
    .subscribe((res) => {
      console.log(res)
    })
    
  }

  private fetchProducts(){
    const header =  new HttpHeaders().set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    this.isFetching = true;
    this.http.get<{[key: string]: Product}>('https://tayeeangularproject-default-rtdb.firebaseio.com/products.json?print=pretty', 
    {'headers': header})
    .pipe(map((res) =>{
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id: key})
        }
      }
      return products;
    }))
    .subscribe((products) => {
      console.log(products);
      this.allProducts = products;
      this.isFetching = false;
    })
  }

  onDeleteProduct(id: string){
    let header = new HttpHeaders();
    header = header.append('myHeader1', 'value1');
    header = header.append('myHeader2', 'value2');
    this.http.delete('https://tayeeangularproject-default-rtdb.firebaseio.com/products/'+id+'.json' , {headers:header})
    .subscribe();
  }

  onDeleteAllProduct(){
    this.http.delete('https://tayeeangularproject-default-rtdb.firebaseio.com/products.json')
    .subscribe();
  }
}
