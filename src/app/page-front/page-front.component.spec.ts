import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFrontComponent } from './page-front.component';

describe('PageFrontComponent', () => {
  let component: PageFrontComponent;
  let fixture: ComponentFixture<PageFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
