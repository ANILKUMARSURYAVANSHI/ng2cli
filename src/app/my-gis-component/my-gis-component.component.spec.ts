import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGisComponentComponent } from './my-gis-component.component';

describe('MyGisComponentComponent', () => {
  let component: MyGisComponentComponent;
  let fixture: ComponentFixture<MyGisComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGisComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
