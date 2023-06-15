"use strict";
/**
 * Stay awake by mouse movement.
 * Default movement interval is a random duration between 1 to 10 minutes.
 * Default movement amount is 1 pixel.
 * Does not handle case when mouse is at the edge of the screen.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const robotjs_1 = __importDefault(require("robotjs"));
const utils_1 = require("./utils");
const TIMEOUT_CONSTANT = 600000 / 2;
const MILLISECOND = 1000;
const PIXEL_MOVE_AMOUNT = 1;
(0, utils_1.logger)(`starting jigglypuff with jiggle interval from ` +
    `${TIMEOUT_CONSTANT / (MILLISECOND * 10)} to ${TIMEOUT_CONSTANT / MILLISECOND} seconds`);
const jiggle = (toggle = false) => {
    const timeoutTime = Math.floor(Math.random() * TIMEOUT_CONSTANT);
    (0, utils_1.logger)('next jiggle in seconds', timeoutTime / MILLISECOND);
    setTimeout(() => {
        let { x, y } = robotjs_1.default.getMousePos();
        x += (toggle ? PIXEL_MOVE_AMOUNT : -PIXEL_MOVE_AMOUNT);
        y += (toggle ? PIXEL_MOVE_AMOUNT : -PIXEL_MOVE_AMOUNT);
        robotjs_1.default.moveMouse(x, y);
        jiggle(!toggle);
    }, timeoutTime);
};
jiggle();
