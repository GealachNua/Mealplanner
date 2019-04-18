import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
    selRecipe: Recipe;

    constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
      this.selRecipe = recipe;
  }
}
