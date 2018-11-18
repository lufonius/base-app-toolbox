import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BATFooterComponent } from './footer.component';

describe('BATFooterComponent', () => {
  let component: BATFooterComponent;
  let fixture: ComponentFixture<BATFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BATFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BATFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
