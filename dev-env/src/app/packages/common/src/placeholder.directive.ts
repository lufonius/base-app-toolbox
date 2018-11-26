import {ChangeDetectorRef, Directive, Input, ViewContainerRef, ViewRef} from '@angular/core';

@Directive({
  selector: '[batPlaceholder]'
})
export class BATPlaceholderDirective {
  @Input() view: ViewRef;

  constructor(
    public vc: ViewContainerRef,
    public ref: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.vc.insert(this.view);
    this.ref.detectChanges();
  }

}
