"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (...data) => {
    const flags = new Set(process.argv.slice(2));
    if (!flags.has('--silent') && !flags.has('-S')) {
        console.log(data);
    }
};
exports.logger = logger;
