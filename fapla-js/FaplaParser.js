// Generated from /home/amin/Documents/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FaplaListener = require('./FaplaListener').FaplaListener;
var grammarFileName = "Fapla.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00030\u00c2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0007\u0002\u001c\n\u0002\f\u0002\u000e\u0002\u001f",
    "\u000b\u0002\u0003\u0002\u0003\u0002\u0007\u0002#\n\u0002\f\u0002\u000e",
    "\u0002&\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u00033\n\u0003\f\u0003\u000e\u00036\u000b\u0003\u0005",
    "\u00038\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003?\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005J\n\u0005\f\u0005\u000e\u0005M\u000b\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0007\u0007",
    "V\n\u0007\f\u0007\u000e\u0007Y\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bc\n\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b|\n\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0089",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00a9\n\t\f\t\u000e\t\u00ac",
    "\u000b\t\u0003\n\u0003\n\u0003\n\u0007\n\u00b1\n\n\f\n\u000e\n\u00b4",
    "\u000b\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0002\u0003\u0010",
    "\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002",
    "\u0007\u0004\u0002\'(**\u0003\u0002%&\u0004\u0002\u0018\u0019\u001e",
    "\u001f\u0004\u0002\u001d\u001d  \u0003\u0002\u0004\u0006\u00d3\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0004)\u0003\u0002\u0002\u0002\u0006",
    "B\u0003\u0002\u0002\u0002\bF\u0003\u0002\u0002\u0002\nN\u0003\u0002",
    "\u0002\u0002\fS\u0003\u0002\u0002\u0002\u000e{\u0003\u0002\u0002\u0002",
    "\u0010\u0088\u0003\u0002\u0002\u0002\u0012\u00ad\u0003\u0002\u0002\u0002",
    "\u0014\u00b5\u0003\u0002\u0002\u0002\u0016\u00b7\u0003\u0002\u0002\u0002",
    "\u0018\u00bc\u0003\u0002\u0002\u0002\u001a\u001c\u0005\u0004\u0003\u0002",
    "\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002",
    "\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002",
    "\u001e \u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002",
    " $\u0005\u0006\u0004\u0002!#\u0005\u0004\u0003\u0002\"!\u0003\u0002",
    "\u0002\u0002#&\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002$%",
    "\u0003\u0002\u0002\u0002%\'\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002",
    "\u0002\'(\u0007\u0002\u0002\u0003(\u0003\u0003\u0002\u0002\u0002)*\u0007",
    "\f\u0002\u0002*7\u0007-\u0002\u0002+,\u0007\u0010\u0002\u0002,4\u0007",
    "\u001c\u0002\u0002-.\u0007-\u0002\u0002./\u0007\u001c\u0002\u0002/0",
    "\u0005\u0014\u000b\u000201\u0007\u0014\u0002\u000213\u0003\u0002\u0002",
    "\u00022-\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002",
    "\u0002\u000245\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u000264\u0003",
    "\u0002\u0002\u00027+\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u0002",
    "8>\u0003\u0002\u0002\u00029:\u0007\u0011\u0002\u0002:;\u0007\u001c\u0002",
    "\u0002;<\u0005\u0014\u000b\u0002<=\u0007\u0014\u0002\u0002=?\u0003\u0002",
    "\u0002\u0002>9\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0003",
    "\u0002\u0002\u0002@A\u0005\f\u0007\u0002A\u0005\u0003\u0002\u0002\u0002",
    "BC\u0007\f\u0002\u0002CD\u0007\u000f\u0002\u0002DE\u0005\f\u0007\u0002",
    "E\u0007\u0003\u0002\u0002\u0002FG\u0007\u0010\u0002\u0002GK\u0007\u001c",
    "\u0002\u0002HJ\u0005\u0016\f\u0002IH\u0003\u0002\u0002\u0002JM\u0003",
    "\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002",
    "L\t\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002NO\u0007\u0011",
    "\u0002\u0002OP\u0007\u001c\u0002\u0002PQ\u0005\u0014\u000b\u0002QR\u0007",
    "\u0014\u0002\u0002R\u000b\u0003\u0002\u0002\u0002SW\u0007\r\u0002\u0002",
    "TV\u0005\u000e\b\u0002UT\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002",
    "\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XZ\u0003\u0002",
    "\u0002\u0002YW\u0003\u0002\u0002\u0002Z[\u0007\u000e\u0002\u0002[\r",
    "\u0003\u0002\u0002\u0002\\]\u0007\t\u0002\u0002]^\u0005\u0010\t\u0002",
    "^_\u0007\b\u0002\u0002_b\u0005\f\u0007\u0002`a\u0007\u0007\u0002\u0002",
    "ac\u0005\f\u0007\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002",
    "\u0002c|\u0003\u0002\u0002\u0002de\u0007\u000b\u0002\u0002ef\u0005\u0010",
    "\t\u0002fg\u0005\u000e\b\u0002g|\u0003\u0002\u0002\u0002h|\u0007\u0014",
    "\u0002\u0002ij\u0005\u0010\t\u0002jk\u0007\u0014\u0002\u0002k|\u0003",
    "\u0002\u0002\u0002l|\u0005\u0018\r\u0002m|\u0005\u0016\f\u0002no\u0007",
    "\u0012\u0002\u0002op\u0007+\u0002\u0002pq\u0005\u0010\t\u0002qr\u0007",
    ",\u0002\u0002rs\u0007\u0014\u0002\u0002s|\u0003\u0002\u0002\u0002tu",
    "\u0007\u0013\u0002\u0002uv\u0007-\u0002\u0002v|\u0007\u0014\u0002\u0002",
    "wx\u0007\n\u0002\u0002xy\u0005\u0010\t\u0002yz\u0007\u0014\u0002\u0002",
    "z|\u0003\u0002\u0002\u0002{\\\u0003\u0002\u0002\u0002{d\u0003\u0002",
    "\u0002\u0002{h\u0003\u0002\u0002\u0002{i\u0003\u0002\u0002\u0002{l\u0003",
    "\u0002\u0002\u0002{m\u0003\u0002\u0002\u0002{n\u0003\u0002\u0002\u0002",
    "{t\u0003\u0002\u0002\u0002{w\u0003\u0002\u0002\u0002|\u000f\u0003\u0002",
    "\u0002\u0002}~\b\t\u0001\u0002~\u007f\u0007#\u0002\u0002\u007f\u0089",
    "\u0005\u0010\t\u0010\u0080\u0081\u0007-\u0002\u0002\u0081\u0082\u0007",
    "+\u0002\u0002\u0082\u0083\u0005\u0012\n\u0002\u0083\u0084\u0007,\u0002",
    "\u0002\u0084\u0089\u0003\u0002\u0002\u0002\u0085\u0089\u0007\u0003\u0002",
    "\u0002\u0086\u0089\u0007-\u0002\u0002\u0087\u0089\u0005\f\u0007\u0002",
    "\u0088}\u0003\u0002\u0002\u0002\u0088\u0080\u0003\u0002\u0002\u0002",
    "\u0088\u0085\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002",
    "\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u00aa\u0003\u0002\u0002\u0002",
    "\u008a\u008b\f\u000f\u0002\u0002\u008b\u008c\t\u0002\u0002\u0002\u008c",
    "\u00a9\u0005\u0010\t\u0010\u008d\u008e\f\u000e\u0002\u0002\u008e\u008f",
    "\t\u0003\u0002\u0002\u008f\u00a9\u0005\u0010\t\u000f\u0090\u0091\f\r",
    "\u0002\u0002\u0091\u0092\t\u0004\u0002\u0002\u0092\u00a9\u0005\u0010",
    "\t\u000e\u0093\u0094\f\f\u0002\u0002\u0094\u0095\t\u0005\u0002\u0002",
    "\u0095\u00a9\u0005\u0010\t\r\u0096\u0097\f\u000b\u0002\u0002\u0097\u0098",
    "\u0007!\u0002\u0002\u0098\u00a9\u0005\u0010\t\f\u0099\u009a\f\n\u0002",
    "\u0002\u009a\u009b\u0007)\u0002\u0002\u009b\u00a9\u0005\u0010\t\u000b",
    "\u009c\u009d\f\t\u0002\u0002\u009d\u009e\u0007$\u0002\u0002\u009e\u00a9",
    "\u0005\u0010\t\n\u009f\u00a0\f\b\u0002\u0002\u00a0\u00a1\u0007\"\u0002",
    "\u0002\u00a1\u00a9\u0005\u0010\t\t\u00a2\u00a3\f\u0007\u0002\u0002\u00a3",
    "\u00a4\u0007\u001b\u0002\u0002\u00a4\u00a5\u0005\u0010\t\u0002\u00a5",
    "\u00a6\u0007\u001c\u0002\u0002\u00a6\u00a7\u0005\u0010\t\b\u00a7\u00a9",
    "\u0003\u0002\u0002\u0002\u00a8\u008a\u0003\u0002\u0002\u0002\u00a8\u008d",
    "\u0003\u0002\u0002\u0002\u00a8\u0090\u0003\u0002\u0002\u0002\u00a8\u0093",
    "\u0003\u0002\u0002\u0002\u00a8\u0096\u0003\u0002\u0002\u0002\u00a8\u0099",
    "\u0003\u0002\u0002\u0002\u00a8\u009c\u0003\u0002\u0002\u0002\u00a8\u009f",
    "\u0003\u0002\u0002\u0002\u00a8\u00a2\u0003\u0002\u0002\u0002\u00a9\u00ac",
    "\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab",
    "\u0003\u0002\u0002\u0002\u00ab\u0011\u0003\u0002\u0002\u0002\u00ac\u00aa",
    "\u0003\u0002\u0002\u0002\u00ad\u00b2\u0005\u0010\t\u0002\u00ae\u00af",
    "\u0007\u0015\u0002\u0002\u00af\u00b1\u0005\u0010\t\u0002\u00b0\u00ae",
    "\u0003\u0002\u0002\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0",
    "\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u0013",
    "\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\t\u0006\u0002\u0002\u00b6\u0015\u0003\u0002\u0002\u0002\u00b7\u00b8",
    "\u0007-\u0002\u0002\u00b8\u00b9\u0007\u001c\u0002\u0002\u00b9\u00ba",
    "\u0005\u0014\u000b\u0002\u00ba\u00bb\u0007\u0014\u0002\u0002\u00bb\u0017",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007-\u0002\u0002\u00bd\u00be",
    "\u0007\u0017\u0002\u0002\u00be\u00bf\u0005\u0010\t\u0002\u00bf\u00c0",
    "\u0007\u0014\u0002\u0002\u00c0\u0019\u0003\u0002\u0002\u0002\u000f\u001d",
    "$47>KWb{\u0088\u00a8\u00aa\u00b2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", "'?'", 
                     "':'", "'=='", "'<='", "'>='", "'<>'", null, null, 
                     null, null, "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", 
                     "'('", "')'" ];

var symbolicNames = [ null, "Literal", "STRING", "REAL", "BOOL", "ELSE", 
                      "THEN", "IF", "RETURN", "WHILE", "MODULE", "BEGIN", 
                      "END", "MAIN", "INPUT", "OUTPUT", "WRITE", "READ", 
                      "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "FACTORIAL", 
                      "QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", 
                      "AND", "OR", "NOT", "XOR", "ADD", "SUB", "MUL", "DIV", 
                      "POW", "MOD", "PO", "PC", "Identifier", "WS", "COMMENT", 
                      "LINE_COMMENT" ];

var ruleNames =  [ "startState", "moduleDeclaration", "mainModuleDeclaration", 
                   "moduleInput", "moduleOutput", "block", "statement", 
                   "expression", "expressionList", "primitiveType", "varDeclaration", 
                   "assignment" ];

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
FaplaParser.Literal = 1;
FaplaParser.STRING = 2;
FaplaParser.REAL = 3;
FaplaParser.BOOL = 4;
FaplaParser.ELSE = 5;
FaplaParser.THEN = 6;
FaplaParser.IF = 7;
FaplaParser.RETURN = 8;
FaplaParser.WHILE = 9;
FaplaParser.MODULE = 10;
FaplaParser.BEGIN = 11;
FaplaParser.END = 12;
FaplaParser.MAIN = 13;
FaplaParser.INPUT = 14;
FaplaParser.OUTPUT = 15;
FaplaParser.WRITE = 16;
FaplaParser.READ = 17;
FaplaParser.SEMI = 18;
FaplaParser.COMMA = 19;
FaplaParser.DOT = 20;
FaplaParser.ASSIGN = 21;
FaplaParser.GT = 22;
FaplaParser.LT = 23;
FaplaParser.FACTORIAL = 24;
FaplaParser.QUESTION = 25;
FaplaParser.COLON = 26;
FaplaParser.EQUAL = 27;
FaplaParser.LE = 28;
FaplaParser.GE = 29;
FaplaParser.NOTEQUAL = 30;
FaplaParser.AND = 31;
FaplaParser.OR = 32;
FaplaParser.NOT = 33;
FaplaParser.XOR = 34;
FaplaParser.ADD = 35;
FaplaParser.SUB = 36;
FaplaParser.MUL = 37;
FaplaParser.DIV = 38;
FaplaParser.POW = 39;
FaplaParser.MOD = 40;
FaplaParser.PO = 41;
FaplaParser.PC = 42;
FaplaParser.Identifier = 43;
FaplaParser.WS = 44;
FaplaParser.COMMENT = 45;
FaplaParser.LINE_COMMENT = 46;

FaplaParser.RULE_startState = 0;
FaplaParser.RULE_moduleDeclaration = 1;
FaplaParser.RULE_mainModuleDeclaration = 2;
FaplaParser.RULE_moduleInput = 3;
FaplaParser.RULE_moduleOutput = 4;
FaplaParser.RULE_block = 5;
FaplaParser.RULE_statement = 6;
FaplaParser.RULE_expression = 7;
FaplaParser.RULE_expressionList = 8;
FaplaParser.RULE_primitiveType = 9;
FaplaParser.RULE_varDeclaration = 10;
FaplaParser.RULE_assignment = 11;

function StartStateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_startState;
    return this;
}

StartStateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartStateContext.prototype.constructor = StartStateContext;

StartStateContext.prototype.mainModuleDeclaration = function() {
    return this.getTypedRuleContext(MainModuleDeclarationContext,0);
};

StartStateContext.prototype.EOF = function() {
    return this.getToken(FaplaParser.EOF, 0);
};

StartStateContext.prototype.moduleDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ModuleDeclarationContext);
    } else {
        return this.getTypedRuleContext(ModuleDeclarationContext,i);
    }
};

StartStateContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterStartState(this);
	}
};

StartStateContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitStartState(this);
	}
};




FaplaParser.StartStateContext = StartStateContext;

FaplaParser.prototype.startState = function() {

    var localctx = new StartStateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FaplaParser.RULE_startState);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 24;
                this.moduleDeclaration(); 
            }
            this.state = 29;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 30;
        this.mainModuleDeclaration();
        this.state = 34;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.MODULE) {
            this.state = 31;
            this.moduleDeclaration();
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 37;
        this.match(FaplaParser.EOF);
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

ModuleDeclarationContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FaplaParser.SEMI);
    } else {
        return this.getToken(FaplaParser.SEMI, i);
    }
};


ModuleDeclarationContext.prototype.primitiveType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrimitiveTypeContext);
    } else {
        return this.getTypedRuleContext(PrimitiveTypeContext,i);
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
        this.state = 39;
        this.match(FaplaParser.MODULE);
        this.state = 40;
        this.match(FaplaParser.Identifier);
        this.state = 53;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 41;
            this.match(FaplaParser.INPUT);
            this.state = 42;
            this.match(FaplaParser.COLON);
            this.state = 50;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===FaplaParser.Identifier) {
                this.state = 43;
                this.match(FaplaParser.Identifier);
                this.state = 44;
                this.match(FaplaParser.COLON);
                this.state = 45;
                this.primitiveType();
                this.state = 46;
                this.match(FaplaParser.SEMI);
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 60;
        _la = this._input.LA(1);
        if(_la===FaplaParser.OUTPUT) {
            this.state = 55;
            this.match(FaplaParser.OUTPUT);
            this.state = 56;
            this.match(FaplaParser.COLON);

            this.state = 57;
            this.primitiveType();
            this.state = 58;
            this.match(FaplaParser.SEMI);
        }

        this.state = 62;
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

MainModuleDeclarationContext.prototype.MAIN = function() {
    return this.getToken(FaplaParser.MAIN, 0);
};

MainModuleDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
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
        this.match(FaplaParser.MAIN);

        this.state = 66;
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

function ModuleInputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_moduleInput;
    return this;
}

ModuleInputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleInputContext.prototype.constructor = ModuleInputContext;

ModuleInputContext.prototype.INPUT = function() {
    return this.getToken(FaplaParser.INPUT, 0);
};

ModuleInputContext.prototype.COLON = function() {
    return this.getToken(FaplaParser.COLON, 0);
};

ModuleInputContext.prototype.varDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclarationContext);
    } else {
        return this.getTypedRuleContext(VarDeclarationContext,i);
    }
};

ModuleInputContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterModuleInput(this);
	}
};

ModuleInputContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitModuleInput(this);
	}
};




FaplaParser.ModuleInputContext = ModuleInputContext;

FaplaParser.prototype.moduleInput = function() {

    var localctx = new ModuleInputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FaplaParser.RULE_moduleInput);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(FaplaParser.INPUT);
        this.state = 69;
        this.match(FaplaParser.COLON);
        this.state = 73;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.Identifier) {
            this.state = 70;
            this.varDeclaration();
            this.state = 75;
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

function ModuleOutputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_moduleOutput;
    return this;
}

ModuleOutputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ModuleOutputContext.prototype.constructor = ModuleOutputContext;

ModuleOutputContext.prototype.OUTPUT = function() {
    return this.getToken(FaplaParser.OUTPUT, 0);
};

ModuleOutputContext.prototype.COLON = function() {
    return this.getToken(FaplaParser.COLON, 0);
};

ModuleOutputContext.prototype.SEMI = function() {
    return this.getToken(FaplaParser.SEMI, 0);
};

ModuleOutputContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

ModuleOutputContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterModuleOutput(this);
	}
};

ModuleOutputContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitModuleOutput(this);
	}
};




FaplaParser.ModuleOutputContext = ModuleOutputContext;

FaplaParser.prototype.moduleOutput = function() {

    var localctx = new ModuleOutputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FaplaParser.RULE_moduleOutput);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(FaplaParser.OUTPUT);
        this.state = 77;
        this.match(FaplaParser.COLON);

        this.state = 78;
        this.primitiveType();
        this.state = 79;
        this.match(FaplaParser.SEMI);
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
    this.enterRule(localctx, 10, FaplaParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(FaplaParser.BEGIN);
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.Literal) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ) | (1 << FaplaParser.SEMI))) !== 0) || _la===FaplaParser.NOT || _la===FaplaParser.Identifier) {
            this.state = 82;
            this.statement();
            this.state = 87;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 88;
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

StatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

StatementContext.prototype.ELSE = function() {
    return this.getToken(FaplaParser.ELSE, 0);
};

StatementContext.prototype.WHILE = function() {
    return this.getToken(FaplaParser.WHILE, 0);
};

StatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

StatementContext.prototype.SEMI = function() {
    return this.getToken(FaplaParser.SEMI, 0);
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

StatementContext.prototype.PO = function() {
    return this.getToken(FaplaParser.PO, 0);
};

StatementContext.prototype.PC = function() {
    return this.getToken(FaplaParser.PC, 0);
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
    var _la = 0; // Token type
    try {
        this.state = 121;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this.match(FaplaParser.IF);
            this.state = 91;
            this.expression(0);
            this.state = 92;
            this.match(FaplaParser.THEN);
            this.state = 93;
            this.block();
            this.state = 96;
            _la = this._input.LA(1);
            if(_la===FaplaParser.ELSE) {
                this.state = 94;
                this.match(FaplaParser.ELSE);
                this.state = 95;
                this.block();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.match(FaplaParser.WHILE);
            this.state = 99;
            this.expression(0);
            this.state = 100;
            this.statement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 102;
            this.match(FaplaParser.SEMI);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 103;
            this.expression(0);
            this.state = 104;
            this.match(FaplaParser.SEMI);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 106;
            this.assignment();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 107;
            this.varDeclaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 108;
            this.match(FaplaParser.WRITE);
            this.state = 109;
            this.match(FaplaParser.PO);
            this.state = 110;
            this.expression(0);
            this.state = 111;
            this.match(FaplaParser.PC);
            this.state = 112;
            this.match(FaplaParser.SEMI);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 114;
            this.match(FaplaParser.READ);
            this.state = 115;
            this.match(FaplaParser.Identifier);
            this.state = 116;
            this.match(FaplaParser.SEMI);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 117;
            this.match(FaplaParser.RETURN);
            this.state = 118;
            this.expression(0);
            this.state = 119;
            this.match(FaplaParser.SEMI);
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

ExpressionContext.prototype.NOT = function() {
    return this.getToken(FaplaParser.NOT, 0);
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

ExpressionContext.prototype.PO = function() {
    return this.getToken(FaplaParser.PO, 0);
};

ExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionContext.prototype.PC = function() {
    return this.getToken(FaplaParser.PC, 0);
};

ExpressionContext.prototype.Literal = function() {
    return this.getToken(FaplaParser.Literal, 0);
};

ExpressionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
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

ExpressionContext.prototype.AND = function() {
    return this.getToken(FaplaParser.AND, 0);
};

ExpressionContext.prototype.POW = function() {
    return this.getToken(FaplaParser.POW, 0);
};

ExpressionContext.prototype.XOR = function() {
    return this.getToken(FaplaParser.XOR, 0);
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
        this.state = 134;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.state = 124;
            this.match(FaplaParser.NOT);
            this.state = 125;
            this.expression(14);
            break;

        case 2:
            this.state = 126;
            this.match(FaplaParser.Identifier);
            this.state = 127;
            this.match(FaplaParser.PO);
            this.state = 128;
            this.expressionList();
            this.state = 129;
            this.match(FaplaParser.PC);
            break;

        case 3:
            this.state = 131;
            this.match(FaplaParser.Literal);
            break;

        case 4:
            this.state = 132;
            this.match(FaplaParser.Identifier);
            break;

        case 5:
            this.state = 133;
            this.block();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 168;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 166;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 136;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 137;
                    _la = this._input.LA(1);
                    if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.MUL - 37)) | (1 << (FaplaParser.DIV - 37)) | (1 << (FaplaParser.MOD - 37)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 138;
                    this.expression(14);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 139;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 140;
                    _la = this._input.LA(1);
                    if(!(_la===FaplaParser.ADD || _la===FaplaParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 141;
                    this.expression(13);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 142;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 143;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.GT) | (1 << FaplaParser.LT) | (1 << FaplaParser.LE) | (1 << FaplaParser.GE))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 144;
                    this.expression(12);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 145;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 146;
                    _la = this._input.LA(1);
                    if(!(_la===FaplaParser.EQUAL || _la===FaplaParser.NOTEQUAL)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 147;
                    this.expression(11);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 148;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 149;
                    this.match(FaplaParser.AND);
                    this.state = 150;
                    this.expression(10);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 151;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 152;
                    this.match(FaplaParser.POW);
                    this.state = 153;
                    this.expression(9);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 154;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 155;
                    this.match(FaplaParser.XOR);
                    this.state = 156;
                    this.expression(8);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 157;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 158;
                    this.match(FaplaParser.OR);
                    this.state = 159;
                    this.expression(7);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 160;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 161;
                    this.match(FaplaParser.QUESTION);
                    this.state = 162;
                    this.expression(0);
                    this.state = 163;
                    this.match(FaplaParser.COLON);
                    this.state = 164;
                    this.expression(6);
                    break;

                } 
            }
            this.state = 170;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
    this.enterRule(localctx, 16, FaplaParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.expression(0);
        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.COMMA) {
            this.state = 172;
            this.match(FaplaParser.COMMA);
            this.state = 173;
            this.expression(0);
            this.state = 178;
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

function PrimitiveTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FaplaParser.RULE_primitiveType;
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;

PrimitiveTypeContext.prototype.REAL = function() {
    return this.getToken(FaplaParser.REAL, 0);
};

PrimitiveTypeContext.prototype.BOOL = function() {
    return this.getToken(FaplaParser.BOOL, 0);
};

PrimitiveTypeContext.prototype.STRING = function() {
    return this.getToken(FaplaParser.STRING, 0);
};

PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof FaplaListener ) {
        listener.exitPrimitiveType(this);
	}
};




FaplaParser.PrimitiveTypeContext = PrimitiveTypeContext;

FaplaParser.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FaplaParser.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.STRING) | (1 << FaplaParser.REAL) | (1 << FaplaParser.BOOL))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
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

VarDeclarationContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

VarDeclarationContext.prototype.SEMI = function() {
    return this.getToken(FaplaParser.SEMI, 0);
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
    this.enterRule(localctx, 20, FaplaParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(FaplaParser.Identifier);
        this.state = 182;
        this.match(FaplaParser.COLON);
        this.state = 183;
        this.primitiveType();
        this.state = 184;
        this.match(FaplaParser.SEMI);
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

AssignmentContext.prototype.SEMI = function() {
    return this.getToken(FaplaParser.SEMI, 0);
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
    this.enterRule(localctx, 22, FaplaParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(FaplaParser.Identifier);
        this.state = 187;
        this.match(FaplaParser.ASSIGN);
        this.state = 188;
        this.expression(0);
        this.state = 189;
        this.match(FaplaParser.SEMI);
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
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 8);
		case 6:
			return this.precpred(this._ctx, 7);
		case 7:
			return this.precpred(this._ctx, 6);
		case 8:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FaplaParser = FaplaParser;
