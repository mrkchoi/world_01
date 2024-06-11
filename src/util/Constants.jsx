import { Vector3 } from 'three';

export const GRAVITY = 30;
export const BALL_COUNT = 200;
export const BALL_RADIUS = 0.2;
export const BALLS = [...Array(BALL_COUNT)].map(() => ({
  position: [
    Math.random() * 25 - 12.5,
    Math.random() * 5 + 5,
    Math.random() * 25 - 12.5,
  ],
}));
export const v1 = new Vector3();
export const v2 = new Vector3();
export const v3 = new Vector3();
export const STEPS_PER_FRAME = 5;
export const SHIFT_MULTIPLIER = 2;

export const COLORS = [
  'hotpink',
  'aquamarine',
  'cadetblue',
  'darkseagreen',
  'indianred',
  'khaki',
  'lavender',
  'lightcyan',
  'lightpink',
  'oldlace',
  'coral',
];
