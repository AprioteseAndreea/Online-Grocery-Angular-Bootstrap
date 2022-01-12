import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { InventoryItem } from './inventory-item';

@Injectable()
export class ChildToParentService {
  private data = new BehaviorSubject(0);
  data$ = this.data.asObservable();

  items: InventoryItem[] = [];
  totalCost!: number;
  
  changeData(data: number, name: string, price: string, imagePath:string, quantity:number) {
  
    const item: InventoryItem = {
      name: name,
      price: price,
      imagePath: imagePath,
      quantity:quantity
    }
    var exist = false;
    for (var i = 0; i < this.items.length;i++) {
      if (this.items[i].name === item.name) {
        exist = true;
        this.items[i].quantity++;
        break;
      }
    }
    if (!exist) {
      this.items.push(item);
      this.data.next(data)

    }
  }
  resetCounter() {
  
    this.data.next(0)
    this.items = [];
    }
  
  getItems(): InventoryItem[]{
    return this.items;
  }
  setQuantity(name: string, quantity: number) {
    for (var i = 0; i < this.items.length;i++) {
      if (this.items[i].name === name) {
        this.items[i].quantity=quantity;
        break;
      }
    }
 }
  constructor() {
  }
}

