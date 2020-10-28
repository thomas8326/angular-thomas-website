import { AfterViewInit, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';

import { fromEvent, merge } from 'rxjs';
import { first, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent implements AfterViewInit {
  @Output() fileDropped = new EventEmitter<FileList>();

  @ViewChild('dropzone') dropzone: ElementRef<any>;
  showOverlay = false;

  constructor(private readonly elementRef: ElementRef, private readonly renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    fromEvent(this.elementRef.nativeElement, 'dragenter')
      .pipe(
        tap(() => {
          this.showOverlay = true;
        }),
        switchMap(() =>
          merge(
            fromEvent(this.dropzone.nativeElement, 'dragleave'),
            fromEvent(this.dropzone.nativeElement, 'drop'),
          ).pipe(first()),
        ),
      )
      .subscribe((event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if (!!event.dataTransfer.files.length) {
          this.fileDropped.emit(event.dataTransfer.files);
        }
      });

    fromEvent(this.dropzone.nativeElement, 'dragover').subscribe((event: DragEvent) => {
      event.preventDefault();
    });
  }
}
