import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneDirective } from './directives/dropzone.directive';



@NgModule({
  declarations: [DropzoneDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DropzoneDirective
  ]
})
export class SharedModule { }
