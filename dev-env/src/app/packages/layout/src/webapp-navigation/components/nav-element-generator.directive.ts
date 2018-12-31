import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  Injector,
  Input,
  TemplateRef,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import {
  BATNavItem,
  BATDefaultNavItem, BATMediaQueryService
} from "@base-app-toolbox/core";

import { BATWebappNavigationDefaultElementComponent } from "./default-element/default-element.component";
import { BATComponentGenerator } from "./component-generator";
import { BATLayoutGenerator } from "./layout-generator.interface";

@Directive({
  selector: '[batNavElementGenerator]'
})
export class BATWebappNavigationNavElementGeneratorDirective implements BATLayoutGenerator {

  @Input() public mobileTemplate: TemplateRef<any>;
  @Input() public desktopTemplate: TemplateRef<any>;

  @Input() public mediaQuery: 'mobile' | 'desktop' = 'mobile';

  public componentGenerator: BATComponentGenerator;

  @Input() navItem: BATNavItem;
  @Input() level: string;
  @Input() navElementClickFn: Function;

  /** @internal */
  private warnWrongDatatype = `There was no title property found in the navItem.
      Make sure when you use the default nav element that you use the BATDefaultNavItem`;

  constructor(
    public vc: ViewContainerRef,
    public ref: ChangeDetectorRef,
    public injector: Injector,
    public componentFactoryResolver: ComponentFactoryResolver,
    public mediaQueryService: BATMediaQueryService
  ) {
    this.componentGenerator
      = new BATComponentGenerator(this.injector, this.componentFactoryResolver);
  }

  ngAfterViewInit() {
    this.mediaQueryService.mediaQuery$.subscribe((mediaQuery) => {
      this.vc.clear();
      this.generateLayout(mediaQuery);
    });
  }

  generateLayout(mediaQuery) {
    switch(mediaQuery) {
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
    let componentRef = this.componentGenerator.generateComponent(BATWebappNavigationDefaultElementComponent);

    componentRef.instance.hasChildren = this.navItem.childrenIds.length > 0;
    componentRef.instance.route = this.navItem.route;
    componentRef.instance.navigationElementClicked.subscribe(() => {
      this.navElementClickFn();
    });

    if(!!(<any>this.navItem).title) {
      componentRef.instance.title = (<BATDefaultNavItem>this.navItem).title;
    } else {
      console.warn(this.warnWrongDatatype);
    }

    if(!!(<any>this.navItem).subtitle) {
      componentRef.instance.subtitle = (<BATDefaultNavItem>this.navItem).subtitle;
    } else {
      console.warn(this.warnWrongDatatype);
    }

    return componentRef.hostView;
  }

}
