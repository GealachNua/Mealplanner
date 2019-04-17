import { Directive, HostListener, HostBinding, ElementRef, OnInit } from "@angular/core";



@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
     }

     @HostBinding('class') className: string = '';

     @HostListener('click') mouseclick(eventData: Event){
         this.className === 'open' ? this.className = '' : this.className = 'open';
     }

    ngOnInit(){
        // this.elementRef.nativeElement.className = 'open';
    }

}