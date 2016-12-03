// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FaplaListener = require('./FaplaListener').FaplaListener;
var grammarFileName = "Fapla.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00033\u00aa\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0006\u0002\u0016\n\u0002",
    "\r\u0002\u000e\u0002\u0017\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003\"",
    "\n\u0003\r\u0003\u000e\u0003#\u0005\u0003&\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003,\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0007\u00042\n\u0004\f\u0004\u000e\u0004",
    "5\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007",
    "\u0005;\n\u0005\f\u0005\u000e\u0005>\u000b\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u0005B\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006J\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006a\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007n\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007t\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u0093\n\u0007\f\u0007",
    "\u000e\u0007\u0096\u000b\u0007\u0003\b\u0003\b\u0003\b\u0007\b\u009b",
    "\n\b\f\b\u000e\b\u009e\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0002\u0003\f\u000b",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0005\u0004\u0002*",
    "+--\u0003\u0002()\u0004\u0002\u001b\u001c #\u00c1\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0004\u0019\u0003\u0002\u0002\u0002\u0006/\u0003",
    "\u0002\u0002\u0002\bA\u0003\u0002\u0002\u0002\n`\u0003\u0002\u0002\u0002",
    "\fs\u0003\u0002\u0002\u0002\u000e\u0097\u0003\u0002\u0002\u0002\u0010",
    "\u009f\u0003\u0002\u0002\u0002\u0012\u00a4\u0003\u0002\u0002\u0002\u0014",
    "\u0016\u0005\u0004\u0003\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016",
    "\u0017\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0003\u0002\u0002\u0002\u0018\u0003\u0003\u0002\u0002\u0002\u0019",
    "\u001a\u0007\u0011\u0002\u0002\u001a%\u00070\u0002\u0002\u001b\u001c",
    "\u0007\u0014\u0002\u0002\u001c!\u0007\u001f\u0002\u0002\u001d\u001e",
    "\u00070\u0002\u0002\u001e\u001f\u0007\u001f\u0002\u0002\u001f \u0007",
    "\u0003\u0002\u0002 \"\u0007\u0018\u0002\u0002!\u001d\u0003\u0002\u0002",
    "\u0002\"#\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003",
    "\u0002\u0002\u0002$&\u0003\u0002\u0002\u0002%\u001b\u0003\u0002\u0002",
    "\u0002%&\u0003\u0002\u0002\u0002&+\u0003\u0002\u0002\u0002\'(\u0007",
    "\u0015\u0002\u0002()\u0007\u001f\u0002\u0002)*\u0007\u0003\u0002\u0002",
    "*,\u0007\u0018\u0002\u0002+\'\u0003\u0002\u0002\u0002+,\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002-.\u0005\u0006\u0004\u0002.\u0005",
    "\u0003\u0002\u0002\u0002/3\u0007\u0012\u0002\u000202\u0005\n\u0006\u0002",
    "10\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002\u0002",
    "\u000234\u0003\u0002\u0002\u000246\u0003\u0002\u0002\u000253\u0003\u0002",
    "\u0002\u000267\u0007\u0013\u0002\u00027\u0007\u0003\u0002\u0002\u0002",
    "8<\u0007\u0012\u0002\u00029;\u0005\n\u0006\u0002:9\u0003\u0002\u0002",
    "\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002",
    "\u0002\u0002=?\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?B\u0007",
    "\u0013\u0002\u0002@B\u0005\n\u0006\u0002A8\u0003\u0002\u0002\u0002A",
    "@\u0003\u0002\u0002\u0002B\t\u0003\u0002\u0002\u0002CD\u0007\u000e\u0002",
    "\u0002DE\u0005\f\u0007\u0002EF\u0007\r\u0002\u0002FI\u0005\b\u0005\u0002",
    "GH\u0007\f\u0002\u0002HJ\u0005\b\u0005\u0002IG\u0003\u0002\u0002\u0002",
    "IJ\u0003\u0002\u0002\u0002Ja\u0003\u0002\u0002\u0002KL\u0007\u0010\u0002",
    "\u0002LM\u0005\f\u0007\u0002MN\u0005\b\u0005\u0002Na\u0003\u0002\u0002",
    "\u0002OP\u0005\f\u0007\u0002PQ\u0007\u0018\u0002\u0002Qa\u0003\u0002",
    "\u0002\u0002Ra\u0005\u0012\n\u0002Sa\u0005\u0010\t\u0002TU\u0007\u0016",
    "\u0002\u0002UV\u0005\f\u0007\u0002VW\u0007\u0018\u0002\u0002Wa\u0003",
    "\u0002\u0002\u0002XY\u0007\u0017\u0002\u0002YZ\u00070\u0002\u0002Za",
    "\u0007\u0018\u0002\u0002[\\\u0007\u000f\u0002\u0002\\]\u0005\f\u0007",
    "\u0002]^\u0007\u0018\u0002\u0002^a\u0003\u0002\u0002\u0002_a\u0005\u0006",
    "\u0004\u0002`C\u0003\u0002\u0002\u0002`K\u0003\u0002\u0002\u0002`O\u0003",
    "\u0002\u0002\u0002`R\u0003\u0002\u0002\u0002`S\u0003\u0002\u0002\u0002",
    "`T\u0003\u0002\u0002\u0002`X\u0003\u0002\u0002\u0002`[\u0003\u0002\u0002",
    "\u0002`_\u0003\u0002\u0002\u0002a\u000b\u0003\u0002\u0002\u0002bc\b",
    "\u0007\u0001\u0002ct\u0007\u0005\u0002\u0002dt\u0007\u0006\u0002\u0002",
    "et\u0007\u0004\u0002\u0002fg\u0007.\u0002\u0002gh\u0005\f\u0007\u0002",
    "hi\u0007/\u0002\u0002it\u0003\u0002\u0002\u0002jk\u00070\u0002\u0002",
    "km\u0007.\u0002\u0002ln\u0005\u000e\b\u0002ml\u0003\u0002\u0002\u0002",
    "mn\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002ot\u0007/\u0002",
    "\u0002pq\u0007&\u0002\u0002qt\u0005\f\u0007\rrt\u00070\u0002\u0002s",
    "b\u0003\u0002\u0002\u0002sd\u0003\u0002\u0002\u0002se\u0003\u0002\u0002",
    "\u0002sf\u0003\u0002\u0002\u0002sj\u0003\u0002\u0002\u0002sp\u0003\u0002",
    "\u0002\u0002sr\u0003\u0002\u0002\u0002t\u0094\u0003\u0002\u0002\u0002",
    "uv\f\u000b\u0002\u0002vw\u0007,\u0002\u0002w\u0093\u0005\f\u0007\fx",
    "y\f\n\u0002\u0002yz\t\u0002\u0002\u0002z\u0093\u0005\f\u0007\u000b{",
    "|\f\t\u0002\u0002|}\t\u0003\u0002\u0002}\u0093\u0005\f\u0007\n~\u007f",
    "\f\b\u0002\u0002\u007f\u0080\t\u0004\u0002\u0002\u0080\u0093\u0005\f",
    "\u0007\t\u0081\u0082\f\u0007\u0002\u0002\u0082\u0083\u0007\'\u0002\u0002",
    "\u0083\u0093\u0005\f\u0007\b\u0084\u0085\f\u0006\u0002\u0002\u0085\u0086",
    "\u0007$\u0002\u0002\u0086\u0093\u0005\f\u0007\u0007\u0087\u0088\f\u0005",
    "\u0002\u0002\u0088\u0089\u0007%\u0002\u0002\u0089\u0093\u0005\f\u0007",
    "\u0006\u008a\u008b\f\u0004\u0002\u0002\u008b\u008c\u0007\u001e\u0002",
    "\u0002\u008c\u008d\u0005\f\u0007\u0002\u008d\u008e\u0007\u001f\u0002",
    "\u0002\u008e\u008f\u0005\f\u0007\u0005\u008f\u0093\u0003\u0002\u0002",
    "\u0002\u0090\u0091\f\f\u0002\u0002\u0091\u0093\u0007\u001d\u0002\u0002",
    "\u0092u\u0003\u0002\u0002\u0002\u0092x\u0003\u0002\u0002\u0002\u0092",
    "{\u0003\u0002\u0002\u0002\u0092~\u0003\u0002\u0002\u0002\u0092\u0081",
    "\u0003\u0002\u0002\u0002\u0092\u0084\u0003\u0002\u0002\u0002\u0092\u0087",
    "\u0003\u0002\u0002\u0002\u0092\u008a\u0003\u0002\u0002\u0002\u0092\u0090",
    "\u0003\u0002\u0002\u0002\u0093\u0096\u0003\u0002\u0002\u0002\u0094\u0092",
    "\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\r",
    "\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u009c",
    "\u0005\f\u0007\u0002\u0098\u0099\u0007\u0019\u0002\u0002\u0099\u009b",
    "\u0005\f\u0007\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u009e",
    "\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u0003\u0002\u0002\u0002\u009d\u000f\u0003\u0002\u0002\u0002\u009e\u009c",
    "\u0003\u0002\u0002\u0002\u009f\u00a0\u00070\u0002\u0002\u00a0\u00a1",
    "\u0007\u001f\u0002\u0002\u00a1\u00a2\u0007\u0003\u0002\u0002\u00a2\u00a3",
    "\u0007\u0018\u0002\u0002\u00a3\u0011\u0003\u0002\u0002\u0002\u00a4\u00a5",
    "\u00070\u0002\u0002\u00a5\u00a6\u0007\u001a\u0002\u0002\u00a6\u00a7",
    "\u0005\f\u0007\u0002\u00a7\u00a8\u0007\u0018\u0002\u0002\u00a8\u0013",
    "\u0003\u0002\u0002\u0002\u0010\u0017#%+3<AI`ms\u0092\u0094\u009c"].join("");


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

var ruleNames =  [ "startState", "moduleDeclaration", "block", "supBlock", 
                   "statement", "expression", "expressionList", "varDeclaration", 
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

FaplaParser.RULE_startState = 0;
FaplaParser.RULE_moduleDeclaration = 1;
FaplaParser.RULE_block = 2;
FaplaParser.RULE_supBlock = 3;
FaplaParser.RULE_statement = 4;
FaplaParser.RULE_expression = 5;
FaplaParser.RULE_expressionList = 6;
FaplaParser.RULE_varDeclaration = 7;
FaplaParser.RULE_assignment = 8;

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
        this.state = 19; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 18;
            this.moduleDeclaration();
            this.state = 21; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FaplaParser.MODULE);
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
        this.state = 23;
        this.match(FaplaParser.MODULE);
        this.state = 24;
        this.match(FaplaParser.Identifier);
        this.state = 35;
        _la = this._input.LA(1);
        if(_la===FaplaParser.INPUT) {
            this.state = 25;
            this.match(FaplaParser.INPUT);
            this.state = 26;
            this.match(FaplaParser.COLON);
            this.state = 31; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 27;
                this.match(FaplaParser.Identifier);
                this.state = 28;
                this.match(FaplaParser.COLON);
                this.state = 29;
                this.match(FaplaParser.PrimitiveType);
                this.state = 30;
                this.match(FaplaParser.SEMICOLON);
                this.state = 33; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===FaplaParser.Identifier);
        }

        this.state = 41;
        _la = this._input.LA(1);
        if(_la===FaplaParser.OUTPUT) {
            this.state = 37;
            this.match(FaplaParser.OUTPUT);
            this.state = 38;
            this.match(FaplaParser.COLON);
            this.state = 39;
            this.match(FaplaParser.PrimitiveType);
            this.state = 40;
            this.match(FaplaParser.SEMICOLON);
        }

        this.state = 43;
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
    this.enterRule(localctx, 4, FaplaParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(FaplaParser.BEGIN);
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
            this.state = 46;
            this.statement();
            this.state = 51;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 52;
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
    this.enterRule(localctx, 6, FaplaParser.RULE_supBlock);
    var _la = 0; // Token type
    try {
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.match(FaplaParser.BEGIN);
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT) | (1 << FaplaParser.IF) | (1 << FaplaParser.RETURN) | (1 << FaplaParser.WHILE) | (1 << FaplaParser.BEGIN) | (1 << FaplaParser.WRITE) | (1 << FaplaParser.READ))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
                this.state = 55;
                this.statement();
                this.state = 60;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 61;
            this.match(FaplaParser.END);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
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
    this.enterRule(localctx, 8, FaplaParser.RULE_statement);
    try {
        this.state = 94;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.match(FaplaParser.IF);
            this.state = 66;
            this.expression(0);
            this.state = 67;
            this.match(FaplaParser.THEN);
            this.state = 68;
            this.supBlock();
            this.state = 71;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 69;
                this.match(FaplaParser.ELSE);
                this.state = 70;
                this.supBlock();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 73;
            this.match(FaplaParser.WHILE);
            this.state = 74;
            this.expression(0);
            this.state = 75;
            this.supBlock();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 77;
            this.expression(0);
            this.state = 78;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 80;
            this.assignment();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 81;
            this.varDeclaration();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 82;
            this.match(FaplaParser.WRITE);
            this.state = 83;
            this.expression(0);
            this.state = 84;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 86;
            this.match(FaplaParser.READ);
            this.state = 87;
            this.match(FaplaParser.Identifier);
            this.state = 88;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 89;
            this.match(FaplaParser.RETURN);
            this.state = 90;
            this.expression(0);
            this.state = 91;
            this.match(FaplaParser.SEMICOLON);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 93;
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
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, FaplaParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.state = 97;
            this.match(FaplaParser.STRINGCONSTANT);
            break;

        case 2:
            this.state = 98;
            this.match(FaplaParser.REALCONSTANT);
            break;

        case 3:
            this.state = 99;
            this.match(FaplaParser.BOOLEANCONSTANT);
            break;

        case 4:
            this.state = 100;
            this.match(FaplaParser.PO);
            this.state = 101;
            this.expression(0);
            this.state = 102;
            this.match(FaplaParser.PC);
            break;

        case 5:
            this.state = 104;
            this.match(FaplaParser.Identifier);
            this.state = 105;
            this.match(FaplaParser.PO);
            this.state = 107;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FaplaParser.BOOLEANCONSTANT) | (1 << FaplaParser.STRINGCONSTANT) | (1 << FaplaParser.REALCONSTANT))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (FaplaParser.NOT - 36)) | (1 << (FaplaParser.PO - 36)) | (1 << (FaplaParser.Identifier - 36)))) !== 0)) {
                this.state = 106;
                this.expressionList();
            }

            this.state = 109;
            this.match(FaplaParser.PC);
            break;

        case 6:
            this.state = 110;
            this.match(FaplaParser.NOT);
            this.state = 111;
            this.expression(11);
            break;

        case 7:
            this.state = 112;
            this.match(FaplaParser.Identifier);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 146;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 144;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 115;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 116;
                    this.match(FaplaParser.POW);
                    this.state = 117;
                    this.expression(10);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 118;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 119;
                    _la = this._input.LA(1);
                    if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (FaplaParser.MUL - 40)) | (1 << (FaplaParser.DIV - 40)) | (1 << (FaplaParser.MOD - 40)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 120;
                    this.expression(9);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 121;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 122;
                    _la = this._input.LA(1);
                    if(!(_la===FaplaParser.ADD || _la===FaplaParser.SUB)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 123;
                    this.expression(8);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 124;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 125;
                    _la = this._input.LA(1);
                    if(!(((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (FaplaParser.GT - 25)) | (1 << (FaplaParser.LT - 25)) | (1 << (FaplaParser.EQUAL - 25)) | (1 << (FaplaParser.LE - 25)) | (1 << (FaplaParser.GE - 25)) | (1 << (FaplaParser.NOTEQUAL - 25)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 126;
                    this.expression(7);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 127;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 128;
                    this.match(FaplaParser.XOR);
                    this.state = 129;
                    this.expression(6);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 130;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 131;
                    this.match(FaplaParser.AND);
                    this.state = 132;
                    this.expression(5);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 133;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 134;
                    this.match(FaplaParser.OR);
                    this.state = 135;
                    this.expression(4);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 136;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 137;
                    this.match(FaplaParser.QUESTION);
                    this.state = 138;
                    this.expression(0);
                    this.state = 139;
                    this.match(FaplaParser.COLON);
                    this.state = 140;
                    this.expression(3);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, FaplaParser.RULE_expression);
                    this.state = 142;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 143;
                    this.match(FaplaParser.FACTORIAL);
                    break;

                } 
            }
            this.state = 148;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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
    this.enterRule(localctx, 12, FaplaParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.expression(0);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FaplaParser.COMMA) {
            this.state = 150;
            this.match(FaplaParser.COMMA);
            this.state = 151;
            this.expression(0);
            this.state = 156;
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
    this.enterRule(localctx, 14, FaplaParser.RULE_varDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(FaplaParser.Identifier);
        this.state = 158;
        this.match(FaplaParser.COLON);
        this.state = 159;
        this.match(FaplaParser.PrimitiveType);
        this.state = 160;
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
    this.enterRule(localctx, 16, FaplaParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(FaplaParser.Identifier);
        this.state = 163;
        this.match(FaplaParser.ASSIGN);
        this.state = 164;
        this.expression(0);
        this.state = 165;
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
	case 5:
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
