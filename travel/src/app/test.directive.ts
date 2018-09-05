import { Directive, ElementRef, TemplateRef, Input, ViewContainerRef,HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor() {}
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
  private isOpen = false;
}
