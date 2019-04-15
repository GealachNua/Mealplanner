import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] =[
        new Recipe('A Test Recipe', 'This is simpley a test', 'https://wereparents.com/wp-content/uploads/2012/09/IMG_2775.jpg'),
        new Recipe('Havermout pap', 'Havermout met melk. Daarnaast youghurt', 'https://blog.xxlnutrition.com/wp-content/uploads/2019/02/Havermout-Header-1024x536.jpg')
    ];
    
  constructor() { }

  ngOnInit() {
  }

}
