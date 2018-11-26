import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bat-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.scss']
})
export class BATCloseComponent {

  public visibilityState: 'visible' | 'invisible' = 'invisible';

  @Input() set visible(visible: boolean) {
    console.log(visible);
    if(visible) {
      this.visibilityState = 'visible';
    } else {
      this.visibilityState = 'invisible';
    }
  }

  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();

  closeClick() {
    this.closeClicked.emit();
  }
}
