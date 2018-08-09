import { Directive, ElementRef, TemplateRef, Input, ViewContainerRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
    constructor(private templateRef: TemplateRef <any>,
                private viewContainer: ViewContainerRef) {
  }
  @Input() set appTest(condition: boolean){
      if(condition){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }else{
        this.viewContainer.clear();
      }
  }

}
