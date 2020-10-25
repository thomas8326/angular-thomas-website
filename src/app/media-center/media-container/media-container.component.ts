import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.scss']
})
export class MediaContainerComponent implements OnInit {

  selectImage: string;

  constructor() { }

  ngOnInit(): void {
  }

  getImage(image: string) {
    console.log(image);
    this.selectImage = image;
  }
}
