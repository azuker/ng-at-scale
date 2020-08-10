import { trigger, state, transition, animate, style, AnimationTriggerMetadata, AnimationMetadata } from '@angular/animations';

export const slideTopDownAnimation: AnimationTriggerMetadata = trigger('slideTopDown', [
  state('true', style({opacity: 0.7, display: 'flex'})),
  state('false', style({opacity: 0.7, display: 'none'})),
  transition('false => true', [
    style({display: 'flex', height: '0px'}),
    animate('200ms ease-out')
  ]),
  transition('true => false', [
    animate('200ms ease-in', style({opacity: 0, height: '0px'}))
  ])
]);

export const slideLeftToRightAnimation: AnimationTriggerMetadata = trigger('slideLeftToRight', [
  state('true', style({opacity: 0.7, display: 'flex'})),
  state('false', style({opacity: 0.7, display: 'none'})),
  transition('false => true', [
    style({opacity: 0, width: '0%'}),
    animate('100ms ease-out')
  ]),
  transition('true => false', [
    animate('100ms ease-in', style({opacity: 0, width: '0%'}))
  ])
]);

export const fadeAnimation: AnimationTriggerMetadata = trigger('overlayAnimation', [
  state('true', style({opacity: 0.7, display: 'flex' })),
  state('false', style({opacity: 0, display: 'none'})),
  transition('false => true', [
    style({opacity: 0}),
    animate('300ms ease-out')
  ]),
  transition('true => false', [
    animate('300ms ease-out', style({opacity: 0}))
  ])
]);

export const fadeActivatedAnimation: AnimationMetadata[] = [
  state('true', style({opacity: 0.7, display: 'flex' })), // end styles by convention
  style({ opacity: 0 }),
  animate('300ms ease-out', style({opacity: 0.7})),
];

export const fadeDeactivatedAnimation: AnimationMetadata[] = [
  state('false', style({ display: 'none' })),  // end styles by convention
  animate('300ms ease-out', style({opacity: 0}))
];
