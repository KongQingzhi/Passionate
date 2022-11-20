"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameworkBaseError = exports.FRAMEWORK_ERROR_SYMBOL = void 0;
const __1 = require("../");
const formatter_1 = require("./formatter");
const assert = require("assert");
exports.FRAMEWORK_ERROR_SYMBOL = Symbol.for('FrameworkBaseError');
class FrameworkBaseError extends __1.EggBaseError {
    constructor(message, serialNumber, errorContext) {
        super({ message, serialNumber, errorContext });
        assert(message, 'message is required');
        assert(serialNumber, 'serialNumber is required');
        this.serialNumber = String(serialNumber);
        this.errorContext = errorContext || '';
        this.code = `${this.module}_${this.serialNumber}`;
        this[exports.FRAMEWORK_ERROR_SYMBOL] = true;
    }
    get module() {
        throw new Error('module should be implement');
    }
    // create a new frameworkError with format
    static create(message, serialNumber, errorContext) {
        const err = formatter_1.FrameworkErrorFormater.formatError(new this(message, serialNumber, errorContext));
        Error.captureStackTrace(err, this.create);
        return err;
    }
    static isFrameworkError(err) {
        return err[exports.FRAMEWORK_ERROR_SYMBOL] === true;
    }
}
exports.FrameworkBaseError = FrameworkBaseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWV3b3JrX2Jhc2VfZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmFtZXdvcmtfYmFzZV9lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBaUQ7QUFDakQsMkNBQXFEO0FBQ3JELGlDQUFpQztBQUVwQixRQUFBLHNCQUFzQixHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUUvRSxNQUFhLGtCQUFtQixTQUFRLGdCQUEwQjtJQVFoRSxZQUFZLE9BQWUsRUFBRSxZQUE2QixFQUFFLFlBQWtCO1FBQzVFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLFlBQVksRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakQsSUFBWSxDQUFDLDhCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQy9DLENBQUM7SUFkRCxJQUFJLE1BQU07UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQWNELDBDQUEwQztJQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQWUsRUFBRSxZQUE2QixFQUFFLFlBQWtCO1FBQzlFLE1BQU0sR0FBRyxHQUFHLGtDQUFzQixDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDOUYsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQVU7UUFDaEMsT0FBUSxHQUFXLENBQUMsOEJBQXNCLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDdkQsQ0FBQztDQUNGO0FBOUJELGdEQThCQyJ9