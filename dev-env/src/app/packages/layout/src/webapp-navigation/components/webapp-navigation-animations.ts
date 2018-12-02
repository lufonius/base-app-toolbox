import {animate, animateChild, query, state, style, transition, trigger} from "@angular/animations";

const EASE_IN_OUT_CIRC = 'cubic-bezier(0.075, 0.82, 0.165, 1)';
const EASE_IN_OUT_BACK = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";

const generateLevelSwitchAnimationStates = (levels: number) => {
  let states = [];
  let transformStep = 100 / levels;

  for(let i = 0; i < levels; i++) {
    let distanceToMove = transformStep * i;

    let newState = state(`${i + 1}`, style({
      transform: `translateX(-${distanceToMove}%)`
    }));

    states.push(newState);
  }

  return states;
};

export const animations = [
  trigger('visibility', [
    state('visible', style({
      transform: 'scale(1)'
    })),
    state('invisible', style({
      transform: 'scale(0)'
    })),
    transition('visible => invisible', [
      query('@closeVisibility', [
        animateChild()
      ], { optional: true }),
      animate(`200ms ${EASE_IN_OUT_CIRC}`),
    ]),
    transition('invisible => visible', [
      animate(`200ms ${EASE_IN_OUT_CIRC}`),
      query('@closeVisibility', [
        animateChild()
      ], { optional: true })
    ])
  ]),
  trigger('navigationLevels', [
    ...generateLevelSwitchAnimationStates(10),
    transition('* <=> *', animate(`250ms ${EASE_IN_OUT_CIRC}`))
  ])
];
