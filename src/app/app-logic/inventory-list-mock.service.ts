import { Injectable } from '@angular/core';
import { InventoryItem } from './inventory-item';

@Injectable({
  providedIn: 'root'
})
export class InventoryListMockService {

  fruits: Array<InventoryItem> = [
    {
       
      name: 'Kiwi',
      price: '7',
      imagePath: '../../../assets/kiwi.png',
      quantity:1

    },
    {
       
      name: 'Apples',
      price: '5',
      imagePath: '../../../assets/apple.png',
      quantity:1

    },
    {
       
      name: 'Grapes',
      price: '6',
      imagePath: '../../../assets/grapes.png',
      quantity:1

    },
    {
       
      name: 'Lemons',
      price: '4',
      imagePath: '../../../assets/lemons.png',
      quantity:1

    },
    {
       
      name: 'Pears',
      price: '7',
      imagePath: '../../../assets/pears.png',
      quantity:1

    },
    {
       
      name: 'Clementines',
      price: '5',
      imagePath: '../../../assets/oranges.png',
      quantity:1

    },
    {
       
      name: 'Bananas',
      price: '5',
      imagePath: '../../../assets/bananas.png',
      quantity:1

    },
    {
       
      name: 'Apricots',
      price: '7',
      imagePath: '../../../assets/apricots.png',
      quantity:1

    },
    {
       
      name: 'Strawberries',
      price: '8',
      imagePath: '../../../assets/strawberry.png',
      quantity:1

    },
    {
       
      name: 'Plum',
      price: '8',
      imagePath: '../../../assets/plum.png',
      quantity:1

    },
    {
       
      name: 'Grapefruit',
      price: '10',
      imagePath: '../../../assets/grapefruit.png',
      quantity:1

    },
    {
       
      name: 'Pineapple',
      price: '10',
      imagePath: '../../../assets/pineapple.png',
      quantity:1

    },
    {
       
      name: 'Pomegranate',
      price: '10',
      imagePath: '../../../assets/pomegranate.png',
      quantity:1

    },
    {
       
      name: 'Peach',
      price: '10',
      imagePath: '../../../assets/peach.png',
      quantity:1

    },
    {
       
      name: 'Mango',
      price: '10',
      imagePath: '../../../assets/mango.png',
      quantity:1

    },
  ];
  vegetables: Array<InventoryItem> = [
    {
      
      name: 'Tomatoes',
      price: '12',
      imagePath: '../../../assets/tomato.png',
      quantity:1
     
     
    },
    {
       
      name: 'Cucumbers',
      price: '4',
      imagePath: '../../../assets/cucumber.png',
      quantity:1

    },
    {
        
      name: 'Red Pepper',
      price: '9',
      imagePath: '../../../assets/pepper.png',
      quantity:1

    },
    
    {
       
      name: 'Potatoes',
      price: '3',
      imagePath: '../../../assets/potatos.png',
      quantity:1

    },
    {
       
      name: 'Brocolli',
      price: '4',
      imagePath: '../../../assets/brocolli.png',
      quantity:1

    },
    {
       
      name: 'Avocado',
      price: '5',
      imagePath: '../../../assets/avocado.png',
      quantity:1

    },
    {
       
      name: 'Salad',
      price: '4',
      imagePath: '../../../assets/salad.png',
      quantity:1

    },
    {
       
      name: 'Eggplant',
      price: '5',
      imagePath: '../../../assets/eggplant.png',
      quantity:1

    },
    {
       
      name: 'Greenonion',
      price: '5',
      imagePath: '../../../assets/greenonion.png',
      quantity:1

    },
    {
       
      name: 'Garlic',
      price: '5',
      imagePath: '../../../assets/garlic.png',
      quantity:1

    },
    {
       
      name: 'Carrots',
      price: '5',
      imagePath: '../../../assets/carrots.png',
      quantity:1

    },
    {
       
      name: 'Radishes',
      price: '5',
      imagePath: '../../../assets/radishes.png',
      quantity:1

    },
    {
       
      name: 'Sweet potato',
      price: '5',
      imagePath: '../../../assets/sweetpotato.png',
      quantity:1

    },
    {
       
      name: 'Onions',
      price: '5',
      imagePath: '../../../assets/onion.png',
      quantity:1

    },
    {
       
      name: 'Zucchini',
      price: '5',
      imagePath: '../../../assets/zucchini.png',
      quantity:1

    }
    
  ];
  dairy: Array<InventoryItem> = [
    {
      
      name: 'Milk',
      price: '12',
      imagePath: '../../../assets/milk.png',
      quantity:1
     
     
    },
    {
       
      name: 'Cheese',
      price: '4',
      imagePath: '../../../assets/cheese.png',
      quantity:1

    },
    {
        
      name: 'Yogurt',
      price: '2',
      imagePath: '../../../assets/yogurt.png',
      quantity:1

    },
    {
       
      name: 'Whipped Cream',
      price: '5',
      imagePath: '../../../assets/whippedcream.png',
      quantity:1

    },{
       
      name: 'Mozzarella',
      price: '8',
      imagePath: '../../../assets/mozzarella.png',
      quantity:1

    },{
       
      name: 'Cheddar',
      price: '6',
      imagePath: '../../../assets/cheddar.png',
      quantity:1

    },
    {
       
      name: 'Parmesan',
      price: '13',
      imagePath: '../../../assets/parmesan.png',
      quantity:1

    },
    {
       
      name: 'Mascarpone',
      price: '9',
      imagePath: '../../../assets/mascarpone.png',
      quantity:1

    },
    {
       
      name: 'Tofu',
      price: '5',
      imagePath: '../../../assets/tofu.png',
      quantity:1

    },
    {
       
      name: 'Blue Cheese',
      price: '9',
      imagePath: '../../../assets/bluecheese.png',
      quantity:1

    }
    
  ];
  sweets: Array<InventoryItem> = [
    {
      
      name: 'Donut',
      price: '1',
      imagePath: '../../../assets/donut.png',
      quantity:1
     
     
    },
    {
       
      name: 'Ferrero Rocher',
      price: '13',
      imagePath: '../../../assets/ferrero.png',
      quantity:1

    },
    {
        
      name: 'Kinder Bueno',
      price: '2',
      imagePath: '../../../assets/kinderbueno.png',
      quantity:1

    },
    {
       
      name: 'Kinder Joy',
      price: '2',
      imagePath: '../../../assets/kinderjoy.png',
      quantity:1

    },{
       
      name: 'Milka',
      price: '4',
      imagePath: '../../../assets/milka.png',
      quantity:1

    },{
       
      name: 'Milk Burger',
      price: '3',
      imagePath: '../../../assets/milkburger.png',
      quantity:1

    },
    {
       
      name: 'Schogetten',
      price: '4',
      imagePath: '../../../assets/schogetten.png',
      quantity:1

    },
    {
       
      name: 'After Eight',
      price: '8',
      imagePath: '../../../assets/aftereight.png',
      quantity:1

    },
    {
       
      name: 'Mon Cheri',
      price: '11',
      imagePath: '../../../assets/moncheri.png',
      quantity:1

    },
    {
       
      name: 'Kinder Maxi King',
      price: '3',
      imagePath: '../../../assets/kindermaxiking.png',
      quantity:1

    }
    
  ];
  grocery: Array<InventoryItem> = [
    {
      
      name: 'Sunflower Oil',
      price: '1',
      imagePath: '../../../assets/oil.png',
      quantity:1
     
     
    },
    {
       
      name: 'Flour',
      price: '13',
      imagePath: '../../../assets/faina.png',
      quantity:1

    },
    {
        
      name: 'Korn',
      price: '2',
      imagePath: '../../../assets/malai.png',
      quantity:1

    },
    {
       
      name: 'Sugar',
      price: '2',
      imagePath: '../../../assets/zahar.png',
      quantity:1

    },{
       
      name: 'Eggs',
      price: '4',
      imagePath: '../../../assets/eggs.png',
      quantity:1

    },{
       
      name: 'Bread',
      price: '3',
      imagePath: '../../../assets/paine.png',
      quantity:1

    },
    {
       
      name: 'Rice',
      price: '4',
      imagePath: '../../../assets/orez.png',
      quantity:1

    },
    {
       
      name: 'Rigatoni',
      price: '8',
      imagePath: '../../../assets/rigatoni.png',
      quantity:1

    },
    {
       
      name: 'Spaghetti',
      price: '11',
      imagePath: '../../../assets/spaghetti.png',
      quantity:1

    },
    {
       
      name: 'Olive',
      price: '3',
      imagePath: '../../../assets/masline.png',
      quantity:1

    }
    
  ];
  constructor() { }

  getFruits(): Array<InventoryItem> {
    return this.fruits;
  }
  getVegetables(): Array<InventoryItem> {
    return this.vegetables;
  }
  getDairy(): Array<InventoryItem> {
    return this.dairy;
  }
  getSweets(): Array<InventoryItem> {
    return this.sweets;
  }
  getGrocery(): Array<InventoryItem> {
    return this.grocery;
  }
    
}
