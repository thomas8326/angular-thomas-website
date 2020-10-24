import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaCenterRoutingModule } from './media-center-routing.module';
import { MediaContainerComponent } from './media-container/media-container.component';
import { MediaShowroomComponent } from './media-showroom/media-showroom.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';


@NgModule({
  declarations: [MediaContainerComponent, MediaShowroomComponent, MediaGalleryComponent],
  imports: [
    CommonModule,
    MediaCenterRoutingModule
  ]
})
export class MediaCenterModule { }
