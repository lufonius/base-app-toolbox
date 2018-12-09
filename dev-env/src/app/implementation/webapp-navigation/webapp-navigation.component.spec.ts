import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappNavigationComponent } from './webapp-navigation.component';

describe('WebappNavigationComponent', () => {
  let component: WebappNavigationComponent;
  let fixture: ComponentFixture<WebappNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebappNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
