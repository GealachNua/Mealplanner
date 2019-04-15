import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mealplanner';
    menuRecipe: boolean;
    menuList: boolean;


    onMenuSelect(recipeBool: {recipe: boolean, list: boolean}) {
        this.menuRecipe = recipeBool.recipe;
        this.menuList = recipeBool.list;
    }
}

