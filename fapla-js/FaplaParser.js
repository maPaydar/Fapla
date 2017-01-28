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
var code = "";

function hasAccess(callerName, calleName, functionTable) {
    var i = 0, j = 0;
    for(i = 0; i < functionTable.length; i++) {
        if(functionTable[i].name == callerName.toLowerCase()) {
            break;
        }
    }
    for(j = 0; j < functionTable.length; j++) {
        if(functionTable[j].name == calleName.toLowerCase()) {
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
        if(functionTable[i].name == functionName.toLowerCase()) {
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
        for (i = 0; i < func.parameterList.length; i++) {
            if(func.parameterList[i].type != args[i])
                break;
        }
        if(i < func.parameterList.length) {
            FaplaParser.prototype.logger.error("module " + func.name + " need " + func.toString() + " but found " + args);
        }
    }
}

var grammarFileName = "Fapla.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00034\u0133\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002!\n\u0002\f\u0002\u000e\u0002$\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u00032\n\u0003\r\u0003\u000e\u00033\u0005\u00036\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003>\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005M\n\u0005\f\u0005\u000e",
    "\u0005P\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "[\n\u0006\f\u0006\u000e\u0006^\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0007\u0007j\n\u0007\f\u0007\u000e\u0007m\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007u\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b\u0080\n\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u00a2\n\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00b6\n\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00c0",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u0117\n\t\f\t\u000e",
    "\t\u011a\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\n\u0122\n\n\f\n\u000e\n\u0125\u000b\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0002\u0003\u0010\r\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0002\u0002\u0153\u0002\u001b\u0003",
    "\u0002\u0002\u0002\u0004\'\u0003\u0002\u0002\u0002\u0006B\u0003\u0002",
    "\u0002\u0002\bG\u0003\u0002\u0002\u0002\nT\u0003\u0002\u0002\u0002\f",
    "t\u0003\u0002\u0002\u0002\u000e\u00a1\u0003\u0002\u0002\u0002\u0010",
    "\u00bf\u0003\u0002\u0002\u0002\u0012\u011b\u0003\u0002\u0002\u0002\u0014",
    "\u0126\u0003\u0002\u0002\u0002\u0016\u012c\u0003\u0002\u0002\u0002\u0018",
    "\u001a\u0005\u0004\u0003\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a",
    "\u001d\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0003\u0002\u0002\u0002\u001c\u001e\u0003\u0002\u0002\u0002\u001d",
    "\u001b\u0003\u0002\u0002\u0002\u001e\"\u0005\u0006\u0004\u0002\u001f",
    "!\u0005\u0004\u0003\u0002 \u001f\u0003\u0002\u0002\u0002!$\u0003\u0002",
    "\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#",
    "%\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002%&\b\u0002\u0001",
    "\u0002&\u0003\u0003\u0002\u0002\u0002\'(\u0007\u0012\u0002\u0002()\u0007",
    "1\u0002\u0002)5\b\u0003\u0001\u0002*+\u0007\u0015\u0002\u0002+1\u0007",
    " \u0002\u0002,-\u00071\u0002\u0002-.\u0007 \u0002\u0002./\u0007\u0004",
    "\u0002\u0002/0\u0007\u0019\u0002\u000202\b\u0003\u0001\u00021,\u0003",
    "\u0002\u0002\u000223\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u000246\u0003\u0002\u0002\u00025*\u0003\u0002\u0002",
    "\u000256\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027=\b\u0003",
    "\u0001\u000289\u0007\u0016\u0002\u00029:\u0007 \u0002\u0002:;\u0007",
    "\u0004\u0002\u0002;<\u0007\u0019\u0002\u0002<>\b\u0003\u0001\u0002=",
    "8\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002",
    "\u0002?@\b\u0003\u0001\u0002@A\u0005\b\u0005\u0002A\u0005\u0003\u0002",
    "\u0002\u0002BC\u0007\u0012\u0002\u0002CD\u0007\u0003\u0002\u0002DE\b",
    "\u0004\u0001\u0002EF\u0005\b\u0005\u0002F\u0007\u0003\u0002\u0002\u0002",
    "GH\u0007\u0013\u0002\u0002HN\b\u0005\u0001\u0002IJ\u0005\u000e\b\u0002",
    "JK\b\u0005\u0001\u0002KM\u0003\u0002\u0002\u0002LI\u0003\u0002\u0002",
    "\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002",
    "\u0002\u0002OQ\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\b",
    "\u0005\u0001\u0002RS\u0007\u0014\u0002\u0002S\t\u0003\u0002\u0002\u0002",
    "TU\u0007\u0013\u0002\u0002UV\b\u0006\u0001\u0002V\\\b\u0006\u0001\u0002",
    "WX\u0005\u000e\b\u0002XY\b\u0006\u0001\u0002Y[\u0003\u0002\u0002\u0002",
    "ZW\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003\u0002",
    "\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002\u0002^\\",
    "\u0003\u0002\u0002\u0002_`\u0007\u0014\u0002\u0002`a\b\u0006\u0001\u0002",
    "ab\b\u0006\u0001\u0002b\u000b\u0003\u0002\u0002\u0002cd\u0007\u0013",
    "\u0002\u0002de\b\u0007\u0001\u0002ek\b\u0007\u0001\u0002fg\u0005\u000e",
    "\b\u0002gh\b\u0007\u0001\u0002hj\u0003\u0002\u0002\u0002if\u0003\u0002",
    "\u0002\u0002jm\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003",
    "\u0002\u0002\u0002ln\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002",
    "no\u0007\u0014\u0002\u0002op\b\u0007\u0001\u0002pu\b\u0007\u0001\u0002",
    "qr\u0005\u000e\b\u0002rs\b\u0007\u0001\u0002su\u0003\u0002\u0002\u0002",
    "tc\u0003\u0002\u0002\u0002tq\u0003\u0002\u0002\u0002u\r\u0003\u0002",
    "\u0002\u0002vw\u0007\u000f\u0002\u0002wx\b\b\u0001\u0002xy\u0005\u0010",
    "\t\u0002yz\b\b\u0001\u0002z{\u0007\u000e\u0002\u0002{\u007f\u0005\f",
    "\u0007\u0002|}\u0007\r\u0002\u0002}~\b\b\u0001\u0002~\u0080\u0005\f",
    "\u0007\u0002\u007f|\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002",
    "\u0002\u0002\u0080\u00a2\u0003\u0002\u0002\u0002\u0081\u0082\u0007\u0011",
    "\u0002\u0002\u0082\u0083\u0005\u0010\t\u0002\u0083\u0084\u0005\f\u0007",
    "\u0002\u0084\u0085\b\b\u0001\u0002\u0085\u00a2\u0003\u0002\u0002\u0002",
    "\u0086\u0087\u0007\u0010\u0002\u0002\u0087\u0088\u0005\u0010\t\u0002",
    "\u0088\u0089\u0007\u0019\u0002\u0002\u0089\u008a\b\b\u0001\u0002\u008a",
    "\u00a2\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0017\u0002\u0002\u008c",
    "\u008d\u0005\u0010\t\u0002\u008d\u008e\b\b\u0001\u0002\u008e\u008f\u0007",
    "\u0019\u0002\u0002\u008f\u00a2\u0003\u0002\u0002\u0002\u0090\u0091\u0007",
    "\u0018\u0002\u0002\u0091\u0092\u00071\u0002\u0002\u0092\u0093\u0007",
    "\u0019\u0002\u0002\u0093\u00a2\b\b\u0001\u0002\u0094\u0095\u0005\u0010",
    "\t\u0002\u0095\u0096\b\b\u0001\u0002\u0096\u0097\u0007\u0019\u0002\u0002",
    "\u0097\u00a2\u0003\u0002\u0002\u0002\u0098\u0099\u0005\u0016\f\u0002",
    "\u0099\u009a\b\b\u0001\u0002\u009a\u00a2\u0003\u0002\u0002\u0002\u009b",
    "\u009c\u0007\u0019\u0002\u0002\u009c\u00a2\b\b\u0001\u0002\u009d\u009e",
    "\u0005\u0014\u000b\u0002\u009e\u009f\b\b\u0001\u0002\u009f\u00a2\u0003",
    "\u0002\u0002\u0002\u00a0\u00a2\u0005\n\u0006\u0002\u00a1v\u0003\u0002",
    "\u0002\u0002\u00a1\u0081\u0003\u0002\u0002\u0002\u00a1\u0086\u0003\u0002",
    "\u0002\u0002\u00a1\u008b\u0003\u0002\u0002\u0002\u00a1\u0090\u0003\u0002",
    "\u0002\u0002\u00a1\u0094\u0003\u0002\u0002\u0002\u00a1\u0098\u0003\u0002",
    "\u0002\u0002\u00a1\u009b\u0003\u0002\u0002\u0002\u00a1\u009d\u0003\u0002",
    "\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2\u000f\u0003\u0002",
    "\u0002\u0002\u00a3\u00a4\b\t\u0001\u0002\u00a4\u00a5\u0007\u0006\u0002",
    "\u0002\u00a5\u00c0\b\t\u0001\u0002\u00a6\u00a7\u0007\u0007\u0002\u0002",
    "\u00a7\u00c0\b\t\u0001\u0002\u00a8\u00a9\u0007\u0005\u0002\u0002\u00a9",
    "\u00c0\b\t\u0001\u0002\u00aa\u00ab\u0007/\u0002\u0002\u00ab\u00ac\u0005",
    "\u0010\t\u0002\u00ac\u00ad\u00070\u0002\u0002\u00ad\u00ae\b\t\u0001",
    "\u0002\u00ae\u00c0\u0003\u0002\u0002\u0002\u00af\u00b0\u00071\u0002",
    "\u0002\u00b0\u00b1\u0007/\u0002\u0002\u00b1\u00b5\b\t\u0001\u0002\u00b2",
    "\u00b3\u0005\u0012\n\u0002\u00b3\u00b4\b\t\u0001\u0002\u00b4\u00b6\u0003",
    "\u0002\u0002\u0002\u00b5\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003",
    "\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007",
    "0\u0002\u0002\u00b8\u00c0\b\t\u0001\u0002\u00b9\u00ba\u0007\'\u0002",
    "\u0002\u00ba\u00bb\u0005\u0010\t\u0015\u00bb\u00bc\b\t\u0001\u0002\u00bc",
    "\u00c0\u0003\u0002\u0002\u0002\u00bd\u00be\u00071\u0002\u0002\u00be",
    "\u00c0\b\t\u0001\u0002\u00bf\u00a3\u0003\u0002\u0002\u0002\u00bf\u00a6",
    "\u0003\u0002\u0002\u0002\u00bf\u00a8\u0003\u0002\u0002\u0002\u00bf\u00aa",
    "\u0003\u0002\u0002\u0002\u00bf\u00af\u0003\u0002\u0002\u0002\u00bf\u00b9",
    "\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u0118",
    "\u0003\u0002\u0002\u0002\u00c1\u00c2\f\u0013\u0002\u0002\u00c2\u00c3",
    "\u0007-\u0002\u0002\u00c3\u00c4\u0005\u0010\t\u0014\u00c4\u00c5\b\t",
    "\u0001\u0002\u00c5\u0117\u0003\u0002\u0002\u0002\u00c6\u00c7\f\u0012",
    "\u0002\u0002\u00c7\u00c8\u0007+\u0002\u0002\u00c8\u00c9\u0005\u0010",
    "\t\u0013\u00c9\u00ca\b\t\u0001\u0002\u00ca\u0117\u0003\u0002\u0002\u0002",
    "\u00cb\u00cc\f\u0011\u0002\u0002\u00cc\u00cd\u0007,\u0002\u0002\u00cd",
    "\u00ce\u0005\u0010\t\u0012\u00ce\u00cf\b\t\u0001\u0002\u00cf\u0117\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\f\u0010\u0002\u0002\u00d1\u00d2\u0007",
    ".\u0002\u0002\u00d2\u00d3\u0005\u0010\t\u0011\u00d3\u00d4\b\t\u0001",
    "\u0002\u00d4\u0117\u0003\u0002\u0002\u0002\u00d5\u00d6\f\u000f\u0002",
    "\u0002\u00d6\u00d7\u0007)\u0002\u0002\u00d7\u00d8\u0005\u0010\t\u0010",
    "\u00d8\u00d9\b\t\u0001\u0002\u00d9\u0117\u0003\u0002\u0002\u0002\u00da",
    "\u00db\f\u000e\u0002\u0002\u00db\u00dc\u0007*\u0002\u0002\u00dc\u00dd",
    "\u0005\u0010\t\u000f\u00dd\u00de\b\t\u0001\u0002\u00de\u0117\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\f\r\u0002\u0002\u00e0\u00e1\u0007\"\u0002\u0002",
    "\u00e1\u00e2\u0005\u0010\t\u000e\u00e2\u00e3\b\t\u0001\u0002\u00e3\u0117",
    "\u0003\u0002\u0002\u0002\u00e4\u00e5\f\f\u0002\u0002\u00e5\u00e6\u0007",
    "#\u0002\u0002\u00e6\u00e7\u0005\u0010\t\r\u00e7\u00e8\b\t\u0001\u0002",
    "\u00e8\u0117\u0003\u0002\u0002\u0002\u00e9\u00ea\f\u000b\u0002\u0002",
    "\u00ea\u00eb\u0007\u001c\u0002\u0002\u00eb\u00ec\u0005\u0010\t\f\u00ec",
    "\u00ed\b\t\u0001\u0002\u00ed\u0117\u0003\u0002\u0002\u0002\u00ee\u00ef",
    "\f\n\u0002\u0002\u00ef\u00f0\u0007\u001d\u0002\u0002\u00f0\u00f1\u0005",
    "\u0010\t\u000b\u00f1\u00f2\b\t\u0001\u0002\u00f2\u0117\u0003\u0002\u0002",
    "\u0002\u00f3\u00f4\f\t\u0002\u0002\u00f4\u00f5\u0007!\u0002\u0002\u00f5",
    "\u00f6\u0005\u0010\t\n\u00f6\u00f7\b\t\u0001\u0002\u00f7\u0117\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\f\b\u0002\u0002\u00f9\u00fa\u0007$\u0002",
    "\u0002\u00fa\u00fb\u0005\u0010\t\t\u00fb\u00fc\b\t\u0001\u0002\u00fc",
    "\u0117\u0003\u0002\u0002\u0002\u00fd\u00fe\f\u0007\u0002\u0002\u00fe",
    "\u00ff\u0007(\u0002\u0002\u00ff\u0100\u0005\u0010\t\b\u0100\u0101\b",
    "\t\u0001\u0002\u0101\u0117\u0003\u0002\u0002\u0002\u0102\u0103\f\u0006",
    "\u0002\u0002\u0103\u0104\u0007%\u0002\u0002\u0104\u0105\u0005\u0010",
    "\t\u0007\u0105\u0106\b\t\u0001\u0002\u0106\u0117\u0003\u0002\u0002\u0002",
    "\u0107\u0108\f\u0005\u0002\u0002\u0108\u0109\u0007&\u0002\u0002\u0109",
    "\u010a\u0005\u0010\t\u0006\u010a\u010b\b\t\u0001\u0002\u010b\u0117\u0003",
    "\u0002\u0002\u0002\u010c\u010d\f\u0004\u0002\u0002\u010d\u010e\u0007",
    "\u001f\u0002\u0002\u010e\u010f\u0005\u0010\t\u0002\u010f\u0110\u0007",
    " \u0002\u0002\u0110\u0111\u0005\u0010\t\u0005\u0111\u0112\b\t\u0001",
    "\u0002\u0112\u0117\u0003\u0002\u0002\u0002\u0113\u0114\f\u0014\u0002",
    "\u0002\u0114\u0115\u0007\u001e\u0002\u0002\u0115\u0117\b\t\u0001\u0002",
    "\u0116\u00c1\u0003\u0002\u0002\u0002\u0116\u00c6\u0003\u0002\u0002\u0002",
    "\u0116\u00cb\u0003\u0002\u0002\u0002\u0116\u00d0\u0003\u0002\u0002\u0002",
    "\u0116\u00d5\u0003\u0002\u0002\u0002\u0116\u00da\u0003\u0002\u0002\u0002",
    "\u0116\u00df\u0003\u0002\u0002\u0002\u0116\u00e4\u0003\u0002\u0002\u0002",
    "\u0116\u00e9\u0003\u0002\u0002\u0002\u0116\u00ee\u0003\u0002\u0002\u0002",
    "\u0116\u00f3\u0003\u0002\u0002\u0002\u0116\u00f8\u0003\u0002\u0002\u0002",
    "\u0116\u00fd\u0003\u0002\u0002\u0002\u0116\u0102\u0003\u0002\u0002\u0002",
    "\u0116\u0107\u0003\u0002\u0002\u0002\u0116\u010c\u0003\u0002\u0002\u0002",
    "\u0116\u0113\u0003\u0002\u0002\u0002\u0117\u011a\u0003\u0002\u0002\u0002",
    "\u0118\u0116\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002",
    "\u0119\u0011\u0003\u0002\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002",
    "\u011b\u011c\u0005\u0010\t\u0002\u011c\u0123\b\n\u0001\u0002\u011d\u011e",
    "\u0007\u001a\u0002\u0002\u011e\u011f\u0005\u0010\t\u0002\u011f\u0120",
    "\b\n\u0001\u0002\u0120\u0122\u0003\u0002\u0002\u0002\u0121\u011d\u0003",
    "\u0002\u0002\u0002\u0122\u0125\u0003\u0002\u0002\u0002\u0123\u0121\u0003",
    "\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u0124\u0013\u0003",
    "\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0126\u0127\u0007",
    "1\u0002\u0002\u0127\u0128\u0007 \u0002\u0002\u0128\u0129\u0007\u0004",
    "\u0002\u0002\u0129\u012a\u0007\u0019\u0002\u0002\u012a\u012b\b\u000b",
    "\u0001\u0002\u012b\u0015\u0003\u0002\u0002\u0002\u012c\u012d\u00071",
    "\u0002\u0002\u012d\u012e\u0007\u001b\u0002\u0002\u012e\u012f\u0005\u0010",
    "\t\u0002\u012f\u0130\u0007\u0019\u0002\u0002\u0130\u0131\b\f\u0001\u0002",
    "\u0131\u0017\u0003\u0002\u0002\u0002\u0012\u001b\"35=N\\kt\u007f\u00a1",
    "\u00b5\u00bf\u0116\u0118\u0123"].join("");


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
    code = "";
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
         code += "main();"; console.log(code); 
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
        this.state = 37;
        this.match(FaplaParser.MODULE);
        this.state = 38;
        localctx.a = this.match(FaplaParser.Identifier);

                    var scope = new Scope((localctx.a===null ? null : localctx.a.text), rootScope);
                    currentScope = scope;
                    var paramterList = [];
                    let f = new Function((localctx.a===null ? null : localctx.a.text).toLowerCase(), null, null);
                
        this.state = 51;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 40;
            this.match(FaplaParser.INPUT);
            this.state = 41;
            this.match(FaplaParser.COLON);
            this.state = 47; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 42;
                localctx._Identifier = this.match(FaplaParser.Identifier);
                this.state = 43;
                this.match(FaplaParser.COLON);
                this.state = 44;
                localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
                this.state = 45;
                this.match(FaplaParser.SEMICOLON);

                            var s = new Symbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase(), (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text), null);
                            paramterList.push(s);
                            currentScope.addSymbol(s);
                        
                this.state = 49; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }


                    f.parameterList = paramterList;
                
        this.state = 59;
        _la = this._input.LA(1);
        if(_la===FaplaParser.OUTPUT) {
            this.state = 54;
            this.match(FaplaParser.OUTPUT);
            this.state = 55;
            this.match(FaplaParser.COLON);
            this.state = 56;
            localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
            this.state = 57;
            this.match(FaplaParser.SEMICOLON);

                        f.outputType = (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text);
                    
        }


                    functionTable.push(f);
                    code += "function " + (localctx.a===null ? null : localctx.a.text) +"(";
                    for(let i = 0; i < f.parameterList.length - 1; i++) {
                        code += f.parameterList[i].name + ",";
                    }
                    code += f.parameterList[f.parameterList.length - 1].name + ")";
                
        this.state = 62;
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
        this.state = 64;
        this.match(FaplaParser.MODULE);
        this.state = 65;
        this.match(FaplaParser.T__0);

                    code += "function main()";
                    var mainScope = new Scope('main', rootScope);
                    currentScope = mainScope;
                    let f = new Function('main', null, null);
                    functionTable.push(f);
                
        this.state = 67;
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
    this._statement = null; // StatementContext
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
        this.state = 69;
        this.match(FaplaParser.BEGIN);
         code += "{"; 
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
            this.state = 71;
            localctx._statement = this.statement();
             code += localctx._statement.code + ";"; 
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }

                    var f = getFunction(currentScope.name);
                        if (!f.returnflag && f.outputType) {
                        FaplaParser.prototype.logger.error("module " + f.name + " must be has return experssion");
                    }
                    code += "}";
                
        this.state = 80;
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
    this._statement = null; // StatementContext
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
        this.state = 82;
        this.match(FaplaParser.BEGIN);
         code += "{"; 
        currentScope = currentScope.enterScope();
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
            this.state = 85;
            localctx._statement = this.statement();
             code += localctx._statement.code + ";"; 
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
        this.match(FaplaParser.END);
         code += "}"; 
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
    this._statement = null; // StatementContext
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
        this.state = 114;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            this.match(FaplaParser.BEGIN);
             code += "{"; 
            currentScope = currentScope.enterScope();
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
                this.state = 100;
                localctx._statement = this.statement();
                 code += localctx._statement.code + ";"; 
                this.state = 107;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 108;
            this.match(FaplaParser.END);
             code += "}"; 
            currentScope = currentScope.exitScope();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 111;
            localctx._statement = this.statement();
             code += localctx._statement.code; 
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
    this.code = null
    this._expression = null; // ExpressionContext
    this._Identifier = null; // Token
    this._assignment = null; // AssignmentContext
    this._varDeclaration = null; // VarDeclarationContext
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
        this.state = 159;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.match(FaplaParser.IF);
            localctx.code =  ""
            this.state = 118;
            localctx._expression = this.expression(0);

                        if(!TypeConverting.canConvertTo(localctx._expression.type, "bool"))
                            FaplaParser.prototype.logger.error("expression " + (localctx._expression===null ? null : this._input.getText(new antlr4.Interval(localctx._expression.start,localctx._expression.stop))) + " must be a bool in if-statement condition");
                        localctx.code += "if ( " + localctx._expression.code + ")";
                    
            this.state = 120;
            this.match(FaplaParser.THEN);
            this.state = 121;
            this.supBlock();
            this.state = 125;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
            if(la_===1) {
                this.state = 122;
                this.match(FaplaParser.ELSE);
                 localctx.code += "else" 
                this.state = 124;
                this.supBlock();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 127;
            this.match(FaplaParser.WHILE);
            this.state = 128;
            localctx._expression = this.expression(0);
            this.state = 129;
            this.supBlock();

                        if(!TypeConverting.canConvertTo(localctx._expression.type, "bool"))
                            FaplaParser.prototype.logger.error("expression " + (localctx._expression===null ? null : this._input.getText(new antlr4.Interval(localctx._expression.start,localctx._expression.stop))) + " must be a bool in while-statement condition");
                        localctx.code =  "while ( " + localctx._expression.code + ")"
                    
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 132;
            this.match(FaplaParser.RETURN);
            this.state = 133;
            localctx._expression = this.expression(0);
            this.state = 134;
            this.match(FaplaParser.SEMICOLON);

                        var f = getFunction(currentScope.name);
                        f.returnflag = true;
                        if(!f.outputType) {
                            FaplaParser.prototype.logger.error("module " + f.name + " has no output");
                        } else if(!TypeConverting.canConvertTo(localctx._expression.type, f.outputType)) {
                            FaplaParser.prototype.logger.error("module " + f.name + " must return " + f.outputType);
                        }
                        localctx.code =  "return " + localctx._expression.code + "";
                    
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 137;
            this.match(FaplaParser.WRITE);
            this.state = 138;
            localctx._expression = this.expression(0);
             if(!TypeConverting.canConvertTo(localctx._expression.type, "string")) FaplaParser.prototype.logger.error("write exprssion must be a string");
                                        localctx.code =  "console.log(" + localctx._expression.code + ")";
                                    
            this.state = 140;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 142;
            this.match(FaplaParser.READ);
            this.state = 143;
            localctx._Identifier = this.match(FaplaParser.Identifier);
            this.state = 144;
            this.match(FaplaParser.SEMICOLON);

                        if(!currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase())) {
                            FaplaParser.prototype.logger.error("variable " + (localctx._Identifier===null ? null : localctx._Identifier.text) + " must be declared before");
                            localctx.type =  "noType"
                        } else localctx.type =  currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase()).type

                        localctx.code += "(localctx._Identifier===null ? null : localctx._Identifier.text) = console.read();";
                    
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 146;
            localctx._expression = this.expression(0);
             localctx.code =  localctx._expression.code + ""; 
            this.state = 148;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 150;
            localctx._assignment = this.assignment();
             localctx.code =  localctx._assignment.code + ""; 
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 153;
            this.match(FaplaParser.SEMICOLON);
             localctx.code =  ""; 
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 155;
            localctx._varDeclaration = this.varDeclaration();
             localctx.code =  localctx._varDeclaration.code + ""; 
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 158;
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
    this.code = null
    this.type = null
    this.a = null; // ExpressionContext
    this._STRINGCONSTANT = null; // Token
    this._REALCONSTANT = null; // Token
    this._BOOLEANCONSTANT = null; // Token
    this._expression = null; // ExpressionContext
    this._Identifier = null; // Token
    this.e = null; // ExpressionListContext
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
        this.state = 189;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 162;
            localctx._STRINGCONSTANT = this.match(FaplaParser.STRINGCONSTANT);
             localctx.type =  "string"
                                     localctx.code =   (localctx._STRINGCONSTANT===null ? null : localctx._STRINGCONSTANT.text) 
            break;

        case 2:
            this.state = 164;
            localctx._REALCONSTANT = this.match(FaplaParser.REALCONSTANT);
            localctx.type =  "real"
                                  localctx.code =  (localctx._REALCONSTANT===null ? null : localctx._REALCONSTANT.text) 
            break;

        case 3:
            this.state = 166;
            localctx._BOOLEANCONSTANT = this.match(FaplaParser.BOOLEANCONSTANT);
            localctx.type =  "bool"
                                     localctx.code =  (localctx._BOOLEANCONSTANT===null ? null : localctx._BOOLEANCONSTANT.text) 
            break;

        case 4:
            this.state = 168;
            this.match(FaplaParser.PO);
            this.state = 169;
            localctx.a = localctx._expression = this.expression(0);
            this.state = 170;
            this.match(FaplaParser.PC);

                        localctx.code =  "(" + localctx.code + ")"
                        localctx.type =  localctx.a.type
                    
            break;

        case 5:
            this.state = 173;
            localctx._Identifier = this.match(FaplaParser.Identifier);
            this.state = 174;
            this.match(FaplaParser.PO);
             let args = [];
                                    let argValues = "";
            this.state = 179;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
                this.state = 176;
                localctx.e = this.expressionList();
                 args = localctx.e.type;
                                                                                 argValues = localctx.e.code; 
            }

            this.state = 181;
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
                            console.log(func.parameterList, args);
                            checkArguments(func, args);
                        }
                        localctx.code =  (localctx._Identifier===null ? null : localctx._Identifier.text) + "(" + argValues + ")";
                    
            break;

        case 6:
            this.state = 183;
            this.match(FaplaParser.NOT);
            this.state = 184;
            localctx.a = localctx._expression = this.expression(19);
            if(TypeConverting.canConvertTo(localctx.a.type, "bool")) {
                                       localctx.type =  "bool"
                                   } else {
                                       FaplaParser.prototype.logger.error(localctx.a.type + " can not NOT");
                                       localctx.type = "noType"
                                   }
                                   localctx.code =  "!" + localctx.a.code
                                  
            break;

        case 7:
            this.state = 187;
            localctx._Identifier = this.match(FaplaParser.Identifier);
            var s = currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase());
                                if(!s) {
                                    FaplaParser.prototype.logger.error("variable " +  (localctx._Identifier===null ? null : localctx._Identifier.text) + " not defined");
                                    localctx.type =  "noType"
                                } else {
                                    localctx.type =  s.type
                                    localctx.code =  (localctx._Identifier===null ? null : localctx._Identifier.text)
                                }
                               
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 278;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 276;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 191;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 192;
                    this.match(FaplaParser.POW);
                    this.state = 193;
                    localctx.b = localctx._expression = this.expression(18);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                              localctx.type =  "real"
                                         else {
                                              FaplaParser.prototype.logger.error(localctx.a.type + " can not POW with " + localctx.b.type);
                                              localctx.type = "noType"
                                         }
                                         localctx.code =  "Math.pow(" + localctx.a.code + ", " + localctx.b.code + ")";
                                        
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 196;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 197;
                    this.match(FaplaParser.MUL);
                    this.state = 198;
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
                    this.state = 201;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 202;
                    this.match(FaplaParser.DIV);
                    this.state = 203;
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
                    this.state = 206;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 207;
                    this.match(FaplaParser.MOD);
                    this.state = 208;
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
                    this.state = 211;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 212;
                    this.match(FaplaParser.ADD);
                    this.state = 213;
                    localctx.b = localctx._expression = this.expression(14);

                                          localctx.type =  TypeConverting.max(localctx.a.type, localctx.b.type)
                                      
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 216;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 217;
                    this.match(FaplaParser.SUB);
                    this.state = 218;
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
                    this.state = 221;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 222;
                    this.match(FaplaParser.LE);
                    this.state = 223;
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
                    this.state = 226;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 227;
                    this.match(FaplaParser.GE);
                    this.state = 228;
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
                    this.state = 231;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 232;
                    this.match(FaplaParser.GT);
                    this.state = 233;
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
                    this.state = 236;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 237;
                    this.match(FaplaParser.LT);
                    this.state = 238;
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
                    this.state = 241;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 242;
                    this.match(FaplaParser.EQUAL);
                    this.state = 243;
                    localctx.b = localctx._expression = this.expression(8);
                    if(TypeConverting.canConvertTo(localctx.a.type, localctx.b.type) && TypeConverting.canConvertTo(localctx.b.type, localctx.a.type))
                                            localctx.type =  "bool"
                                       else {
                                            FaplaParser.prototype.logger.error(localctx.a.type + " can not EQUAL with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                       localctx.code =  localctx.a.code + " == " + localctx.b.code
                                      
                    break;

                case 12:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 246;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 247;
                    this.match(FaplaParser.NOTEQUAL);
                    this.state = 248;
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
                    this.state = 251;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 252;
                    this.match(FaplaParser.XOR);
                    this.state = 253;
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
                    this.state = 256;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 257;
                    this.match(FaplaParser.AND);
                    this.state = 258;
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
                    this.state = 261;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 262;
                    this.match(FaplaParser.OR);
                    this.state = 263;
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
                    this.state = 266;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 267;
                    this.match(FaplaParser.QUESTION);
                    this.state = 268;
                    localctx.b = localctx._expression = this.expression(0);
                    this.state = 269;
                    this.match(FaplaParser.COLON);
                    this.state = 270;
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
                    this.state = 273;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 274;
                    this.match(FaplaParser.FACTORIAL);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real")) {
                                                                  localctx.type =  "real"
                                                              } else {
                                                                  FaplaParser.prototype.logger.error(localctx.a.type + " can not factorial");
                                                                  localctx.type = "noType"
                                                              }
                                                              localctx.code =  "factorial(" + localctx.a.code + ")";
                                                             
                    break;

                } 
            }
            this.state = 280;
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
    this.code = null
    this.type = null
    this.a = null; // ExpressionContext
    this.d = null; // ExpressionContext
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
        this.state = 281;
        localctx.a = this.expression(0);
        localctx.type =  [localctx.a.type]
                localctx.code =  localctx.a.code
        this.state = 289;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.COMMA) {
            this.state = 283;
            this.match(FaplaParser.COMMA);
            this.state = 284;
            localctx.d = this.expression(0);

                        localctx.type[localctx.type.length] = localctx.d.type;
                        localctx.code += ", " + localctx.d.code;
                    
            this.state = 291;
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
    this.code = null
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
        this.state = 292;
        localctx._Identifier = this.match(FaplaParser.Identifier);
        this.state = 293;
        this.match(FaplaParser.COLON);
        this.state = 294;
        localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
        this.state = 295;
        this.match(FaplaParser.SEMICOLON);

                    if(currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase())) {
                        FaplaParser.prototype.logger.error("variable " +  (localctx._Identifier===null ? null : localctx._Identifier.text) + " decleared before");
                    } else {
                        currentScope.addSymbol(new Symbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase(), (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text), null));
                    }
                    localctx.code =  "let " + (localctx._Identifier===null ? null : localctx._Identifier.text) + "";
                
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
    this.code = null
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
        this.state = 298;
        localctx._Identifier = this.match(FaplaParser.Identifier);
        this.state = 299;
        this.match(FaplaParser.ASSIGN);
        this.state = 300;
        localctx._expression = this.expression(0);
        this.state = 301;
        this.match(FaplaParser.SEMICOLON);

                    var s = currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text).toLowerCase());
                    if(!s) {
                        FaplaParser.prototype.logger.error("variable " +  (localctx._Identifier===null ? null : localctx._Identifier.text) + " not defined");
                        localctx.type =  "noType"
                    } else {
                        if(TypeConverting.canConvertTo(localctx._expression.type, s.type)) {
                            s.value = localctx._expression.code;
                            localctx.type =  s.type
                        } else {
                            FaplaParser.prototype.logger.error("can not assign " + localctx._expression.type + " to " + s.type);
                            localctx.type =  "noType"
                        }
                    }
                    localctx.code =  (localctx._Identifier===null ? null : localctx._Identifier.text) + " = " + localctx._expression.code + "";
                
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
