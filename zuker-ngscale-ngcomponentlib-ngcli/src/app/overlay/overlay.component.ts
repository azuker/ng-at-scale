import { Component, Input, AnimationEntryMetadata } from '@angular/core';
import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';

export type OverlayAnimationKindType = 'topToBottom' | 'leftToRight' | 'custom';

@Component({
  selector: 'zuknglib-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [
    trigger('slideTopDown', [
      state('true', style({opacity: 0.7, display: 'flex'})),
      state('false', style({opacity: 0.7, display: 'none'})),
      transition('false => true', [
        style({opacity: 0, height: '0px'}),
        animate('100ms ease-out')
      ]),
      transition('true => false', [
        animate('100ms ease-in', style({opacity: 0, height: '0px'}))
      ])
    ]),
    trigger('slideLeftToRight', [
      state('true', style({opacity: 0.7, display: 'flex'})),
      state('false', style({opacity: 0.7, display: 'none'})),
      transition('false => true', [
        style({opacity: 0, width: '0%'}),
        animate('100ms ease-out')
      ]),
      transition('true => false', [
        animate('100ms ease-in', style({opacity: 0, width: '0%'}))
      ])
    ]),
  ],
})
export class OverlayComponent {
  topToBottomActive = false;
  leftToRightActive = false;

  @Input() customTrigger = false;
  @Input() overlayAnimationKind: OverlayAnimationKindType = 'topToBottom';

  toggleOverlayInternal(value?: boolean) {
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
