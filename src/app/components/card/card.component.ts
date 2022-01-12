import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ChildToParentService } from 'src/app/app-logic/child-to-parent.service';
import { InventoryItem } from 'src/app/app-logic/inventory-item';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: any;
  @Input() price: any;
  @Input() imagePath: any;
  data: number=0;
 
  constructor(private childToParentService: ChildToParentService) { }

  ngOnInit(): void {
    this,this.childToParentService.data$.subscribe(res =>this.data=res)
  }
  newData(name: string, price: string, imagePath:string, quantity:number) {
    this.data++;
    this.childToParentService.changeData(this.data, name, price, imagePath, quantity);
  }

}
