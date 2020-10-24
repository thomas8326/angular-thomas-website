import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaShowroomComponent } from './media-showroom.component';

describe('MediaShowroomComponent', () => {
  let component: MediaShowroomComponent;
  let fixture: ComponentFixture<MediaShowroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaShowroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
