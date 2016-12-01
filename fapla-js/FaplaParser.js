// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FaplaListener = require('./FaplaListener').FaplaListener;
var grammarFileName = "Fapla.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00034\u00bd\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002\u001f\n\u0002\f\u0002\u000e\u0002\"\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003.\n\u0003",
    "\r\u0003\u000e\u0003/\u0005\u00032\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u00038\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007",
    "\u0005B\n\u0005\f\u0005\u000e\u0005E\u000b\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0007\u0006K\n\u0006\f\u0006\u000e\u0006N\u000b",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006R\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007Z",
    "\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007p\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bx\n\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0084",
    "\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u00a6\n\b",
    "\f\b\u000e\b\u00a9\u000b\b\u0003\t\u0003\t\u0003\t\u0007\t\u00ae\n\t",
    "\f\t\u000e\t\u00b1\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0002",
    "\u0003\u000e\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002",
    "\u0006\u0004\u0002+,..\u0003\u0002)*\u0004\u0002\u001c\u001d\"#\u0004",
    "\u0002!!$$\u00d5\u0002\u0019\u0003\u0002\u0002\u0002\u0004%\u0003\u0002",
    "\u0002\u0002\u0006;\u0003\u0002\u0002\u0002\b?\u0003\u0002\u0002\u0002",
    "\nQ\u0003\u0002\u0002\u0002\fo\u0003\u0002\u0002\u0002\u000e\u0083\u0003",
    "\u0002\u0002\u0002\u0010\u00aa\u0003\u0002\u0002\u0002\u0012\u00b2\u0003",
    "\u0002\u0002\u0002\u0014\u00b7\u0003\u0002\u0002\u0002\u0016\u0018\u0005",
    "\u0004\u0003\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003",
    "\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003",
    "\u0002\u0002\u0002\u001a\u001c\u0003\u0002\u0002\u0002\u001b\u0019\u0003",
    "\u0002\u0002\u0002\u001c \u0005\u0006\u0004\u0002\u001d\u001f\u0005",
    "\u0004\u0003\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f\"\u0003",
    "\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002",
    "\u0002!#\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002#$\u0007",
    "\u0002\u0002\u0003$\u0003\u0003\u0002\u0002\u0002%&\u0007\u0011\u0002",
    "\u0002&1\u00071\u0002\u0002\'(\u0007\u0015\u0002\u0002(-\u0007 \u0002",
    "\u0002)*\u00071\u0002\u0002*+\u0007 \u0002\u0002+,\u0007\u0003\u0002",
    "\u0002,.\u0007\u0019\u0002\u0002-)\u0003\u0002\u0002\u0002./\u0003\u0002",
    "\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u000202\u0003",
    "\u0002\u0002\u00021\'\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "27\u0003\u0002\u0002\u000234\u0007\u0016\u0002\u000245\u0007 \u0002",
    "\u000256\u0007\u0003\u0002\u000268\u0007\u0019\u0002\u000273\u0003\u0002",
    "\u0002\u000278\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029:\u0005",
    "\b\u0005\u0002:\u0005\u0003\u0002\u0002\u0002;<\u0007\u0011\u0002\u0002",
    "<=\u0007\u0014\u0002\u0002=>\u0005\b\u0005\u0002>\u0007\u0003\u0002",
    "\u0002\u0002?C\u0007\u0012\u0002\u0002@B\u0005\f\u0007\u0002A@\u0003",
    "\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002",
    "CD\u0003\u0002\u0002\u0002DF\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002",
    "\u0002FG\u0007\u0013\u0002\u0002G\t\u0003\u0002\u0002\u0002HL\u0007",
    "\u0012\u0002\u0002IK\u0005\f\u0007\u0002JI\u0003\u0002\u0002\u0002K",
    "N\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002LM\u0003\u0002\u0002",
    "\u0002MO\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002OR\u0007\u0013",
    "\u0002\u0002PR\u0005\f\u0007\u0002QH\u0003\u0002\u0002\u0002QP\u0003",
    "\u0002\u0002\u0002R\u000b\u0003\u0002\u0002\u0002ST\u0007\u000e\u0002",
    "\u0002TU\u0005\u000e\b\u0002UV\u0007\r\u0002\u0002VY\u0005\n\u0006\u0002",
    "WX\u0007\f\u0002\u0002XZ\u0005\n\u0006\u0002YW\u0003\u0002\u0002\u0002",
    "YZ\u0003\u0002\u0002\u0002Zp\u0003\u0002\u0002\u0002[\\\u0007\u0010",
    "\u0002\u0002\\]\u0005\u000e\b\u0002]^\u0005\n\u0006\u0002^p\u0003\u0002",
    "\u0002\u0002_`\u0005\u000e\b\u0002`a\u0007\u0019\u0002\u0002ap\u0003",
    "\u0002\u0002\u0002bp\u0005\u0014\u000b\u0002cp\u0005\u0012\n\u0002d",
    "e\u0007\u0017\u0002\u0002ef\u0005\u000e\b\u0002fg\u0007\u0019\u0002",
    "\u0002gp\u0003\u0002\u0002\u0002hi\u0007\u0018\u0002\u0002ij\u00071",
    "\u0002\u0002jp\u0007\u0019\u0002\u0002kl\u0007\u000f\u0002\u0002lm\u0005",
    "\u000e\b\u0002mn\u0007\u0019\u0002\u0002np\u0003\u0002\u0002\u0002o",
    "S\u0003\u0002\u0002\u0002o[\u0003\u0002\u0002\u0002o_\u0003\u0002\u0002",
    "\u0002ob\u0003\u0002\u0002\u0002oc\u0003\u0002\u0002\u0002od\u0003\u0002",
    "\u0002\u0002oh\u0003\u0002\u0002\u0002ok\u0003\u0002\u0002\u0002p\r",
    "\u0003\u0002\u0002\u0002qr\b\b\u0001\u0002rs\u0007\'\u0002\u0002s\u0084",
    "\u0005\u000e\b\u0014tu\u00071\u0002\u0002uw\u0007/\u0002\u0002vx\u0005",
    "\u0010\t\u0002wv\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002x",
    "y\u0003\u0002\u0002\u0002y\u0084\u00070\u0002\u0002z\u0084\u0007\u0005",
    "\u0002\u0002{\u0084\u0007\u0006\u0002\u0002|\u0084\u0007\u0004\u0002",
    "\u0002}\u0084\u00071\u0002\u0002~\u007f\u0007/\u0002\u0002\u007f\u0080",
    "\u0005\u000e\b\u0002\u0080\u0081\u00070\u0002\u0002\u0081\u0084\u0003",
    "\u0002\u0002\u0002\u0082\u0084\u0005\b\u0005\u0002\u0083q\u0003\u0002",
    "\u0002\u0002\u0083t\u0003\u0002\u0002\u0002\u0083z\u0003\u0002\u0002",
    "\u0002\u0083{\u0003\u0002\u0002\u0002\u0083|\u0003\u0002\u0002\u0002",
    "\u0083}\u0003\u0002\u0002\u0002\u0083~\u0003\u0002\u0002\u0002\u0083",
    "\u0082\u0003\u0002\u0002\u0002\u0084\u00a7\u0003\u0002\u0002\u0002\u0085",
    "\u0086\f\u0013\u0002\u0002\u0086\u0087\t\u0002\u0002\u0002\u0087\u00a6",
    "\u0005\u000e\b\u0014\u0088\u0089\f\u0012\u0002\u0002\u0089\u008a\t\u0003",
    "\u0002\u0002\u008a\u00a6\u0005\u000e\b\u0013\u008b\u008c\f\u0011\u0002",
    "\u0002\u008c\u008d\t\u0004\u0002\u0002\u008d\u00a6\u0005\u000e\b\u0012",
    "\u008e\u008f\f\u0010\u0002\u0002\u008f\u0090\t\u0005\u0002\u0002\u0090",
    "\u00a6\u0005\u000e\b\u0011\u0091\u0092\f\u000e\u0002\u0002\u0092\u0093",
    "\u0007%\u0002\u0002\u0093\u00a6\u0005\u000e\b\u000f\u0094\u0095\f\r",
    "\u0002\u0002\u0095\u0096\u0007-\u0002\u0002\u0096\u00a6\u0005\u000e",
    "\b\u000e\u0097\u0098\f\f\u0002\u0002\u0098\u0099\u0007(\u0002\u0002",
    "\u0099\u00a6\u0005\u000e\b\r\u009a\u009b\f\u000b\u0002\u0002\u009b\u009c",
    "\u0007&\u0002\u0002\u009c\u00a6\u0005\u000e\b\f\u009d\u009e\f\n\u0002",
    "\u0002\u009e\u009f\u0007\u001f\u0002\u0002\u009f\u00a0\u0005\u000e\b",
    "\u0002\u00a0\u00a1\u0007 \u0002\u0002\u00a1\u00a2\u0005\u000e\b\u000b",
    "\u00a2\u00a6\u0003\u0002\u0002\u0002\u00a3\u00a4\f\u000f\u0002\u0002",
    "\u00a4\u00a6\u0007\u001e\u0002\u0002\u00a5\u0085\u0003\u0002\u0002\u0002",
    "\u00a5\u0088\u0003\u0002\u0002\u0002\u00a5\u008b\u0003\u0002\u0002\u0002",
    "\u00a5\u008e\u0003\u0002\u0002\u0002\u00a5\u0091\u0003\u0002\u0002\u0002",
    "\u00a5\u0094\u0003\u0002\u0002\u0002\u00a5\u0097\u0003\u0002\u0002\u0002",
    "\u00a5\u009a\u0003\u0002\u0002\u0002\u00a5\u009d\u0003\u0002\u0002\u0002",
    "\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a9\u0003\u0002\u0002\u0002",
    "\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002\u0002",
    "\u00a8\u000f\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002\u0002",
    "\u00aa\u00af\u0005\u000e\b\u0002\u00ab\u00ac\u0007\u001a\u0002\u0002",
    "\u00ac\u00ae\u0005\u000e\b\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002",
    "\u00ae\u00b1\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002",
    "\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u0011\u0003\u0002\u0002\u0002",
    "\u00b1\u00af\u0003\u0002\u0002\u0002\u00b2\u00b3\u00071\u0002\u0002",
    "\u00b3\u00b4\u0007 \u0002\u0002\u00b4\u00b5\u0007\u0003\u0002\u0002",
    "\u00b5\u00b6\u0007\u0019\u0002\u0002\u00b6\u0013\u0003\u0002\u0002\u0002",
    "\u00b7\u00b8\u00071\u0002\u0002\u00b8\u00b9\u0007\u001b\u0002\u0002",
    "\u00b9\u00ba\u0005\u000e\b\u0002\u00ba\u00bb\u0007\u0019\u0002\u0002",
    "\u00bb\u0015\u0003\u0002\u0002\u0002\u0011\u0019 /17CLQYow\u0083\u00a5",
    "\u00a7\u00af"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, "';'", "','", "'='", 
                     "'>'", "'<'", "'!'", "'?'", "':'", "'=='", "'<='", 
                     "'>='", "'<>'", null, null, null, null, "'+'", "'-'", 
                     "'*'", "'/'", "'^'", "'%'", "'('", "')'" ];

var symbolicNames = [ null, "PrimitiveType", "BOOLEANCONSTANT", "STRINGCONSTANT", 
                      "REALCONSTANT", "STRING", "REAL", "BOOL", "TRUE", 
                      "FALSE", "ELSE", "THEN", "IF", "RETURN", "WHILE", 
                      "MODULE", "BEGIN", "END", "MAIN", "INPUT", "OUTPUT", 
                      "WRITE", "READ", "SEMICOLON", "COMMA", "ASSIGN", "GT", 
                      "LT", "FACTORIAL", "QUESTION", "COLON", "EQUAL", "LE", 
                      "GE", "NOTEQUAL", "AND", "OR", "NOT", "XOR", "ADD", 
                      "SUB", "MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", 
                      "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "startState", "moduleDeclaration", "mainModuleDeclaration", 
                   "block", "supBlock", "statement", "expression", "expressionList", 
                   "varDeclaration", "assignment" ];

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
FaplaParser.MAIN = 18;
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

FaplaParser.RULE_startState = 0;
FaplaParser.RULE_moduleDeclaration = 1;
FaplaParser.RULE_mainModuleDeclaration = 2;
FaplaParser.RULE_block = 3;
FaplaParser.RULE_supBlock = 4;
FaplaParser.RULE_statement = 5;
FaplaParser.RULE_expression = 6;
FaplaParser.RULE_expressionList = 7;
FaplaParser.RULE_varDeclaration = 8;
FaplaParser.RULE_assignment = 9;

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
        this.state = 23;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 20;
                this.moduleDeclaration(); 
            }
            this.state = 25;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

        this.state = 26;
        this.mainModuleDeclaration();
        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.MODULE) {
            this.state = 27;
            this.moduleDeclaration();
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 33;
        this.match(FaplaParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
            console.log(re);
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
        this.state = 35;
        this.match(FaplaParser.MODULE);
        this.state = 36;
        this.match(FaplaParser.Identifier);
        this.state = 47;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 37;
            this.match(FaplaParser.INPUT);
            this.state = 38;
            this.match(FaplaParser.COLON);
            this.state = 43; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 39;
                this.match(FaplaParser.Identifier);
                this.state = 40;
                this.match(FaplaParser.COLON);
                this.state = 41;
                this.match(FaplaParser.PrimitiveType);
                this.state = 42;
                this.match(FaplaParser.SEMICOLON);
                this.state = 45; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }

        this.state = 53;
        _la = this._input.LA(1);
        if(_la===FaplaParser.OUTPUT) {
            this.state = 49;
            this.match(FaplaParser.OUTPUT);
            this.state = 50;
            this.match(FaplaParser.COLON);
            this.state = 51;
            this.match(FaplaParser.PrimitiveType);
            this.state = 52;
            this.match(FaplaParser.SEMICOLON);
        }

        this.state = 55;
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
        this.state = 57;
        this.match(FaplaParser.MODULE);
        this.state = 58;
        this.match(FaplaParser.MAIN);
        this.state = 59;
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
    this.enterRule(localctx, 6, FaplaParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.match(FaplaParser.BEGIN);
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
            this.state = 62;
            this.statement();
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 68;
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
    this.enterRule(localctx, 8, FaplaParser.RULE_supBlock);
    var _la = 0; // Token type
    try {
        this.state = 79;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.match(FaplaParser.BEGIN);
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
                this.state = 71;
                this.statement();
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 77;
            this.match(FaplaParser.END);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
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
    this.enterRule(localctx, 10, FaplaParser.RULE_statement);
    try {
        this.state = 109;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.match(FaplaParser.IF);
            this.state = 82;
            this.expression(0);
            this.state = 83;
            this.match(FaplaParser.THEN);
            this.state = 84;
            this.supBlock();
            this.state = 87;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 85;
                this.match(FaplaParser.ELSE);
                this.state = 86;
                this.supBlock();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 89;
            this.match(FaplaParser.WHILE);
            this.state = 90;
            this.expression(0);
            this.state = 91;
            this.supBlock();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 93;
            this.expression(0);
            this.state = 94;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 96;
            this.assignment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 97;
            this.varDeclaration();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 98;
            this.match(FaplaParser.WRITE);
            this.state = 99;
            this.expression(0);
            this.state = 100;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 102;
            this.match(FaplaParser.READ);
            this.state = 103;
            this.match(FaplaParser.Identifier);
            this.state = 104;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 105;
            this.match(FaplaParser.RETURN);
            this.state = 106;
            this.expression(0);
            this.state = 107;
            this.match(FaplaParser.SEMICOLON);
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

ExpressionContext.prototype.PC = function() {
    return this.getToken(FaplaParser.PC, 0);
};

ExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionContext.prototype.STRINGCONSTANT = function() {
    return this.getToken(FaplaParser.STRINGCONSTANT, 0);
};

ExpressionContext.prototype.REALCONSTANT = function() {
    return this.getToken(FaplaParser.REALCONSTANT, 0);
};

ExpressionContext.prototype.BOOLEANCONSTANT = function() {
    return this.getToken(FaplaParser.BOOLEANCONSTANT, 0);
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
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, FaplaParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.state = 112;
            this.match(FaplaParser.NOT);
            this.state = 113;
            this.expression(18);
            break;

        case 2:
            this.state = 114;
            this.match(FaplaParser.Identifier);
            this.state = 115;
            this.match(FaplaParser.PO);
            this.state = 117;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.BEGIN))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (FaplaParser.NOT - 37)) | (1 << (FaplaParser.PO - 37)) | (1 << (FaplaParser.Identifier - 37)))) !== 0)) {
                this.state = 116;
                this.expressionList();
            }

            this.state = 119;
            this.match(FaplaParser.PC);
            break;

        case 3:
            this.state = 120;
            this.match(FaplaParser.STRINGCONSTANT);
            break;

        case 4:
            this.state = 121;
            this.match(FaplaParser.REALCONSTANT);
            break;

        case 5:
            this.state = 122;
            this.match(FaplaParser.BOOLEANCONSTANT);
            break;

        case 6:
            this.state = 123;
            this.match(FaplaParser.Identifier);
            break;

        case 7:
            this.state = 124;
            this.match(FaplaParser.PO);
            this.state = 125;
            this.expression(0);
            this.state = 126;
            this.match(FaplaParser.PC);
            break;

        case 8:
            this.state = 128;
            this.block();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 165;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 163;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 131;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 132;
                    _la = this._input.LA(1);
                    if(!(((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (FaplaParser.MUL - 41)) | (1 << (FaplaParser.DIV - 41)) | (1 << (FaplaParser.MOD - 41)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 133;
                    this.expression(18);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 134;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 135;
                    _la = this._input.LA(1);
                    if(!(_la===FaplaParser.ADD || _la===FaplaParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 136;
                    this.expression(17);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 137;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 138;
                    _la = this._input.LA(1);
                    if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (FaplaParser.GT - 26)) | (1 << (FaplaParser.LT - 26)) | (1 << (FaplaParser.LE - 26)) | (1 << (FaplaParser.GE - 26)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 139;
                    this.expression(16);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 140;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 141;
                    _la = this._input.LA(1);
                    if(!(_la===FaplaParser.EQUAL || _la===FaplaParser.NOTEQUAL)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 142;
                    this.expression(15);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 143;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 144;
                    this.match(FaplaParser.AND);
                    this.state = 145;
                    this.expression(13);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 146;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 147;
                    this.match(FaplaParser.POW);
                    this.state = 148;
                    this.expression(12);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 149;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 150;
                    this.match(FaplaParser.XOR);
                    this.state = 151;
                    this.expression(11);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 152;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 153;
                    this.match(FaplaParser.OR);
                    this.state = 154;
                    this.expression(10);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 155;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 156;
                    this.match(FaplaParser.QUESTION);
                    this.state = 157;
                    this.expression(0);
                    this.state = 158;
                    this.match(FaplaParser.COLON);
                    this.state = 159;
                    this.expression(9);
                    break;

                case 10:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 161;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 162;
                    this.match(FaplaParser.FACTORIAL);
                    break;

                } 
            }
            this.state = 167;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
    this.enterRule(localctx, 14, FaplaParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.expression(0);
        this.state = 173;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.COMMA) {
            this.state = 169;
            this.match(FaplaParser.COMMA);
            this.state = 170;
            this.expression(0);
            this.state = 175;
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
    this.enterRule(localctx, 16, FaplaParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(FaplaParser.Identifier);
        this.state = 177;
        this.match(FaplaParser.COLON);
        this.state = 178;
        this.match(FaplaParser.PrimitiveType);
        this.state = 179;
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
    this.enterRule(localctx, 18, FaplaParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(FaplaParser.Identifier);
        this.state = 182;
        this.match(FaplaParser.ASSIGN);
        this.state = 183;
        this.expression(0);
        this.state = 184;
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
	case 6:
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
			return this.precpred(this._ctx, 12);
		case 5:
			return this.precpred(this._ctx, 11);
		case 6:
			return this.precpred(this._ctx, 10);
		case 7:
			return this.precpred(this._ctx, 9);
		case 8:
			return this.precpred(this._ctx, 8);
		case 9:
			return this.precpred(this._ctx, 13);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.FaplaParser = FaplaParser;
