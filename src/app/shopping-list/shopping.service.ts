
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Banaan', ' 1/2st', 0, 9, 0),
    new Ingredient('Meusli naturel', '40g', 2, 25, 2)
  ];

  getIngredients() {
    // initial ingredients array provided.
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // provides an update of the ingredients array.
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
