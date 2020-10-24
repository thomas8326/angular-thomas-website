import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaContainerComponent } from './media-container/media-container.component';


const routes: Routes = [
  {
    path: '',
    component: MediaContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaCenterRoutingModule { }
