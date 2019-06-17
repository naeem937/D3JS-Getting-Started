import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DisplayComponent } from './d3-display.component';

describe('D3DisplayComponent', () => {
  let component: D3DisplayComponent;
  let fixture: ComponentFixture<D3DisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3DisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
