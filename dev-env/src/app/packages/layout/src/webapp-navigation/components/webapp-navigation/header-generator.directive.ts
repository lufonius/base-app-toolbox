import {
  ChangeDetectorRef,
  ComponentFactoryResolver, ComponentRef, Directive, Injector, Input, Optional, TemplateRef, ViewContainerRef,
  ViewRef
} from '@angular/core';
import { BATLayoutGenerator } from "./layout-generator.interface";
import {BATNavItemDenormalized} from "../../../../../core/src/navigation/model/base-nav-item-denormalized.model";
import {BATDefaultNavItem} from "../../../../../core/src/navigation/model/default-nav-item.model";
import {BATDefaultElementComponent} from "./default-element/default-element.component";
import {BATComponentGenerator} from "./component-generator";
import {BATDefaultHeadingComponent} from "./default-heading/default-heading.component";
import {BATDefaultNavigationViewModel} from "./webapp-navigation.component";

@Directive({
  selector: '[batHeaderGenerator]'
})
export class BATHeaderGeneratorDirective implements BATLayoutGenerator {

  @Input() mobileTemplate: TemplateRef<any>;
  @Input() desktopTemplate: TemplateRef<any>;
  @Input() public mediaQuery: 'mobile' | 'desktop' = 'mobile';

  public componentGenerator: BATComponentGenerator;

  @Input() headerTitle: string;
  @Input() level: string;
  @Input() navItems: BATNavItemDenormalized[];
  @Input() parentNavItem: BATNavItemDenormalized;
  @Input() viewModel: BATWebappNavigationViewModel;
  @Input() backClickFn: Function;
  @Input() closeClickFn: Function;

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
    return this.generateMobileHeadingView();
  }

  generateDesktopLayout(): ViewRef {
    return this.generateDesktopHeadingView();
  }

  generateDesktopHeadingView(): ViewRef {
    if(!this.desktopTemplate) {
      let componentRef = this.generateDefaultHeadingComponent(false);

      return componentRef.hostView;
    }

    return this.desktopTemplate.createEmbeddedView({
      level: this.level,
      parentNavItem: this.parentNavItem
    });
  }

  generateMobileHeadingView(): ViewRef {

    if(!this.mobileTemplate) {
      let componentRef = this.generateDefaultHeadingComponent(false);

      if(this.level !== '1') {
        componentRef.instance.headerTitle = (<BATDefaultNavItem>this.parentNavItem).title;
        componentRef.instance.isBackButtonVisible = true;
      }

      return componentRef.hostView;
    }


    return this.mobileTemplate.createEmbeddedView({
      level: parseInt(this.level),
      navItems: this.navItems,
      parentNavItem: this.parentNavItem,
      viewModel: this.viewModel
    });
  }



  generateDefaultHeadingComponent(isBackButtonVisible: boolean): ComponentRef<BATDefaultHeadingComponent> {
    let componentRef = this.componentGenerator.generateComponent(BATDefaultHeadingComponent);

    componentRef.instance.headerTitle = this.headerTitle;
    componentRef.instance.isBackButtonVisible = isBackButtonVisible;
    componentRef.instance.backClicked.subscribe(() => { this.backClickFn(); });
    componentRef.instance.closeClicked.subscribe(() => { this.closeClickFn(); });

    return componentRef;
  }
}
