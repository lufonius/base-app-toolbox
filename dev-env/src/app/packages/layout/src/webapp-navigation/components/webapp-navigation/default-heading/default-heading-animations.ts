import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

const EASE_IN_OUT_BACK = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";

export const animations = [ trigger('closeVisibility', [
    state('visible', style({
      transform: 'rotate(0deg) scale(1)',
      opacity: 1
    })),
    state('invisible', style({
      transform: 'rotate(45deg) scale(0.75)',
      opacity: 0
    })),
    transition('visible => invisible', animate(`200ms ${EASE_IN_OUT_BACK}`)),
    transition('invisible => visible', animate(`200ms ${EASE_IN_OUT_BACK}`))
  ])
];
