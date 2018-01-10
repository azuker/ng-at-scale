import { Component, Input, AnimationEntryMetadata } from '@angular/core';
import { slideTopDownAnimation, slideLeftToRightAnimation } from './overlayAnimations';

export type OverlayAnimationKindType = 'topToBottom' | 'leftToRight' | 'custom';

@Component({
  selector: 'zuknglib-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [ slideTopDownAnimation, slideLeftToRightAnimation ],
})
export class OverlayComponent {
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
