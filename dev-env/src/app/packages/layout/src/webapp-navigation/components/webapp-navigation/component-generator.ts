import {ComponentFactoryResolver, ComponentRef, Injector, Type} from "@angular/core";

export class BATComponentGenerator {

  constructor(
    public injector: Injector,
    public componentFactoryResolver: ComponentFactoryResolver
  ) {}

  generateComponent<T>(type: Type<T>): ComponentRef<T> {
    let factory = this.componentFactoryResolver.resolveComponentFactory(type);
    let componentRef = factory.create(this.injector);

    return componentRef;
  }
}
