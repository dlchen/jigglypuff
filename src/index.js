const robot = require('robotjs');

const { logger } = require('./utils')

const TIMEOUT_CONSTANT = 600000 / 2;
const MILLISECOND = 1000;
const PIXEL_MOVE_AMOUNT = 1;

logger(
  `starting robo-jiggly with jiggle interval from ` +
  `${TIMEOUT_CONSTANT / (MILLISECOND * 10)} to ${TIMEOUT_CONSTANT / MILLISECOND} seconds`);

const jiggle = (toggle) => {
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
