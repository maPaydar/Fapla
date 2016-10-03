// Generated from src/antlr/Fapla.g4 by ANTLR 4.5
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FaplaParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.5", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		WS=10, COMMENT=11, LINE_COMMENT=12, RealLiteral=13, FloatingPointLiteral=14, 
		DecimalFloatingPointLiteral=15, ExponentPart=16, ExponentIndicator=17, 
		SignedInteger=18, Sign=19, FloatTypeSuffix=20, DecimalIntegerLiteral=21, 
		HexIntegerLiteral=22, IntegerTypeSuffix=23, DecimalNumeral=24, Digits=25, 
		Digit=26, NonZeroDigit=27, HexNumeral=28, HexDigits=29, HexDigit=30, HexDigitOrUnderscore=31, 
		BoolLiteral=32, StringLiteral=33, StringCharacters=34, StringCharacter=35, 
		EscapeSequence=36, OctalEscape=37, OctalDigit=38, ZeroToThree=39, UnicodeEscape=40, 
		STRING=41, REAL=42, BOOL=43, ELSE=44, IF=45, RETURN=46, WHILE=47, MODULE=48, 
		SEMI=49, COMMA=50, DOT=51, BEGIN=52, END=53, ASSIGN=54, GT=55, LT=56, 
		FACTORIAL=57, QUESTION=58, COLON=59, EQUAL=60, LE=61, GE=62, NOTEQUAL=63, 
		AND=64, OR=65, INC=66, DEC=67, ADD=68, SUB=69, MUL=70, DIV=71, CARET=72, 
		MOD=73, Identifier=74, JavaLetter=75, JavaLetterOrDigit=76;
	public static final int
		RULE_compilationUnit = 0, RULE_moduleDeclaration = 1, RULE_mainModuleDeclaration = 2, 
		RULE_moduleInput = 3, RULE_moduleOutput = 4, RULE_moduleBody = 5, RULE_block = 6, 
		RULE_blockStatement = 7, RULE_statement = 8, RULE_expression = 9, RULE_expressionList = 10, 
		RULE_primary = 11, RULE_primitiveType = 12, RULE_varDeclaration = 13, 
		RULE_literal = 14;
	public static final String[] ruleNames = {
		"compilationUnit", "moduleDeclaration", "mainModuleDeclaration", "moduleInput", 
		"moduleOutput", "moduleBody", "block", "blockStatement", "statement", 
		"expression", "expressionList", "primary", "primitiveType", "varDeclaration", 
		"literal"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'Module'", "'Main'", "'main'", "'Input'", "'input'", "'Output'", 
		"'output'", "'not'", "'xor'", null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		"'string'", "'real'", "'bool'", "'else'", "'if'", "'return'", "'while'", 
		"'module'", "';'", "','", "'.'", "'Begin'", "'End'", "'='", "'>'", "'<'", 
		"'!'", "'?'", "':'", "'=='", "'<='", "'>='", "'<>'", "'and'", "'or'", 
		"'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'^'", "'%'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, "WS", "COMMENT", 
		"LINE_COMMENT", "RealLiteral", "FloatingPointLiteral", "DecimalFloatingPointLiteral", 
		"ExponentPart", "ExponentIndicator", "SignedInteger", "Sign", "FloatTypeSuffix", 
		"DecimalIntegerLiteral", "HexIntegerLiteral", "IntegerTypeSuffix", "DecimalNumeral", 
		"Digits", "Digit", "NonZeroDigit", "HexNumeral", "HexDigits", "HexDigit", 
		"HexDigitOrUnderscore", "BoolLiteral", "StringLiteral", "StringCharacters", 
		"StringCharacter", "EscapeSequence", "OctalEscape", "OctalDigit", "ZeroToThree", 
		"UnicodeEscape", "STRING", "REAL", "BOOL", "ELSE", "IF", "RETURN", "WHILE", 
		"MODULE", "SEMI", "COMMA", "DOT", "BEGIN", "END", "ASSIGN", "GT", "LT", 
		"FACTORIAL", "QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", 
		"OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "CARET", "MOD", "Identifier", 
		"JavaLetter", "JavaLetterOrDigit"
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
	public static class CompilationUnitContext extends ParserRuleContext {
		public MainModuleDeclarationContext mainModuleDeclaration() {
			return getRuleContext(MainModuleDeclarationContext.class,0);
		}
		public TerminalNode EOF() { return getToken(FaplaParser.EOF, 0); }
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterCompilationUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitCompilationUnit(this);
		}
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compilationUnit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			mainModuleDeclaration();
			setState(31);
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
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public ModuleBodyContext moduleBody() {
			return getRuleContext(ModuleBodyContext.class,0);
		}
		public ModuleInputContext moduleInput() {
			return getRuleContext(ModuleInputContext.class,0);
		}
		public ModuleOutputContext moduleOutput() {
			return getRuleContext(ModuleOutputContext.class,0);
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
			_la = _input.LA(1);
			if ( !(_la==T__0 || _la==MODULE) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			setState(34);
			match(Identifier);
			setState(36);
			_la = _input.LA(1);
			if (_la==T__3 || _la==T__4) {
				{
				setState(35);
				moduleInput();
				}
			}

			setState(39);
			_la = _input.LA(1);
			if (_la==T__5 || _la==T__6) {
				{
				setState(38);
				moduleOutput();
				}
			}

			{
			setState(41);
			moduleBody();
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			_la = _input.LA(1);
			if ( !(_la==T__0 || _la==MODULE) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			setState(44);
			_la = _input.LA(1);
			if ( !(_la==T__1 || _la==T__2) ) {
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

	public static class ModuleInputContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(FaplaParser.COLON, 0); }
		public TerminalNode SEMI() { return getToken(FaplaParser.SEMI, 0); }
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
			setState(46);
			_la = _input.LA(1);
			if ( !(_la==T__3 || _la==T__4) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			setState(47);
			match(COLON);
			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Identifier) {
				{
				{
				setState(48);
				varDeclaration();
				}
				}
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(54);
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

	public static class ModuleOutputContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(FaplaParser.COLON, 0); }
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
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			_la = _input.LA(1);
			if ( !(_la==T__5 || _la==T__6) ) {
			_errHandler.recoverInline(this);
			} else {
				consume();
			}
			setState(57);
			match(COLON);
			{
			setState(58);
			primitiveType();
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

	public static class ModuleBodyContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ModuleBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterModuleBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitModuleBody(this);
		}
	}

	public final ModuleBodyContext moduleBody() throws RecognitionException {
		ModuleBodyContext _localctx = new ModuleBodyContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_moduleBody);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
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
		public List<BlockStatementContext> blockStatement() {
			return getRuleContexts(BlockStatementContext.class);
		}
		public BlockStatementContext blockStatement(int i) {
			return getRuleContext(BlockStatementContext.class,i);
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
		enterRule(_localctx, 12, RULE_block);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(BEGIN);
			setState(66);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(63);
					blockStatement();
					}
					} 
				}
				setState(68);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			setState(69);
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

	public static class BlockStatementContext extends ParserRuleContext {
		public VarDeclarationContext varDeclaration() {
			return getRuleContext(VarDeclarationContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public BlockStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blockStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterBlockStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitBlockStatement(this);
		}
	}

	public final BlockStatementContext blockStatement() throws RecognitionException {
		BlockStatementContext _localctx = new BlockStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_blockStatement);
		try {
			setState(73);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(71);
				varDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(72);
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
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode RETURN() { return getToken(FaplaParser.RETURN, 0); }
		public TerminalNode SEMI() { return getToken(FaplaParser.SEMI, 0); }
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
		enterRule(_localctx, 16, RULE_statement);
		try {
			setState(94);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(75);
				match(IF);
				setState(76);
				expression(0);
				setState(77);
				statement();
				setState(80);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(78);
					match(ELSE);
					setState(79);
					statement();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(82);
				match(WHILE);
				setState(83);
				expression(0);
				setState(84);
				statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(86);
				match(SEMI);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(87);
				expression(0);
				setState(88);
				match(SEMI);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(90);
				match(RETURN);
				setState(91);
				expression(0);
				setState(92);
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
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
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
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				{
				setState(97);
				match(T__7);
				}
				setState(98);
				expression(11);
				}
				break;
			case 2:
				{
				setState(99);
				primary();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(145);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(143);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(102);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(103);
						_la = _input.LA(1);
						if ( !(((((_la - 70)) & ~0x3f) == 0 && ((1L << (_la - 70)) & ((1L << (MUL - 70)) | (1L << (DIV - 70)) | (1L << (MOD - 70)))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(104);
						expression(11);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(105);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(106);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(107);
						expression(10);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(108);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(116);
						switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
						case 1:
							{
							setState(109);
							match(LT);
							setState(110);
							match(LT);
							}
							break;
						case 2:
							{
							setState(111);
							match(GT);
							setState(112);
							match(GT);
							setState(113);
							match(GT);
							}
							break;
						case 3:
							{
							setState(114);
							match(GT);
							setState(115);
							match(GT);
							}
							break;
						}
						setState(118);
						expression(9);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(119);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(120);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(121);
						expression(8);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(122);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(123);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(124);
						expression(7);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(125);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(126);
						match(AND);
						setState(127);
						expression(6);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(128);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(129);
						match(CARET);
						setState(130);
						expression(5);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(131);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(132);
						match(T__8);
						setState(133);
						expression(4);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(134);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(135);
						match(OR);
						setState(136);
						expression(3);
						}
						break;
					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(137);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(138);
						match(QUESTION);
						setState(139);
						expression(0);
						setState(140);
						match(COLON);
						setState(141);
						expression(2);
						}
						break;
					}
					} 
				}
				setState(147);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
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
		enterRule(_localctx, 20, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			expression(0);
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(149);
				match(COMMA);
				setState(150);
				expression(0);
				}
				}
				setState(155);
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

	public static class PrimaryContext extends ParserRuleContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitPrimary(this);
		}
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_primary);
		try {
			setState(159);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(157);
				literal();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(158);
				match(Identifier);
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

	public static class PrimitiveTypeContext extends ParserRuleContext {
		public TerminalNode BOOL() { return getToken(FaplaParser.BOOL, 0); }
		public TerminalNode REAL() { return getToken(FaplaParser.REAL, 0); }
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
		enterRule(_localctx, 24, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
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
		enterRule(_localctx, 26, RULE_varDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(163);
			match(Identifier);
			setState(164);
			match(COLON);
			setState(165);
			primitiveType();
			setState(166);
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

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode RealLiteral() { return getToken(FaplaParser.RealLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(FaplaParser.StringLiteral, 0); }
		public TerminalNode BoolLiteral() { return getToken(FaplaParser.BoolLiteral, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitLiteral(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RealLiteral) | (1L << BoolLiteral) | (1L << StringLiteral))) != 0)) ) {
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 9:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 10);
		case 1:
			return precpred(_ctx, 9);
		case 2:
			return precpred(_ctx, 8);
		case 3:
			return precpred(_ctx, 7);
		case 4:
			return precpred(_ctx, 6);
		case 5:
			return precpred(_ctx, 5);
		case 6:
			return precpred(_ctx, 4);
		case 7:
			return precpred(_ctx, 3);
		case 8:
			return precpred(_ctx, 2);
		case 9:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3N\u00ad\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\3\2\3\3\3\3"+
		"\3\3\5\3\'\n\3\3\3\5\3*\n\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\7\5\64\n\5"+
		"\f\5\16\5\67\13\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\b\3\b\7\bC\n\b\f\b"+
		"\16\bF\13\b\3\b\3\b\3\t\3\t\5\tL\n\t\3\n\3\n\3\n\3\n\3\n\5\nS\n\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\na\n\n\3\13\3\13\3\13\3"+
		"\13\5\13g\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\5\13w\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\7\13\u0092\n\13\f\13\16\13\u0095\13\13\3\f\3\f\3\f\7\f\u009a"+
		"\n\f\f\f\16\f\u009d\13\f\3\r\3\r\3\r\5\r\u00a2\n\r\3\16\3\16\3\17\3\17"+
		"\3\17\3\17\3\17\3\20\3\20\3\20\2\3\24\21\2\4\6\b\n\f\16\20\22\24\26\30"+
		"\32\34\36\2\f\4\2\3\3\62\62\3\2\4\5\3\2\6\7\3\2\b\t\4\2HIKK\3\2FG\4\2"+
		"9:?@\4\2>>AA\3\2+-\4\2\17\17\"#\u00b7\2 \3\2\2\2\4#\3\2\2\2\6-\3\2\2\2"+
		"\b\60\3\2\2\2\n:\3\2\2\2\f>\3\2\2\2\16@\3\2\2\2\20K\3\2\2\2\22`\3\2\2"+
		"\2\24f\3\2\2\2\26\u0096\3\2\2\2\30\u00a1\3\2\2\2\32\u00a3\3\2\2\2\34\u00a5"+
		"\3\2\2\2\36\u00aa\3\2\2\2 !\5\6\4\2!\"\7\2\2\3\"\3\3\2\2\2#$\t\2\2\2$"+
		"&\7L\2\2%\'\5\b\5\2&%\3\2\2\2&\'\3\2\2\2\')\3\2\2\2(*\5\n\6\2)(\3\2\2"+
		"\2)*\3\2\2\2*+\3\2\2\2+,\5\f\7\2,\5\3\2\2\2-.\t\2\2\2./\t\3\2\2/\7\3\2"+
		"\2\2\60\61\t\4\2\2\61\65\7=\2\2\62\64\5\34\17\2\63\62\3\2\2\2\64\67\3"+
		"\2\2\2\65\63\3\2\2\2\65\66\3\2\2\2\668\3\2\2\2\67\65\3\2\2\289\7\63\2"+
		"\29\t\3\2\2\2:;\t\5\2\2;<\7=\2\2<=\5\32\16\2=\13\3\2\2\2>?\5\16\b\2?\r"+
		"\3\2\2\2@D\7\66\2\2AC\5\20\t\2BA\3\2\2\2CF\3\2\2\2DB\3\2\2\2DE\3\2\2\2"+
		"EG\3\2\2\2FD\3\2\2\2GH\7\67\2\2H\17\3\2\2\2IL\5\34\17\2JL\5\22\n\2KI\3"+
		"\2\2\2KJ\3\2\2\2L\21\3\2\2\2MN\7/\2\2NO\5\24\13\2OR\5\22\n\2PQ\7.\2\2"+
		"QS\5\22\n\2RP\3\2\2\2RS\3\2\2\2Sa\3\2\2\2TU\7\61\2\2UV\5\24\13\2VW\5\22"+
		"\n\2Wa\3\2\2\2Xa\7\63\2\2YZ\5\24\13\2Z[\7\63\2\2[a\3\2\2\2\\]\7\60\2\2"+
		"]^\5\24\13\2^_\7\63\2\2_a\3\2\2\2`M\3\2\2\2`T\3\2\2\2`X\3\2\2\2`Y\3\2"+
		"\2\2`\\\3\2\2\2a\23\3\2\2\2bc\b\13\1\2cd\7\n\2\2dg\5\24\13\reg\5\30\r"+
		"\2fb\3\2\2\2fe\3\2\2\2g\u0093\3\2\2\2hi\f\f\2\2ij\t\6\2\2j\u0092\5\24"+
		"\13\rkl\f\13\2\2lm\t\7\2\2m\u0092\5\24\13\fnv\f\n\2\2op\7:\2\2pw\7:\2"+
		"\2qr\79\2\2rs\79\2\2sw\79\2\2tu\79\2\2uw\79\2\2vo\3\2\2\2vq\3\2\2\2vt"+
		"\3\2\2\2wx\3\2\2\2x\u0092\5\24\13\13yz\f\t\2\2z{\t\b\2\2{\u0092\5\24\13"+
		"\n|}\f\b\2\2}~\t\t\2\2~\u0092\5\24\13\t\177\u0080\f\7\2\2\u0080\u0081"+
		"\7B\2\2\u0081\u0092\5\24\13\b\u0082\u0083\f\6\2\2\u0083\u0084\7J\2\2\u0084"+
		"\u0092\5\24\13\7\u0085\u0086\f\5\2\2\u0086\u0087\7\13\2\2\u0087\u0092"+
		"\5\24\13\6\u0088\u0089\f\4\2\2\u0089\u008a\7C\2\2\u008a\u0092\5\24\13"+
		"\5\u008b\u008c\f\3\2\2\u008c\u008d\7<\2\2\u008d\u008e\5\24\13\2\u008e"+
		"\u008f\7=\2\2\u008f\u0090\5\24\13\4\u0090\u0092\3\2\2\2\u0091h\3\2\2\2"+
		"\u0091k\3\2\2\2\u0091n\3\2\2\2\u0091y\3\2\2\2\u0091|\3\2\2\2\u0091\177"+
		"\3\2\2\2\u0091\u0082\3\2\2\2\u0091\u0085\3\2\2\2\u0091\u0088\3\2\2\2\u0091"+
		"\u008b\3\2\2\2\u0092\u0095\3\2\2\2\u0093\u0091\3\2\2\2\u0093\u0094\3\2"+
		"\2\2\u0094\25\3\2\2\2\u0095\u0093\3\2\2\2\u0096\u009b\5\24\13\2\u0097"+
		"\u0098\7\64\2\2\u0098\u009a\5\24\13\2\u0099\u0097\3\2\2\2\u009a\u009d"+
		"\3\2\2\2\u009b\u0099\3\2\2\2\u009b\u009c\3\2\2\2\u009c\27\3\2\2\2\u009d"+
		"\u009b\3\2\2\2\u009e\u00a2\3\2\2\2\u009f\u00a2\5\36\20\2\u00a0\u00a2\7"+
		"L\2\2\u00a1\u009e\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a0\3\2\2\2\u00a2"+
		"\31\3\2\2\2\u00a3\u00a4\t\n\2\2\u00a4\33\3\2\2\2\u00a5\u00a6\7L\2\2\u00a6"+
		"\u00a7\7=\2\2\u00a7\u00a8\5\32\16\2\u00a8\u00a9\7\63\2\2\u00a9\35\3\2"+
		"\2\2\u00aa\u00ab\t\13\2\2\u00ab\37\3\2\2\2\17&)\65DKR`fv\u0091\u0093\u009b"+
		"\u00a1";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}