import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { InventoryItem } from 'src/app/app-logic/inventory-item';
import { InventoryListMockService } from 'src/app/app-logic/inventory-list-mock.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @ViewChild('htmlContainer')
  htmlContainer!: ElementRef;
  arr = Array(50).fill(5);
  length: number = 20;
  
  fruits: InventoryItem[];
  vegetables: InventoryItem[];
  dairy:InventoryItem[];
  sweets: InventoryItem[];
  grocery: InventoryItem[];

  cart: number = 0;

  constructor(private inventoryListMockService: InventoryListMockService) {
    this.fruits = [];
    this.vegetables = [];
    this.dairy = [];
    this.sweets = [];
    this.grocery = [];
   
   }

  ngOnInit(): void {
    this.fruits = this.inventoryListMockService.getFruits();
    this.vegetables = this.inventoryListMockService.getVegetables();
    this.dairy = this.inventoryListMockService.getDairy();
    this.sweets = this.inventoryListMockService.getSweets();
    this.grocery = this.inventoryListMockService.getGrocery();
  }
  addItem() {
    this.cart++;
  }

}
