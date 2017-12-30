import { Component, Input, AnimationEntryMetadata } from '@angular/core';
import { slideTopDownAnimation, slideLeftToRightAnimation } from '../../../animations';

export type OverlayAnimationKindType = 'topToBottom' | 'leftToRight' | 'custom';

@Component({
  selector: 'app-overlay6',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [ slideTopDownAnimation, slideLeftToRightAnimation ],
})
export class Overlay6Component {
  topToBottomActive = false;
  leftToRightActive = false;

  @Input() customTrigger = false;
  @Input() overlayAnimationKind: OverlayAnimationKindType = 'topToBottom';

  private toggleOverlayInternal(value?: boolean) {
    if (!this.customTrigger) {
      this.toggleOverlay(value);
    }
  }

  toggleOverlay(value?: boolean) {
    if (this.overlayAnimationKind === 'leftToRight') {
      this.leftToRightActive = value == null ? !this.leftToRightActive : value;
    } else {
      this.topToBottomActive = value == null ? !this.topToBottomActive : value;
    }
  }
}
