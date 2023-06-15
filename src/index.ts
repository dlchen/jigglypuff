/**
 * Stay awake by mouse movement.
 * Default movement interval is a random duration between 1 to 10 minutes.
 * Default movement amount is 1 pixel.
 * Does not handle case when mouse is at the edge of the screen.
 */

import robot from 'robotjs';

import { logger } from './utils';

const TIMEOUT_CONSTANT = 600000 / 2;
const MILLISECOND = 1000;
const PIXEL_MOVE_AMOUNT = 1;

logger(
  `starting jigglypuff with jiggle interval from ` +
  `${TIMEOUT_CONSTANT / (MILLISECOND * 10)} to ${TIMEOUT_CONSTANT / MILLISECOND} seconds`);

const jiggle = (toggle: boolean = false) => {
  const timeoutTime = Math.floor(Math.random() * TIMEOUT_CONSTANT);
  logger('next jiggle in seconds', timeoutTime / MILLISECOND);
  setTimeout(() => {
    let { x, y } = robot.getMousePos();
    x += (toggle ? PIXEL_MOVE_AMOUNT : -PIXEL_MOVE_AMOUNT);
    y += (toggle ? PIXEL_MOVE_AMOUNT : -PIXEL_MOVE_AMOUNT);
    robot.moveMouse(x, y);
    jiggle(!toggle);
  }, timeoutTime);
};

jiggle();
