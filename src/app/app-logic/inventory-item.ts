export class InventoryItem {
      name: string='';
      price: string='';
      imagePath: string='';
      quantity: number = 1;
      constructor(init?: Partial<InventoryItem>) {
            Object.assign(this, init);
      }
}
