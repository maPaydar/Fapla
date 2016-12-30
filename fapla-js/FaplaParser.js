// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FaplaListener = require('./FaplaListener').FaplaListener;

const Scope = require('./Scope').Scope;
const Symbol = require('./Symbol').Symbol;
const TypeConverting = require('./TypeConverting').TypeConverting;
var rootScope = new Scope(null);
var currentScope = rootScope;

var grammarFileName = "Fapla.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00033\u0158\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002%\n\u0002",
    "\f\u0002\u000e\u0002(\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "2\n\u0002\f\u0002\u000e\u00025\u000b\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0006\u0003@\n\u0003\r\u0003\u000e\u0003A\u0005\u0003D\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003J\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004",
    "W\n\u0004\r\u0004\u000e\u0004X\u0005\u0004[\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u0006f\n\u0006\f\u0006\u000e\u0006i\u000b\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u0007q\n\u0007\f\u0007\u000e\u0007t\u000b\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0007\b|\n\b\f\b\u000e\b",
    "\u007f\u000b\b\u0003\b\u0003\b\u0003\b\u0005\b\u0084\n\b\u0003\t\u0003",
    "\t\u0003\t\u0007\t\u0089\n\t\f\t\u000e\t\u008c\u000b\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u0091\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0005\n\u0099\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\n\u00ad\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u00b6\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u00ce\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0005\f\u00df\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0005\f\u00e8\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u013f",
    "\n\f\f\f\u000e\f\u0142\u000b\f\u0003\r\u0003\r\u0003\r\u0007\r\u0147",
    "\n\r\f\r\u000e\r\u014a\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0002\u0003\u0016\u0010\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u0002",
    "\u0002\u0184\u0002&\u0003\u0002\u0002\u0002\u00046\u0003\u0002\u0002",
    "\u0002\u0006M\u0003\u0002\u0002\u0002\b^\u0003\u0002\u0002\u0002\nb",
    "\u0003\u0002\u0002\u0002\fm\u0003\u0002\u0002\u0002\u000e\u0083\u0003",
    "\u0002\u0002\u0002\u0010\u0090\u0003\u0002\u0002\u0002\u0012\u00ac\u0003",
    "\u0002\u0002\u0002\u0014\u00cd\u0003\u0002\u0002\u0002\u0016\u00e7\u0003",
    "\u0002\u0002\u0002\u0018\u0143\u0003\u0002\u0002\u0002\u001a\u014b\u0003",
    "\u0002\u0002\u0002\u001c\u0151\u0003\u0002\u0002\u0002\u001e\u001f\u0005",
    "\u0004\u0003\u0002\u001f \b\u0002\u0001\u0002 %\u0003\u0002\u0002\u0002",
    "!\"\u0005\u0006\u0004\u0002\"#\b\u0002\u0001\u0002#%\u0003\u0002\u0002",
    "\u0002$\u001e\u0003\u0002\u0002\u0002$!\u0003\u0002\u0002\u0002%(\u0003",
    "\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002",
    "\')\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002)*\u0005\b\u0005",
    "\u0002*3\b\u0002\u0001\u0002+,\u0005\u0004\u0003\u0002,-\b\u0002\u0001",
    "\u0002-2\u0003\u0002\u0002\u0002./\u0005\u0006\u0004\u0002/0\b\u0002",
    "\u0001\u000202\u0003\u0002\u0002\u00021+\u0003\u0002\u0002\u00021.\u0003",
    "\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u0002",
    "34\u0003\u0002\u0002\u00024\u0003\u0003\u0002\u0002\u000253\u0003\u0002",
    "\u0002\u000267\u0007\u0011\u0002\u00027C\u00070\u0002\u000289\u0007",
    "\u0014\u0002\u00029?\u0007\u001f\u0002\u0002:;\u00070\u0002\u0002;<",
    "\u0007\u001f\u0002\u0002<=\u0007\u0003\u0002\u0002=>\u0007\u0018\u0002",
    "\u0002>@\b\u0003\u0001\u0002?:\u0003\u0002\u0002\u0002@A\u0003\u0002",
    "\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002\u0002BD\u0003",
    "\u0002\u0002\u0002C8\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002",
    "DI\u0003\u0002\u0002\u0002EF\u0007\u0015\u0002\u0002FG\u0007\u001f\u0002",
    "\u0002GH\u0007\u0003\u0002\u0002HJ\u0007\u0018\u0002\u0002IE\u0003\u0002",
    "\u0002\u0002IJ\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KL\u0005",
    "\n\u0006\u0002L\u0005\u0003\u0002\u0002\u0002MN\u0007\u0011\u0002\u0002",
    "NZ\u00070\u0002\u0002OP\u0007\u0014\u0002\u0002PV\u0007\u001f\u0002",
    "\u0002QR\u00070\u0002\u0002RS\u0007\u001f\u0002\u0002ST\u0007\u0003",
    "\u0002\u0002TU\u0007\u0018\u0002\u0002UW\b\u0004\u0001\u0002VQ\u0003",
    "\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002",
    "XY\u0003\u0002\u0002\u0002Y[\u0003\u0002\u0002\u0002ZO\u0003\u0002\u0002",
    "\u0002Z[\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\]\u0005",
    "\f\u0007\u0002]\u0007\u0003\u0002\u0002\u0002^_\u0007\u0011\u0002\u0002",
    "_`\u00070\u0002\u0002`a\u0005\f\u0007\u0002a\t\u0003\u0002\u0002\u0002",
    "bc\u0007\u0012\u0002\u0002cg\b\u0006\u0001\u0002df\u0005\u0014\u000b",
    "\u0002ed\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002",
    "\u0002\u0002gh\u0003\u0002\u0002\u0002hj\u0003\u0002\u0002\u0002ig\u0003",
    "\u0002\u0002\u0002jk\u0007\u0013\u0002\u0002kl\b\u0006\u0001\u0002l",
    "\u000b\u0003\u0002\u0002\u0002mn\u0007\u0012\u0002\u0002nr\b\u0007\u0001",
    "\u0002oq\u0005\u0012\n\u0002po\u0003\u0002\u0002\u0002qt\u0003\u0002",
    "\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002su\u0003",
    "\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002uv\u0007\u0013\u0002\u0002",
    "vw\b\u0007\u0001\u0002w\r\u0003\u0002\u0002\u0002xy\u0007\u0012\u0002",
    "\u0002y}\b\b\u0001\u0002z|\u0005\u0014\u000b\u0002{z\u0003\u0002\u0002",
    "\u0002|\u007f\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002}~\u0003",
    "\u0002\u0002\u0002~\u0080\u0003\u0002\u0002\u0002\u007f}\u0003\u0002",
    "\u0002\u0002\u0080\u0081\u0007\u0013\u0002\u0002\u0081\u0084\b\b\u0001",
    "\u0002\u0082\u0084\u0005\u0014\u000b\u0002\u0083x\u0003\u0002\u0002",
    "\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u000f\u0003\u0002\u0002",
    "\u0002\u0085\u0086\u0007\u0012\u0002\u0002\u0086\u008a\b\t\u0001\u0002",
    "\u0087\u0089\u0005\u0012\n\u0002\u0088\u0087\u0003\u0002\u0002\u0002",
    "\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002",
    "\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008d\u0003\u0002\u0002\u0002",
    "\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008e\u0007\u0013\u0002\u0002",
    "\u008e\u0091\b\t\u0001\u0002\u008f\u0091\u0005\u0012\n\u0002\u0090\u0085",
    "\u0003\u0002\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u0011",
    "\u0003\u0002\u0002\u0002\u0092\u0093\u0007\u000e\u0002\u0002\u0093\u0094",
    "\u0005\u0016\f\u0002\u0094\u0095\u0007\r\u0002\u0002\u0095\u0098\u0005",
    "\u0010\t\u0002\u0096\u0097\u0007\f\u0002\u0002\u0097\u0099\u0005\u0010",
    "\t\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002",
    "\u0002\u0002\u0099\u00ad\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0010",
    "\u0002\u0002\u009b\u009c\u0005\u0016\f\u0002\u009c\u009d\u0005\u0010",
    "\t\u0002\u009d\u00ad\u0003\u0002\u0002\u0002\u009e\u009f\u0005\u0016",
    "\f\u0002\u009f\u00a0\u0007\u0018\u0002\u0002\u00a0\u00ad\u0003\u0002",
    "\u0002\u0002\u00a1\u00ad\u0005\u001c\u000f\u0002\u00a2\u00ad\u0007\u0018",
    "\u0002\u0002\u00a3\u00ad\u0005\u001a\u000e\u0002\u00a4\u00a5\u0007\u0016",
    "\u0002\u0002\u00a5\u00a6\u0005\u0016\f\u0002\u00a6\u00a7\u0007\u0018",
    "\u0002\u0002\u00a7\u00ad\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\u0017",
    "\u0002\u0002\u00a9\u00aa\u00070\u0002\u0002\u00aa\u00ad\u0007\u0018",
    "\u0002\u0002\u00ab\u00ad\u0005\f\u0007\u0002\u00ac\u0092\u0003\u0002",
    "\u0002\u0002\u00ac\u009a\u0003\u0002\u0002\u0002\u00ac\u009e\u0003\u0002",
    "\u0002\u0002\u00ac\u00a1\u0003\u0002\u0002\u0002\u00ac\u00a2\u0003\u0002",
    "\u0002\u0002\u00ac\u00a3\u0003\u0002\u0002\u0002\u00ac\u00a4\u0003\u0002",
    "\u0002\u0002\u00ac\u00a8\u0003\u0002\u0002\u0002\u00ac\u00ab\u0003\u0002",
    "\u0002\u0002\u00ad\u0013\u0003\u0002\u0002\u0002\u00ae\u00af\u0007\u000e",
    "\u0002\u0002\u00af\u00b0\u0005\u0016\f\u0002\u00b0\u00b1\b\u000b\u0001",
    "\u0002\u00b1\u00b2\u0007\r\u0002\u0002\u00b2\u00b5\u0005\u000e\b\u0002",
    "\u00b3\u00b4\u0007\f\u0002\u0002\u00b4\u00b6\u0005\u000e\b\u0002\u00b5",
    "\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6",
    "\u00ce\u0003\u0002\u0002\u0002\u00b7\u00b8\u0007\u0010\u0002\u0002\u00b8",
    "\u00b9\u0005\u0016\f\u0002\u00b9\u00ba\u0005\u000e\b\u0002\u00ba\u00ce",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0005\u0016\f\u0002\u00bc\u00bd",
    "\u0007\u0018\u0002\u0002\u00bd\u00ce\u0003\u0002\u0002\u0002\u00be\u00ce",
    "\u0005\u001c\u000f\u0002\u00bf\u00ce\u0007\u0018\u0002\u0002\u00c0\u00ce",
    "\u0005\u001a\u000e\u0002\u00c1\u00c2\u0007\u0016\u0002\u0002\u00c2\u00c3",
    "\u0005\u0016\f\u0002\u00c3\u00c4\u0007\u0018\u0002\u0002\u00c4\u00ce",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u0017\u0002\u0002\u00c6\u00c7",
    "\u00070\u0002\u0002\u00c7\u00ce\u0007\u0018\u0002\u0002\u00c8\u00c9",
    "\u0007\u000f\u0002\u0002\u00c9\u00ca\u0005\u0016\f\u0002\u00ca\u00cb",
    "\u0007\u0018\u0002\u0002\u00cb\u00ce\u0003\u0002\u0002\u0002\u00cc\u00ce",
    "\u0005\n\u0006\u0002\u00cd\u00ae\u0003\u0002\u0002\u0002\u00cd\u00b7",
    "\u0003\u0002\u0002\u0002\u00cd\u00bb\u0003\u0002\u0002\u0002\u00cd\u00be",
    "\u0003\u0002\u0002\u0002\u00cd\u00bf\u0003\u0002\u0002\u0002\u00cd\u00c0",
    "\u0003\u0002\u0002\u0002\u00cd\u00c1\u0003\u0002\u0002\u0002\u00cd\u00c5",
    "\u0003\u0002\u0002\u0002\u00cd\u00c8\u0003\u0002\u0002\u0002\u00cd\u00cc",
    "\u0003\u0002\u0002\u0002\u00ce\u0015\u0003\u0002\u0002\u0002\u00cf\u00d0",
    "\b\f\u0001\u0002\u00d0\u00d1\u0007\u0005\u0002\u0002\u00d1\u00e8\b\f",
    "\u0001\u0002\u00d2\u00d3\u0007\u0006\u0002\u0002\u00d3\u00e8\b\f\u0001",
    "\u0002\u00d4\u00d5\u0007\u0004\u0002\u0002\u00d5\u00e8\b\f\u0001\u0002",
    "\u00d6\u00d7\u0007.\u0002\u0002\u00d7\u00d8\u0005\u0016\f\u0002\u00d8",
    "\u00d9\u0007/\u0002\u0002\u00d9\u00da\b\f\u0001\u0002\u00da\u00e8\u0003",
    "\u0002\u0002\u0002\u00db\u00dc\u00070\u0002\u0002\u00dc\u00de\u0007",
    ".\u0002\u0002\u00dd\u00df\u0005\u0018\r\u0002\u00de\u00dd\u0003\u0002",
    "\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df\u00e0\u0003\u0002",
    "\u0002\u0002\u00e0\u00e8\u0007/\u0002\u0002\u00e1\u00e2\u0007&\u0002",
    "\u0002\u00e2\u00e3\u0005\u0016\f\u0015\u00e3\u00e4\b\f\u0001\u0002\u00e4",
    "\u00e8\u0003\u0002\u0002\u0002\u00e5\u00e6\u00070\u0002\u0002\u00e6",
    "\u00e8\b\f\u0001\u0002\u00e7\u00cf\u0003\u0002\u0002\u0002\u00e7\u00d2",
    "\u0003\u0002\u0002\u0002\u00e7\u00d4\u0003\u0002\u0002\u0002\u00e7\u00d6",
    "\u0003\u0002\u0002\u0002\u00e7\u00db\u0003\u0002\u0002\u0002\u00e7\u00e1",
    "\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e8\u0140",
    "\u0003\u0002\u0002\u0002\u00e9\u00ea\f\u0013\u0002\u0002\u00ea\u00eb",
    "\u0007,\u0002\u0002\u00eb\u00ec\u0005\u0016\f\u0014\u00ec\u00ed\b\f",
    "\u0001\u0002\u00ed\u013f\u0003\u0002\u0002\u0002\u00ee\u00ef\f\u0012",
    "\u0002\u0002\u00ef\u00f0\u0007*\u0002\u0002\u00f0\u00f1\u0005\u0016",
    "\f\u0013\u00f1\u00f2\b\f\u0001\u0002\u00f2\u013f\u0003\u0002\u0002\u0002",
    "\u00f3\u00f4\f\u0011\u0002\u0002\u00f4\u00f5\u0007+\u0002\u0002\u00f5",
    "\u00f6\u0005\u0016\f\u0012\u00f6\u00f7\b\f\u0001\u0002\u00f7\u013f\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\f\u0010\u0002\u0002\u00f9\u00fa\u0007",
    "-\u0002\u0002\u00fa\u00fb\u0005\u0016\f\u0011\u00fb\u00fc\b\f\u0001",
    "\u0002\u00fc\u013f\u0003\u0002\u0002\u0002\u00fd\u00fe\f\u000f\u0002",
    "\u0002\u00fe\u00ff\u0007(\u0002\u0002\u00ff\u0100\u0005\u0016\f\u0010",
    "\u0100\u0101\b\f\u0001\u0002\u0101\u013f\u0003\u0002\u0002\u0002\u0102",
    "\u0103\f\u000e\u0002\u0002\u0103\u0104\u0007)\u0002\u0002\u0104\u0105",
    "\u0005\u0016\f\u000f\u0105\u0106\b\f\u0001\u0002\u0106\u013f\u0003\u0002",
    "\u0002\u0002\u0107\u0108\f\r\u0002\u0002\u0108\u0109\u0007!\u0002\u0002",
    "\u0109\u010a\u0005\u0016\f\u000e\u010a\u010b\b\f\u0001\u0002\u010b\u013f",
    "\u0003\u0002\u0002\u0002\u010c\u010d\f\f\u0002\u0002\u010d\u010e\u0007",
    "\"\u0002\u0002\u010e\u010f\u0005\u0016\f\r\u010f\u0110\b\f\u0001\u0002",
    "\u0110\u013f\u0003\u0002\u0002\u0002\u0111\u0112\f\u000b\u0002\u0002",
    "\u0112\u0113\u0007\u001b\u0002\u0002\u0113\u0114\u0005\u0016\f\f\u0114",
    "\u0115\b\f\u0001\u0002\u0115\u013f\u0003\u0002\u0002\u0002\u0116\u0117",
    "\f\n\u0002\u0002\u0117\u0118\u0007\u001c\u0002\u0002\u0118\u0119\u0005",
    "\u0016\f\u000b\u0119\u011a\b\f\u0001\u0002\u011a\u013f\u0003\u0002\u0002",
    "\u0002\u011b\u011c\f\t\u0002\u0002\u011c\u011d\u0007 \u0002\u0002\u011d",
    "\u011e\u0005\u0016\f\n\u011e\u011f\b\f\u0001\u0002\u011f\u013f\u0003",
    "\u0002\u0002\u0002\u0120\u0121\f\b\u0002\u0002\u0121\u0122\u0007#\u0002",
    "\u0002\u0122\u0123\u0005\u0016\f\t\u0123\u0124\b\f\u0001\u0002\u0124",
    "\u013f\u0003\u0002\u0002\u0002\u0125\u0126\f\u0007\u0002\u0002\u0126",
    "\u0127\u0007\'\u0002\u0002\u0127\u0128\u0005\u0016\f\b\u0128\u0129\b",
    "\f\u0001\u0002\u0129\u013f\u0003\u0002\u0002\u0002\u012a\u012b\f\u0006",
    "\u0002\u0002\u012b\u012c\u0007$\u0002\u0002\u012c\u012d\u0005\u0016",
    "\f\u0007\u012d\u012e\b\f\u0001\u0002\u012e\u013f\u0003\u0002\u0002\u0002",
    "\u012f\u0130\f\u0005\u0002\u0002\u0130\u0131\u0007%\u0002\u0002\u0131",
    "\u0132\u0005\u0016\f\u0006\u0132\u0133\b\f\u0001\u0002\u0133\u013f\u0003",
    "\u0002\u0002\u0002\u0134\u0135\f\u0004\u0002\u0002\u0135\u0136\u0007",
    "\u001e\u0002\u0002\u0136\u0137\u0005\u0016\f\u0002\u0137\u0138\u0007",
    "\u001f\u0002\u0002\u0138\u0139\u0005\u0016\f\u0005\u0139\u013a\b\f\u0001",
    "\u0002\u013a\u013f\u0003\u0002\u0002\u0002\u013b\u013c\f\u0014\u0002",
    "\u0002\u013c\u013d\u0007\u001d\u0002\u0002\u013d\u013f\b\f\u0001\u0002",
    "\u013e\u00e9\u0003\u0002\u0002\u0002\u013e\u00ee\u0003\u0002\u0002\u0002",
    "\u013e\u00f3\u0003\u0002\u0002\u0002\u013e\u00f8\u0003\u0002\u0002\u0002",
    "\u013e\u00fd\u0003\u0002\u0002\u0002\u013e\u0102\u0003\u0002\u0002\u0002",
    "\u013e\u0107\u0003\u0002\u0002\u0002\u013e\u010c\u0003\u0002\u0002\u0002",
    "\u013e\u0111\u0003\u0002\u0002\u0002\u013e\u0116\u0003\u0002\u0002\u0002",
    "\u013e\u011b\u0003\u0002\u0002\u0002\u013e\u0120\u0003\u0002\u0002\u0002",
    "\u013e\u0125\u0003\u0002\u0002\u0002\u013e\u012a\u0003\u0002\u0002\u0002",
    "\u013e\u012f\u0003\u0002\u0002\u0002\u013e\u0134\u0003\u0002\u0002\u0002",
    "\u013e\u013b\u0003\u0002\u0002\u0002\u013f\u0142\u0003\u0002\u0002\u0002",
    "\u0140\u013e\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002",
    "\u0141\u0017\u0003\u0002\u0002\u0002\u0142\u0140\u0003\u0002\u0002\u0002",
    "\u0143\u0148\u0005\u0016\f\u0002\u0144\u0145\u0007\u0019\u0002\u0002",
    "\u0145\u0147\u0005\u0016\f\u0002\u0146\u0144\u0003\u0002\u0002\u0002",
    "\u0147\u014a\u0003\u0002\u0002\u0002\u0148\u0146\u0003\u0002\u0002\u0002",
    "\u0148\u0149\u0003\u0002\u0002\u0002\u0149\u0019\u0003\u0002\u0002\u0002",
    "\u014a\u0148\u0003\u0002\u0002\u0002\u014b\u014c\u00070\u0002\u0002",
    "\u014c\u014d\u0007\u001f\u0002\u0002\u014d\u014e\u0007\u0003\u0002\u0002",
    "\u014e\u014f\u0007\u0018\u0002\u0002\u014f\u0150\b\u000e\u0001\u0002",
    "\u0150\u001b\u0003\u0002\u0002\u0002\u0151\u0152\u00070\u0002\u0002",
    "\u0152\u0153\u0007\u001a\u0002\u0002\u0153\u0154\u0005\u0016\f\u0002",
    "\u0154\u0155\u0007\u0018\u0002\u0002\u0155\u0156\b\u000f\u0001\u0002",
    "\u0156\u001d\u0003\u0002\u0002\u0002\u001a$&13ACIXZgr}\u0083\u008a\u0090",
    "\u0098\u00ac\u00b5\u00cd\u00de\u00e7\u013e\u0140\u0148"].join("");


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
        this.state = 36;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 34;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 28;
                    this.moduleDeclaration();
                    var scope = new Scope(rootScope);currentScope=scope;
                    break;

                case 2:
                    this.state = 31;
                    this.noRetuenModuleDeclaration();
                    var scope = new Scope(rootScope);currentScope=scope;
                    break;

                } 
            }
            this.state = 38;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

        this.state = 39;
        this.mainModuleDeclaration();
        var mainScope = new Scope(rootScope);currentScope=mainScope;
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.MODULE) {
            this.state = 47;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            switch(la_) {
            case 1:
                this.state = 41;
                this.moduleDeclaration();
                var scope = new Scope(rootScope);currentScope=scope;
                break;

            case 2:
                this.state = 44;
                this.noRetuenModuleDeclaration();
                var scope = new Scope(rootScope);currentScope=scope;
                break;

            }
            this.state = 51;
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
    this._Identifier = null; // Token
    this._PrimitiveType = null; // Token
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
        this.state = 52;
        this.match(FaplaParser.MODULE);
        this.state = 53;
        localctx._Identifier = this.match(FaplaParser.Identifier);
        this.state = 65;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 54;
            this.match(FaplaParser.INPUT);
            this.state = 55;
            this.match(FaplaParser.COLON);
            this.state = 61; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 56;
                localctx._Identifier = this.match(FaplaParser.Identifier);
                this.state = 57;
                this.match(FaplaParser.COLON);
                this.state = 58;
                localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
                this.state = 59;
                this.match(FaplaParser.SEMICOLON);
                currentScope.addSymbol(new Symbol((localctx._Identifier===null ? null : localctx._Identifier.text), (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text), null));
                this.state = 63; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }

        this.state = 71;
        _la = this._input.LA(1);
        if(_la===FaplaParser.OUTPUT) {
            this.state = 67;
            this.match(FaplaParser.OUTPUT);
            this.state = 68;
            this.match(FaplaParser.COLON);
            this.state = 69;
            localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
            this.state = 70;
            this.match(FaplaParser.SEMICOLON);
        }

        this.state = 73;
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
    this._Identifier = null; // Token
    this._PrimitiveType = null; // Token
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
        this.state = 75;
        this.match(FaplaParser.MODULE);
        this.state = 76;
        localctx._Identifier = this.match(FaplaParser.Identifier);
        this.state = 88;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 77;
            this.match(FaplaParser.INPUT);
            this.state = 78;
            this.match(FaplaParser.COLON);
            this.state = 84; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 79;
                localctx._Identifier = this.match(FaplaParser.Identifier);
                this.state = 80;
                this.match(FaplaParser.COLON);
                this.state = 81;
                localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
                this.state = 82;
                this.match(FaplaParser.SEMICOLON);
                currentScope.addSymbol(new Symbol((localctx._Identifier===null ? null : localctx._Identifier.text), (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text), null));
                this.state = 86; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }

        this.state = 90;
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

MainModuleDeclarationContext.prototype.Identifier = function() {
    return this.getToken(FaplaParser.Identifier, 0);
};

MainModuleDeclarationContext.prototype.noReturnBlock = function() {
    return this.getTypedRuleContext(NoReturnBlockContext,0);
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
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(FaplaParser.MODULE);
        this.state = 93;
        this.match(FaplaParser.Identifier);
        this.state = 94;
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
        this.state = 96;
        this.match(FaplaParser.BEGIN);
        currentScope = currentScope.enterScope();
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
            this.state = 98;
            this.statement();
            this.state = 103;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 104;
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
        this.state = 107;
        this.match(FaplaParser.BEGIN);
        currentScope = currentScope.enterScope();
        this.state = 112;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
            this.state = 109;
            this.noReturnStatement();
            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 115;
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
    this.enterRule(localctx, 12, FaplaParser.RULE_supBlock);
    var _la = 0; // Token type
    try {
        this.state = 129;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.match(FaplaParser.BEGIN);
            currentScope = currentScope.enterScope();
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMICOLON))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
                this.state = 120;
                this.statement();
                this.state = 125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 126;
            this.match(FaplaParser.END);
            currentScope = currentScope.exitScope();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
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
        this.state = 142;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.match(FaplaParser.BEGIN);
            currentScope = currentScope.enterScope();
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
            currentScope = currentScope.exitScope();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 141;
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
        this.state = 170;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.match(FaplaParser.IF);
            this.state = 145;
            this.expression(0);
            this.state = 146;
            this.match(FaplaParser.THEN);
            this.state = 147;
            this.noReturnSupBlock();
            this.state = 150;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
            if(la_===1) {
                this.state = 148;
                this.match(FaplaParser.ELSE);
                this.state = 149;
                this.noReturnSupBlock();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            this.match(FaplaParser.WHILE);
            this.state = 153;
            this.expression(0);
            this.state = 154;
            this.noReturnSupBlock();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 156;
            this.expression(0);
            this.state = 157;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 159;
            this.assignment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 160;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 161;
            this.varDeclaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 162;
            this.match(FaplaParser.WRITE);
            this.state = 163;
            this.expression(0);
            this.state = 164;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 166;
            this.match(FaplaParser.READ);
            this.state = 167;
            this.match(FaplaParser.Identifier);
            this.state = 168;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 169;
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
    this._expression = null; // ExpressionContext
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
        this.state = 203;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 172;
            this.match(FaplaParser.IF);
            this.state = 173;
            localctx._expression = this.expression(0);
            if(localctx._expression.type != "bool") console.log("expression " + (localctx._expression===null ? null : this._input.getText(new antlr4.Interval(localctx._expression.start,localctx._expression.stop))) + " must be a bool in if-statement condition");
            this.state = 175;
            this.match(FaplaParser.THEN);
            this.state = 176;
            this.supBlock();
            this.state = 179;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
            if(la_===1) {
                this.state = 177;
                this.match(FaplaParser.ELSE);
                this.state = 178;
                this.supBlock();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 181;
            this.match(FaplaParser.WHILE);
            this.state = 182;
            this.expression(0);
            this.state = 183;
            this.supBlock();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 185;
            this.expression(0);
            this.state = 186;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 188;
            this.assignment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 189;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 190;
            this.varDeclaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 191;
            this.match(FaplaParser.WRITE);
            this.state = 192;
            this.expression(0);
            this.state = 193;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 195;
            this.match(FaplaParser.READ);
            this.state = 196;
            this.match(FaplaParser.Identifier);
            this.state = 197;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 198;
            this.match(FaplaParser.RETURN);
            this.state = 199;
            this.expression(0);
            this.state = 200;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 202;
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
        this.state = 229;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.state = 206;
            localctx._STRINGCONSTANT = this.match(FaplaParser.STRINGCONSTANT);
            localctx.type = "string";
                                    localctx.value = (localctx._STRINGCONSTANT===null ? null : localctx._STRINGCONSTANT.text); 
            break;

        case 2:
            this.state = 208;
            localctx._REALCONSTANT = this.match(FaplaParser.REALCONSTANT);
            localctx.type = "real";
                                  localctx.value = (localctx._REALCONSTANT===null ? null : localctx._REALCONSTANT.text); 
            break;

        case 3:
            this.state = 210;
            localctx._BOOLEANCONSTANT = this.match(FaplaParser.BOOLEANCONSTANT);
            localctx.type = "bool";
                                     localctx.value = (localctx._BOOLEANCONSTANT===null ? null : localctx._BOOLEANCONSTANT.text); 
            break;

        case 4:
            this.state = 212;
            this.match(FaplaParser.PO);
            this.state = 213;
            localctx._expression = this.expression(0);
            this.state = 214;
            this.match(FaplaParser.PC);
            localctx.value =  "(" + localctx.value + ")"
            break;

        case 5:
            this.state = 217;
            localctx._Identifier = this.match(FaplaParser.Identifier);
            this.state = 218;
            this.match(FaplaParser.PO);
            this.state = 220;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
                this.state = 219;
                this.expressionList();
            }

            this.state = 222;
            this.match(FaplaParser.PC);
            break;

        case 6:
            this.state = 223;
            this.match(FaplaParser.NOT);
            this.state = 224;
            localctx.a = localctx._expression = this.expression(19);
            if(TypeConverting.canConvertTo(localctx.a.type, "bool")) {
                                       localctx.type =  "bool"
                                   } else {
                                       console.log(localctx.a.type + " can not NOT");
                                       localctx.type = "noType"
                                   }
                                  
            break;

        case 7:
            this.state = 227;
            localctx._Identifier = this.match(FaplaParser.Identifier);
            var s = currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text));
                                if(!s) {
                                    console.log("variable " +  (localctx._Identifier===null ? null : localctx._Identifier.text) + " not defined");
                                    localctx.type =  "noType"
                                } else {
                                    localctx.type =  s.type
                                    localctx.value =  s.value
                                }
                               
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 318;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 316;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 231;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 232;
                    this.match(FaplaParser.POW);
                    this.state = 233;
                    localctx.b = localctx._expression = this.expression(18);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                              localctx.type =  "real"
                                         else {
                                              console.log(localctx.a.type + " can not POW with " + localctx.b.type);
                                              localctx.type = "noType"
                                         }
                                        
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 236;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 237;
                    this.match(FaplaParser.MUL);
                    this.state = 238;
                    localctx.b = localctx._expression = this.expression(17);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                            localctx.type =  "real"
                                       else {
                                            console.log(localctx.a.type + " can not MUL with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 241;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 242;
                    this.match(FaplaParser.DIV);
                    this.state = 243;
                    localctx.b = localctx._expression = this.expression(16);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                         localctx.type =  "real"
                                      else {
                                         console.log(localctx.a.type + " can not DIV with " + localctx.b.type);
                                         localctx.type = "noType"
                                      }
                                      
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 246;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 247;
                    this.match(FaplaParser.MOD);
                    this.state = 248;
                    localctx.b = localctx._expression = this.expression(15);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                          localctx.type =  "real"
                                      else {
                                          console.log(localctx.a.type + " can not MOD with " + localctx.b.type);
                                          localctx.type = "noType"
                                      }
                                      
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 251;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 252;
                    this.match(FaplaParser.ADD);
                    this.state = 253;
                    localctx.b = localctx._expression = this.expression(14);

                                      localctx.type =  TypeConverting.max(localctx.a.type, localctx.b.type)/*
                                      if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))

                                       else {
                                           console.log($a.type + " can not ADD with " + $b.type);
                                           $type="noType";
                                       }*/
                                      
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 256;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 257;
                    this.match(FaplaParser.SUB);
                    this.state = 258;
                    localctx.b = localctx._expression = this.expression(13);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                            localctx.type =  "real"
                                       else {
                                            console.log(localctx.a.type + " can not SUB with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 261;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 262;
                    this.match(FaplaParser.LE);
                    this.state = 263;
                    localctx.b = localctx._expression = this.expression(12);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                             localctx.type =  "bool"
                                        else {
                                             console.log(localctx.a.type + " can not LE with " + localctx.b.type);
                                             localctx.type = "noType"
                                        }
                                       
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 266;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 267;
                    this.match(FaplaParser.GE);
                    this.state = 268;
                    localctx.b = localctx._expression = this.expression(11);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                             localctx.type =  "bool"
                                        else {
                                             console.log(localctx.a.type + " can not GE with " + localctx.b.type);
                                             localctx.type = "noType"
                                        }
                                       
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 271;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 272;
                    this.match(FaplaParser.GT);
                    this.state = 273;
                    localctx.b = localctx._expression = this.expression(10);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                         localctx.type =  "bool"
                                       else {
                                         console.log(localctx.a.type + " can not GT with " + localctx.b.type);
                                         localctx.type = "noType"
                                       }
                                      
                    break;

                case 10:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 276;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 277;
                    this.match(FaplaParser.LT);
                    this.state = 278;
                    localctx.b = localctx._expression = this.expression(9);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                         localctx.type =  "bool"
                                       else {
                                         console.log(localctx.a.type + " can not SUB with " + localctx.b.type);
                                         localctx.type = "noType"
                                       }
                                      
                    break;

                case 11:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 281;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 282;
                    this.match(FaplaParser.EQUAL);
                    this.state = 283;
                    localctx.b = localctx._expression = this.expression(8);
                    if(TypeConverting.canConvertTo(localctx.a.type, localctx.b.type))
                                            localctx.type =  "bool"
                                       else {
                                            console.log(localctx.a.type + " can not EQUAL with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 12:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 286;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 287;
                    this.match(FaplaParser.NOTEQUAL);
                    this.state = 288;
                    localctx.b = localctx._expression = this.expression(7);
                    if(TypeConverting.canConvertTo(localctx.a.type, localctx.b.type))
                                            localctx.type =  "bool"
                                       else {
                                            console.log(localctx.a.type + " can not NOTEQUAL with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 13:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 291;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 292;
                    this.match(FaplaParser.XOR);
                    this.state = 293;
                    localctx.b = localctx._expression = this.expression(6);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real") && TypeConverting.canConvertTo(localctx.b.type, "real"))
                                            localctx.type =  "real"
                                       else {
                                            console.log(localctx.a.type + " can not XOR with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 14:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 296;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 297;
                    this.match(FaplaParser.AND);
                    this.state = 298;
                    localctx.b = localctx._expression = this.expression(5);
                    if(TypeConverting.canConvertTo(localctx.a.type, "bool") && TypeConverting.canConvertTo(localctx.b.type, "bool"))
                                            localctx.type =  "bool"
                                       else {
                                            console.log(localctx.a.type + " can not AND with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 15:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 301;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 302;
                    this.match(FaplaParser.OR);
                    this.state = 303;
                    localctx.b = localctx._expression = this.expression(4);
                    if(TypeConverting.canConvertTo(localctx.a.type, "bool") && TypeConverting.canConvertTo(localctx.b.type, "bool"))
                                            localctx.type =  "bool"
                                       else {
                                            console.log(localctx.a.type + " can not OR with " + localctx.b.type);
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 16:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 306;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 307;
                    this.match(FaplaParser.QUESTION);
                    this.state = 308;
                    localctx.b = localctx._expression = this.expression(0);
                    this.state = 309;
                    this.match(FaplaParser.COLON);
                    this.state = 310;
                    localctx.c = localctx._expression = this.expression(3);
                    if(TypeConverting.canConvertTo(localctx.a.type, "bool"))
                                            localctx.type =  localctx.b.type
                                       else {
                                            console.log("condition expression must have a bool");
                                            localctx.type = "noType"
                                       }
                                      
                    break;

                case 17:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    localctx.a = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 313;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 314;
                    this.match(FaplaParser.FACTORIAL);
                    if(TypeConverting.canConvertTo(localctx.a.type, "real")) {
                                                                  localctx.type =  "real"
                                                              } else {
                                                                  console.log(localctx.a.type + " can not factorial");
                                                                  localctx.type = "noType"
                                                              }
                                                             
                    break;

                } 
            }
            this.state = 320;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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
        this.state = 321;
        this.expression(0);
        this.state = 326;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.COMMA) {
            this.state = 322;
            this.match(FaplaParser.COMMA);
            this.state = 323;
            this.expression(0);
            this.state = 328;
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
    this.enterRule(localctx, 24, FaplaParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        localctx._Identifier = this.match(FaplaParser.Identifier);
        this.state = 330;
        this.match(FaplaParser.COLON);
        this.state = 331;
        localctx._PrimitiveType = this.match(FaplaParser.PrimitiveType);
        this.state = 332;
        this.match(FaplaParser.SEMICOLON);
        currentScope.addSymbol(new Symbol((localctx._Identifier===null ? null : localctx._Identifier.text), (localctx._PrimitiveType===null ? null : localctx._PrimitiveType.text), null));
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
    this.enterRule(localctx, 26, FaplaParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 335;
        localctx._Identifier = this.match(FaplaParser.Identifier);
        this.state = 336;
        this.match(FaplaParser.ASSIGN);
        this.state = 337;
        localctx._expression = this.expression(0);
        this.state = 338;
        this.match(FaplaParser.SEMICOLON);

                    var s = currentScope.findSymbol((localctx._Identifier===null ? null : localctx._Identifier.text));
                    if(!s) {
                        console.log("variable " +  (localctx._Identifier===null ? null : localctx._Identifier.text) + " not defined");
                        localctx.type =  "noType"
                    } else {
                        if(TypeConverting.canConvertTo(localctx._expression.type, s.type)) {
                            s.value = localctx._expression.value;
                            localctx.type =  s.type
                        } else {
                            console.log("can not assign " + localctx._expression.type + " to " + s.type);
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
	case 10:
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
