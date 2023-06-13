import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Product} from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
   
  items:Product[]=[];

  addToCart(product:Product){
    this.items.push(product);
  }
   
  getItems(){
    return this.items;
  }  
   
  getItemsById(id:number){
    return this.items.find(item=>item.id===id); 
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
}