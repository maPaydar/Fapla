// Generated from /home/amin/Documents/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
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
		Literal=1, STRING=2, REAL=3, BOOL=4, ELSE=5, THEN=6, IF=7, RETURN=8, WHILE=9, 
		MODULE=10, BEGIN=11, END=12, MAIN=13, INPUT=14, OUTPUT=15, WRITE=16, READ=17, 
		SEMI=18, COMMA=19, DOT=20, ASSIGN=21, GT=22, LT=23, FACTORIAL=24, QUESTION=25, 
		COLON=26, EQUAL=27, LE=28, GE=29, NOTEQUAL=30, AND=31, OR=32, NOT=33, 
		XOR=34, ADD=35, SUB=36, MUL=37, DIV=38, POW=39, MOD=40, PO=41, PC=42, 
		Identifier=43, WS=44, COMMENT=45, LINE_COMMENT=46;
	public static final int
		RULE_startState = 0, RULE_moduleDeclaration = 1, RULE_mainModuleDeclaration = 2, 
		RULE_moduleInput = 3, RULE_moduleOutput = 4, RULE_block = 5, RULE_statement = 6, 
		RULE_expression = 7, RULE_expressionList = 8, RULE_primitiveType = 9, 
		RULE_varDeclaration = 10, RULE_assignment = 11;
	public static final String[] ruleNames = {
		"startState", "moduleDeclaration", "mainModuleDeclaration", "moduleInput", 
		"moduleOutput", "block", "statement", "expression", "expressionList", 
		"primitiveType", "varDeclaration", "assignment"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, "';'", "','", "'.'", "'='", "'>'", 
		"'<'", "'!'", "'?'", "':'", "'=='", "'<='", "'>='", "'<>'", null, null, 
		null, null, "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", "'('", "')'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "Literal", "STRING", "REAL", "BOOL", "ELSE", "THEN", "IF", "RETURN", 
		"WHILE", "MODULE", "BEGIN", "END", "MAIN", "INPUT", "OUTPUT", "WRITE", 
		"READ", "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "FACTORIAL", "QUESTION", 
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
			setState(27);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(24);
					moduleDeclaration();
					}
					} 
				}
				setState(29);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			setState(30);
			mainModuleDeclaration();
			setState(34);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MODULE) {
				{
				{
				setState(31);
				moduleDeclaration();
				}
				}
				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(37);
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
		public List<TerminalNode> SEMI() { return getTokens(FaplaParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(FaplaParser.SEMI, i);
		}
		public List<PrimitiveTypeContext> primitiveType() {
			return getRuleContexts(PrimitiveTypeContext.class);
		}
		public PrimitiveTypeContext primitiveType(int i) {
			return getRuleContext(PrimitiveTypeContext.class,i);
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
			setState(39);
			match(MODULE);
			setState(40);
			match(Identifier);
			setState(53);
			_la = _input.LA(1);
			if (_la==INPUT) {
				{
				setState(41);
				match(INPUT);
				setState(42);
				match(COLON);
				setState(50);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Identifier) {
					{
					{
					setState(43);
					match(Identifier);
					setState(44);
					match(COLON);
					setState(45);
					primitiveType();
					setState(46);
					match(SEMI);
					}
					}
					setState(52);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(60);
			_la = _input.LA(1);
			if (_la==OUTPUT) {
				{
				setState(55);
				match(OUTPUT);
				setState(56);
				match(COLON);
				{
				setState(57);
				primitiveType();
				}
				setState(58);
				match(SEMI);
				}
			}

			{
			setState(62);
			block();
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
			setState(64);
			match(MODULE);
			setState(65);
			match(MAIN);
			{
			setState(66);
			block();
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

	public static class ModuleInputContext extends ParserRuleContext {
		public TerminalNode INPUT() { return getToken(FaplaParser.INPUT, 0); }
		public TerminalNode COLON() { return getToken(FaplaParser.COLON, 0); }
		public List<VarDeclarationContext> varDeclaration() {
			return getRuleContexts(VarDeclarationContext.class);
		}
		public VarDeclarationContext varDeclaration(int i) {
			return getRuleContext(VarDeclarationContext.class,i);
		}
		public ModuleInputContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleInput; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterModuleInput(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitModuleInput(this);
		}
	}

	public final ModuleInputContext moduleInput() throws RecognitionException {
		ModuleInputContext _localctx = new ModuleInputContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_moduleInput);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(INPUT);
			setState(69);
			match(COLON);
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Identifier) {
				{
				{
				setState(70);
				varDeclaration();
				}
				}
				setState(75);
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

	public static class ModuleOutputContext extends ParserRuleContext {
		public TerminalNode OUTPUT() { return getToken(FaplaParser.OUTPUT, 0); }
		public TerminalNode COLON() { return getToken(FaplaParser.COLON, 0); }
		public TerminalNode SEMI() { return getToken(FaplaParser.SEMI, 0); }
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public ModuleOutputContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleOutput; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterModuleOutput(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitModuleOutput(this);
		}
	}

	public final ModuleOutputContext moduleOutput() throws RecognitionException {
		ModuleOutputContext _localctx = new ModuleOutputContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_moduleOutput);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			match(OUTPUT);
			setState(77);
			match(COLON);
			{
			setState(78);
			primitiveType();
			}
			setState(79);
			match(SEMI);
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
		enterRule(_localctx, 10, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(BEGIN);
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Literal) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << SEMI) | (1L << NOT) | (1L << Identifier))) != 0)) {
				{
				{
				setState(82);
				statement();
				}
				}
				setState(87);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(88);
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

	public static class StatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(FaplaParser.IF, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode THEN() { return getToken(FaplaParser.THEN, 0); }
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(FaplaParser.ELSE, 0); }
		public TerminalNode WHILE() { return getToken(FaplaParser.WHILE, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(FaplaParser.SEMI, 0); }
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public VarDeclarationContext varDeclaration() {
			return getRuleContext(VarDeclarationContext.class,0);
		}
		public TerminalNode WRITE() { return getToken(FaplaParser.WRITE, 0); }
		public TerminalNode PO() { return getToken(FaplaParser.PO, 0); }
		public TerminalNode PC() { return getToken(FaplaParser.PC, 0); }
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
		enterRule(_localctx, 12, RULE_statement);
		int _la;
		try {
			setState(121);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(90);
				match(IF);
				setState(91);
				expression(0);
				setState(92);
				match(THEN);
				setState(93);
				block();
				setState(96);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(94);
					match(ELSE);
					setState(95);
					block();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(98);
				match(WHILE);
				setState(99);
				expression(0);
				setState(100);
				statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(102);
				match(SEMI);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(103);
				expression(0);
				setState(104);
				match(SEMI);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(106);
				assignment();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(107);
				varDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(108);
				match(WRITE);
				setState(109);
				match(PO);
				setState(110);
				expression(0);
				setState(111);
				match(PC);
				setState(112);
				match(SEMI);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(114);
				match(READ);
				setState(115);
				match(Identifier);
				setState(116);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(117);
				match(RETURN);
				setState(118);
				expression(0);
				setState(119);
				match(SEMI);
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
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode PC() { return getToken(FaplaParser.PC, 0); }
		public TerminalNode Literal() { return getToken(FaplaParser.Literal, 0); }
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
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(134);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(124);
				match(NOT);
				setState(125);
				expression(14);
				}
				break;
			case 2:
				{
				setState(126);
				match(Identifier);
				setState(127);
				match(PO);
				setState(128);
				expressionList();
				setState(129);
				match(PC);
				}
				break;
			case 3:
				{
				setState(131);
				match(Literal);
				}
				break;
			case 4:
				{
				setState(132);
				match(Identifier);
				}
				break;
			case 5:
				{
				setState(133);
				block();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(168);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(166);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(136);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(137);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(138);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(139);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(140);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(141);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(142);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(143);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(144);
						expression(12);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(145);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(146);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(147);
						expression(11);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(148);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(149);
						match(AND);
						setState(150);
						expression(10);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(151);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(152);
						match(POW);
						setState(153);
						expression(9);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(154);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(155);
						match(XOR);
						setState(156);
						expression(8);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(157);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(158);
						match(OR);
						setState(159);
						expression(7);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(160);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(161);
						match(QUESTION);
						setState(162);
						expression(0);
						setState(163);
						match(COLON);
						setState(164);
						expression(6);
						}
						break;
					}
					} 
				}
				setState(170);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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
		enterRule(_localctx, 16, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			expression(0);
			setState(176);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(172);
				match(COMMA);
				setState(173);
				expression(0);
				}
				}
				setState(178);
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

	public static class PrimitiveTypeContext extends ParserRuleContext {
		public TerminalNode REAL() { return getToken(FaplaParser.REAL, 0); }
		public TerminalNode BOOL() { return getToken(FaplaParser.BOOL, 0); }
		public TerminalNode STRING() { return getToken(FaplaParser.STRING, 0); }
		public PrimitiveTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterPrimitiveType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitPrimitiveType(this);
		}
	}

	public final PrimitiveTypeContext primitiveType() throws RecognitionException {
		PrimitiveTypeContext _localctx = new PrimitiveTypeContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(179);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << STRING) | (1L << REAL) | (1L << BOOL))) != 0)) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
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
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(FaplaParser.SEMI, 0); }
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
		enterRule(_localctx, 20, RULE_varDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(181);
			match(Identifier);
			setState(182);
			match(COLON);
			setState(183);
			primitiveType();
			setState(184);
			match(SEMI);
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

	public static class AssignmentContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public TerminalNode ASSIGN() { return getToken(FaplaParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(FaplaParser.SEMI, 0); }
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
		enterRule(_localctx, 22, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(Identifier);
			setState(187);
			match(ASSIGN);
			setState(188);
			expression(0);
			setState(189);
			match(SEMI);
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
		case 7:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 13);
		case 1:
			return precpred(_ctx, 12);
		case 2:
			return precpred(_ctx, 11);
		case 3:
			return precpred(_ctx, 10);
		case 4:
			return precpred(_ctx, 9);
		case 5:
			return precpred(_ctx, 8);
		case 6:
			return precpred(_ctx, 7);
		case 7:
			return precpred(_ctx, 6);
		case 8:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\60\u00c2\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\3\2\7\2\34\n\2\f\2\16\2\37\13\2\3\2\3\2\7\2#\n\2"+
		"\f\2\16\2&\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3\63\n\3"+
		"\f\3\16\3\66\13\3\5\38\n\3\3\3\3\3\3\3\3\3\3\3\5\3?\n\3\3\3\3\3\3\4\3"+
		"\4\3\4\3\4\3\5\3\5\3\5\7\5J\n\5\f\5\16\5M\13\5\3\6\3\6\3\6\3\6\3\6\3\7"+
		"\3\7\7\7V\n\7\f\7\16\7Y\13\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\5\bc\n\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\5\b|\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\5\t\u0089\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\7\t\u00a9\n\t\f\t\16\t\u00ac\13\t\3\n\3\n\3\n\7\n\u00b1\n\n\f\n\16\n"+
		"\u00b4\13\n\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\2\3"+
		"\20\16\2\4\6\b\n\f\16\20\22\24\26\30\2\7\4\2\'(**\3\2%&\4\2\30\31\36\37"+
		"\4\2\35\35  \3\2\4\6\u00d3\2\35\3\2\2\2\4)\3\2\2\2\6B\3\2\2\2\bF\3\2\2"+
		"\2\nN\3\2\2\2\fS\3\2\2\2\16{\3\2\2\2\20\u0088\3\2\2\2\22\u00ad\3\2\2\2"+
		"\24\u00b5\3\2\2\2\26\u00b7\3\2\2\2\30\u00bc\3\2\2\2\32\34\5\4\3\2\33\32"+
		"\3\2\2\2\34\37\3\2\2\2\35\33\3\2\2\2\35\36\3\2\2\2\36 \3\2\2\2\37\35\3"+
		"\2\2\2 $\5\6\4\2!#\5\4\3\2\"!\3\2\2\2#&\3\2\2\2$\"\3\2\2\2$%\3\2\2\2%"+
		"\'\3\2\2\2&$\3\2\2\2\'(\7\2\2\3(\3\3\2\2\2)*\7\f\2\2*\67\7-\2\2+,\7\20"+
		"\2\2,\64\7\34\2\2-.\7-\2\2./\7\34\2\2/\60\5\24\13\2\60\61\7\24\2\2\61"+
		"\63\3\2\2\2\62-\3\2\2\2\63\66\3\2\2\2\64\62\3\2\2\2\64\65\3\2\2\2\658"+
		"\3\2\2\2\66\64\3\2\2\2\67+\3\2\2\2\678\3\2\2\28>\3\2\2\29:\7\21\2\2:;"+
		"\7\34\2\2;<\5\24\13\2<=\7\24\2\2=?\3\2\2\2>9\3\2\2\2>?\3\2\2\2?@\3\2\2"+
		"\2@A\5\f\7\2A\5\3\2\2\2BC\7\f\2\2CD\7\17\2\2DE\5\f\7\2E\7\3\2\2\2FG\7"+
		"\20\2\2GK\7\34\2\2HJ\5\26\f\2IH\3\2\2\2JM\3\2\2\2KI\3\2\2\2KL\3\2\2\2"+
		"L\t\3\2\2\2MK\3\2\2\2NO\7\21\2\2OP\7\34\2\2PQ\5\24\13\2QR\7\24\2\2R\13"+
		"\3\2\2\2SW\7\r\2\2TV\5\16\b\2UT\3\2\2\2VY\3\2\2\2WU\3\2\2\2WX\3\2\2\2"+
		"XZ\3\2\2\2YW\3\2\2\2Z[\7\16\2\2[\r\3\2\2\2\\]\7\t\2\2]^\5\20\t\2^_\7\b"+
		"\2\2_b\5\f\7\2`a\7\7\2\2ac\5\f\7\2b`\3\2\2\2bc\3\2\2\2c|\3\2\2\2de\7\13"+
		"\2\2ef\5\20\t\2fg\5\16\b\2g|\3\2\2\2h|\7\24\2\2ij\5\20\t\2jk\7\24\2\2"+
		"k|\3\2\2\2l|\5\30\r\2m|\5\26\f\2no\7\22\2\2op\7+\2\2pq\5\20\t\2qr\7,\2"+
		"\2rs\7\24\2\2s|\3\2\2\2tu\7\23\2\2uv\7-\2\2v|\7\24\2\2wx\7\n\2\2xy\5\20"+
		"\t\2yz\7\24\2\2z|\3\2\2\2{\\\3\2\2\2{d\3\2\2\2{h\3\2\2\2{i\3\2\2\2{l\3"+
		"\2\2\2{m\3\2\2\2{n\3\2\2\2{t\3\2\2\2{w\3\2\2\2|\17\3\2\2\2}~\b\t\1\2~"+
		"\177\7#\2\2\177\u0089\5\20\t\20\u0080\u0081\7-\2\2\u0081\u0082\7+\2\2"+
		"\u0082\u0083\5\22\n\2\u0083\u0084\7,\2\2\u0084\u0089\3\2\2\2\u0085\u0089"+
		"\7\3\2\2\u0086\u0089\7-\2\2\u0087\u0089\5\f\7\2\u0088}\3\2\2\2\u0088\u0080"+
		"\3\2\2\2\u0088\u0085\3\2\2\2\u0088\u0086\3\2\2\2\u0088\u0087\3\2\2\2\u0089"+
		"\u00aa\3\2\2\2\u008a\u008b\f\17\2\2\u008b\u008c\t\2\2\2\u008c\u00a9\5"+
		"\20\t\20\u008d\u008e\f\16\2\2\u008e\u008f\t\3\2\2\u008f\u00a9\5\20\t\17"+
		"\u0090\u0091\f\r\2\2\u0091\u0092\t\4\2\2\u0092\u00a9\5\20\t\16\u0093\u0094"+
		"\f\f\2\2\u0094\u0095\t\5\2\2\u0095\u00a9\5\20\t\r\u0096\u0097\f\13\2\2"+
		"\u0097\u0098\7!\2\2\u0098\u00a9\5\20\t\f\u0099\u009a\f\n\2\2\u009a\u009b"+
		"\7)\2\2\u009b\u00a9\5\20\t\13\u009c\u009d\f\t\2\2\u009d\u009e\7$\2\2\u009e"+
		"\u00a9\5\20\t\n\u009f\u00a0\f\b\2\2\u00a0\u00a1\7\"\2\2\u00a1\u00a9\5"+
		"\20\t\t\u00a2\u00a3\f\7\2\2\u00a3\u00a4\7\33\2\2\u00a4\u00a5\5\20\t\2"+
		"\u00a5\u00a6\7\34\2\2\u00a6\u00a7\5\20\t\b\u00a7\u00a9\3\2\2\2\u00a8\u008a"+
		"\3\2\2\2\u00a8\u008d\3\2\2\2\u00a8\u0090\3\2\2\2\u00a8\u0093\3\2\2\2\u00a8"+
		"\u0096\3\2\2\2\u00a8\u0099\3\2\2\2\u00a8\u009c\3\2\2\2\u00a8\u009f\3\2"+
		"\2\2\u00a8\u00a2\3\2\2\2\u00a9\u00ac\3\2\2\2\u00aa\u00a8\3\2\2\2\u00aa"+
		"\u00ab\3\2\2\2\u00ab\21\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ad\u00b2\5\20\t"+
		"\2\u00ae\u00af\7\25\2\2\u00af\u00b1\5\20\t\2\u00b0\u00ae\3\2\2\2\u00b1"+
		"\u00b4\3\2\2\2\u00b2\u00b0\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\23\3\2\2"+
		"\2\u00b4\u00b2\3\2\2\2\u00b5\u00b6\t\6\2\2\u00b6\25\3\2\2\2\u00b7\u00b8"+
		"\7-\2\2\u00b8\u00b9\7\34\2\2\u00b9\u00ba\5\24\13\2\u00ba\u00bb\7\24\2"+
		"\2\u00bb\27\3\2\2\2\u00bc\u00bd\7-\2\2\u00bd\u00be\7\27\2\2\u00be\u00bf"+
		"\5\20\t\2\u00bf\u00c0\7\24\2\2\u00c0\31\3\2\2\2\17\35$\64\67>KWb{\u0088"+
		"\u00a8\u00aa\u00b2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}