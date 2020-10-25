import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const MAX_IMAGE_COUNT = 60;

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss']
})
export class MediaGalleryComponent implements OnInit {

  @Output() imageChanged = new EventEmitter<string>();

  emptyImages: any[] = new Array(MAX_IMAGE_COUNT);

  images: any[] = [];

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  selectImage(image: string) {
    this.imageChanged.emit(image);
  }


  uploadFiles(files: FileList) {
    const fileUrlImage = Array.from(files).map(file => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file)));
    this.images = this.images.concat(fileUrlImage);

    this.emptyImages = new Array(MAX_IMAGE_COUNT - this.images.length);
  }
}
