"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameworkErrorFormater = void 0;
const framework_base_error_1 = require("./framework_base_error");
const util = require("util");
const os = require("os");
const hostname = os.hostname();
class FrameworkErrorFormater {
    static format(err) {
        const faqPrefix = this.faqPrefixEnv || this.faqPrefix;
        let errMessage = err.message;
        if (framework_base_error_1.FrameworkBaseError.isFrameworkError(err) && !errMessage.includes(faqPrefix)) {
            errMessage += ` [ ${faqPrefix}/${err.code} ]`;
        }
        const errStack = err.stack || 'no_stack';
        return util.format('framework.%s: %s\n%s\ncode: %s\nserialNumber: %s\nerrorContext: %j\npid: %s\nhostname: %s\n', err.name, errMessage, errStack.substring(errStack.indexOf('\n') + 1), err.code, err.serialNumber, err.errorContext, process.pid, hostname);
    }
    static formatError(err) {
        const faqPrefix = this.faqPrefixEnv || this.faqPrefix;
        if (framework_base_error_1.FrameworkBaseError.isFrameworkError(err) && !err.message.includes(faqPrefix)) {
            err.message += ` [ ${faqPrefix}/${err.code} ]`;
        }
        return err;
    }
}
exports.FrameworkErrorFormater = FrameworkErrorFormater;
FrameworkErrorFormater.faqPrefix = 'https://eggjs.org/zh-cn/faq';
FrameworkErrorFormater.faqPrefixEnv = process.env.EGG_FRAMEWORK_ERR_FAQ_PERFIX;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybWF0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlFQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUUvQixNQUFhLHNCQUFzQjtJQUlqQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVU7UUFDdEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSx5Q0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0UsVUFBVSxJQUFJLE1BQU0sU0FBUyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztTQUMvQztRQUNELE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2RkFBNkYsRUFDOUcsR0FBRyxDQUFDLElBQUksRUFDUixVQUFVLEVBQ1YsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUM5QyxHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxZQUFZLEVBQ2hCLEdBQUcsQ0FBQyxZQUFZLEVBQ2hCLE9BQU8sQ0FBQyxHQUFHLEVBQ1gsUUFBUSxDQUNULENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBa0IsR0FBTTtRQUN4QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEQsSUFBSSx5Q0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hGLEdBQUcsQ0FBQyxPQUFPLElBQUksTUFBTSxTQUFTLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztBQTlCSCx3REErQkM7QUE5QmtCLGdDQUFTLEdBQUcsNkJBQTZCLENBQUM7QUFDNUMsbUNBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDIn0=