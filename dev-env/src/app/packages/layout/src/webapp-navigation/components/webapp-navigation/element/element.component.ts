import {Component, ContentChild, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'bat-webapp-nav-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class BATWebappNavigationElementComponent {

  @ContentChild('navElementTemplate') navElementTemplate: TemplateRef<any>;

}
