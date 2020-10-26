import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemBlockerComponent } from './media-item-blocker.component';

describe('MediaItemBlockerComponent', () => {
  let component: MediaItemBlockerComponent;
  let fixture: ComponentFixture<MediaItemBlockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaItemBlockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemBlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
