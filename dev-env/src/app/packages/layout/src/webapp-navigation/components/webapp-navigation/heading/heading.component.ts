import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'bat-webapp-nav-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class BATWebappNavigationHeadingComponent {
  @ContentChild('mobileHeaderTemplate') mobileHeaderTemplate: TemplateRef<any>;
  @ContentChild('desktopHeaderTemplate') desktopHeaderTemplate: TemplateRef<any>;

  @Input() headerTitle: string = "";
}
