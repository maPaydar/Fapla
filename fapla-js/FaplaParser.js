// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FaplaListener = require('./FaplaListener').FaplaListener;

const Scope = require('./Scope').Scope;
const Symbol = require('./Symbol').Symbol;
const Function = require('./Function').Function;
const TypeConverting = require('./TypeConverting').TypeConverting;
var rootScope = new Scope('root', null);
var currentScope = rootScope;
var functionTable = [];

function hasAccess(callerName, calleName, functionTable) {
    var i = 0, j = 0;
    for(i = 0; i < functionTable.length; i++) {
        if(functionTable[i].name == callerName) {
            break;
        }
    }
    for(j = 0; j < functionTable.length; j++) {
        if(functionTable[j].name == calleName) {
            break;
        }
    }
    if(j == functionTable.length) {
        return "notFound";
    } else if (j > i) {
        return "notDecBefore";
    }
    return null;
}

function getFunction(functionName) {
    for(var i = 0; i < functionTable.length; i++) {
        if(functionTable[i].name == functionName) {
            break;
        }
    }
    return functionTable[i];
}

function checkArguments(func, args) {
    if(func.parameterList.length != args.length)
        FaplaParser.prototype.logger.error("module " + func.name + " need " + func.parameterList.length + " parameters but found " + args.length + " parameters");
    else {
        let i = 0;
        for (i = 0; i < params.length; i++) {
            if(func.parameterList[i] != args[i])
                break;
        }
        if(i < params.length) {
            FaplaParser.prototype.logger.error("module " + func.name + " need " + func.parameterList + " but found " + args);
        }
    }
}

var grammarFileName = "Fapla.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00034\u0119\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002!\n\u0002\f\u0002\u000e\u0002$\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u00030",
    "\n\u0003\r\u0003\u000e\u00031\u0005\u00034\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003<",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007\u0005",
    "H\n\u0005\f\u0005\u000e\u0005K\u000b\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006S\n\u0006\f\u0006",
    "\u000e\u0006V\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0007\u0007^\n\u0007\f\u0007\u000e\u0007",
    "a\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007f\n\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bo\n",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\b\u008b\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\t\u009c\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0005\t\u00a6\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00fd",
    "\n\t\f\t\u000e\t\u0100\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0007\n\u0108\n\n\f\n\u000e\n\u010b\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0002\u0003\u0010\r\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002\u0002\u0139\u0002",
    "\u001b\u0003\u0002\u0002\u0002\u0004%\u0003\u0002\u0002\u0002\u0006",
    "@\u0003\u0002\u0002\u0002\bE\u0003\u0002\u0002\u0002\nO\u0003\u0002",
    "\u0002\u0002\fe\u0003\u0002\u0002\u0002\u000e\u008a\u0003\u0002\u0002",
    "\u0002\u0010\u00a5\u0003\u0002\u0002\u0002\u0012\u0101\u0003\u0002\u0002",
    "\u0002\u0014\u010c\u0003\u0002\u0002\u0002\u0016\u0112\u0003\u0002\u0002",
    "\u0002\u0018\u001a\u0005\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002",
    "\u0002\u001a\u001d\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001e\u0003\u0002\u0002",
    "\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001e\"\u0005\u0006\u0004",
    "\u0002\u001f!\u0005\u0004\u0003\u0002 \u001f\u0003\u0002\u0002\u0002",
    "!$\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002",
    "\u0002\u0002#\u0003\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002",
    "%&\u0007\u0012\u0002\u0002&\'\u00071\u0002\u0002\'3\b\u0003\u0001\u0002",
    "()\u0007\u0015\u0002\u0002)/\u0007 \u0002\u0002*+\u00071\u0002\u0002",
    "+,\u0007 \u0002\u0002,-\u0007\u0004\u0002\u0002-.\u0007\u0019\u0002",
    "\u0002.0\b\u0003\u0001\u0002/*\u0003\u0002\u0002\u000201\u0003\u0002",
    "\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000224\u0003",
    "\u0002\u0002\u00023(\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u0002",
    "45\u0003\u0002\u0002\u00025;\b\u0003\u0001\u000267\u0007\u0016\u0002",
    "\u000278\u0007 \u0002\u000289\u0007\u0004\u0002\u00029:\u0007\u0019",
    "\u0002\u0002:<\b\u0003\u0001\u0002;6\u0003\u0002\u0002\u0002;<\u0003",
    "\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=>\b\u0003\u0001\u0002>",
    "?\u0005\b\u0005\u0002?\u0005\u0003\u0002\u0002\u0002@A\u0007\u0012\u0002",
    "\u0002AB\u0007\u0003\u0002\u0002BC\b\u0004\u0001\u0002CD\u0005\b\u0005",
    "\u0002D\u0007\u0003\u0002\u0002\u0002EI\u0007\u0013\u0002\u0002FH\u0005",
    "\u000e\b\u0002GF\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002\u0002I",
    "G\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JL\u0003\u0002\u0002",
    "\u0002KI\u0003\u0002\u0002\u0002LM\b\u0005\u0001\u0002MN\u0007\u0014",
    "\u0002\u0002N\t\u0003\u0002\u0002\u0002OP\u0007\u0013\u0002\u0002PT",
    "\b\u0006\u0001\u0002QS\u0005\u000e\b\u0002RQ\u0003\u0002\u0002\u0002",
    "SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002",
    "\u0002UW\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WX\u0007\u0014",
    "\u0002\u0002XY\b\u0006\u0001\u0002Y\u000b\u0003\u0002\u0002\u0002Z[",
    "\u0007\u0013\u0002\u0002[_\b\u0007\u0001\u0002\\^\u0005\u000e\b\u0002",
    "]\\\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002",
    "\u0002\u0002_`\u0003\u0002\u0002\u0002`b\u0003\u0002\u0002\u0002a_\u0003",
    "\u0002\u0002\u0002bc\u0007\u0014\u0002\u0002cf\b\u0007\u0001\u0002d",
    "f\u0005\u000e\b\u0002eZ\u0003\u0002\u0002\u0002ed\u0003\u0002\u0002",
    "\u0002f\r\u0003\u0002\u0002\u0002gh\u0007\u000f\u0002\u0002hi\u0005",
    "\u0010\t\u0002ij\b\b\u0001\u0002jk\u0007\u000e\u0002\u0002kn\u0005\f",
    "\u0007\u0002lm\u0007\r\u0002\u0002mo\u0005\f\u0007\u0002nl\u0003\u0002",
    "\u0002\u0002no\u0003\u0002\u0002\u0002o\u008b\u0003\u0002\u0002\u0002",
    "pq\u0007\u0011\u0002\u0002qr\u0005\u0010\t\u0002rs\u0005\f\u0007\u0002",
    "st\b\b\u0001\u0002t\u008b\u0003\u0002\u0002\u0002uv\u0007\u0010\u0002",
    "\u0002vw\u0005\u0010\t\u0002wx\u0007\u0019\u0002\u0002xy\b\b\u0001\u0002",
    "y\u008b\u0003\u0002\u0002\u0002z{\u0007\u0017\u0002\u0002{|\u0005\u0010",
    "\t\u0002|}\b\b\u0001\u0002}~\u0007\u0019\u0002\u0002~\u008b\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0007\u0018\u0002\u0002\u0080\u0081\u00071",
    "\u0002\u0002\u0081\u0082\u0007\u0019\u0002\u0002\u0082\u008b\b\b\u0001",
    "\u0002\u0083\u0084\u0005\u0010\t\u0002\u0084\u0085\u0007\u0019\u0002",
    "\u0002\u0085\u008b\u0003\u0002\u0002\u0002\u0086\u008b\u0005\u0016\f",
    "\u0002\u0087\u008b\u0007\u0019\u0002\u0002\u0088\u008b\u0005\u0014\u000b",
    "\u0002\u0089\u008b\u0005\n\u0006\u0002\u008ag\u0003\u0002\u0002\u0002",
    "\u008ap\u0003\u0002\u0002\u0002\u008au\u0003\u0002\u0002\u0002\u008a",
    "z\u0003\u0002\u0002\u0002\u008a\u007f\u0003\u0002\u0002\u0002\u008a",
    "\u0083\u0003\u0002\u0002\u0002\u008a\u0086\u0003\u0002\u0002\u0002\u008a",
    "\u0087\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a",
    "\u0089\u0003\u0002\u0002\u0002\u008b\u000f\u0003\u0002\u0002\u0002\u008c",
    "\u008d\b\t\u0001\u0002\u008d\u008e\u0007\u0006\u0002\u0002\u008e\u00a6",
    "\b\t\u0001\u0002\u008f\u0090\u0007\u0007\u0002\u0002\u0090\u00a6\b\t",
    "\u0001\u0002\u0091\u0092\u0007\u0005\u0002\u0002\u0092\u00a6\b\t\u0001",
    "\u0002\u0093\u0094\u0007/\u0002\u0002\u0094\u0095\u0005\u0010\t\u0002",
    "\u0095\u0096\u00070\u0002\u0002\u0096\u0097\b\t\u0001\u0002\u0097\u00a6",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u00071\u0002\u0002\u0099\u009b",
    "\u0007/\u0002\u0002\u009a\u009c\u0005\u0012\n\u0002\u009b\u009a\u0003",
    "\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u00070\u0002\u0002\u009e\u00a6\b\t\u0001",
    "\u0002\u009f\u00a0\u0007\'\u0002\u0002\u00a0\u00a1\u0005\u0010\t\u0015",
    "\u00a1\u00a2\b\t\u0001\u0002\u00a2\u00a6\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u00071\u0002\u0002\u00a4\u00a6\b\t\u0001\u0002\u00a5\u008c\u0003",
    "\u0002\u0002\u0002\u00a5\u008f\u0003\u0002\u0002\u0002\u00a5\u0091\u0003",
    "\u0002\u0002\u0002\u00a5\u0093\u0003\u0002\u0002\u0002\u00a5\u0098\u0003",
    "\u0002\u0002\u0002\u00a5\u009f\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003",
    "\u0002\u0002\u0002\u00a6\u00fe\u0003\u0002\u0002\u0002\u00a7\u00a8\f",
    "\u0013\u0002\u0002\u00a8\u00a9\u0007-\u0002\u0002\u00a9\u00aa\u0005",
    "\u0010\t\u0014\u00aa\u00ab\b\t\u0001\u0002\u00ab\u00fd\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\f\u0012\u0002\u0002\u00ad\u00ae\u0007+\u0002\u0002",
    "\u00ae\u00af\u0005\u0010\t\u0013\u00af\u00b0\b\t\u0001\u0002\u00b0\u00fd",
    "\u0003\u0002\u0002\u0002\u00b1\u00b2\f\u0011\u0002\u0002\u00b2\u00b3",
    "\u0007,\u0002\u0002\u00b3\u00b4\u0005\u0010\t\u0012\u00b4\u00b5\b\t",
    "\u0001\u0002\u00b5\u00fd\u0003\u0002\u0002\u0002\u00b6\u00b7\f\u0010",
    "\u0002\u0002\u00b7\u00b8\u0007.\u0002\u0002\u00b8\u00b9\u0005\u0010",
    "\t\u0011\u00b9\u00ba\b\t\u0001\u0002\u00ba\u00fd\u0003\u0002\u0002\u0002",
    "\u00bb\u00bc\f\u000f\u0002\u0002\u00bc\u00bd\u0007)\u0002\u0002\u00bd",
    "\u00be\u0005\u0010\t\u0010\u00be\u00bf\b\t\u0001\u0002\u00bf\u00fd\u0003",
    "\u0002\u0002\u0002\u00c0\u00c1\f\u000e\u0002\u0002\u00c1\u00c2\u0007",
    "*\u0002\u0002\u00c2\u00c3\u0005\u0010\t\u000f\u00c3\u00c4\b\t\u0001",
    "\u0002\u00c4\u00fd\u0003\u0002\u0002\u0002\u00c5\u00c6\f\r\u0002\u0002",
    "\u00c6\u00c7\u0007\"\u0002\u0002\u00c7\u00c8\u0005\u0010\t\u000e\u00c8",
    "\u00c9\b\t\u0001\u0002\u00c9\u00fd\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\f\f\u0002\u0002\u00cb\u00cc\u0007#\u0002\u0002\u00cc\u00cd\u0005\u0010",
    "\t\r\u00cd\u00ce\b\t\u0001\u0002\u00ce\u00fd\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\f\u000b\u0002\u0002\u00d0\u00d1\u0007\u001c\u0002\u0002",
    "\u00d1\u00d2\u0005\u0010\t\f\u00d2\u00d3\b\t\u0001\u0002\u00d3\u00fd",
    "\u0003\u0002\u0002\u0002\u00d4\u00d5\f\n\u0002\u0002\u00d5\u00d6\u0007",
    "\u001d\u0002\u0002\u00d6\u00d7\u0005\u0010\t\u000b\u00d7\u00d8\b\t\u0001",
    "\u0002\u00d8\u00fd\u0003\u0002\u0002\u0002\u00d9\u00da\f\t\u0002\u0002",
    "\u00da\u00db\u0007!\u0002\u0002\u00db\u00dc\u0005\u0010\t\n\u00dc\u00dd",
    "\b\t\u0001\u0002\u00dd\u00fd\u0003\u0002\u0002\u0002\u00de\u00df\f\b",
    "\u0002\u0002\u00df\u00e0\u0007$\u0002\u0002\u00e0\u00e1\u0005\u0010",
    "\t\t\u00e1\u00e2\b\t\u0001\u0002\u00e2\u00fd\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\f\u0007\u0002\u0002\u00e4\u00e5\u0007(\u0002\u0002\u00e5",
    "\u00e6\u0005\u0010\t\b\u00e6\u00e7\b\t\u0001\u0002\u00e7\u00fd\u0003",
    "\u0002\u0002\u0002\u00e8\u00e9\f\u0006\u0002\u0002\u00e9\u00ea\u0007",
    "%\u0002\u0002\u00ea\u00eb\u0005\u0010\t\u0007\u00eb\u00ec\b\t\u0001",
    "\u0002\u00ec\u00fd\u0003\u0002\u0002\u0002\u00ed\u00ee\f\u0005\u0002",
    "\u0002\u00ee\u00ef\u0007&\u0002\u0002\u00ef\u00f0\u0005\u0010\t\u0006",
    "\u00f0\u00f1\b\t\u0001\u0002\u00f1\u00fd\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\f\u0004\u0002\u0002\u00f3\u00f4\u0007\u001f\u0002\u0002\u00f4",
    "\u00f5\u0005\u0010\t\u0002\u00f5\u00f6\u0007 \u0002\u0002\u00f6\u00f7",
    "\u0005\u0010\t\u0005\u00f7\u00f8\b\t\u0001\u0002\u00f8\u00fd\u0003\u0002",
    "\u0002\u0002\u00f9\u00fa\f\u0014\u0002\u0002\u00fa\u00fb\u0007\u001e",
    "\u0002\u0002\u00fb\u00fd\b\t\u0001\u0002\u00fc\u00a7\u0003\u0002\u0002",
    "\u0002\u00fc\u00ac\u0003\u0002\u0002\u0002\u00fc\u00b1\u0003\u0002\u0002",
    "\u0002\u00fc\u00b6\u0003\u0002\u0002\u0002\u00fc\u00bb\u0003\u0002\u0002",
    "\u0002\u00fc\u00c0\u0003\u0002\u0002\u0002\u00fc\u00c5\u0003\u0002\u0002",
    "\u0002\u00fc\u00ca\u0003\u0002\u0002\u0002\u00fc\u00cf\u0003\u0002\u0002",
    "\u0002\u00fc\u00d4\u0003\u0002\u0002\u0002\u00fc\u00d9\u0003\u0002\u0002",
    "\u0002\u00fc\u00de\u0003\u0002\u0002\u0002\u00fc\u00e3\u0003\u0002\u0002",
    "\u0002\u00fc\u00e8\u0003\u0002\u0002\u0002\u00fc\u00ed\u0003\u0002\u0002",
    "\u0002\u00fc\u00f2\u0003\u0002\u0002\u0002\u00fc\u00f9\u0003\u0002\u0002",
    "\u0002\u00fd\u0100\u0003\u0002\u0002\u0002\u00fe\u00fc\u0003\u0002\u0002",
    "\u0002\u00fe\u00ff\u0003\u0002\u0002\u0002\u00ff\u0011\u0003\u0002\u0002",
    "\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0101\u0102\u0005\u0010\t",
    "\u0002\u0102\u0109\b\n\u0001\u0002\u0103\u0104\u0007\u001a\u0002\u0002",
    "\u0104\u0105\u0005\u0010\t\u0002\u0105\u0106\b\n\u0001\u0002\u0106\u0108",
    "\u0003\u0002\u0002\u0002\u0107\u0103\u0003\u0002\u0002\u0002\u0108\u010b",
    "\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u0109\u010a",
    "\u0003\u0002\u0002\u0002\u010a\u0013\u0003\u0002\u0002\u0002\u010b\u0109",
    "\u0003\u0002\u0002\u0002\u010c\u010d\u00071\u0002\u0002\u010d\u010e",
    "\u0007 \u0002\u0002\u010e\u010f\u0007\u0004\u0002\u0002\u010f\u0110",
    "\u0007\u0019\u0002\u0002\u0110\u0111\b\u000b\u0001\u0002\u0111\u0015",
    "\u0003\u0002\u0002\u0002\u0112\u0113\u00071\u0002\u0002\u0113\u0114",
    "\u0007\u001b\u0002\u0002\u0114\u0115\u0005\u0010\t\u0002\u0115\u0116",
    "\u0007\u0019\u0002\u0002\u0116\u0117\b\f\u0001\u0002\u0117\u0017\u0003",
    "\u0002\u0002\u0002\u0012\u001b\"13;IT_en\u008a\u009b\u00a5\u00fc\u00fe",
    "\u0109"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'main'", null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, "';'", "','", "'='", 
                     "'>'", "'<'", "'!'", "'?'", "':'", "'=='", "'<='", 
                     "'>='", "'<>'", null, null, null, null, "'+'", "'-'", 
                     "'*'", "'/'", "'^'", "'%'", "'('", "')'" ];

var symbolicNames = [ null, null, "PrimitiveType", "BOOLEANCONSTANT", "STRINGCONSTANT", 
                      "REALCONSTANT", "STRING", "REAL", "BOOL", "TRUE", 
                      "FALSE", "ELSE", "THEN", "IF", "RETURN", "WHILE", 
                      "MODULE", "BEGIN", "END", "INPUT", "OUTPUT", "WRITE", 
                      "READ", "SEMICOLON", "COMMA", "ASSIGN", "GT", "LT", 
                      "FACTORIAL", "QUESTION", "COLON", "EQUAL", "LE", "GE", 
                      "NOTEQUAL", "AND", "OR", "NOT", "XOR", "ADD", "SUB", 
                      "MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", 
                      "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "program", "moduleDeclaration", "mainModuleDeclaration", 
                   "moduleBlock", "block", "supBlock", "statement", "expression", 
                   "expressionList", "varDeclaration", "assignment" ];

function FaplaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    rootScope = new Scope('root', null);
    currentScope = rootScope;
    functionTable = [];


    return this;
}

FaplaParser.prototype = Object.create(antlr4.Parser.prototype);
FaplaParser.prototype.constructor = FaplaParser;

Object.defineProperty(FaplaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FaplaParser.EOF = antlr4.Token.EOF;
FaplaParser.T__0 = 1;
FaplaParser.PrimitiveType = 2;
FaplaParser.BOOLEANCONSTANT = 3;
FaplaParser.STRINGCONSTANT = 4;
FaplaParser.REALCONSTANT = 5;
FaplaParser.STRING = 6;
FaplaParser.REAL = 7;
FaplaParser.BOOL = 8;
FaplaParser.TRUE = 9;
FaplaParser.FALSE = 10;
FaplaParser.ELSE = 11;
FaplaParser.THEN = 12;
FaplaParser.IF = 13;
FaplaParser.RETURN = 14;
FaplaParser.WHILE = 15;
FaplaParser.MODULE = 16;
FaplaParser.BEGIN = 17;
FaplaParser.END = 18;
FaplaParser.INPUT = 19;
FaplaParser.OUTPUT = 20;
FaplaParser.WRITE = 21;
FaplaParser.READ = 22;
FaplaParser.SEMICOLON = 23;
FaplaParser.COMMA = 24;
FaplaParser.ASSIGN = 25;
FaplaParser.GT = 26;
FaplaParser.LT = 27;
FaplaParser.FACTORIAL = 28;
FaplaParser.QUESTION = 29;
FaplaParser.COLON = 30;
FaplaParser.EQUAL = 31;
FaplaParser.LE = 32;
FaplaParser.GE = 33;
FaplaParser.NOTEQUAL = 34;
FaplaParser.AND = 35;
FaplaParser.OR = 36;
FaplaParser.NOT = 37;
FaplaParser.XOR = 38;
FaplaParser.ADD = 39;
FaplaParser.SUB = 40;
FaplaParser.MUL = 41;
FaplaParser.DIV = 42;
FaplaParser.POW = 43;
FaplaParser.MOD = 44;
FaplaParser.PO = 45;
FaplaParser.PC = 46;
FaplaParser.Identifier = 47;
FaplaParser.WS = 48;
FaplaParser.COMMENT = 49;
FaplaParser.LINE_COMMENT = 50;

FaplaParser.RULE_program = 0;
FaplaParser.RULE_moduleDeclaration = 1;
FaplaParser.RULE_mainModuleDeclaration = 2;
FaplaParser.RULE_moduleBlock = 3;
FaplaParser.RULE_block = 4;
FaplaParser.RULE_supBlock = 5;
FaplaParser.RULE_statement = 6;
FaplaParser.RULE_expression = 7;
FaplaParser.RULE_expressionList = 8;
FaplaParser.RULE_varDeclaration = 9;
FaplaParser.RULE_assignment = 10;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.mainModuleDeclaration = function() {
    return this.getTypedRuleContext(MainModuleDeclarationContext,0);
};

ProgramContext.prototype.moduleDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ModuleDeclarationContext);
    } else {
        return this.getTypedRuleContext(ModuleDeclarationContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitProgram(this);
	}
};




FaplaParser.ProgramContext = ProgramContext;

FaplaParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FaplaParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 22;
                this.moduleDeclaration(); 
            }
            this.state = 27;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 28;
        this.mainModuleDeclaration();
        this.state = 32;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.MODULE) {
            this.state = 29;
            this.moduleDeclaration();
            this.state = 34;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModuleDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_moduleDeclaration;
    this.a = null; // Token
    this._Identifier = null; // Token
    this._PrimitiveType = null; // Token
    return this;
}

ModuleDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleDeclarationContext.prototype.constructor = ModuleDeclarationContext;

ModuleDeclarationContext.prototype.MODULE = function() {
    return this.getToken(FaplaParser.MODULE, 0);
};

ModuleDeclarationContext.prototype.moduleBlock = function() {
    return this.getTypedRuleContext(ModuleBlockContext,0);
};

ModuleDeclarationContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.Identifier);
    } else {
        return this.getToken(FaplaParser.Identifier, i);
    }
};


ModuleDeclarationContext.prototype.INPUT = function() {
    return this.getToken(FaplaParser.INPUT, 0);
};

ModuleDeclarationContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.COLON);
    } else {
        return this.getToken(FaplaParser.COLON, i);
    }
};


ModuleDeclarationContext.prototype.OUTPUT = function() {
    return this.getToken(FaplaParser.OUTPUT, 0);
};

ModuleDeclarationContext.prototype.PrimitiveType = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.PrimitiveType);
    } else {
        return this.getToken(FaplaParser.PrimitiveType, i);
    }
};


ModuleDeclarationContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.SEMICOLON);
    } else {
        return this.getToken(FaplaParser.SEMICOLON, i);
    }
};


ModuleDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterModuleDeclaration(this);
	}
};

ModuleDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitModuleDeclaration(this);
	}
};




FaplaParser.ModuleDeclarationContext = ModuleDeclarationContext;

FaplaParser.prototype.moduleDeclaration = function() {

    var localctx = new ModuleDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FaplaParser.RULE_moduleDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(FaplaParser.MODULE);
        this.state = 36;
        localctx.a = this.match(FaplaParser.Identifier);

                    var scope = new Scope((localctx.a===null ? null : localctx.a.text), rootScope);
                    currentScope = scope;
                    var paramterList = [];
                    let f = new Function((localctx.a===null ? null : localctx.a.text), null, null);
                
        this.state = 49;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 38;
            this.match(FaplaParser.INPUT);
            this.state = 39;
            this.match(FaplaParser.COLON);
            this.state = 45; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 40;
                localctx._Identifier = this.match(FaplaParser.Identifier);
                this.state = 41;
                this.match(FaplaParser.COLON);
                this.state = 42;
                localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
                this.state = 43;
                this.match(FaplaParser.SEMICOLON);

                            var s = new Symbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase(), (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text), null);
                            paramterList.push(s);
                            currentScope.addSymbol(s);
                        
                this.state = 47; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }


                    f.parameterList = paramterList;
                
        this.state = 57;
        _la = this._input.LA(1);
        if(_la===FaplaParser.OUTPUT) {
            this.state = 52;
            this.match(FaplaParser.OUTPUT);
            this.state = 53;
            this.match(FaplaParser.COLON);
            this.state = 54;
            localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
            this.state = 55;
            this.match(FaplaParser.SEMICOLON);

                        f.outputType = (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text);
                    
        }


                    functionTable.push(f);
                    console.log(functionTable);
                
        this.state = 60;
        this.moduleBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MainModuleDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_mainModuleDeclaration;
    return this;
}

MainModuleDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainModuleDeclarationContext.prototype.constructor = MainModuleDeclarationContext;

MainModuleDeclarationContext.prototype.MODULE = function() {
    return this.getToken(FaplaParser.MODULE, 0);
};

MainModuleDeclarationContext.prototype.moduleBlock = function() {
    return this.getTypedRuleContext(ModuleBlockContext,0);
};

MainModuleDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterMainModuleDeclaration(this);
	}
};

MainModuleDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitMainModuleDeclaration(this);
	}
};




FaplaParser.MainModuleDeclarationContext = MainModuleDeclarationContext;

FaplaParser.prototype.mainModuleDeclaration = function() {

    var localctx = new MainModuleDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FaplaParser.RULE_mainModuleDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(FaplaParser.MODULE);
        this.state = 63;
        this.match(FaplaParser.T__0);

                    var mainScope = new Scope('main', rootScope);
                    currentScope = mainScope;
                    let f = new Function('main', null, null);
                    functionTable.push(f);
                
        this.state = 65;
        this.moduleBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ModuleBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_moduleBlock;
    return this;
}

ModuleBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleBlockContext.prototype.constructor = ModuleBlockContext;

ModuleBlockContext.prototype.BEGIN = function() {
    return this.getToken(FaplaParser.BEGIN, 0);
};

ModuleBlockContext.prototype.END = function() {
    return this.getToken(FaplaParser.END, 0);
};

ModuleBlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ModuleBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterModuleBlock(this);
	}
};

ModuleBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitModuleBlock(this);
	}
};




FaplaParser.ModuleBlockContext = ModuleBlockContext;

FaplaParser.prototype.moduleBlock = function() {

    var localctx = new ModuleBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FaplaParser.RULE_moduleBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(FaplaParser.BEGIN);
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
            this.state = 68;
            this.statement();
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }

                     var f = getFunction(currentScope.name);
                     if (!f.returnflag && f.outputType) {
                         FaplaParser.prototype.logger.error("module " + f.name + " must be has return experssion");
                     }
                
        this.state = 75;
        this.match(FaplaParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.BEGIN = function() {
    return this.getToken(FaplaParser.BEGIN, 0);
};

BlockContext.prototype.END = function() {
    return this.getToken(FaplaParser.END, 0);
};

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitBlock(this);
	}
};




FaplaParser.BlockContext = BlockContext;

FaplaParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FaplaParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(FaplaParser.BEGIN);
        currentScope = currentScope.enterScope();
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
            this.state = 79;
            this.statement();
            this.state = 84;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 85;
        this.match(FaplaParser.END);
        currentScope = currentScope.exitScope();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SupBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_supBlock;
    return this;
}

SupBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SupBlockContext.prototype.constructor = SupBlockContext;

SupBlockContext.prototype.BEGIN = function() {
    return this.getToken(FaplaParser.BEGIN, 0);
};

SupBlockContext.prototype.END = function() {
    return this.getToken(FaplaParser.END, 0);
};

SupBlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

SupBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterSupBlock(this);
	}
};

SupBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitSupBlock(this);
	}
};




FaplaParser.SupBlockContext = SupBlockContext;

FaplaParser.prototype.supBlock = function() {

    var localctx = new SupBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FaplaParser.RULE_supBlock);
    var _la = 0; // Token type
    try {
        this.state = 99;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.match(FaplaParser.BEGIN);
            currentScope = currentScope.enterScope();
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
                this.state = 90;
                this.statement();
                this.state = 95;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 96;
            this.match(FaplaParser.END);
            currentScope = currentScope.exitScope();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.statement();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_statement;
    this.type = null
    this._expression = null; // ExpressionContext
    this._Identifier = null; // Token
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.IF = function() {
    return this.getToken(FaplaParser.IF, 0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.THEN = function() {
    return this.getToken(FaplaParser.THEN, 0);
};

StatementContext.prototype.supBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SupBlockContext);
    } else {
        return this.getTypedRuleContext(SupBlockContext,i);
    }
};

StatementContext.prototype.ELSE = function() {
    return this.getToken(FaplaParser.ELSE, 0);
};

StatementContext.prototype.WHILE = function() {
    return this.getToken(FaplaParser.WHILE, 0);
};

StatementContext.prototype.RETURN = function() {
    return this.getToken(FaplaParser.RETURN, 0);
};

StatementContext.prototype.SEMICOLON = function() {
    return this.getToken(FaplaParser.SEMICOLON, 0);
};

StatementContext.prototype.WRITE = function() {
    return this.getToken(FaplaParser.WRITE, 0);
};

StatementContext.prototype.READ = function() {
    return this.getToken(FaplaParser.READ, 0);
};

StatementContext.prototype.Identifier = function() {
    return this.getToken(FaplaParser.Identifier, 0);
};

StatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

StatementContext.prototype.varDeclaration = function() {
    return this.getTypedRuleContext(VarDeclarationContext,0);
};

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitStatement(this);
	}
};




FaplaParser.StatementContext = StatementContext;

FaplaParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FaplaParser.RULE_statement);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 101;
            this.match(FaplaParser.IF);
            this.state = 102;
            localctx._expression = this.expression(0);
               if(!TypeConverting.canConvertTo(localctx._expression.type, "bool"))
                            FaplaParser.prototype.logger.error("expression " + (localctx._expression===null ? null : this._input.getText(new antlr4.Interval(localctx._expression.start,localctx._expression.stop))) + " must be a bool in if-statement condition");
                    
            this.state = 104;
            this.match(FaplaParser.THEN);
            this.state = 105;
            this.supBlock();
            this.state = 108;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            if(la_===1) {
                this.state = 106;
                this.match(FaplaParser.ELSE);
                this.state = 107;
                this.supBlock();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 110;
            this.match(FaplaParser.WHILE);
            this.state = 111;
            localctx._expression = this.expression(0);
            this.state = 112;
            this.supBlock();
               if(!TypeConverting.canConvertTo(localctx._expression.type, "bool"))
                            FaplaParser.prototype.logger.error("expression " + (localctx._expression===null ? null : this._input.getText(new antlr4.Interval(localctx._expression.start,localctx._expression.stop))) + " must be a bool in while-statement condition");
                    
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 115;
            this.match(FaplaParser.RETURN);
            this.state = 116;
            localctx._expression = this.expression(0);
            this.state = 117;
            this.match(FaplaParser.SEMICOLON);

                        var f = getFunction(currentScope.name);
                        console.log(f);
                        f.returnflag = true;
                        if(!f.outputType) {
                            FaplaParser.prototype.logger.error("module " + f.name + " has no output");
                        } else if(!TypeConverting.canConvertTo(localctx._expression.type, f.outputType)) {
                            FaplaParser.prototype.logger.error("module " + f.name + " must return " + f.outputType);
                        }
                    
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 120;
            this.match(FaplaParser.WRITE);
            this.state = 121;
            localctx._expression = this.expression(0);

                        if(!TypeConverting.canConvertTo(localctx._expression.type, "string")) {
                            FaplaParser.prototype.logger.error("write exprssion must be a string");
                        }
                    
            this.state = 123;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 125;
            this.match(FaplaParser.READ);
            this.state = 126;
            localctx._Identifier = this.match(FaplaParser.Identifier);
            this.state = 127;
            this.match(FaplaParser.SEMICOLON);

                        if(!currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase())) {
                            FaplaParser.prototype.logger.error("variable " + (localctx._Identifier===null ? null : localctx._Identifier.text) + " must be declared before");
                            localctx.type =  "noType"
                        } else {
                            localctx.type =  currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase()).type
                        }
                    
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 129;
            this.expression(0);
            this.state = 130;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 132;
            this.assignment();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 133;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 134;
            this.varDeclaration();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 135;
            this.block();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_expression;
    this.value = null
    this.type = null
    this.a = null; // ExpressionContext
    this._STRINGCONSTANT = null; // Token
    this._REALCONSTANT = null; // Token
    this._BOOLEANCONSTANT = null; // Token
    this._expression = null; // ExpressionContext
    this._Identifier = null; // Token
    this._expressionList = null; // ExpressionListContext
    this.b = null; // ExpressionContext
    this.c = null; // ExpressionContext
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.STRINGCONSTANT = function() {
    return this.getToken(FaplaParser.STRINGCONSTANT, 0);
};

ExpressionContext.prototype.REALCONSTANT = function() {
    return this.getToken(FaplaParser.REALCONSTANT, 0);
};

ExpressionContext.prototype.BOOLEANCONSTANT = function() {
    return this.getToken(FaplaParser.BOOLEANCONSTANT, 0);
};

ExpressionContext.prototype.PO = function() {
    return this.getToken(FaplaParser.PO, 0);
};

ExpressionContext.prototype.PC = function() {
    return this.getToken(FaplaParser.PC, 0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.Identifier = function() {
    return this.getToken(FaplaParser.Identifier, 0);
};

ExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionContext.prototype.NOT = function() {
    return this.getToken(FaplaParser.NOT, 0);
};

ExpressionContext.prototype.POW = function() {
    return this.getToken(FaplaParser.POW, 0);
};

ExpressionContext.prototype.MUL = function() {
    return this.getToken(FaplaParser.MUL, 0);
};

ExpressionContext.prototype.DIV = function() {
    return this.getToken(FaplaParser.DIV, 0);
};

ExpressionContext.prototype.MOD = function() {
    return this.getToken(FaplaParser.MOD, 0);
};

ExpressionContext.prototype.ADD = function() {
    return this.getToken(FaplaParser.ADD, 0);
};

ExpressionContext.prototype.SUB = function() {
    return this.getToken(FaplaParser.SUB, 0);
};

ExpressionContext.prototype.LE = function() {
    return this.getToken(FaplaParser.LE, 0);
};

ExpressionContext.prototype.GE = function() {
    return this.getToken(FaplaParser.GE, 0);
};

ExpressionContext.prototype.GT = function() {
    return this.getToken(FaplaParser.GT, 0);
};

ExpressionContext.prototype.LT = function() {
    return this.getToken(FaplaParser.LT, 0);
};

ExpressionContext.prototype.EQUAL = function() {
    return this.getToken(FaplaParser.EQUAL, 0);
};

ExpressionContext.prototype.NOTEQUAL = function() {
    return this.getToken(FaplaParser.NOTEQUAL, 0);
};

ExpressionContext.prototype.XOR = function() {
    return this.getToken(FaplaParser.XOR, 0);
};

ExpressionContext.prototype.AND = function() {
    return this.getToken(FaplaParser.AND, 0);
};

ExpressionContext.prototype.OR = function() {
    return this.getToken(FaplaParser.OR, 0);
};

ExpressionContext.prototype.QUESTION = function() {
    return this.getToken(FaplaParser.QUESTION, 0);
};

ExpressionContext.prototype.COLON = function() {
    return this.getToken(FaplaParser.COLON, 0);
};

ExpressionContext.prototype.FACTORIAL = function() {
    return this.getToken(FaplaParser.FACTORIAL, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitExpression(this);
	}
};



FaplaParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, FaplaParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 139;
            localctx._STRINGCONSTANT = this.match(FaplaParser.STRINGCONSTANT);
            localctx.type = "string";
                                    localctx.value = (localctx._STRINGCONSTANT===null ? null : localctx._STRINGCONSTANT.text); 
            break;

        case 2:
            this.state = 141;
            localctx._REALCONSTANT = this.match(FaplaParser.REALCONSTANT);
            localctx.type = "real";
                                  localctx.value = (localctx._REALCONSTANT===null ? null : localctx._REALCONSTANT.text); 
            break;

        case 3:
            this.state = 143;
            localctx._BOOLEANCONSTANT = this.match(FaplaParser.BOOLEANCONSTANT);
            localctx.type = "bool";
                                     localctx.value = (localctx._BOOLEANCONSTANT===null ? null : localctx._BOOLEANCONSTANT.text); 
            break;

        case 4:
            this.state = 145;
            this.match(FaplaParser.PO);
            this.state = 146;
            localctx.a = localctx._expression = this.expression(0);
            this.state = 147;
            this.match(FaplaParser.PC);

                        localctx.value =  "(" + localctx.value + ")"
                        localctx.type =  localctx.a.type
                    
            break;

        case 5:
            this.state = 150;
            localctx._Identifier = this.match(FaplaParser.Identifier);
            this.state = 151;
            this.match(FaplaParser.PO);
            this.state = 153;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
                this.state = 152;
                localctx.a = localctx._expressionList = this.expressionList();
            }

            this.state = 155;
            this.match(FaplaParser.PC);

                        var callerName = currentScope.name;
                        var calleName = (localctx._Identifier===null ? null : localctx._Identifier.text);
                        var access = hasAccess(callerName, calleName, functionTable);
                        if(access == "notFound") {
                            FaplaParser.prototype.logger.error("module " + calleName + " not defined");
                        } else if(access == "notDecBefore") {
                            FaplaParser.prototype.logger.error("module " + calleName + " not defined before module " + callerName);
                        } else {
                            let func = getFunction(calleName);
                            checkArguments(func.parameterList, localctx._expressionList.type);
                        }
                    
            break;

        case 6:
            this.state = 157;
            this.match(FaplaParser.NOT);
            this.state = 158;
            localctx.a = localctx._expression = this.expression(19);
            if(TypeConverting.canConvertTo(localctx.a.type, "bool")) {
                                       localctx.type =  "bool"
                                   } else {
                                       FaplaParser.prototype.logger.error(localctx.a.type + " can not NOT");
                                       localctx.type = "noType"
                                   }
                                  
            break;

        case 7:
            this.state = 161;
            localctx._Identifier = this.match(FaplaParser.Identifier);
            var s = currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase());
                                if(!s) {
                                    FaplaParser.prototype.logger.error("variable " +  (localctx._Identifier===null ? null : localctx._Identifier.text) + " not defined");
                                    localctx.type =  "noType"
                                } else {
                                    localctx.type =  s.type
                                    localctx.value =  s.value
                                }
                               
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 252;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 250;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 165;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 166;
                    this.match(FaplaParser.POW);
                    this.state = 167;
                    localctx.b = localctx._expression = this.expression(18);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                              localctx.type =  "real"
                                         else {
                                              FaplaParser.prototype.logger.error(localctx.a.type + " can not POW with " + localctx.b.type);
                                              localctx.type = "noType"
                                         }
                                        
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 170;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 171;
                    this.match(FaplaParser.MUL);
                    this.state = 172;
                    localctx.b = localctx._expression = this.expression(17);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                            localctx.type =  "real"
                                       else {
                                            FaplaParser.prototype.logger.error(localctx.a.type + " can not MUL with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 175;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 176;
                    this.match(FaplaParser.DIV);
                    this.state = 177;
                    localctx.b = localctx._expression = this.expression(16);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                         localctx.type =  "real"
                                      else {
                                         FaplaParser.prototype.logger.error(localctx.a.type + " can not DIV with " + localctx.b.type);
                                         localctx.type = "noType"
                                      }
                                      
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 180;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 181;
                    this.match(FaplaParser.MOD);
                    this.state = 182;
                    localctx.b = localctx._expression = this.expression(15);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                          localctx.type =  "real"
                                      else {
                                          FaplaParser.prototype.logger.error(localctx.a.type + " can not MOD with " + localctx.b.type);
                                          localctx.type = "noType"
                                      }
                                      
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 185;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 186;
                    this.match(FaplaParser.ADD);
                    this.state = 187;
                    localctx.b = localctx._expression = this.expression(14);

                                          localctx.type =  TypeConverting.max(localctx.a.type, localctx.b.type)
                                      
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 190;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 191;
                    this.match(FaplaParser.SUB);
                    this.state = 192;
                    localctx.b = localctx._expression = this.expression(13);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                            localctx.type =  "real"
                                       else {
                                            FaplaParser.prototype.logger.error(localctx.a.type + " can not SUB with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 195;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 196;
                    this.match(FaplaParser.LE);
                    this.state = 197;
                    localctx.b = localctx._expression = this.expression(12);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                             localctx.type =  "bool"
                                        else {
                                             FaplaParser.prototype.logger.error(localctx.a.type + " can not LE with " + localctx.b.type);
                                             localctx.type = "noType"
                                        }
                                       
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 200;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 201;
                    this.match(FaplaParser.GE);
                    this.state = 202;
                    localctx.b = localctx._expression = this.expression(11);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                             localctx.type =  "bool"
                                        else {
                                             FaplaParser.prototype.logger.error(localctx.a.type + " can not GE with " + localctx.b.type);
                                             localctx.type = "noType"
                                        }
                                       
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 205;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 206;
                    this.match(FaplaParser.GT);
                    this.state = 207;
                    localctx.b = localctx._expression = this.expression(10);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                         localctx.type =  "bool"
                                       else {
                                         FaplaParser.prototype.logger.error(localctx.a.type + " can not GT with " + localctx.b.type);
                                         localctx.type = "noType"
                                       }
                                      
                    break;

                case 10:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 210;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 211;
                    this.match(FaplaParser.LT);
                    this.state = 212;
                    localctx.b = localctx._expression = this.expression(9);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                         localctx.type =  "bool"
                                       else {
                                         FaplaParser.prototype.logger.error(localctx.a.type + " can not SUB with " + localctx.b.type);
                                         localctx.type = "noType"
                                       }
                                      
                    break;

                case 11:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 215;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 216;
                    this.match(FaplaParser.EQUAL);
                    this.state = 217;
                    localctx.b = localctx._expression = this.expression(8);
                    if(TypeConverting.canConvertTo(localctx.a.type, localctx.b.type) && TypeConverting.canConvertTo(localctx.b.type, localctx.a.type))
                                            localctx.type =  "bool"
                                       else {
                                            FaplaParser.prototype.logger.error(localctx.a.type + " can not EQUAL with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 12:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 220;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 221;
                    this.match(FaplaParser.NOTEQUAL);
                    this.state = 222;
                    localctx.b = localctx._expression = this.expression(7);
                    if(TypeConverting.canConvertTo(localctx.a.type, localctx.b.type) && TypeConverting.canConvertTo(localctx.b.type, localctx.a.type))
                                            localctx.type =  "bool"
                                       else {
                                            FaplaParser.prototype.logger.error(localctx.a.type + " can not NOTEQUAL with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 13:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 225;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 226;
                    this.match(FaplaParser.XOR);
                    this.state = 227;
                    localctx.b = localctx._expression = this.expression(6);
                    if(TypeConverting.canConvertTo(localctx.a.type, "bool") && TypeConverting.canConvertTo(localctx.b.type, "bool"))
                                            localctx.type =  "real"
                                       else {
                                            FaplaParser.prototype.logger.error(localctx.a.type + " can not XOR with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 14:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 230;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 231;
                    this.match(FaplaParser.AND);
                    this.state = 232;
                    localctx.b = localctx._expression = this.expression(5);
                    if(TypeConverting.canConvertTo(localctx.a.type, "bool") && TypeConverting.canConvertTo(localctx.b.type, "bool"))
                                            localctx.type =  "bool"
                                       else {
                                            FaplaParser.prototype.logger.error(localctx.a.type + " can not AND with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 15:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 235;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 236;
                    this.match(FaplaParser.OR);
                    this.state = 237;
                    localctx.b = localctx._expression = this.expression(4);
                    if(TypeConverting.canConvertTo(localctx.a.type, "bool") && TypeConverting.canConvertTo(localctx.b.type, "bool"))
                                            localctx.type =  "bool"
                                       else {
                                            FaplaParser.prototype.logger.error(localctx.a.type + " can not OR with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 16:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 240;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 241;
                    this.match(FaplaParser.QUESTION);
                    this.state = 242;
                    localctx.b = localctx._expression = this.expression(0);
                    this.state = 243;
                    this.match(FaplaParser.COLON);
                    this.state = 244;
                    localctx.c = localctx._expression = this.expression(3);
                    if(TypeConverting.canConvertTo(localctx.a.type, "bool"))
                                            localctx.type =  TypeConverting.max(localctx.b.type, localctx.c.type)
                                       else {
                                            FaplaParser.prototype.logger.error("condition expression must have a bool");
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 17:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 248;
                    this.match(FaplaParser.FACTORIAL);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real")) {
                                                                  localctx.type =  "real"
                                                              } else {
                                                                  FaplaParser.prototype.logger.error(localctx.a.type + " can not factorial");
                                                                  localctx.type = "noType"
                                                              }
                                                             
                    break;

                } 
            }
            this.state = 254;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_expressionList;
    this.type = null
    this.a = null; // ExpressionContext
    this.b = null; // ExpressionContext
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.COMMA);
    } else {
        return this.getToken(FaplaParser.COMMA, i);
    }
};


ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitExpressionList(this);
	}
};




FaplaParser.ExpressionListContext = ExpressionListContext;

FaplaParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FaplaParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        localctx.a = this.expression(0);
        localctx.type =  [localctx.a.type]
        this.state = 263;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.COMMA) {
            this.state = 257;
            this.match(FaplaParser.COMMA);
            this.state = 258;
            localctx.b = this.expression(0);
            localctx.type.push(localctx.b.type);
            this.state = 265;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_varDeclaration;
    this._Identifier = null; // Token
    this._PrimitiveType = null; // Token
    return this;
}

VarDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclarationContext.prototype.constructor = VarDeclarationContext;

VarDeclarationContext.prototype.Identifier = function() {
    return this.getToken(FaplaParser.Identifier, 0);
};

VarDeclarationContext.prototype.COLON = function() {
    return this.getToken(FaplaParser.COLON, 0);
};

VarDeclarationContext.prototype.PrimitiveType = function() {
    return this.getToken(FaplaParser.PrimitiveType, 0);
};

VarDeclarationContext.prototype.SEMICOLON = function() {
    return this.getToken(FaplaParser.SEMICOLON, 0);
};

VarDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterVarDeclaration(this);
	}
};

VarDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitVarDeclaration(this);
	}
};




FaplaParser.VarDeclarationContext = VarDeclarationContext;

FaplaParser.prototype.varDeclaration = function() {

    var localctx = new VarDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FaplaParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        localctx._Identifier = this.match(FaplaParser.Identifier);
        this.state = 267;
        this.match(FaplaParser.COLON);
        this.state = 268;
        localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
        this.state = 269;
        this.match(FaplaParser.SEMICOLON);

                    if(currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase())) {
                        FaplaParser.prototype.logger.error("variable " +  (localctx._Identifier===null ? null : localctx._Identifier.text) + " decleared before");
                    } else {
                        currentScope.addSymbol(new Symbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase(), (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text), null));
                    }
                
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_assignment;
    this.type = null
    this._Identifier = null; // Token
    this._expression = null; // ExpressionContext
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.Identifier = function() {
    return this.getToken(FaplaParser.Identifier, 0);
};

AssignmentContext.prototype.ASSIGN = function() {
    return this.getToken(FaplaParser.ASSIGN, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.SEMICOLON = function() {
    return this.getToken(FaplaParser.SEMICOLON, 0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitAssignment(this);
	}
};




FaplaParser.AssignmentContext = AssignmentContext;

FaplaParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FaplaParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        localctx._Identifier = this.match(FaplaParser.Identifier);
        this.state = 273;
        this.match(FaplaParser.ASSIGN);
        this.state = 274;
        localctx._expression = this.expression(0);
        this.state = 275;
        this.match(FaplaParser.SEMICOLON);

                    var s = currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase());
                    if(!s) {
                        FaplaParser.prototype.logger.error("variable " +  (localctx._Identifier===null ? null : localctx._Identifier.text) + " not defined");
                        localctx.type =  "noType"
                    } else {
                        if(TypeConverting.canConvertTo(localctx._expression.type, s.type)) {
                            s.value = localctx._expression.value;
                            localctx.type =  s.type
                        } else {
                            FaplaParser.prototype.logger.error("can not assign " + localctx._expression.type + " to " + s.type);
                            localctx.type =  "noType"
                        }
                    }
                
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


FaplaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FaplaParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);
		case 1:
			return this.precpred(this._ctx, 16);
		case 2:
			return this.precpred(this._ctx, 15);
		case 3:
			return this.precpred(this._ctx, 14);
		case 4:
			return this.precpred(this._ctx, 13);
		case 5:
			return this.precpred(this._ctx, 12);
		case 6:
			return this.precpred(this._ctx, 11);
		case 7:
			return this.precpred(this._ctx, 10);
		case 8:
			return this.precpred(this._ctx, 9);
		case 9:
			return this.precpred(this._ctx, 8);
		case 10:
			return this.precpred(this._ctx, 7);
		case 11:
			return this.precpred(this._ctx, 6);
		case 12:
			return this.precpred(this._ctx, 5);
		case 13:
			return this.precpred(this._ctx, 4);
		case 14:
			return this.precpred(this._ctx, 3);
		case 15:
			return this.precpred(this._ctx, 2);
		case 16:
			return this.precpred(this._ctx, 18);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FaplaParser = FaplaParser;
