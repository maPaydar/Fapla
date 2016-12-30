// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FaplaListener = require('./FaplaListener').FaplaListener;
var grammarFileName = "Fapla.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00033\u0115\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003\u0002",
    "\u0007\u0002!\n\u0002\f\u0002\u000e\u0002$\u000b\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u0002)\n\u0002\f\u0002\u000e\u0002,\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0006\u00036\n\u0003\r\u0003\u000e\u00037\u0005",
    "\u0003:\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003@\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006",
    "\u0004L\n\u0004\r\u0004\u000e\u0004M\u0005\u0004P\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005\\\n\u0005\r\u0005\u000e",
    "\u0005]\u0005\u0005`\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005f\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0007\u0006l\n\u0006\f\u0006\u000e\u0006o\u000b\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0007\u0007u\n\u0007\f\u0007\u000e",
    "\u0007x\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007\b",
    "~\n\b\f\b\u000e\b\u0081\u000b\b\u0003\b\u0003\b\u0005\b\u0085\n\b\u0003",
    "\t\u0003\t\u0007\t\u0089\n\t\f\t\u000e\t\u008c\u000b\t\u0003\t\u0003",
    "\t\u0005\t\u0090\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0005\n\u0098\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u00ac\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00b4\n\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00cc\n\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u00d9\n\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0005\f\u00df\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u00fe\n\f\f\f\u000e\f\u0101",
    "\u000b\f\u0003\r\u0003\r\u0003\r\u0007\r\u0106\n\r\f\r\u000e\r\u0109",
    "\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0002\u0003\u0016\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u0002\u0005\u0004\u0002*+--\u0003\u0002()\u0004",
    "\u0002\u001b\u001c #\u013c\u0002\"\u0003\u0002\u0002\u0002\u0004-\u0003",
    "\u0002\u0002\u0002\u0006C\u0003\u0002\u0002\u0002\bS\u0003\u0002\u0002",
    "\u0002\ni\u0003\u0002\u0002\u0002\fr\u0003\u0002\u0002\u0002\u000e\u0084",
    "\u0003\u0002\u0002\u0002\u0010\u008f\u0003\u0002\u0002\u0002\u0012\u00ab",
    "\u0003\u0002\u0002\u0002\u0014\u00cb\u0003\u0002\u0002\u0002\u0016\u00de",
    "\u0003\u0002\u0002\u0002\u0018\u0102\u0003\u0002\u0002\u0002\u001a\u010a",
    "\u0003\u0002\u0002\u0002\u001c\u010f\u0003\u0002\u0002\u0002\u001e!",
    "\u0005\u0004\u0003\u0002\u001f!\u0005\u0006\u0004\u0002 \u001e\u0003",
    "\u0002\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!$\u0003\u0002\u0002",
    "\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#%\u0003",
    "\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002%*\u0005\b\u0005\u0002",
    "&)\u0005\u0004\u0003\u0002\')\u0005\u0006\u0004\u0002(&\u0003\u0002",
    "\u0002\u0002(\'\u0003\u0002\u0002\u0002),\u0003\u0002\u0002\u0002*(",
    "\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+\u0003\u0003\u0002",
    "\u0002\u0002,*\u0003\u0002\u0002\u0002-.\u0007\u0011\u0002\u0002.9\u0007",
    "0\u0002\u0002/0\u0007\u0014\u0002\u000205\u0007\u001f\u0002\u000212",
    "\u00070\u0002\u000223\u0007\u001f\u0002\u000234\u0007\u0003\u0002\u0002",
    "46\u0007\u0018\u0002\u000251\u0003\u0002\u0002\u000267\u0003\u0002\u0002",
    "\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028:\u0003\u0002",
    "\u0002\u00029/\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:?\u0003",
    "\u0002\u0002\u0002;<\u0007\u0015\u0002\u0002<=\u0007\u001f\u0002\u0002",
    "=>\u0007\u0003\u0002\u0002>@\u0007\u0018\u0002\u0002?;\u0003\u0002\u0002",
    "\u0002?@\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002AB\u0005\n",
    "\u0006\u0002B\u0005\u0003\u0002\u0002\u0002CD\u0007\u0011\u0002\u0002",
    "DO\u00070\u0002\u0002EF\u0007\u0014\u0002\u0002FK\u0007\u001f\u0002",
    "\u0002GH\u00070\u0002\u0002HI\u0007\u001f\u0002\u0002IJ\u0007\u0003",
    "\u0002\u0002JL\u0007\u0018\u0002\u0002KG\u0003\u0002\u0002\u0002LM\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "NP\u0003\u0002\u0002\u0002OE\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002",
    "\u0002PQ\u0003\u0002\u0002\u0002QR\u0005\f\u0007\u0002R\u0007\u0003",
    "\u0002\u0002\u0002ST\u0007\u0011\u0002\u0002T_\u00070\u0002\u0002UV",
    "\u0007\u0014\u0002\u0002V[\u0007\u001f\u0002\u0002WX\u00070\u0002\u0002",
    "XY\u0007\u001f\u0002\u0002YZ\u0007\u0003\u0002\u0002Z\\\u0007\u0018",
    "\u0002\u0002[W\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002][",
    "\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^`\u0003\u0002\u0002",
    "\u0002_U\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`e\u0003\u0002",
    "\u0002\u0002ab\u0007\u0015\u0002\u0002bc\u0007\u001f\u0002\u0002cd\u0007",
    "\u0003\u0002\u0002df\u0007\u0018\u0002\u0002ea\u0003\u0002\u0002\u0002",
    "ef\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002gh\u0005\f\u0007",
    "\u0002h\t\u0003\u0002\u0002\u0002im\u0007\u0012\u0002\u0002jl\u0005",
    "\u0014\u000b\u0002kj\u0003\u0002\u0002\u0002lo\u0003\u0002\u0002\u0002",
    "mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002np\u0003\u0002\u0002",
    "\u0002om\u0003\u0002\u0002\u0002pq\u0007\u0013\u0002\u0002q\u000b\u0003",
    "\u0002\u0002\u0002rv\u0007\u0012\u0002\u0002su\u0005\u0012\n\u0002t",
    "s\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002",
    "\u0002vw\u0003\u0002\u0002\u0002wy\u0003\u0002\u0002\u0002xv\u0003\u0002",
    "\u0002\u0002yz\u0007\u0013\u0002\u0002z\r\u0003\u0002\u0002\u0002{\u007f",
    "\u0007\u0012\u0002\u0002|~\u0005\u0014\u000b\u0002}|\u0003\u0002\u0002",
    "\u0002~\u0081\u0003\u0002\u0002\u0002\u007f}\u0003\u0002\u0002\u0002",
    "\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0082\u0003\u0002\u0002\u0002",
    "\u0081\u007f\u0003\u0002\u0002\u0002\u0082\u0085\u0007\u0013\u0002\u0002",
    "\u0083\u0085\u0005\u0014\u000b\u0002\u0084{\u0003\u0002\u0002\u0002",
    "\u0084\u0083\u0003\u0002\u0002\u0002\u0085\u000f\u0003\u0002\u0002\u0002",
    "\u0086\u008a\u0007\u0012\u0002\u0002\u0087\u0089\u0005\u0012\n\u0002",
    "\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008c\u0003\u0002\u0002\u0002",
    "\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002",
    "\u008b\u008d\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002",
    "\u008d\u0090\u0007\u0013\u0002\u0002\u008e\u0090\u0005\u0012\n\u0002",
    "\u008f\u0086\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002",
    "\u0090\u0011\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u000e\u0002\u0002",
    "\u0092\u0093\u0005\u0016\f\u0002\u0093\u0094\u0007\r\u0002\u0002\u0094",
    "\u0097\u0005\u0010\t\u0002\u0095\u0096\u0007\f\u0002\u0002\u0096\u0098",
    "\u0005\u0010\t\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u00ac\u0003\u0002\u0002\u0002\u0099\u009a",
    "\u0007\u0010\u0002\u0002\u009a\u009b\u0005\u0016\f\u0002\u009b\u009c",
    "\u0005\u0010\t\u0002\u009c\u00ac\u0003\u0002\u0002\u0002\u009d\u009e",
    "\u0005\u0016\f\u0002\u009e\u009f\u0007\u0018\u0002\u0002\u009f\u00ac",
    "\u0003\u0002\u0002\u0002\u00a0\u00ac\u0005\u001c\u000f\u0002\u00a1\u00ac",
    "\u0007\u0018\u0002\u0002\u00a2\u00ac\u0005\u001a\u000e\u0002\u00a3\u00a4",
    "\u0007\u0016\u0002\u0002\u00a4\u00a5\u0005\u0016\f\u0002\u00a5\u00a6",
    "\u0007\u0018\u0002\u0002\u00a6\u00ac\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0007\u0017\u0002\u0002\u00a8\u00a9\u00070\u0002\u0002\u00a9\u00ac",
    "\u0007\u0018\u0002\u0002\u00aa\u00ac\u0005\f\u0007\u0002\u00ab\u0091",
    "\u0003\u0002\u0002\u0002\u00ab\u0099\u0003\u0002\u0002\u0002\u00ab\u009d",
    "\u0003\u0002\u0002\u0002\u00ab\u00a0\u0003\u0002\u0002\u0002\u00ab\u00a1",
    "\u0003\u0002\u0002\u0002\u00ab\u00a2\u0003\u0002\u0002\u0002\u00ab\u00a3",
    "\u0003\u0002\u0002\u0002\u00ab\u00a7\u0003\u0002\u0002\u0002\u00ab\u00aa",
    "\u0003\u0002\u0002\u0002\u00ac\u0013\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u0007\u000e\u0002\u0002\u00ae\u00af\u0005\u0016\f\u0002\u00af\u00b0",
    "\u0007\r\u0002\u0002\u00b0\u00b3\u0005\u000e\b\u0002\u00b1\u00b2\u0007",
    "\f\u0002\u0002\u00b2\u00b4\u0005\u000e\b\u0002\u00b3\u00b1\u0003\u0002",
    "\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00cc\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0007\u0010\u0002\u0002\u00b6\u00b7\u0005\u0016",
    "\f\u0002\u00b7\u00b8\u0005\u000e\b\u0002\u00b8\u00cc\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0005\u0016\f\u0002\u00ba\u00bb\u0007\u0018\u0002",
    "\u0002\u00bb\u00cc\u0003\u0002\u0002\u0002\u00bc\u00cc\u0005\u001c\u000f",
    "\u0002\u00bd\u00cc\u0007\u0018\u0002\u0002\u00be\u00cc\u0005\u001a\u000e",
    "\u0002\u00bf\u00c0\u0007\u0016\u0002\u0002\u00c0\u00c1\u0005\u0016\f",
    "\u0002\u00c1\u00c2\u0007\u0018\u0002\u0002\u00c2\u00cc\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0007\u0017\u0002\u0002\u00c4\u00c5\u00070\u0002",
    "\u0002\u00c5\u00cc\u0007\u0018\u0002\u0002\u00c6\u00c7\u0007\u000f\u0002",
    "\u0002\u00c7\u00c8\u0005\u0016\f\u0002\u00c8\u00c9\u0007\u0018\u0002",
    "\u0002\u00c9\u00cc\u0003\u0002\u0002\u0002\u00ca\u00cc\u0005\n\u0006",
    "\u0002\u00cb\u00ad\u0003\u0002\u0002\u0002\u00cb\u00b5\u0003\u0002\u0002",
    "\u0002\u00cb\u00b9\u0003\u0002\u0002\u0002\u00cb\u00bc\u0003\u0002\u0002",
    "\u0002\u00cb\u00bd\u0003\u0002\u0002\u0002\u00cb\u00be\u0003\u0002\u0002",
    "\u0002\u00cb\u00bf\u0003\u0002\u0002\u0002\u00cb\u00c3\u0003\u0002\u0002",
    "\u0002\u00cb\u00c6\u0003\u0002\u0002\u0002\u00cb\u00ca\u0003\u0002\u0002",
    "\u0002\u00cc\u0015\u0003\u0002\u0002\u0002\u00cd\u00ce\b\f\u0001\u0002",
    "\u00ce\u00df\u0007\u0005\u0002\u0002\u00cf\u00df\u0007\u0006\u0002\u0002",
    "\u00d0\u00df\u0007\u0004\u0002\u0002\u00d1\u00d2\u0007.\u0002\u0002",
    "\u00d2\u00d3\u0005\u0016\f\u0002\u00d3\u00d4\u0007/\u0002\u0002\u00d4",
    "\u00df\u0003\u0002\u0002\u0002\u00d5\u00d6\u00070\u0002\u0002\u00d6",
    "\u00d8\u0007.\u0002\u0002\u00d7\u00d9\u0005\u0018\r\u0002\u00d8\u00d7",
    "\u0003\u0002\u0002\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u00da",
    "\u0003\u0002\u0002\u0002\u00da\u00df\u0007/\u0002\u0002\u00db\u00dc",
    "\u0007&\u0002\u0002\u00dc\u00df\u0005\u0016\f\r\u00dd\u00df\u00070\u0002",
    "\u0002\u00de\u00cd\u0003\u0002\u0002\u0002\u00de\u00cf\u0003\u0002\u0002",
    "\u0002\u00de\u00d0\u0003\u0002\u0002\u0002\u00de\u00d1\u0003\u0002\u0002",
    "\u0002\u00de\u00d5\u0003\u0002\u0002\u0002\u00de\u00db\u0003\u0002\u0002",
    "\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00df\u00ff\u0003\u0002\u0002",
    "\u0002\u00e0\u00e1\f\u000b\u0002\u0002\u00e1\u00e2\u0007,\u0002\u0002",
    "\u00e2\u00fe\u0005\u0016\f\f\u00e3\u00e4\f\n\u0002\u0002\u00e4\u00e5",
    "\t\u0002\u0002\u0002\u00e5\u00fe\u0005\u0016\f\u000b\u00e6\u00e7\f\t",
    "\u0002\u0002\u00e7\u00e8\t\u0003\u0002\u0002\u00e8\u00fe\u0005\u0016",
    "\f\n\u00e9\u00ea\f\b\u0002\u0002\u00ea\u00eb\t\u0004\u0002\u0002\u00eb",
    "\u00fe\u0005\u0016\f\t\u00ec\u00ed\f\u0007\u0002\u0002\u00ed\u00ee\u0007",
    "\'\u0002\u0002\u00ee\u00fe\u0005\u0016\f\b\u00ef\u00f0\f\u0006\u0002",
    "\u0002\u00f0\u00f1\u0007$\u0002\u0002\u00f1\u00fe\u0005\u0016\f\u0007",
    "\u00f2\u00f3\f\u0005\u0002\u0002\u00f3\u00f4\u0007%\u0002\u0002\u00f4",
    "\u00fe\u0005\u0016\f\u0006\u00f5\u00f6\f\u0004\u0002\u0002\u00f6\u00f7",
    "\u0007\u001e\u0002\u0002\u00f7\u00f8\u0005\u0016\f\u0002\u00f8\u00f9",
    "\u0007\u001f\u0002\u0002\u00f9\u00fa\u0005\u0016\f\u0005\u00fa\u00fe",
    "\u0003\u0002\u0002\u0002\u00fb\u00fc\f\f\u0002\u0002\u00fc\u00fe\u0007",
    "\u001d\u0002\u0002\u00fd\u00e0\u0003\u0002\u0002\u0002\u00fd\u00e3\u0003",
    "\u0002\u0002\u0002\u00fd\u00e6\u0003\u0002\u0002\u0002\u00fd\u00e9\u0003",
    "\u0002\u0002\u0002\u00fd\u00ec\u0003\u0002\u0002\u0002\u00fd\u00ef\u0003",
    "\u0002\u0002\u0002\u00fd\u00f2\u0003\u0002\u0002\u0002\u00fd\u00f5\u0003",
    "\u0002\u0002\u0002\u00fd\u00fb\u0003\u0002\u0002\u0002\u00fe\u0101\u0003",
    "\u0002\u0002\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100\u0003",
    "\u0002\u0002\u0002\u0100\u0017\u0003\u0002\u0002\u0002\u0101\u00ff\u0003",
    "\u0002\u0002\u0002\u0102\u0107\u0005\u0016\f\u0002\u0103\u0104\u0007",
    "\u0019\u0002\u0002\u0104\u0106\u0005\u0016\f\u0002\u0105\u0103\u0003",
    "\u0002\u0002\u0002\u0106\u0109\u0003\u0002\u0002\u0002\u0107\u0105\u0003",
    "\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0019\u0003",
    "\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002\u010a\u010b\u0007",
    "0\u0002\u0002\u010b\u010c\u0007\u001f\u0002\u0002\u010c\u010d\u0007",
    "\u0003\u0002\u0002\u010d\u010e\u0007\u0018\u0002\u0002\u010e\u001b\u0003",
    "\u0002\u0002\u0002\u010f\u0110\u00070\u0002\u0002\u0110\u0111\u0007",
    "\u001a\u0002\u0002\u0111\u0112\u0005\u0016\f\u0002\u0112\u0113\u0007",
    "\u0018\u0002\u0002\u0113\u001d\u0003\u0002\u0002\u0002\u001d \"(*79",
    "?MO]_emv\u007f\u0084\u008a\u008f\u0097\u00ab\u00b3\u00cb\u00d8\u00de",
    "\u00fd\u00ff\u0107"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, "';'", "','", "'='", "'>'", 
                     "'<'", "'!'", "'?'", "':'", "'=='", "'<='", "'>='", 
                     "'<>'", null, null, null, null, "'+'", "'-'", "'*'", 
                     "'/'", "'^'", "'%'", "'('", "')'" ];

var symbolicNames = [ null, "PrimitiveType", "BOOLEANCONSTANT", "STRINGCONSTANT", 
                      "REALCONSTANT", "STRING", "REAL", "BOOL", "TRUE", 
                      "FALSE", "ELSE", "THEN", "IF", "RETURN", "WHILE", 
                      "MODULE", "BEGIN", "END", "INPUT", "OUTPUT", "WRITE", 
                      "READ", "SEMICOLON", "COMMA", "ASSIGN", "GT", "LT", 
                      "FACTORIAL", "QUESTION", "COLON", "EQUAL", "LE", "GE", 
                      "NOTEQUAL", "AND", "OR", "NOT", "XOR", "ADD", "SUB", 
                      "MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", 
                      "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "program", "moduleDeclaration", "noRetuenModuleDeclaration", 
                   "mainModuleDeclaration", "block", "noReturnBlock", "supBlock", 
                   "noReturnSupBlock", "noReturnStatement", "statement", 
                   "expression", "expressionList", "varDeclaration", "assignment" ];

function FaplaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
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
FaplaParser.PrimitiveType = 1;
FaplaParser.BOOLEANCONSTANT = 2;
FaplaParser.STRINGCONSTANT = 3;
FaplaParser.REALCONSTANT = 4;
FaplaParser.STRING = 5;
FaplaParser.REAL = 6;
FaplaParser.BOOL = 7;
FaplaParser.TRUE = 8;
FaplaParser.FALSE = 9;
FaplaParser.ELSE = 10;
FaplaParser.THEN = 11;
FaplaParser.IF = 12;
FaplaParser.RETURN = 13;
FaplaParser.WHILE = 14;
FaplaParser.MODULE = 15;
FaplaParser.BEGIN = 16;
FaplaParser.END = 17;
FaplaParser.INPUT = 18;
FaplaParser.OUTPUT = 19;
FaplaParser.WRITE = 20;
FaplaParser.READ = 21;
FaplaParser.SEMICOLON = 22;
FaplaParser.COMMA = 23;
FaplaParser.ASSIGN = 24;
FaplaParser.GT = 25;
FaplaParser.LT = 26;
FaplaParser.FACTORIAL = 27;
FaplaParser.QUESTION = 28;
FaplaParser.COLON = 29;
FaplaParser.EQUAL = 30;
FaplaParser.LE = 31;
FaplaParser.GE = 32;
FaplaParser.NOTEQUAL = 33;
FaplaParser.AND = 34;
FaplaParser.OR = 35;
FaplaParser.NOT = 36;
FaplaParser.XOR = 37;
FaplaParser.ADD = 38;
FaplaParser.SUB = 39;
FaplaParser.MUL = 40;
FaplaParser.DIV = 41;
FaplaParser.POW = 42;
FaplaParser.MOD = 43;
FaplaParser.PO = 44;
FaplaParser.PC = 45;
FaplaParser.Identifier = 46;
FaplaParser.WS = 47;
FaplaParser.COMMENT = 48;
FaplaParser.LINE_COMMENT = 49;

FaplaParser.RULE_program = 0;
FaplaParser.RULE_moduleDeclaration = 1;
FaplaParser.RULE_noRetuenModuleDeclaration = 2;
FaplaParser.RULE_mainModuleDeclaration = 3;
FaplaParser.RULE_block = 4;
FaplaParser.RULE_noReturnBlock = 5;
FaplaParser.RULE_supBlock = 6;
FaplaParser.RULE_noReturnSupBlock = 7;
FaplaParser.RULE_noReturnStatement = 8;
FaplaParser.RULE_statement = 9;
FaplaParser.RULE_expression = 10;
FaplaParser.RULE_expressionList = 11;
FaplaParser.RULE_varDeclaration = 12;
FaplaParser.RULE_assignment = 13;

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

ProgramContext.prototype.noRetuenModuleDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NoRetuenModuleDeclarationContext);
    } else {
        return this.getTypedRuleContext(NoRetuenModuleDeclarationContext,i);
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
        this.state = 32;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 30;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 28;
                    this.moduleDeclaration();
                    break;

                case 2:
                    this.state = 29;
                    this.noRetuenModuleDeclaration();
                    break;

                } 
            }
            this.state = 34;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 35;
        this.mainModuleDeclaration();
        this.state = 40;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.MODULE) {
            this.state = 38;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 36;
                this.moduleDeclaration();
                break;

            case 2:
                this.state = 37;
                this.noRetuenModuleDeclaration();
                break;

            }
            this.state = 42;
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
    return this;
}

ModuleDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleDeclarationContext.prototype.constructor = ModuleDeclarationContext;

ModuleDeclarationContext.prototype.MODULE = function() {
    return this.getToken(FaplaParser.MODULE, 0);
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


ModuleDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
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
        this.state = 43;
        this.match(FaplaParser.MODULE);
        this.state = 44;
        this.match(FaplaParser.Identifier);
        this.state = 55;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 45;
            this.match(FaplaParser.INPUT);
            this.state = 46;
            this.match(FaplaParser.COLON);
            this.state = 51; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 47;
                this.match(FaplaParser.Identifier);
                this.state = 48;
                this.match(FaplaParser.COLON);
                this.state = 49;
                this.match(FaplaParser.PrimitiveType);
                this.state = 50;
                this.match(FaplaParser.SEMICOLON);
                this.state = 53; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }

        this.state = 61;
        _la = this._input.LA(1);
        if(_la===FaplaParser.OUTPUT) {
            this.state = 57;
            this.match(FaplaParser.OUTPUT);
            this.state = 58;
            this.match(FaplaParser.COLON);
            this.state = 59;
            this.match(FaplaParser.PrimitiveType);
            this.state = 60;
            this.match(FaplaParser.SEMICOLON);
        }

        this.state = 63;
        this.block();
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

function NoRetuenModuleDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_noRetuenModuleDeclaration;
    return this;
}

NoRetuenModuleDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoRetuenModuleDeclarationContext.prototype.constructor = NoRetuenModuleDeclarationContext;

NoRetuenModuleDeclarationContext.prototype.MODULE = function() {
    return this.getToken(FaplaParser.MODULE, 0);
};

NoRetuenModuleDeclarationContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.Identifier);
    } else {
        return this.getToken(FaplaParser.Identifier, i);
    }
};


NoRetuenModuleDeclarationContext.prototype.noReturnBlock = function() {
    return this.getTypedRuleContext(NoReturnBlockContext,0);
};

NoRetuenModuleDeclarationContext.prototype.INPUT = function() {
    return this.getToken(FaplaParser.INPUT, 0);
};

NoRetuenModuleDeclarationContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.COLON);
    } else {
        return this.getToken(FaplaParser.COLON, i);
    }
};


NoRetuenModuleDeclarationContext.prototype.PrimitiveType = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.PrimitiveType);
    } else {
        return this.getToken(FaplaParser.PrimitiveType, i);
    }
};


NoRetuenModuleDeclarationContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.SEMICOLON);
    } else {
        return this.getToken(FaplaParser.SEMICOLON, i);
    }
};


NoRetuenModuleDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterNoRetuenModuleDeclaration(this);
	}
};

NoRetuenModuleDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitNoRetuenModuleDeclaration(this);
	}
};




FaplaParser.NoRetuenModuleDeclarationContext = NoRetuenModuleDeclarationContext;

FaplaParser.prototype.noRetuenModuleDeclaration = function() {

    var localctx = new NoRetuenModuleDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FaplaParser.RULE_noRetuenModuleDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        this.match(FaplaParser.MODULE);
        this.state = 66;
        this.match(FaplaParser.Identifier);
        this.state = 77;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 67;
            this.match(FaplaParser.INPUT);
            this.state = 68;
            this.match(FaplaParser.COLON);
            this.state = 73; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 69;
                this.match(FaplaParser.Identifier);
                this.state = 70;
                this.match(FaplaParser.COLON);
                this.state = 71;
                this.match(FaplaParser.PrimitiveType);
                this.state = 72;
                this.match(FaplaParser.SEMICOLON);
                this.state = 75; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }

        this.state = 79;
        this.noReturnBlock();
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

MainModuleDeclarationContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.Identifier);
    } else {
        return this.getToken(FaplaParser.Identifier, i);
    }
};


MainModuleDeclarationContext.prototype.noReturnBlock = function() {
    return this.getTypedRuleContext(NoReturnBlockContext,0);
};

MainModuleDeclarationContext.prototype.INPUT = function() {
    return this.getToken(FaplaParser.INPUT, 0);
};

MainModuleDeclarationContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.COLON);
    } else {
        return this.getToken(FaplaParser.COLON, i);
    }
};


MainModuleDeclarationContext.prototype.OUTPUT = function() {
    return this.getToken(FaplaParser.OUTPUT, 0);
};

MainModuleDeclarationContext.prototype.PrimitiveType = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.PrimitiveType);
    } else {
        return this.getToken(FaplaParser.PrimitiveType, i);
    }
};


MainModuleDeclarationContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.SEMICOLON);
    } else {
        return this.getToken(FaplaParser.SEMICOLON, i);
    }
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
    this.enterRule(localctx, 6, FaplaParser.RULE_mainModuleDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(FaplaParser.MODULE);
        this.state = 82;
        this.match(FaplaParser.Identifier);
        this.state = 93;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 83;
            this.match(FaplaParser.INPUT);
            this.state = 84;
            this.match(FaplaParser.COLON);
            this.state = 89; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 85;
                this.match(FaplaParser.Identifier);
                this.state = 86;
                this.match(FaplaParser.COLON);
                this.state = 87;
                this.match(FaplaParser.PrimitiveType);
                this.state = 88;
                this.match(FaplaParser.SEMICOLON);
                this.state = 91; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }

        this.state = 99;
        _la = this._input.LA(1);
        if(_la===FaplaParser.OUTPUT) {
            this.state = 95;
            this.match(FaplaParser.OUTPUT);
            this.state = 96;
            this.match(FaplaParser.COLON);
            this.state = 97;
            this.match(FaplaParser.PrimitiveType);
            this.state = 98;
            this.match(FaplaParser.SEMICOLON);
        }

        this.state = 101;
        this.noReturnBlock();
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
        this.state = 103;
        this.match(FaplaParser.BEGIN);
        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
            this.state = 104;
            this.statement();
            this.state = 109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 110;
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

function NoReturnBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_noReturnBlock;
    return this;
}

NoReturnBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoReturnBlockContext.prototype.constructor = NoReturnBlockContext;

NoReturnBlockContext.prototype.BEGIN = function() {
    return this.getToken(FaplaParser.BEGIN, 0);
};

NoReturnBlockContext.prototype.END = function() {
    return this.getToken(FaplaParser.END, 0);
};

NoReturnBlockContext.prototype.noReturnStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NoReturnStatementContext);
    } else {
        return this.getTypedRuleContext(NoReturnStatementContext,i);
    }
};

NoReturnBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterNoReturnBlock(this);
	}
};

NoReturnBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitNoReturnBlock(this);
	}
};




FaplaParser.NoReturnBlockContext = NoReturnBlockContext;

FaplaParser.prototype.noReturnBlock = function() {

    var localctx = new NoReturnBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FaplaParser.RULE_noReturnBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.match(FaplaParser.BEGIN);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
            this.state = 113;
            this.noReturnStatement();
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 119;
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
    this.enterRule(localctx, 12, FaplaParser.RULE_supBlock);
    var _la = 0; // Token type
    try {
        this.state = 130;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.match(FaplaParser.BEGIN);
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
                this.state = 122;
                this.statement();
                this.state = 127;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 128;
            this.match(FaplaParser.END);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 129;
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

function NoReturnSupBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_noReturnSupBlock;
    return this;
}

NoReturnSupBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoReturnSupBlockContext.prototype.constructor = NoReturnSupBlockContext;

NoReturnSupBlockContext.prototype.BEGIN = function() {
    return this.getToken(FaplaParser.BEGIN, 0);
};

NoReturnSupBlockContext.prototype.END = function() {
    return this.getToken(FaplaParser.END, 0);
};

NoReturnSupBlockContext.prototype.noReturnStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NoReturnStatementContext);
    } else {
        return this.getTypedRuleContext(NoReturnStatementContext,i);
    }
};

NoReturnSupBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterNoReturnSupBlock(this);
	}
};

NoReturnSupBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitNoReturnSupBlock(this);
	}
};




FaplaParser.NoReturnSupBlockContext = NoReturnSupBlockContext;

FaplaParser.prototype.noReturnSupBlock = function() {

    var localctx = new NoReturnSupBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FaplaParser.RULE_noReturnSupBlock);
    var _la = 0; // Token type
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 132;
            this.match(FaplaParser.BEGIN);
            this.state = 136;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
                this.state = 133;
                this.noReturnStatement();
                this.state = 138;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 139;
            this.match(FaplaParser.END);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 140;
            this.noReturnStatement();
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

function NoReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_noReturnStatement;
    return this;
}

NoReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoReturnStatementContext.prototype.constructor = NoReturnStatementContext;

NoReturnStatementContext.prototype.IF = function() {
    return this.getToken(FaplaParser.IF, 0);
};

NoReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

NoReturnStatementContext.prototype.THEN = function() {
    return this.getToken(FaplaParser.THEN, 0);
};

NoReturnStatementContext.prototype.noReturnSupBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NoReturnSupBlockContext);
    } else {
        return this.getTypedRuleContext(NoReturnSupBlockContext,i);
    }
};

NoReturnStatementContext.prototype.ELSE = function() {
    return this.getToken(FaplaParser.ELSE, 0);
};

NoReturnStatementContext.prototype.WHILE = function() {
    return this.getToken(FaplaParser.WHILE, 0);
};

NoReturnStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(FaplaParser.SEMICOLON, 0);
};

NoReturnStatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

NoReturnStatementContext.prototype.varDeclaration = function() {
    return this.getTypedRuleContext(VarDeclarationContext,0);
};

NoReturnStatementContext.prototype.WRITE = function() {
    return this.getToken(FaplaParser.WRITE, 0);
};

NoReturnStatementContext.prototype.READ = function() {
    return this.getToken(FaplaParser.READ, 0);
};

NoReturnStatementContext.prototype.Identifier = function() {
    return this.getToken(FaplaParser.Identifier, 0);
};

NoReturnStatementContext.prototype.noReturnBlock = function() {
    return this.getTypedRuleContext(NoReturnBlockContext,0);
};

NoReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterNoReturnStatement(this);
	}
};

NoReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitNoReturnStatement(this);
	}
};




FaplaParser.NoReturnStatementContext = NoReturnStatementContext;

FaplaParser.prototype.noReturnStatement = function() {

    var localctx = new NoReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FaplaParser.RULE_noReturnStatement);
    try {
        this.state = 169;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 143;
            this.match(FaplaParser.IF);
            this.state = 144;
            this.expression(0);
            this.state = 145;
            this.match(FaplaParser.THEN);
            this.state = 146;
            this.noReturnSupBlock();
            this.state = 149;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
            if(la_===1) {
                this.state = 147;
                this.match(FaplaParser.ELSE);
                this.state = 148;
                this.noReturnSupBlock();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.match(FaplaParser.WHILE);
            this.state = 152;
            this.expression(0);
            this.state = 153;
            this.noReturnSupBlock();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 155;
            this.expression(0);
            this.state = 156;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 158;
            this.assignment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 159;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 160;
            this.varDeclaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 161;
            this.match(FaplaParser.WRITE);
            this.state = 162;
            this.expression(0);
            this.state = 163;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 165;
            this.match(FaplaParser.READ);
            this.state = 166;
            this.match(FaplaParser.Identifier);
            this.state = 167;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 168;
            this.noReturnBlock();
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

StatementContext.prototype.SEMICOLON = function() {
    return this.getToken(FaplaParser.SEMICOLON, 0);
};

StatementContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

StatementContext.prototype.varDeclaration = function() {
    return this.getTypedRuleContext(VarDeclarationContext,0);
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

StatementContext.prototype.RETURN = function() {
    return this.getToken(FaplaParser.RETURN, 0);
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
    this.enterRule(localctx, 18, FaplaParser.RULE_statement);
    try {
        this.state = 201;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 171;
            this.match(FaplaParser.IF);
            this.state = 172;
            this.expression(0);
            this.state = 173;
            this.match(FaplaParser.THEN);
            this.state = 174;
            this.supBlock();
            this.state = 177;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
            if(la_===1) {
                this.state = 175;
                this.match(FaplaParser.ELSE);
                this.state = 176;
                this.supBlock();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 179;
            this.match(FaplaParser.WHILE);
            this.state = 180;
            this.expression(0);
            this.state = 181;
            this.supBlock();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 183;
            this.expression(0);
            this.state = 184;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 186;
            this.assignment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 187;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 188;
            this.varDeclaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 189;
            this.match(FaplaParser.WRITE);
            this.state = 190;
            this.expression(0);
            this.state = 191;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 193;
            this.match(FaplaParser.READ);
            this.state = 194;
            this.match(FaplaParser.Identifier);
            this.state = 195;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 196;
            this.match(FaplaParser.RETURN);
            this.state = 197;
            this.expression(0);
            this.state = 198;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 200;
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

ExpressionContext.prototype.PC = function() {
    return this.getToken(FaplaParser.PC, 0);
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
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, FaplaParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.state = 204;
            this.match(FaplaParser.STRINGCONSTANT);
            break;

        case 2:
            this.state = 205;
            this.match(FaplaParser.REALCONSTANT);
            break;

        case 3:
            this.state = 206;
            this.match(FaplaParser.BOOLEANCONSTANT);
            break;

        case 4:
            this.state = 207;
            this.match(FaplaParser.PO);
            this.state = 208;
            this.expression(0);
            this.state = 209;
            this.match(FaplaParser.PC);
            break;

        case 5:
            this.state = 211;
            this.match(FaplaParser.Identifier);
            this.state = 212;
            this.match(FaplaParser.PO);
            this.state = 214;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
                this.state = 213;
                this.expressionList();
            }

            this.state = 216;
            this.match(FaplaParser.PC);
            break;

        case 6:
            this.state = 217;
            this.match(FaplaParser.NOT);
            this.state = 218;
            this.expression(11);
            break;

        case 7:
            this.state = 219;
            this.match(FaplaParser.Identifier);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 253;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 251;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 222;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 223;
                    this.match(FaplaParser.POW);
                    this.state = 224;
                    this.expression(10);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 225;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 226;
                    _la = this._input.LA(1);
                    if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (FaplaParser.MUL - 40)) | (1 << (FaplaParser.DIV - 40)) | (1 << (FaplaParser.MOD - 40)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 227;
                    this.expression(9);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 228;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 229;
                    _la = this._input.LA(1);
                    if(!(_la===FaplaParser.ADD || _la===FaplaParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 230;
                    this.expression(8);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 231;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 232;
                    _la = this._input.LA(1);
                    if(!(((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (FaplaParser.GT - 25)) | (1 << (FaplaParser.LT - 25)) | (1 << (FaplaParser.EQUAL - 25)) | (1 << (FaplaParser.LE - 25)) | (1 << (FaplaParser.GE - 25)) | (1 << (FaplaParser.NOTEQUAL - 25)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 233;
                    this.expression(7);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 234;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 235;
                    this.match(FaplaParser.XOR);
                    this.state = 236;
                    this.expression(6);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 237;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 238;
                    this.match(FaplaParser.AND);
                    this.state = 239;
                    this.expression(5);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 240;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 241;
                    this.match(FaplaParser.OR);
                    this.state = 242;
                    this.expression(4);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 243;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 244;
                    this.match(FaplaParser.QUESTION);
                    this.state = 245;
                    this.expression(0);
                    this.state = 246;
                    this.match(FaplaParser.COLON);
                    this.state = 247;
                    this.expression(3);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 249;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 250;
                    this.match(FaplaParser.FACTORIAL);
                    break;

                } 
            }
            this.state = 255;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
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
    this.enterRule(localctx, 22, FaplaParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 256;
        this.expression(0);
        this.state = 261;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.COMMA) {
            this.state = 257;
            this.match(FaplaParser.COMMA);
            this.state = 258;
            this.expression(0);
            this.state = 263;
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
    this.enterRule(localctx, 24, FaplaParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(FaplaParser.Identifier);
        this.state = 265;
        this.match(FaplaParser.COLON);
        this.state = 266;
        this.match(FaplaParser.PrimitiveType);
        this.state = 267;
        this.match(FaplaParser.SEMICOLON);
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
    this.enterRule(localctx, 26, FaplaParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        this.match(FaplaParser.Identifier);
        this.state = 270;
        this.match(FaplaParser.ASSIGN);
        this.state = 271;
        this.expression(0);
        this.state = 272;
        this.match(FaplaParser.SEMICOLON);
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
	case 10:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

FaplaParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FaplaParser = FaplaParser;
