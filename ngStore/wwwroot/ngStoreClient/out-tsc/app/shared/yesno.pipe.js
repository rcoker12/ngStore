import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var YesNoBooleanPipe = /** @class */ (function () {
    function YesNoBooleanPipe() {
    }
    YesNoBooleanPipe.prototype.transform = function (value) {
        return value == true ? 'Yes' : 'No';
    };
    ;
    YesNoBooleanPipe = tslib_1.__decorate([
        Pipe({ name: 'yesnoBoolean' })
    ], YesNoBooleanPipe);
    return YesNoBooleanPipe;
}());
export { YesNoBooleanPipe };
//# sourceMappingURL=yesno.pipe.js.map