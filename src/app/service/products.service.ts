import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/products';
import { map } from 'rxjs/operators';



@Injectable({providedIn: "root"})
export class ProductService{
    allProducts: Product[] = [];
    isFetching: boolean = false;

    constructor(private http:HttpClient){}

    // create product in database
    // createProduct(products: {pName:string, desc:string, price:string}){
    //     console.log(products);
    // const headers = new HttpHeaders({'myHeader': 'procadamey'});
    // this.http.post<{name: string}>('https://tayeeangularproject-default-rtdb.firebaseio.com/products.json',
    //  products, {headers: headers})
    // .subscribe((res) => {
    //   console.log(res)
    // })

    // }

    // fetch product in database

    // fetchProduct(){
    //     this.isFetching = true;
    // this.http.get<{[key: string]: Product}>('https://tayeeangularproject-default-rtdb.firebaseio.com/products.json')
    // .pipe(map((res) =>{
    //   const products = [];
    //   for(const key in res){
    //     if(res.hasOwnProperty(key)){
    //       products.push({...res[key], id: key})
    //     }
    //   }
    //   return products;
    // }))
    // .subscribe((products) => {
    //   console.log(products);
    //   this.allProducts = products;
    //   this.isFetching = false;
    // })

    // }

    // delete product in database

    // deleteProduct(id: string){
    //     this.http.delete('https://tayeeangularproject-default-rtdb.firebaseio.com/products/'+id+'.json')
    //     .subscribe();
    // }

    // deleteall product in database

    // deleteAllProduct(){
    //     this.http.delete('https://tayeeangularproject-default-rtdb.firebaseio.com/products.json')
    //     .subscribe();        
    // }
}