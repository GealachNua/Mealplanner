import { Directive, HostListener, HostBinding, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit(){
        this.elementRef.nativeElement.className = 'open';
    }

}