import { CdkDragMove } from '@angular/cdk/drag-drop';
import { viewClassName } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { DragMoveService } from 'src/app/media-center/services/drag-move.service';

const MAX_IMAGE_COUNT = 60;

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss'],
  providers: [DragMoveService],
})
export class MediaGalleryComponent implements OnInit {
  @ViewChild('gallery') gallery: ElementRef<any>;
  @Output() imageChanged = new EventEmitter<string>();

  emptyImages: any[] = new Array(MAX_IMAGE_COUNT);

  images: any[] = [];

  constructor(private readonly domSanitizer: DomSanitizer, private readonly dragMoveService: DragMoveService) {}

  ngOnInit(): void {}

  selectImage(image: string) {
    this.imageChanged.emit(image);
  }

  uploadFiles(files: FileList) {
    const fileUrlImage = Array.from(files).map((file) =>
      this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file)),
    );
    this.images = this.images.concat(fileUrlImage);

    this.emptyImages = new Array(MAX_IMAGE_COUNT - this.images.length);
  }

  onDragStart() {
    this.dragMoveService.dragStart(this.gallery);
  }

  onDragMove(moved: CdkDragMove<any>, index: number) {
    // this.emptyImages;
    console.log(index);
    // const moveOffset = moved.distance.x -
  }
}
