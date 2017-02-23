import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWelcomeComponentComponent } from './my-welcome-component.component';

describe('MyWelcomeComponentComponent', () => {
  let component: MyWelcomeComponentComponent;
  let fixture: ComponentFixture<MyWelcomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWelcomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWelcomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
