/**
 * Stay awake by mouse movement.
 * Default movement interval is a random duration between 1 to 10 minutes.
 * Default movement amount is 1 pixel.
 * Does not handle case when mouse is at the edge of the screen.
 */

import { mouse, Point } from '@nut-tree/nut-js'

import { logger } from './utils';

const TIMEOUT_CONSTANT = 600000 / 2;
// const TIMEOUT_CONSTANT = 1000; // for local testing
const MILLISECOND = 1000;
const PIXEL_MOVE_AMOUNT = 1;

logger(
  `starting jigglypuff with jiggly interval from ` +
  `${TIMEOUT_CONSTANT / (MILLISECOND * 10)} to ${TIMEOUT_CONSTANT / MILLISECOND} seconds`);

const jiggly = (toggle: boolean = false) => {
  const timeoutTime = Math.floor(Math.random() * TIMEOUT_CONSTANT);
  logger('next jiggly in seconds', timeoutTime / MILLISECOND);
  setTimeout(async () => {
    let { x, y } = await mouse.getPosition()
    x += (toggle ? PIXEL_MOVE_AMOUNT : -PIXEL_MOVE_AMOUNT);
    y += (toggle ? PIXEL_MOVE_AMOUNT : -PIXEL_MOVE_AMOUNT);
    await mouse.move([new Point(x, y)])
    jiggly(!toggle);
  }, timeoutTime);
};

jiggly();
