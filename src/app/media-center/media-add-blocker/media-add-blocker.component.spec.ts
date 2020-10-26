import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAddBlockerComponent } from './media-add-blocker.component';

describe('MediaAddBlockerComponent', () => {
  let component: MediaAddBlockerComponent;
  let fixture: ComponentFixture<MediaAddBlockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaAddBlockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAddBlockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
