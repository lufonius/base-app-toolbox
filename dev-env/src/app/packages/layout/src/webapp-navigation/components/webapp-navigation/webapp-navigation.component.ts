import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from "@angular/compiler/src/core";

@Component({
  selector: 'bat-webapp-nav',
  templateUrl: './webapp-navigation.component.html',
  styleUrls: ['./webapp-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BATWebappNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
