import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaCenterRoutingModule } from './media-center-routing.module';
import { MediaContainerComponent } from './media-container/media-container.component';


@NgModule({
  declarations: [MediaContainerComponent],
  imports: [
    CommonModule,
    MediaCenterRoutingModule
  ]
})
export class MediaCenterModule { }
