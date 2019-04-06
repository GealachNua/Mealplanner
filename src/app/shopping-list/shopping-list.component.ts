import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Banaan', ' 1/2st', 0, 9, 0),
        new Ingredient('Meusli naturel', '40g', 2, 25, 2)
    ];

  constructor() { }

  ngOnInit() {
  }

}
