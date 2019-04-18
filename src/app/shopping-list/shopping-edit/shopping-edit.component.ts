import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('vetInput') vetInputRef: ElementRef;
  @ViewChild('koolhInput') koolhInputRef: ElementRef;
  @ViewChild('eiwitInput') eiwitInputRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAdd() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingVet = this.vetInputRef.nativeElement.value;
    const ingKoolh = this.koolhInputRef.nativeElement.value;
    const ingEiwit = this.eiwitInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount, ingVet, ingKoolh, ingEiwit);
    this.shoppingService.onIngredientAdded(newIngredient);
  }

}
