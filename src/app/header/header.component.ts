import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() menuBool = new EventEmitter<{recipe: boolean, list: boolean}>();

  constructor() { }

  ngOnInit() {
  }
 onRecipeSelected() {
     this.menuBool.emit({
         recipe: true,
         list: false,
     });
 }

onListSelected() {
    this.menuBool.emit({
        recipe: false,
        list: true,
    });
} 

}
