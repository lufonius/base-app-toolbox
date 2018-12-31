import { TemplateRef, ViewRef } from "@angular/core";

export interface BATLayoutGenerator {
  mobileTemplate: TemplateRef<any>;
  desktopTemplate: TemplateRef<any>;

  generateMobileLayout(): ViewRef;
  generateDesktopLayout(): ViewRef;
}
