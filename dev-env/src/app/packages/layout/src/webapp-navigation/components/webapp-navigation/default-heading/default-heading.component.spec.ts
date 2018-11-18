import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BATDefaultHeadingComponent } from './default-heading.component';

describe('BATDefaultHeadingComponent', () => {
  let component: BATDefaultHeadingComponent;
  let fixture: ComponentFixture<BATDefaultHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BATDefaultHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BATDefaultHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
