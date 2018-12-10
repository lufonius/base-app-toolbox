import { TemplateRef, ViewRef } from "@angular/core";

export interface BATLayoutGenerator {
  mobileTemplate: TemplateRef<any>;
  desktopTemplate: TemplateRef<any>;

  mediaQuery: 'mobile' | 'desktop';

  generateMobileLayout(): ViewRef;
  generateDesktopLayout(): ViewRef;
}
