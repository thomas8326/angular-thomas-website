import { ElementRef, Injectable } from '@angular/core';

@Injectable()
export class DragMoveService {
  xRayWidth: number;
  yRayHeight: number;

  constructor() {}

  dragStart(element: ElementRef<any>) {
    const computedStyle = getComputedStyle(element.nativeElement);
    const templateColumnWidth = computedStyle.gridTemplateColumns.split(' ')[0].replace('px', '');
    const templateRowWidth = computedStyle.gridTemplateRows.split(' ')[0].replace('px', '');
    this.xRayWidth = parseInt(templateColumnWidth, 10);
    this.yRayHeight = parseInt(templateRowWidth, 10);
  }

  dragMove(array: any[], index: number, distance: { x: number; y: number }) {

    const movedBlock = [];

    if (distance.x > this.xRayWidth / 2) {
      // const movedXColumn = distance.x % ();



      return array.
    }

    if (distance.y > this.yRayHeight / 2) {
    }
  }
}
