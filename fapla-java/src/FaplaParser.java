// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FaplaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.5.3", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PrimitiveType=1, BOOLEANCONSTANT=2, STRINGCONSTANT=3, REALCONSTANT=4, 
		STRING=5, REAL=6, BOOL=7, TRUE=8, FALSE=9, ELSE=10, THEN=11, IF=12, RETURN=13, 
		WHILE=14, MODULE=15, BEGIN=16, END=17, MAIN=18, INPUT=19, OUTPUT=20, WRITE=21, 
		READ=22, SEMICOLON=23, COMMA=24, ASSIGN=25, GT=26, LT=27, FACTORIAL=28, 
		QUESTION=29, COLON=30, EQUAL=31, LE=32, GE=33, NOTEQUAL=34, AND=35, OR=36, 
		NOT=37, XOR=38, ADD=39, SUB=40, MUL=41, DIV=42, POW=43, MOD=44, PO=45, 
		PC=46, Identifier=47, WS=48, COMMENT=49, LINE_COMMENT=50;
	public static final int
		RULE_startState = 0, RULE_moduleDeclaration = 1, RULE_mainModuleDeclaration = 2, 
		RULE_block = 3, RULE_supBlock = 4, RULE_statement = 5, RULE_expression = 6, 
		RULE_expressionList = 7, RULE_varDeclaration = 8, RULE_assignment = 9;
	public static final String[] ruleNames = {
		"startState", "moduleDeclaration", "mainModuleDeclaration", "block", "supBlock", 
		"statement", "expression", "expressionList", "varDeclaration", "assignment"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, "';'", 
		"','", "'='", "'>'", "'<'", "'!'", "'?'", "':'", "'=='", "'<='", "'>='", 
		"'<>'", null, null, null, null, "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", 
		"'('", "')'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "PrimitiveType", "BOOLEANCONSTANT", "STRINGCONSTANT", "REALCONSTANT", 
		"STRING", "REAL", "BOOL", "TRUE", "FALSE", "ELSE", "THEN", "IF", "RETURN", 
		"WHILE", "MODULE", "BEGIN", "END", "MAIN", "INPUT", "OUTPUT", "WRITE", 
		"READ", "SEMICOLON", "COMMA", "ASSIGN", "GT", "LT", "FACTORIAL", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "NOT", "XOR", "ADD", 
		"SUB", "MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", "WS", "COMMENT", 
		"LINE_COMMENT"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Fapla.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FaplaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class StartStateContext extends ParserRuleContext {
		public MainModuleDeclarationContext mainModuleDeclaration() {
			return getRuleContext(MainModuleDeclarationContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FaplaParser.EOF, 0); }
		public List<ModuleDeclarationContext> moduleDeclaration() {
			return getRuleContexts(ModuleDeclarationContext.class);
		}
		public ModuleDeclarationContext moduleDeclaration(int i) {
			return getRuleContext(ModuleDeclarationContext.class,i);
		}
		public StartStateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_startState; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterStartState(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitStartState(this);
		}
	}

	public final StartStateContext startState() throws RecognitionException {
		StartStateContext _localctx = new StartStateContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_startState);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(20);
					moduleDeclaration();
					}
					} 
				}
				setState(25);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(26);
			mainModuleDeclaration();
			setState(30);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MODULE) {
				{
				{
				setState(27);
				moduleDeclaration();
				}
				}
				setState(32);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(33);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModuleDeclarationContext extends ParserRuleContext {
		public TerminalNode MODULE() { return getToken(FaplaParser.MODULE, 0); }
		public List<TerminalNode> Identifier() { return getTokens(FaplaParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(FaplaParser.Identifier, i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode INPUT() { return getToken(FaplaParser.INPUT, 0); }
		public List<TerminalNode> COLON() { return getTokens(FaplaParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(FaplaParser.COLON, i);
		}
		public TerminalNode OUTPUT() { return getToken(FaplaParser.OUTPUT, 0); }
		public List<TerminalNode> PrimitiveType() { return getTokens(FaplaParser.PrimitiveType); }
		public TerminalNode PrimitiveType(int i) {
			return getToken(FaplaParser.PrimitiveType, i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(FaplaParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(FaplaParser.SEMICOLON, i);
		}
		public ModuleDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterModuleDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitModuleDeclaration(this);
		}
	}

	public final ModuleDeclarationContext moduleDeclaration() throws RecognitionException {
		ModuleDeclarationContext _localctx = new ModuleDeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_moduleDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(MODULE);
			setState(36);
			match(Identifier);
			setState(47);
			_la = _input.LA(1);
			if (_la==INPUT) {
				{
				setState(37);
				match(INPUT);
				setState(38);
				match(COLON);
				setState(43); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(39);
					match(Identifier);
					setState(40);
					match(COLON);
					setState(41);
					match(PrimitiveType);
					setState(42);
					match(SEMICOLON);
					}
					}
					setState(45); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Identifier );
				}
			}

			setState(53);
			_la = _input.LA(1);
			if (_la==OUTPUT) {
				{
				setState(49);
				match(OUTPUT);
				setState(50);
				match(COLON);
				setState(51);
				match(PrimitiveType);
				setState(52);
				match(SEMICOLON);
				}
			}

			setState(55);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MainModuleDeclarationContext extends ParserRuleContext {
		public TerminalNode MODULE() { return getToken(FaplaParser.MODULE, 0); }
		public TerminalNode MAIN() { return getToken(FaplaParser.MAIN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public MainModuleDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mainModuleDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterMainModuleDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitMainModuleDeclaration(this);
		}
	}

	public final MainModuleDeclarationContext mainModuleDeclaration() throws RecognitionException {
		MainModuleDeclarationContext _localctx = new MainModuleDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_mainModuleDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			match(MODULE);
			setState(58);
			match(MAIN);
			setState(59);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(FaplaParser.BEGIN, 0); }
		public TerminalNode END() { return getToken(FaplaParser.END, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitBlock(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(BEGIN);
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
				{
				{
				setState(62);
				statement();
				}
				}
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(68);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SupBlockContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(FaplaParser.BEGIN, 0); }
		public TerminalNode END() { return getToken(FaplaParser.END, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public SupBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_supBlock; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterSupBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitSupBlock(this);
		}
	}

	public final SupBlockContext supBlock() throws RecognitionException {
		SupBlockContext _localctx = new SupBlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_supBlock);
		int _la;
		try {
			setState(79);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(70);
				match(BEGIN);
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
					{
					{
					setState(71);
					statement();
					}
					}
					setState(76);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(77);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(78);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(FaplaParser.IF, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode THEN() { return getToken(FaplaParser.THEN, 0); }
		public List<SupBlockContext> supBlock() {
			return getRuleContexts(SupBlockContext.class);
		}
		public SupBlockContext supBlock(int i) {
			return getRuleContext(SupBlockContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(FaplaParser.ELSE, 0); }
		public TerminalNode WHILE() { return getToken(FaplaParser.WHILE, 0); }
		public TerminalNode SEMICOLON() { return getToken(FaplaParser.SEMICOLON, 0); }
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public VarDeclarationContext varDeclaration() {
			return getRuleContext(VarDeclarationContext.class,0);
		}
		public TerminalNode WRITE() { return getToken(FaplaParser.WRITE, 0); }
		public TerminalNode READ() { return getToken(FaplaParser.READ, 0); }
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public TerminalNode RETURN() { return getToken(FaplaParser.RETURN, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_statement);
		try {
			setState(109);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(81);
				match(IF);
				setState(82);
				expression(0);
				setState(83);
				match(THEN);
				setState(84);
				supBlock();
				setState(87);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
				case 1:
					{
					setState(85);
					match(ELSE);
					setState(86);
					supBlock();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(89);
				match(WHILE);
				setState(90);
				expression(0);
				setState(91);
				supBlock();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(93);
				expression(0);
				setState(94);
				match(SEMICOLON);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(96);
				assignment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(97);
				varDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(98);
				match(WRITE);
				setState(99);
				expression(0);
				setState(100);
				match(SEMICOLON);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(102);
				match(READ);
				setState(103);
				match(Identifier);
				setState(104);
				match(SEMICOLON);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(105);
				match(RETURN);
				setState(106);
				expression(0);
				setState(107);
				match(SEMICOLON);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public TerminalNode NOT() { return getToken(FaplaParser.NOT, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public TerminalNode PO() { return getToken(FaplaParser.PO, 0); }
		public TerminalNode PC() { return getToken(FaplaParser.PC, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode STRINGCONSTANT() { return getToken(FaplaParser.STRINGCONSTANT, 0); }
		public TerminalNode REALCONSTANT() { return getToken(FaplaParser.REALCONSTANT, 0); }
		public TerminalNode BOOLEANCONSTANT() { return getToken(FaplaParser.BOOLEANCONSTANT, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode MUL() { return getToken(FaplaParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(FaplaParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(FaplaParser.MOD, 0); }
		public TerminalNode ADD() { return getToken(FaplaParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(FaplaParser.SUB, 0); }
		public TerminalNode LE() { return getToken(FaplaParser.LE, 0); }
		public TerminalNode GE() { return getToken(FaplaParser.GE, 0); }
		public TerminalNode GT() { return getToken(FaplaParser.GT, 0); }
		public TerminalNode LT() { return getToken(FaplaParser.LT, 0); }
		public TerminalNode EQUAL() { return getToken(FaplaParser.EQUAL, 0); }
		public TerminalNode NOTEQUAL() { return getToken(FaplaParser.NOTEQUAL, 0); }
		public TerminalNode AND() { return getToken(FaplaParser.AND, 0); }
		public TerminalNode POW() { return getToken(FaplaParser.POW, 0); }
		public TerminalNode XOR() { return getToken(FaplaParser.XOR, 0); }
		public TerminalNode OR() { return getToken(FaplaParser.OR, 0); }
		public TerminalNode QUESTION() { return getToken(FaplaParser.QUESTION, 0); }
		public TerminalNode COLON() { return getToken(FaplaParser.COLON, 0); }
		public TerminalNode FACTORIAL() { return getToken(FaplaParser.FACTORIAL, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(112);
				match(NOT);
				setState(113);
				expression(18);
				}
				break;
			case 2:
				{
				setState(114);
				match(Identifier);
				setState(115);
				match(PO);
				setState(117);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << BEGIN) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
					{
					setState(116);
					expressionList();
					}
				}

				setState(119);
				match(PC);
				}
				break;
			case 3:
				{
				setState(120);
				match(STRINGCONSTANT);
				}
				break;
			case 4:
				{
				setState(121);
				match(REALCONSTANT);
				}
				break;
			case 5:
				{
				setState(122);
				match(BOOLEANCONSTANT);
				}
				break;
			case 6:
				{
				setState(123);
				match(Identifier);
				}
				break;
			case 7:
				{
				setState(124);
				match(PO);
				setState(125);
				expression(0);
				setState(126);
				match(PC);
				}
				break;
			case 8:
				{
				setState(128);
				block();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(165);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(163);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(131);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(132);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(133);
						expression(18);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(134);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(135);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(136);
						expression(17);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(137);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(138);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(139);
						expression(16);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(140);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(141);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(142);
						expression(15);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(143);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(144);
						match(AND);
						setState(145);
						expression(13);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(146);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(147);
						match(POW);
						setState(148);
						expression(12);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(149);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(150);
						match(XOR);
						setState(151);
						expression(11);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(152);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(153);
						match(OR);
						setState(154);
						expression(10);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(156);
						match(QUESTION);
						setState(157);
						expression(0);
						setState(158);
						match(COLON);
						setState(159);
						expression(9);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(161);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(162);
						match(FACTORIAL);
						}
						break;
					}
					} 
				}
				setState(167);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FaplaParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FaplaParser.COMMA, i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterExpressionList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitExpressionList(this);
		}
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			expression(0);
			setState(173);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(169);
				match(COMMA);
				setState(170);
				expression(0);
				}
				}
				setState(175);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarDeclarationContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public TerminalNode COLON() { return getToken(FaplaParser.COLON, 0); }
		public TerminalNode PrimitiveType() { return getToken(FaplaParser.PrimitiveType, 0); }
		public TerminalNode SEMICOLON() { return getToken(FaplaParser.SEMICOLON, 0); }
		public VarDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterVarDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitVarDeclaration(this);
		}
	}

	public final VarDeclarationContext varDeclaration() throws RecognitionException {
		VarDeclarationContext _localctx = new VarDeclarationContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_varDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			match(Identifier);
			setState(177);
			match(COLON);
			setState(178);
			match(PrimitiveType);
			setState(179);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public TerminalNode ASSIGN() { return getToken(FaplaParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(FaplaParser.SEMICOLON, 0); }
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterAssignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitAssignment(this);
		}
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(181);
			match(Identifier);
			setState(182);
			match(ASSIGN);
			setState(183);
			expression(0);
			setState(184);
			match(SEMICOLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 6:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 17);
		case 1:
			return precpred(_ctx, 16);
		case 2:
			return precpred(_ctx, 15);
		case 3:
			return precpred(_ctx, 14);
		case 4:
			return precpred(_ctx, 12);
		case 5:
			return precpred(_ctx, 11);
		case 6:
			return precpred(_ctx, 10);
		case 7:
			return precpred(_ctx, 9);
		case 8:
			return precpred(_ctx, 8);
		case 9:
			return precpred(_ctx, 13);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\64\u00bd\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\3\2\7\2\30\n\2\f\2\16\2\33\13\2\3\2\3\2\7\2\37\n\2\f\2\16\2\"\13"+
		"\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\6\3.\n\3\r\3\16\3/\5\3\62\n"+
		"\3\3\3\3\3\3\3\3\3\5\38\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\7\5B\n\5\f"+
		"\5\16\5E\13\5\3\5\3\5\3\6\3\6\7\6K\n\6\f\6\16\6N\13\6\3\6\3\6\5\6R\n\6"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\5\7Z\n\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7p\n\7\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\5\bx\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0084\n"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u00a6"+
		"\n\b\f\b\16\b\u00a9\13\b\3\t\3\t\3\t\7\t\u00ae\n\t\f\t\16\t\u00b1\13\t"+
		"\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\2\3\16\f\2\4\6\b\n"+
		"\f\16\20\22\24\2\6\4\2+,..\3\2)*\4\2\34\35\"#\4\2!!$$\u00d5\2\31\3\2\2"+
		"\2\4%\3\2\2\2\6;\3\2\2\2\b?\3\2\2\2\nQ\3\2\2\2\fo\3\2\2\2\16\u0083\3\2"+
		"\2\2\20\u00aa\3\2\2\2\22\u00b2\3\2\2\2\24\u00b7\3\2\2\2\26\30\5\4\3\2"+
		"\27\26\3\2\2\2\30\33\3\2\2\2\31\27\3\2\2\2\31\32\3\2\2\2\32\34\3\2\2\2"+
		"\33\31\3\2\2\2\34 \5\6\4\2\35\37\5\4\3\2\36\35\3\2\2\2\37\"\3\2\2\2 \36"+
		"\3\2\2\2 !\3\2\2\2!#\3\2\2\2\" \3\2\2\2#$\7\2\2\3$\3\3\2\2\2%&\7\21\2"+
		"\2&\61\7\61\2\2\'(\7\25\2\2(-\7 \2\2)*\7\61\2\2*+\7 \2\2+,\7\3\2\2,.\7"+
		"\31\2\2-)\3\2\2\2./\3\2\2\2/-\3\2\2\2/\60\3\2\2\2\60\62\3\2\2\2\61\'\3"+
		"\2\2\2\61\62\3\2\2\2\62\67\3\2\2\2\63\64\7\26\2\2\64\65\7 \2\2\65\66\7"+
		"\3\2\2\668\7\31\2\2\67\63\3\2\2\2\678\3\2\2\289\3\2\2\29:\5\b\5\2:\5\3"+
		"\2\2\2;<\7\21\2\2<=\7\24\2\2=>\5\b\5\2>\7\3\2\2\2?C\7\22\2\2@B\5\f\7\2"+
		"A@\3\2\2\2BE\3\2\2\2CA\3\2\2\2CD\3\2\2\2DF\3\2\2\2EC\3\2\2\2FG\7\23\2"+
		"\2G\t\3\2\2\2HL\7\22\2\2IK\5\f\7\2JI\3\2\2\2KN\3\2\2\2LJ\3\2\2\2LM\3\2"+
		"\2\2MO\3\2\2\2NL\3\2\2\2OR\7\23\2\2PR\5\f\7\2QH\3\2\2\2QP\3\2\2\2R\13"+
		"\3\2\2\2ST\7\16\2\2TU\5\16\b\2UV\7\r\2\2VY\5\n\6\2WX\7\f\2\2XZ\5\n\6\2"+
		"YW\3\2\2\2YZ\3\2\2\2Zp\3\2\2\2[\\\7\20\2\2\\]\5\16\b\2]^\5\n\6\2^p\3\2"+
		"\2\2_`\5\16\b\2`a\7\31\2\2ap\3\2\2\2bp\5\24\13\2cp\5\22\n\2de\7\27\2\2"+
		"ef\5\16\b\2fg\7\31\2\2gp\3\2\2\2hi\7\30\2\2ij\7\61\2\2jp\7\31\2\2kl\7"+
		"\17\2\2lm\5\16\b\2mn\7\31\2\2np\3\2\2\2oS\3\2\2\2o[\3\2\2\2o_\3\2\2\2"+
		"ob\3\2\2\2oc\3\2\2\2od\3\2\2\2oh\3\2\2\2ok\3\2\2\2p\r\3\2\2\2qr\b\b\1"+
		"\2rs\7\'\2\2s\u0084\5\16\b\24tu\7\61\2\2uw\7/\2\2vx\5\20\t\2wv\3\2\2\2"+
		"wx\3\2\2\2xy\3\2\2\2y\u0084\7\60\2\2z\u0084\7\5\2\2{\u0084\7\6\2\2|\u0084"+
		"\7\4\2\2}\u0084\7\61\2\2~\177\7/\2\2\177\u0080\5\16\b\2\u0080\u0081\7"+
		"\60\2\2\u0081\u0084\3\2\2\2\u0082\u0084\5\b\5\2\u0083q\3\2\2\2\u0083t"+
		"\3\2\2\2\u0083z\3\2\2\2\u0083{\3\2\2\2\u0083|\3\2\2\2\u0083}\3\2\2\2\u0083"+
		"~\3\2\2\2\u0083\u0082\3\2\2\2\u0084\u00a7\3\2\2\2\u0085\u0086\f\23\2\2"+
		"\u0086\u0087\t\2\2\2\u0087\u00a6\5\16\b\24\u0088\u0089\f\22\2\2\u0089"+
		"\u008a\t\3\2\2\u008a\u00a6\5\16\b\23\u008b\u008c\f\21\2\2\u008c\u008d"+
		"\t\4\2\2\u008d\u00a6\5\16\b\22\u008e\u008f\f\20\2\2\u008f\u0090\t\5\2"+
		"\2\u0090\u00a6\5\16\b\21\u0091\u0092\f\16\2\2\u0092\u0093\7%\2\2\u0093"+
		"\u00a6\5\16\b\17\u0094\u0095\f\r\2\2\u0095\u0096\7-\2\2\u0096\u00a6\5"+
		"\16\b\16\u0097\u0098\f\f\2\2\u0098\u0099\7(\2\2\u0099\u00a6\5\16\b\r\u009a"+
		"\u009b\f\13\2\2\u009b\u009c\7&\2\2\u009c\u00a6\5\16\b\f\u009d\u009e\f"+
		"\n\2\2\u009e\u009f\7\37\2\2\u009f\u00a0\5\16\b\2\u00a0\u00a1\7 \2\2\u00a1"+
		"\u00a2\5\16\b\13\u00a2\u00a6\3\2\2\2\u00a3\u00a4\f\17\2\2\u00a4\u00a6"+
		"\7\36\2\2\u00a5\u0085\3\2\2\2\u00a5\u0088\3\2\2\2\u00a5\u008b\3\2\2\2"+
		"\u00a5\u008e\3\2\2\2\u00a5\u0091\3\2\2\2\u00a5\u0094\3\2\2\2\u00a5\u0097"+
		"\3\2\2\2\u00a5\u009a\3\2\2\2\u00a5\u009d\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a6"+
		"\u00a9\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\17\3\2\2"+
		"\2\u00a9\u00a7\3\2\2\2\u00aa\u00af\5\16\b\2\u00ab\u00ac\7\32\2\2\u00ac"+
		"\u00ae\5\16\b\2\u00ad\u00ab\3\2\2\2\u00ae\u00b1\3\2\2\2\u00af\u00ad\3"+
		"\2\2\2\u00af\u00b0\3\2\2\2\u00b0\21\3\2\2\2\u00b1\u00af\3\2\2\2\u00b2"+
		"\u00b3\7\61\2\2\u00b3\u00b4\7 \2\2\u00b4\u00b5\7\3\2\2\u00b5\u00b6\7\31"+
		"\2\2\u00b6\23\3\2\2\2\u00b7\u00b8\7\61\2\2\u00b8\u00b9\7\33\2\2\u00b9"+
		"\u00ba\5\16\b\2\u00ba\u00bb\7\31\2\2\u00bb\25\3\2\2\2\21\31 /\61\67CL"+
		"QYow\u0083\u00a5\u00a7\u00af";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}