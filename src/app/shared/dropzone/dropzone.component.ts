import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import { fromEvent, merge } from 'rxjs';
import { first, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent implements AfterViewInit {
  @ViewChild('dropzone') dropzone: ElementRef<any>;
  showOverlay = false;

  constructor(private readonly elementRef: ElementRef, private readonly renderer2: Renderer2) {}

  ngAfterViewInit(): void {
    fromEvent(this.elementRef.nativeElement, 'dragenter')
      .pipe(
        tap((event: DragEvent) => {
          this.showOverlay = true;
          console.log('enter');
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
        this.showOverlay = false;
      });

    fromEvent(this.dropzone.nativeElement, 'dragover').subscribe((event: DragEvent) => {
      event.preventDefault();
    });
  }
}
