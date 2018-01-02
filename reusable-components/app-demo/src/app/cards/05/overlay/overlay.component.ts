import { Component, Input, AnimationEntryMetadata } from '@angular/core';
import { slideTopDownAnimation, slideLeftToRightAnimation } from '../../animations';

export type OverlayAnimationKindType = 'topToBottom' | 'leftToRight' | 'custom';

@Component({
  selector: 'app-overlay5',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [ slideTopDownAnimation, slideLeftToRightAnimation ],
})
export class Overlay5Component {
  topToBottomActive = false;
  leftToRightActive = false;
  customActive = false;

  @Input() overlayAnimationKind: OverlayAnimationKindType = 'topToBottom';

  toggleOverlay(value?: boolean) {
    if (this.overlayAnimationKind === 'leftToRight') {
      this.leftToRightActive = value == null ? !this.leftToRightActive : value;
    } else if (this.overlayAnimationKind === 'custom') {
      this.customActive = value == null ? !this.customActive : value;
    } else {
      this.topToBottomActive = value == null ? !this.topToBottomActive : value;
    }
  }
}
