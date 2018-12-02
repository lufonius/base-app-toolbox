import {Input, TemplateRef, ViewRef} from "@angular/core";
import { BATComponentGenerator } from "./component-generator";

export interface BATLayoutGenerator {
  mobileTemplate: TemplateRef<any>;
  desktopTemplate: TemplateRef<any>;

  mediaQuery: 'mobile' | 'desktop';

  generateMobileLayout(): ViewRef;
  generateDesktopLayout(): ViewRef;
}
