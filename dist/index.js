"use strict";
/**
 * Stay awake by mouse movement.
 * Default movement interval is a random duration between 1 to 10 minutes.
 * Default movement amount is 1 pixel.
 * Does not handle case when mouse is at the edge of the screen.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nut_js_1 = require("@nut-tree/nut-js");
const utils_1 = require("./utils");
const TIMEOUT_CONSTANT = 600000 / 2;
// const TIMEOUT_CONSTANT = 1000; // for local testing
const MILLISECOND = 1000;
const PIXEL_MOVE_AMOUNT = 1;
(0, utils_1.logger)(`starting jigglypuff with jiggly interval from ` +
    `${TIMEOUT_CONSTANT / (MILLISECOND * 10)} to ${TIMEOUT_CONSTANT / MILLISECOND} seconds`);
const jiggly = (toggle = false) => {
    const timeoutTime = Math.floor(Math.random() * TIMEOUT_CONSTANT);
    (0, utils_1.logger)('next jiggly in seconds', timeoutTime / MILLISECOND);
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        let { x, y } = yield nut_js_1.mouse.getPosition();
        x += (toggle ? PIXEL_MOVE_AMOUNT : -PIXEL_MOVE_AMOUNT);
        y += (toggle ? PIXEL_MOVE_AMOUNT : -PIXEL_MOVE_AMOUNT);
        yield nut_js_1.mouse.move([new nut_js_1.Point(x, y)]);
        jiggly(!toggle);
    }), timeoutTime);
};
jiggly();
