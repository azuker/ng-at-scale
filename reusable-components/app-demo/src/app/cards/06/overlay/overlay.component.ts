import { Component, Input, Output, AnimationEntryMetadata, ElementRef,
  ViewChild, Renderer, AnimationStateMetadata, AfterViewInit } from '@angular/core';
import { slideTopDownAnimation, slideLeftToRightAnimation } from '../../animations';
import { AnimationBuilder } from '@angular/animations';

export type OverlayAnimationKindType = 'topToBottom' | 'leftToRight' | 'custom';

@Component({
  selector: 'app-overlay6',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [ slideTopDownAnimation, slideLeftToRightAnimation ],
})
export class Overlay6Component implements AfterViewInit {
  topToBottomActive = false;
  leftToRightActive = false;
  customActive = false;

  @ViewChild('overlayContainer') overlayContainer: ElementRef;
  @Input() customTrigger = true;
  @Input() overlayActivatedAnimation: AnimationEntryMetadata;
  @Input() overlayDeactivatedAnimation: AnimationEntryMetadata;
  @Input() overlayAnimationKind: OverlayAnimationKindType = 'topToBottom';

  constructor(private animationBuilder: AnimationBuilder, private renderer: Renderer) { }

  toggleOverlayInternal(value?: boolean) {
    // consider adding/removing listeners by using the Renderer instead
    if (!this.customTrigger) {
      this.toggleOverlay(value);
    }
  }

  toggleOverlay(value?: boolean) {
    if (this.overlayAnimationKind === 'leftToRight') {
      this.leftToRightActive = value == null ? !this.leftToRightActive : value;
    } else if (this.overlayAnimationKind === 'custom') {
      this.customActive = value == null ? !this.customActive : value;
      this.playCustomAnimation();
    } else {
      this.topToBottomActive = value == null ? !this.topToBottomActive : value;
    }
  }

  ngAfterViewInit(): void {
    // set end animation styles according to state.
    // the assumption is that the first item is a state entry that includes the end styles
    if (this.overlayActivatedAnimation == null
      || this.overlayDeactivatedAnimation == null
      || this.overlayContainer == null) {
        return;
      }

      const isActive = this.customActive;
      const el = this.overlayContainer.nativeElement;

      const anim = isActive ? this.overlayActivatedAnimation : this.overlayDeactivatedAnimation;

      const state = anim[0] as AnimationStateMetadata;
      Object.keys(state.styles.styles).forEach(key => {
        this.renderer.setElementStyle(el, key, state.styles.styles[key]);
      });
  }

  private playCustomAnimation() {
    if (this.overlayActivatedAnimation == null
      || this.overlayDeactivatedAnimation == null
      || this.overlayContainer == null) {
        return;
      }

    const isActive = this.customActive;
    const el = this.overlayContainer.nativeElement;

    const anim = isActive ? this.overlayActivatedAnimation : this.overlayDeactivatedAnimation;
    const animation = this.animationBuilder.build(anim);
    const player = animation.create(el);

    player.onDone(() => {
      // set end animation styles according to state.
      // the assumption is that the first item is a state entry that includes the end styles
      const state = anim[0] as AnimationStateMetadata;
      Object.keys(state.styles.styles).forEach(key => {
        this.renderer.setElementStyle(el, key, state.styles.styles[key]);
      });

      player.destroy();
    });

    if (isActive) {
      this.renderer.setElementStyle(el, 'display', 'flex');
    }
    player.play();
  }
}
