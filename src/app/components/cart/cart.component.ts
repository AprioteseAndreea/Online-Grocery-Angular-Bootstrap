import { Component, OnInit } from '@angular/core';
import { ChildToParentService } from 'src/app/app-logic/child-to-parent.service';
import { InventoryItem } from 'src/app/app-logic/inventory-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: InventoryItem[] = [];
  totalCost: number = 0;
  constructor(private service: ChildToParentService) {
 
    }
  
  ngOnInit(): void {
    this.items = this.service.getItems();
    for (let i of this.items) {
      this.totalCost = this.totalCost + (parseInt(i.price) * i.quantity);
    }

  }
  incrementTotal(newItem: number) {

    this.totalCost += newItem;
  }
  decrementTotal(newItem: number) {
  
    this.totalCost -= newItem;
  }
  resetCart() {
    this.items = [];
    this.totalCost = 0;
    this.service.resetCounter();
}
}
