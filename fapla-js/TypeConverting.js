"use strict";
/**
 * Created by amin on 12/30/16.
 */
var TypeConverting = (function () {
    function TypeConverting() {
    }
    TypeConverting.canConvertTo = function (sourceType, destinatinaionType) {
        return sourceType == destinatinaionType ||
            sourceType == "noType" ||
            (sourceType == "bool" && destinatinaionType == "real") ||
            (sourceType == "bool" && destinatinaionType == "string") ||
            (sourceType == "real" && destinatinaionType == "string");
    };
    TypeConverting.max = function (sourceType, destinationType) {
        if (this.canConvertTo(sourceType, destinationType))
            return destinationType;
        else
            return sourceType;
    };
    return TypeConverting;
}());
exports.TypeConverting = TypeConverting;
