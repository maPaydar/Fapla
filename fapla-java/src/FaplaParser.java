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
		WHILE=14, MODULE=15, MAIN=16, BEGIN=17, END=18, INPUT=19, OUTPUT=20, WRITE=21, 
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
		"WHILE", "MODULE", "MAIN", "BEGIN", "END", "INPUT", "OUTPUT", "WRITE", 
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
			setState(33);
			match(MODULE);
			setState(34);
			match(Identifier);
			setState(45);
			_la = _input.LA(1);
			if (_la==INPUT) {
				{
				setState(35);
				match(INPUT);
				setState(36);
				match(COLON);
				setState(41); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(37);
					match(Identifier);
					setState(38);
					match(COLON);
					setState(39);
					match(PrimitiveType);
					setState(40);
					match(SEMICOLON);
					}
					}
					setState(43); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Identifier );
				}
			}

			setState(51);
			_la = _input.LA(1);
			if (_la==OUTPUT) {
				{
				setState(47);
				match(OUTPUT);
				setState(48);
				match(COLON);
				setState(49);
				match(PrimitiveType);
				setState(50);
				match(SEMICOLON);
				}
			}

			setState(53);
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
			setState(55);
			match(MODULE);
			setState(56);
			match(MAIN);
			setState(57);
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
			setState(59);
			match(BEGIN);
			setState(63);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
				{
				{
				setState(60);
				statement();
				}
				}
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(66);
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
			setState(77);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(68);
				match(BEGIN);
				setState(72);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
					{
					{
					setState(69);
					statement();
					}
					}
					setState(74);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(75);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(76);
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
			setState(107);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(79);
				match(IF);
				setState(80);
				expression(0);
				setState(81);
				match(THEN);
				setState(82);
				supBlock();
				setState(85);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
				case 1:
					{
					setState(83);
					match(ELSE);
					setState(84);
					supBlock();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(87);
				match(WHILE);
				setState(88);
				expression(0);
				setState(89);
				supBlock();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(91);
				expression(0);
				setState(92);
				match(SEMICOLON);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(94);
				assignment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(95);
				varDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(96);
				match(WRITE);
				setState(97);
				expression(0);
				setState(98);
				match(SEMICOLON);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(100);
				match(READ);
				setState(101);
				match(Identifier);
				setState(102);
				match(SEMICOLON);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(103);
				match(RETURN);
				setState(104);
				expression(0);
				setState(105);
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
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode STRINGCONSTANT() { return getToken(FaplaParser.STRINGCONSTANT, 0); }
		public TerminalNode REALCONSTANT() { return getToken(FaplaParser.REALCONSTANT, 0); }
		public TerminalNode BOOLEANCONSTANT() { return getToken(FaplaParser.BOOLEANCONSTANT, 0); }
		public TerminalNode PO() { return getToken(FaplaParser.PO, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode PC() { return getToken(FaplaParser.PC, 0); }
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode NOT() { return getToken(FaplaParser.NOT, 0); }
		public TerminalNode POW() { return getToken(FaplaParser.POW, 0); }
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
		public TerminalNode XOR() { return getToken(FaplaParser.XOR, 0); }
		public TerminalNode AND() { return getToken(FaplaParser.AND, 0); }
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
			setState(127);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(110);
				block();
				}
				break;
			case 2:
				{
				setState(111);
				match(STRINGCONSTANT);
				}
				break;
			case 3:
				{
				setState(112);
				match(REALCONSTANT);
				}
				break;
			case 4:
				{
				setState(113);
				match(BOOLEANCONSTANT);
				}
				break;
			case 5:
				{
				setState(114);
				match(PO);
				setState(115);
				expression(0);
				setState(116);
				match(PC);
				}
				break;
			case 6:
				{
				setState(118);
				match(Identifier);
				setState(119);
				match(PO);
				setState(121);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << BEGIN) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
					{
					setState(120);
					expressionList();
					}
				}

				setState(123);
				match(PC);
				}
				break;
			case 7:
				{
				setState(124);
				match(NOT);
				setState(125);
				expression(11);
				}
				break;
			case 8:
				{
				setState(126);
				match(Identifier);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(160);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(158);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(129);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(130);
						match(POW);
						setState(131);
						expression(10);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(132);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(133);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(134);
						expression(9);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(135);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(136);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(137);
						expression(8);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(138);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(139);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << EQUAL) | (1L << LE) | (1L << GE) | (1L << NOTEQUAL))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(140);
						expression(7);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(141);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(142);
						match(XOR);
						setState(143);
						expression(6);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(144);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(145);
						match(AND);
						setState(146);
						expression(5);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(147);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(148);
						match(OR);
						setState(149);
						expression(4);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(150);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(151);
						match(QUESTION);
						setState(152);
						expression(0);
						setState(153);
						match(COLON);
						setState(154);
						expression(3);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(156);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(157);
						match(FACTORIAL);
						}
						break;
					}
					} 
				}
				setState(162);
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
			setState(163);
			expression(0);
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(164);
				match(COMMA);
				setState(165);
				expression(0);
				}
				}
				setState(170);
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
			setState(171);
			match(Identifier);
			setState(172);
			match(COLON);
			setState(173);
			match(PrimitiveType);
			setState(174);
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
			setState(176);
			match(Identifier);
			setState(177);
			match(ASSIGN);
			setState(178);
			expression(0);
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
			return precpred(_ctx, 9);
		case 1:
			return precpred(_ctx, 8);
		case 2:
			return precpred(_ctx, 7);
		case 3:
			return precpred(_ctx, 6);
		case 4:
			return precpred(_ctx, 5);
		case 5:
			return precpred(_ctx, 4);
		case 6:
			return precpred(_ctx, 3);
		case 7:
			return precpred(_ctx, 2);
		case 8:
			return precpred(_ctx, 10);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\64\u00b8\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\3\2\7\2\30\n\2\f\2\16\2\33\13\2\3\2\3\2\7\2\37\n\2\f\2\16\2\"\13"+
		"\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\6\3,\n\3\r\3\16\3-\5\3\60\n\3\3\3\3"+
		"\3\3\3\3\3\5\3\66\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\7\5@\n\5\f\5\16"+
		"\5C\13\5\3\5\3\5\3\6\3\6\7\6I\n\6\f\6\16\6L\13\6\3\6\3\6\5\6P\n\6\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\5\7X\n\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7n\n\7\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b|\n\b\3\b\3\b\3\b\3\b\5\b\u0082\n\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u00a1\n\b\f\b\16\b\u00a4"+
		"\13\b\3\t\3\t\3\t\7\t\u00a9\n\t\f\t\16\t\u00ac\13\t\3\n\3\n\3\n\3\n\3"+
		"\n\3\13\3\13\3\13\3\13\3\13\3\13\2\3\16\f\2\4\6\b\n\f\16\20\22\24\2\5"+
		"\4\2+,..\3\2)*\4\2\34\35!$\u00cf\2\31\3\2\2\2\4#\3\2\2\2\69\3\2\2\2\b"+
		"=\3\2\2\2\nO\3\2\2\2\fm\3\2\2\2\16\u0081\3\2\2\2\20\u00a5\3\2\2\2\22\u00ad"+
		"\3\2\2\2\24\u00b2\3\2\2\2\26\30\5\4\3\2\27\26\3\2\2\2\30\33\3\2\2\2\31"+
		"\27\3\2\2\2\31\32\3\2\2\2\32\34\3\2\2\2\33\31\3\2\2\2\34 \5\6\4\2\35\37"+
		"\5\4\3\2\36\35\3\2\2\2\37\"\3\2\2\2 \36\3\2\2\2 !\3\2\2\2!\3\3\2\2\2\""+
		" \3\2\2\2#$\7\21\2\2$/\7\61\2\2%&\7\25\2\2&+\7 \2\2\'(\7\61\2\2()\7 \2"+
		"\2)*\7\3\2\2*,\7\31\2\2+\'\3\2\2\2,-\3\2\2\2-+\3\2\2\2-.\3\2\2\2.\60\3"+
		"\2\2\2/%\3\2\2\2/\60\3\2\2\2\60\65\3\2\2\2\61\62\7\26\2\2\62\63\7 \2\2"+
		"\63\64\7\3\2\2\64\66\7\31\2\2\65\61\3\2\2\2\65\66\3\2\2\2\66\67\3\2\2"+
		"\2\678\5\b\5\28\5\3\2\2\29:\7\21\2\2:;\7\22\2\2;<\5\b\5\2<\7\3\2\2\2="+
		"A\7\23\2\2>@\5\f\7\2?>\3\2\2\2@C\3\2\2\2A?\3\2\2\2AB\3\2\2\2BD\3\2\2\2"+
		"CA\3\2\2\2DE\7\24\2\2E\t\3\2\2\2FJ\7\23\2\2GI\5\f\7\2HG\3\2\2\2IL\3\2"+
		"\2\2JH\3\2\2\2JK\3\2\2\2KM\3\2\2\2LJ\3\2\2\2MP\7\24\2\2NP\5\f\7\2OF\3"+
		"\2\2\2ON\3\2\2\2P\13\3\2\2\2QR\7\16\2\2RS\5\16\b\2ST\7\r\2\2TW\5\n\6\2"+
		"UV\7\f\2\2VX\5\n\6\2WU\3\2\2\2WX\3\2\2\2Xn\3\2\2\2YZ\7\20\2\2Z[\5\16\b"+
		"\2[\\\5\n\6\2\\n\3\2\2\2]^\5\16\b\2^_\7\31\2\2_n\3\2\2\2`n\5\24\13\2a"+
		"n\5\22\n\2bc\7\27\2\2cd\5\16\b\2de\7\31\2\2en\3\2\2\2fg\7\30\2\2gh\7\61"+
		"\2\2hn\7\31\2\2ij\7\17\2\2jk\5\16\b\2kl\7\31\2\2ln\3\2\2\2mQ\3\2\2\2m"+
		"Y\3\2\2\2m]\3\2\2\2m`\3\2\2\2ma\3\2\2\2mb\3\2\2\2mf\3\2\2\2mi\3\2\2\2"+
		"n\r\3\2\2\2op\b\b\1\2p\u0082\5\b\5\2q\u0082\7\5\2\2r\u0082\7\6\2\2s\u0082"+
		"\7\4\2\2tu\7/\2\2uv\5\16\b\2vw\7\60\2\2w\u0082\3\2\2\2xy\7\61\2\2y{\7"+
		"/\2\2z|\5\20\t\2{z\3\2\2\2{|\3\2\2\2|}\3\2\2\2}\u0082\7\60\2\2~\177\7"+
		"\'\2\2\177\u0082\5\16\b\r\u0080\u0082\7\61\2\2\u0081o\3\2\2\2\u0081q\3"+
		"\2\2\2\u0081r\3\2\2\2\u0081s\3\2\2\2\u0081t\3\2\2\2\u0081x\3\2\2\2\u0081"+
		"~\3\2\2\2\u0081\u0080\3\2\2\2\u0082\u00a2\3\2\2\2\u0083\u0084\f\13\2\2"+
		"\u0084\u0085\7-\2\2\u0085\u00a1\5\16\b\f\u0086\u0087\f\n\2\2\u0087\u0088"+
		"\t\2\2\2\u0088\u00a1\5\16\b\13\u0089\u008a\f\t\2\2\u008a\u008b\t\3\2\2"+
		"\u008b\u00a1\5\16\b\n\u008c\u008d\f\b\2\2\u008d\u008e\t\4\2\2\u008e\u00a1"+
		"\5\16\b\t\u008f\u0090\f\7\2\2\u0090\u0091\7(\2\2\u0091\u00a1\5\16\b\b"+
		"\u0092\u0093\f\6\2\2\u0093\u0094\7%\2\2\u0094\u00a1\5\16\b\7\u0095\u0096"+
		"\f\5\2\2\u0096\u0097\7&\2\2\u0097\u00a1\5\16\b\6\u0098\u0099\f\4\2\2\u0099"+
		"\u009a\7\37\2\2\u009a\u009b\5\16\b\2\u009b\u009c\7 \2\2\u009c\u009d\5"+
		"\16\b\5\u009d\u00a1\3\2\2\2\u009e\u009f\f\f\2\2\u009f\u00a1\7\36\2\2\u00a0"+
		"\u0083\3\2\2\2\u00a0\u0086\3\2\2\2\u00a0\u0089\3\2\2\2\u00a0\u008c\3\2"+
		"\2\2\u00a0\u008f\3\2\2\2\u00a0\u0092\3\2\2\2\u00a0\u0095\3\2\2\2\u00a0"+
		"\u0098\3\2\2\2\u00a0\u009e\3\2\2\2\u00a1\u00a4\3\2\2\2\u00a2\u00a0\3\2"+
		"\2\2\u00a2\u00a3\3\2\2\2\u00a3\17\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a5\u00aa"+
		"\5\16\b\2\u00a6\u00a7\7\32\2\2\u00a7\u00a9\5\16\b\2\u00a8\u00a6\3\2\2"+
		"\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\21"+
		"\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ad\u00ae\7\61\2\2\u00ae\u00af\7 \2\2\u00af"+
		"\u00b0\7\3\2\2\u00b0\u00b1\7\31\2\2\u00b1\23\3\2\2\2\u00b2\u00b3\7\61"+
		"\2\2\u00b3\u00b4\7\33\2\2\u00b4\u00b5\5\16\b\2\u00b5\u00b6\7\31\2\2\u00b6"+
		"\25\3\2\2\2\21\31 -/\65AJOWm{\u0081\u00a0\u00a2\u00aa";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}