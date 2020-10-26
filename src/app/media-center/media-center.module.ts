import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { MediaCenterRoutingModule } from './media-center-routing.module';
import { MediaContainerComponent } from './media-container/media-container.component';
import { MediaShowroomComponent } from './media-showroom/media-showroom.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';
import { SharedModule } from '../shared/shared.module';
import { MediaAddBlockerComponent } from './media-add-blocker/media-add-blocker.component';
import { MediaItemBlockerComponent } from './media-item-blocker/media-item-blocker.component';


@NgModule({
  declarations: [MediaContainerComponent, MediaShowroomComponent, MediaGalleryComponent, MediaAddBlockerComponent, MediaItemBlockerComponent],
  imports: [
    CommonModule,
    MediaCenterRoutingModule,
    DragDropModule,
    SharedModule,
  ]
})
export class MediaCenterModule { }
