import { trigger, state, transition, animate, style, keyframes, animateChild } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const slideBottomUpAnimation: AnimationEntryMetadata = trigger('flyInOut', [
  state('true', style({opacity: 0.7, display: 'flex'})),
  state('false', style({opacity: 0.7, display: 'none'})),
  transition('false => true', [
    style({opacity: 0, height: '0px'}),
    animate('100ms ease-out')
  ]),
  transition('true => false', [
    animate('100ms ease-in', style({opacity: 0, height: '0px'}))
  ])
])