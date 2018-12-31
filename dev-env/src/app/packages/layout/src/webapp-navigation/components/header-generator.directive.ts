import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Injector,
  Input,
  TemplateRef,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import { BATLayoutGenerator } from "./layout-generator.interface";
import {
  BATDefaultNavItem,
  BATNavItem,
  BATDefaultNavigationViewModel, BATMediaQueryService
} from "@base-app-toolbox/core";
import { BATComponentGenerator } from "./component-generator";
import { BATWebappNavigationDefaultHeadingComponent } from "./default-heading/default-heading.component";
import {last} from "rxjs/operators";

@Directive({
  selector: '[batHeaderGenerator]'
})
export class BATWebappNavigationHeaderGeneratorDirective implements BATLayoutGenerator {

  @Input() mobileTemplate: TemplateRef<any>;
  @Input() desktopTemplate: TemplateRef<any>;

  @Input() public mediaQuery: 'mobile' | 'desktop' = 'mobile';

  public componentGenerator: BATComponentGenerator;

  @Input() headerTitle: string;
  @Input() level: string;
  @Input() navItems: BATNavItem[];
  @Input() parentNavItem: BATNavItem;
  @Input() viewModel: BATDefaultNavigationViewModel;
  @Input() backClickFn: Function;
  @Input() closeClickFn: Function;

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

  generateDefaultHeadingComponent(isBackButtonVisible: boolean): ComponentRef<BATWebappNavigationDefaultHeadingComponent> {
    let componentRef = this.componentGenerator.generateComponent(BATWebappNavigationDefaultHeadingComponent);

    componentRef.instance.headerTitle = this.headerTitle;
    componentRef.instance.isBackButtonVisible = isBackButtonVisible;
    componentRef.instance.backClicked.subscribe(() => { if(!!this.backClickFn) this.backClickFn(); });
    componentRef.instance.closeClicked.subscribe(() => { if(!!this.closeClickFn) this.closeClickFn(); });

    return componentRef;
  }
}
