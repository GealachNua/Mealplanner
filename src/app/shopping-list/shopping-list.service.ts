
import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingService {

  ingredientsChanged = new Subject<Ingredient[]>();

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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // For loop is een werkende oplossing, maar dit emits veel events.
    // for (let ingredient of ingredients) {
    //   this.onIngredientAdded(ingredient);
    // }

    // ES6 spread operator, maakt van een arry van elementen een lijst van elementen.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
