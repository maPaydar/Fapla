/**
 * Created by amin on 11/27/16.
 */

(function () {
    var fs = require('fs');
    var antlr4 = require('antlr4');
    var FaplaLexer = require('./FaplaLexer');
    var FaplaParser = require('./FaplaParser');
    var input = fs.readFileSync('../fapla-java/test/test3.fapla', 'utf8');
    var chars = new antlr4.InputStream(input);
    var lexer = new FaplaLexer.FaplaLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new FaplaParser.FaplaParser(tokens);
    parser.notifyErrorListeners = function (msg, offendingToken, err) {
        var offendingToken = offendingToken || null;
        var err = err || null;
        if (offendingToken === null) {
            offendingToken = this.getCurrentToken();
        }
        var line = offendingToken.line;
        var column = offendingToken.column;
        //$('#run-view-errors').text('line :' + line + ' col :' + column + ' : ' + msg);
        console.error(line, column, msg);
    }
    parser.buildParseTrees = true;
    var tree = parser.program();
})();
