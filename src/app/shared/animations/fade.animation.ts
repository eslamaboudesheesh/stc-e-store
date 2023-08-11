import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// fade.animation.ts
export const Fade = trigger('fade', [
  state('visible', style({ opacity: 1 })),
  state('void,hidden', style({ opacity: 0 })),
  transition('*=>visible', animate('2000ms ease-out')),
  transition('*=>void,*=>hidden', animate('900ms ease-out')),
]);
