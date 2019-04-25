import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppersidesectionComponent } from './uppersidesection.component';

describe('UppersidesectionComponent', () => {
  let component: UppersidesectionComponent;
  let fixture: ComponentFixture<UppersidesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppersidesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppersidesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
