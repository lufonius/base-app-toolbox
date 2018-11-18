import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BATHeadingComponent } from './heading.component';

describe('BATHeadingComponent', () => {
  let component: BATHeadingComponent;
  let fixture: ComponentFixture<BATHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BATHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BATHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
