/**
 * Created by amin on 12/30/16.
 */
"use strict";
var Symbol = (function () {
    function Symbol(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    return Symbol;
}());
exports.Symbol = Symbol;