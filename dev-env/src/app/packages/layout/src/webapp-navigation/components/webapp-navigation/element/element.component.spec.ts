import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BATElementComponent } from './element.component';

describe('BATElementComponent', () => {
  let component: BATElementComponent;
  let fixture: ComponentFixture<BATElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BATElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BATElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
