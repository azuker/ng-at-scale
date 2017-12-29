import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[overlayAnimate]',
})
export class OverlayAnimate5Directive {
    @HostBinding('@overlayAnimation') animationState: string;
    animationActive = false;

    toggleOverlay(value?: boolean) {
        this.animationActive = value == null ? !this.animationActive : value;
        this.animationState = this.animationActive.toString();
    }

    @HostListener('mouseover') onMouseOver() {
        this.toggleOverlay(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.toggleOverlay(false);
    }
}