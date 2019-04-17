import { Directive, HostListener, HostBinding, ElementRef, OnInit } from "@angular/core";



@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {

// Third solution

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }


    
    //  2) Second dynamic version. Works, but the third solution is 'cleaner'.

    //  @HostBinding('class') className: string = '';

    //  @HostListener('click') mouseclick(eventData: Event){
    //      this.className === 'open' ? this.className = '' : this.className = 'open';
    //  }

    // 1) First static solution; not what we want.

    // constructor(private elementRef: ElementRef) {
    //  }

    ngOnInit(){
        // this.elementRef.nativeElement.className = 'open';
    }

}