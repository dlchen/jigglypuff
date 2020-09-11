const robot = require('robotjs');

const TIMEOUT_CONSTANT = 600000;
const MILLISECOND = 1000;
const MOVE_AMOUNT_BY_PIXELS = 1;

console.log(
  `starting robo-jiggly with jiggle interval from ` +
  `${TIMEOUT_CONSTANT / (MILLISECOND * 10)} to ${TIMEOUT_CONSTANT / MILLISECOND} seconds`);

const jiggle = (toggle) => {
  const timeoutTime = Math.floor(Math.random() * TIMEOUT_CONSTANT);
  console.log('next jiggle in seconds', timeoutTime / MILLISECOND);
  setTimeout(() => {
    let { x, y } = robot.getMousePos();
    x += (toggle ? MOVE_AMOUNT_BY_PIXELS : -MOVE_AMOUNT_BY_PIXELS);
    y += (toggle ? MOVE_AMOUNT_BY_PIXELS : -MOVE_AMOUNT_BY_PIXELS);
    robot.moveMouse(x, y);
    jiggle(!toggle);
  }, timeoutTime);
};

jiggle();
