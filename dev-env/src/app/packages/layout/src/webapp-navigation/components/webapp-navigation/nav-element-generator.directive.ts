import {
  ChangeDetectorRef, ComponentFactoryResolver, Directive, Injector, Input, Optional, TemplateRef, ViewContainerRef,
  ViewRef
} from '@angular/core';
import { BATLayoutGenerator } from "./layout-generator.interface";
import {BATNavItemDenormalized} from "../../../../../core/src/navigation/model/base-nav-item-denormalized.model";
import {BATDefaultNavItem} from "../../../../../core/src/navigation/model/default-nav-item.model";
import {BATDefaultElementComponent} from "./default-element/default-element.component";
import {BATComponentGenerator} from "./component-generator";

@Directive({
  selector: '[batNavElementGenerator]'
})
export class BATNavElementGeneratorDirective implements BATLayoutGenerator {

  @Input() public mobileTemplate: TemplateRef<any>;
  @Input() public desktopTemplate: TemplateRef<any>;
  @Input() public mediaQuery: 'mobile' | 'desktop' = 'mobile';

  public componentGenerator: BATComponentGenerator;

  @Input() navItem: BATNavItemDenormalized;
  @Input() level: string;
  @Input() navElementClickFn: Function;

  constructor(
    public vc: ViewContainerRef,
    public ref: ChangeDetectorRef,
    public injector: Injector,
    public componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.componentGenerator
      = new BATComponentGenerator(this.injector, this.componentFactoryResolver);
  }

  ngAfterViewInit() {
    console.log(this);
    switch(this.mediaQuery) {
      case 'mobile': {
        this.insertView(this.generateMobileLayout());
        break;
      }

      case 'desktop': {
        this.insertView(this.generateDesktopLayout());
        break;
      }
    }
  }

  insertView(view: ViewRef) {
    this.vc.insert(view);
    this.ref.detectChanges();
  }

  generateMobileLayout(): ViewRef {
    return this.generateMobileNavElementView();
  }

  generateDesktopLayout(): ViewRef {
    return this.generateDesktopNavElementView();
  }

  generateMobileNavElementView(): ViewRef {
    if(!this.mobileTemplate) {
      return this.generateDefaultNavElementView();
    }

    return this.mobileTemplate.createEmbeddedView({
      navItem: this.navItem,
      level: parseInt(this.level)
    });
  }

  generateDesktopNavElementView(): ViewRef {
    if(!this.desktopTemplate) {
      return this.generateDefaultNavElementView();
    }

    return this.desktopTemplate.createEmbeddedView({
      navItem: this.navItem,
      level: parseInt(this.level)
    });
  }

  generateDefaultNavElementView(): ViewRef {
    let componentRef = this.componentGenerator.generateComponent(BATDefaultElementComponent);

    componentRef.instance.hasChildren = !!this.navItem.children && this.navItem.children.length > 0;
    componentRef.instance.route = this.navItem.route;
    componentRef.instance.title = (<BATDefaultNavItem>this.navItem).title;
    componentRef.instance.subtitle = (<BATDefaultNavItem>this.navItem).subtitle;
    componentRef.instance.navigationElementClicked.subscribe(() => {
      this.navElementClickFn();
    });

    return componentRef.hostView;
  }

}
