import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { animations } from "./default-heading-animations";
import {ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'bat-webapp-nav-default-heading',
  templateUrl: './default-heading.component.html',
  styleUrls: ['./default-heading.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: animations
})
export class BATDefaultHeadingComponent implements OnInit {

  @Input() isBackButtonVisible: boolean = true;
  @Input() headerTitle: string = "";
  @Output() backClicked = new EventEmitter();
  @Output() closeClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  backClick() {
    this.backClicked.emit();
  }

  closeClick() {
    this.closeClicked.emit();
  }

}
