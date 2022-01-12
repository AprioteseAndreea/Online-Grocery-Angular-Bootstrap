import { Component, Input, OnInit } from '@angular/core';
import { ChildToParentService } from 'src/app/app-logic/child-to-parent.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit {
  @Input() name: any;
  @Input() price: any;
  @Input() imagePath: any;
  @Input() total: any;
  @Input() quantity: number = 0;
  @Output() incrementEvent = new EventEmitter<number>();
  @Output() decrementEvent = new EventEmitter<number>();

  constructor(private service:ChildToParentService) { }

  ngOnInit(): void {
    this.total = this.price * this.quantity;
  }
  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
      this.total = this.quantity * this.price;
      this.decrementEvent.emit(parseInt(this.price));
    }
    this.service.setQuantity(this.name, this.quantity);
     
  }
  increment() {
    this.quantity++;
    this.total = this.quantity * this.price;
    this.incrementEvent.emit(parseInt(this.price));
    this.service.setQuantity(this.name, this.quantity);

  }
 
}
