/**
 * Created by amin on 12/30/16.
 */
"use strict";
var Scope = (function () {
    function Scope(name, parent) {

        this.name = name;
        this.table = {};
        this.parent = parent;

        this.getTable = function () {
            return this.table;
        }

        this.enterScope = function () {
            return new Scope(null, this);
        }

        this.exitScope = function () {
            return this.parent;
        }

        this.addSymbol = function (symbol) {
            this.table[symbol.name] = symbol;
        }

        this.findSymbol = function (symbolName) {
            var s = this.table[symbolName];
            if (s) return s;
            else if (this.parent) return this.parent.findSymbol(symbolName);
            else return null;
        }
    }

    return Scope;
}());
exports.Scope = Scope;
