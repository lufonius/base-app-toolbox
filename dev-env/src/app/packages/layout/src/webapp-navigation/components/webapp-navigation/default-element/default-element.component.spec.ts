import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BATDefaultElementComponent } from './default-element.component';

describe('BATDefaultElementComponent', () => {
  let component: BATDefaultElementComponent;
  let fixture: ComponentFixture<BATDefaultElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BATDefaultElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BATDefaultElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
