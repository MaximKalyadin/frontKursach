import {animate, query, stagger, state, style, transition, trigger} from '@angular/animations';

export const Animations = {
  fadeInTrigger: trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('0.5s ease-out', style({ opacity: '1' })),
    ]),
  ]),
  listAnimationTrigger: trigger('listAnimation', [
    transition('* => *', [
      query(':enter', style({ opacity: 0 }), { optional: true }),
      query(':enter', stagger('100ms', [
        animate('250ms', style({ opacity: 1 }))
      ]), { optional: true })
    ])
  ]),
  filterSlideTrigger: trigger('filterSlide', [
    state('1', style({'margin-left': '-296px'})),
    transition('0 => 1', [
      animate('250ms'),
    ]),
    transition('1 => 0', [
      style({'margin-left': '-296px'}),
      animate('250ms', style({'margin-left': '0'})),
    ])
  ])
};
