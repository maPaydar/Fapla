/**
 * Created by amin on 12/31/16.
 */
"use strict";
var Function = (function () {

    function Function(name, outputType, parameterList) {
        this.name = name;
        this.outputType = outputType;
        this.parameterList = parameterList;
        this.hasAccess = function (callerName, calleName, functionTable) {
            var i = 0, j = 0;
            for (i = 0; i < functionTable.length; i++) {
                if (functionTable[i].name == callerName) {
                    break;
                }
            }
            for (j = 0; j < functionTable.length; j++) {
                if (functionTable[j].name == calleName) {
                    break;
                }
            }
            if (j == functionTable.length) {
                return "notFound";
            } else if (j > i) {
                return "notDecBefore";
            }
            return null;
        }
        this.toString = function () {
            let str = "";
            for (let i = 0; i < this.parameterList.length - 1; i++) {
                str += this.parameterList[i].type + ", ";
            }
            str += this.parameterList[this.parameterList.length - 1].type;
            return str;
        }
    }

    return Function;
}());
exports.Function = Function;
