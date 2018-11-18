import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bat-default-element',
  templateUrl: './default-element.component.html',
  styleUrls: ['./default-element.component.css']
})
export class BATDefaultElementComponent implements OnInit {

  @Input() title: string = "title";
  @Input() subtitle: string = "subtitle";
  @Input() isActive: boolean = false;
  @Input() hasChildren: boolean = false;
  @Input() route: string = null;

  @Output() navigationElementClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
