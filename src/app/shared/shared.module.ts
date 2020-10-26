import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneDirective } from './directives/dropzone.directive';
import { DropzoneComponent } from './dropzone/dropzone.component';

@NgModule({
  declarations: [DropzoneDirective, DropzoneComponent],
  imports: [CommonModule],
  exports: [DropzoneDirective, DropzoneComponent],
})
export class SharedModule {}
