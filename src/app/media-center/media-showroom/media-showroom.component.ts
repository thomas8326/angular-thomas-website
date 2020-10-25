import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-media-showroom',
  templateUrl: './media-showroom.component.html',
  styleUrls: ['./media-showroom.component.scss']
})
export class MediaShowroomComponent {

  @Input() showImage: string;

  constructor() { }

}
