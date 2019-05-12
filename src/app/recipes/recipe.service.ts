import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pannekoeken (2750)',
      'Pannekoeken met meusli, banaan en ei',
      'https://wereparents.com/wp-content/uploads/2012/09/IMG_2775.jpg', [
        new Ingredient('Banaan', '1st', 0, 18, 0 ),
        new Ingredient('Meusli naturel', '60g', 3, 39, 3),
        new Ingredient('Ei', '2st', 10, 0, 12)
      ]),
    new Recipe(
      'Havermout pap (2750)',
      'Havermout met melk. Daarnaast youghurt',
      'https://blog.xxlnutrition.com/wp-content/uploads/2019/02/Havermout-Header-1024x536.jpg',
      [
        new Ingredient('Havermout', '75g', 4, 50, 4),
        new Ingredient('Melk', '300ml', 5, 10, 10),
        new Ingredient('Yoghurt mager', '400g', 0, 13, 14),
        new Ingredient('Appel', '1st', 0, 16, 0)
      ])
  ];

  constructor(private shoppingService: ShoppingService) {

  }

  getRecipes() {
    // splice method to provide a copy of the recipe.
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
