// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3

import java.util.List;
import java.util.ArrayList;

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
		WHILE=14, MODULE=15, BEGIN=16, END=17, INPUT=18, OUTPUT=19, WRITE=20, 
		READ=21, SEMICOLON=22, COMMA=23, ASSIGN=24, GT=25, LT=26, FACTORIAL=27, 
		QUESTION=28, COLON=29, EQUAL=30, LE=31, GE=32, NOTEQUAL=33, AND=34, OR=35, 
		NOT=36, XOR=37, ADD=38, SUB=39, MUL=40, DIV=41, POW=42, MOD=43, PO=44, 
		PC=45, Identifier=46, WS=47, COMMENT=48, LINE_COMMENT=49;
	public static final int
		RULE_program = 0, RULE_moduleDeclaration = 1, RULE_noRetuenModuleDeclaration = 2, 
		RULE_mainModuleDeclaration = 3, RULE_block = 4, RULE_noReturnBlock = 5, 
		RULE_supBlock = 6, RULE_noReturnSupBlock = 7, RULE_noReturnStatement = 8, 
		RULE_statement = 9, RULE_expression = 10, RULE_expressionList = 11, RULE_varDeclaration = 12, 
		RULE_assignment = 13;
	public static final String[] ruleNames = {
		"program", "moduleDeclaration", "noRetuenModuleDeclaration", "mainModuleDeclaration", 
		"block", "noReturnBlock", "supBlock", "noReturnSupBlock", "noReturnStatement", 
		"statement", "expression", "expressionList", "varDeclaration", "assignment"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, "';'", "','", 
		"'='", "'>'", "'<'", "'!'", "'?'", "':'", "'=='", "'<='", "'>='", "'<>'", 
		null, null, null, null, "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", "'('", 
		"')'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "PrimitiveType", "BOOLEANCONSTANT", "STRINGCONSTANT", "REALCONSTANT", 
		"STRING", "REAL", "BOOL", "TRUE", "FALSE", "ELSE", "THEN", "IF", "RETURN", 
		"WHILE", "MODULE", "BEGIN", "END", "INPUT", "OUTPUT", "WRITE", "READ", 
		"SEMICOLON", "COMMA", "ASSIGN", "GT", "LT", "FACTORIAL", "QUESTION", "COLON", 
		"EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "NOT", "XOR", "ADD", "SUB", 
		"MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", "WS", "COMMENT", 
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


	private Scope rootScope = new Scope(null);
	private Scope currentScope = rootScope;
	private List<Scope> rootScopeList = new ArrayList();

	public FaplaParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public MainModuleDeclarationContext mainModuleDeclaration() {
			return getRuleContext(MainModuleDeclarationContext.class,0);
		}
		public List<ModuleDeclarationContext> moduleDeclaration() {
			return getRuleContexts(ModuleDeclarationContext.class);
		}
		public ModuleDeclarationContext moduleDeclaration(int i) {
			return getRuleContext(ModuleDeclarationContext.class,i);
		}
		public List<NoRetuenModuleDeclarationContext> noRetuenModuleDeclaration() {
			return getRuleContexts(NoRetuenModuleDeclarationContext.class);
		}
		public NoRetuenModuleDeclarationContext noRetuenModuleDeclaration(int i) {
			return getRuleContext(NoRetuenModuleDeclarationContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(34);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
					case 1:
						{
						setState(28);
						moduleDeclaration();
						Scope scope = new Scope(rootScope);currentScope=scope;
						}
						break;
					case 2:
						{
						setState(31);
						noRetuenModuleDeclaration();
						Scope scope = new Scope(rootScope);currentScope=scope;
						}
						break;
					}
					} 
				}
				setState(38);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			setState(39);
			mainModuleDeclaration();
			Scope mainScope = new Scope(rootScope);currentScope=mainScope;
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MODULE) {
				{
				setState(47);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
				case 1:
					{
					setState(41);
					moduleDeclaration();
					Scope scope = new Scope(rootScope);currentScope=scope;
					}
					break;
				case 2:
					{
					setState(44);
					noRetuenModuleDeclaration();
					Scope scope = new Scope(rootScope);currentScope=scope;
					}
					break;
				}
				}
				setState(51);
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
		public Token Identifier;
		public Token PrimitiveType;
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
			setState(52);
			match(MODULE);
			setState(53);
			((ModuleDeclarationContext)_localctx).Identifier = match(Identifier);
			setState(65);
			_la = _input.LA(1);
			if (_la==INPUT) {
				{
				setState(54);
				match(INPUT);
				setState(55);
				match(COLON);
				setState(61); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(56);
					((ModuleDeclarationContext)_localctx).Identifier = match(Identifier);
					setState(57);
					match(COLON);
					setState(58);
					((ModuleDeclarationContext)_localctx).PrimitiveType = match(PrimitiveType);
					setState(59);
					match(SEMICOLON);
					currentScope.addSymbol(new Symbol((((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null), (((ModuleDeclarationContext)_localctx).PrimitiveType!=null?((ModuleDeclarationContext)_localctx).PrimitiveType.getText():null), null));
					}
					}
					setState(63); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Identifier );
				}
			}

			setState(71);
			_la = _input.LA(1);
			if (_la==OUTPUT) {
				{
				setState(67);
				match(OUTPUT);
				setState(68);
				match(COLON);
				setState(69);
				((ModuleDeclarationContext)_localctx).PrimitiveType = match(PrimitiveType);
				setState(70);
				match(SEMICOLON);
				}
			}

			setState(73);
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

	public static class NoRetuenModuleDeclarationContext extends ParserRuleContext {
		public Token Identifier;
		public Token PrimitiveType;
		public TerminalNode MODULE() { return getToken(FaplaParser.MODULE, 0); }
		public List<TerminalNode> Identifier() { return getTokens(FaplaParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(FaplaParser.Identifier, i);
		}
		public NoReturnBlockContext noReturnBlock() {
			return getRuleContext(NoReturnBlockContext.class,0);
		}
		public TerminalNode INPUT() { return getToken(FaplaParser.INPUT, 0); }
		public List<TerminalNode> COLON() { return getTokens(FaplaParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(FaplaParser.COLON, i);
		}
		public List<TerminalNode> PrimitiveType() { return getTokens(FaplaParser.PrimitiveType); }
		public TerminalNode PrimitiveType(int i) {
			return getToken(FaplaParser.PrimitiveType, i);
		}
		public List<TerminalNode> SEMICOLON() { return getTokens(FaplaParser.SEMICOLON); }
		public TerminalNode SEMICOLON(int i) {
			return getToken(FaplaParser.SEMICOLON, i);
		}
		public NoRetuenModuleDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noRetuenModuleDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterNoRetuenModuleDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitNoRetuenModuleDeclaration(this);
		}
	}

	public final NoRetuenModuleDeclarationContext noRetuenModuleDeclaration() throws RecognitionException {
		NoRetuenModuleDeclarationContext _localctx = new NoRetuenModuleDeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_noRetuenModuleDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(MODULE);
			setState(76);
			((NoRetuenModuleDeclarationContext)_localctx).Identifier = match(Identifier);
			setState(88);
			_la = _input.LA(1);
			if (_la==INPUT) {
				{
				setState(77);
				match(INPUT);
				setState(78);
				match(COLON);
				setState(84); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(79);
					((NoRetuenModuleDeclarationContext)_localctx).Identifier = match(Identifier);
					setState(80);
					match(COLON);
					setState(81);
					((NoRetuenModuleDeclarationContext)_localctx).PrimitiveType = match(PrimitiveType);
					setState(82);
					match(SEMICOLON);
					currentScope.addSymbol(new Symbol((((NoRetuenModuleDeclarationContext)_localctx).Identifier!=null?((NoRetuenModuleDeclarationContext)_localctx).Identifier.getText():null), (((NoRetuenModuleDeclarationContext)_localctx).PrimitiveType!=null?((NoRetuenModuleDeclarationContext)_localctx).PrimitiveType.getText():null), null));
					}
					}
					setState(86); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Identifier );
				}
			}

			setState(90);
			noReturnBlock();
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
		public TerminalNode Identifier() { return getToken(FaplaParser.Identifier, 0); }
		public NoReturnBlockContext noReturnBlock() {
			return getRuleContext(NoReturnBlockContext.class,0);
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
		enterRule(_localctx, 6, RULE_mainModuleDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(MODULE);
			setState(93);
			match(Identifier);
			setState(94);
			noReturnBlock();
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
		enterRule(_localctx, 8, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(BEGIN);
			currentScope = currentScope.enterScope();
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << SEMICOLON) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
				{
				{
				setState(98);
				statement();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(104);
			match(END);
			currentScope = currentScope.exitScope();
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

	public static class NoReturnBlockContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(FaplaParser.BEGIN, 0); }
		public TerminalNode END() { return getToken(FaplaParser.END, 0); }
		public List<NoReturnStatementContext> noReturnStatement() {
			return getRuleContexts(NoReturnStatementContext.class);
		}
		public NoReturnStatementContext noReturnStatement(int i) {
			return getRuleContext(NoReturnStatementContext.class,i);
		}
		public NoReturnBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noReturnBlock; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterNoReturnBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitNoReturnBlock(this);
		}
	}

	public final NoReturnBlockContext noReturnBlock() throws RecognitionException {
		NoReturnBlockContext _localctx = new NoReturnBlockContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_noReturnBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			match(BEGIN);
			currentScope = currentScope.enterScope();
			setState(112);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << IF) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << SEMICOLON) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
				{
				{
				setState(109);
				noReturnStatement();
				}
				}
				setState(114);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(115);
			match(END);
			currentScope = currentScope.exitScope();
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
		enterRule(_localctx, 12, RULE_supBlock);
		int _la;
		try {
			setState(129);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(118);
				match(BEGIN);
				currentScope = currentScope.enterScope();
				setState(123);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << SEMICOLON) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
					{
					{
					setState(120);
					statement();
					}
					}
					setState(125);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(126);
				match(END);
				currentScope = currentScope.exitScope();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(128);
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

	public static class NoReturnSupBlockContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(FaplaParser.BEGIN, 0); }
		public TerminalNode END() { return getToken(FaplaParser.END, 0); }
		public List<NoReturnStatementContext> noReturnStatement() {
			return getRuleContexts(NoReturnStatementContext.class);
		}
		public NoReturnStatementContext noReturnStatement(int i) {
			return getRuleContext(NoReturnStatementContext.class,i);
		}
		public NoReturnSupBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noReturnSupBlock; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterNoReturnSupBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitNoReturnSupBlock(this);
		}
	}

	public final NoReturnSupBlockContext noReturnSupBlock() throws RecognitionException {
		NoReturnSupBlockContext _localctx = new NoReturnSupBlockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_noReturnSupBlock);
		int _la;
		try {
			setState(142);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(131);
				match(BEGIN);
				currentScope = currentScope.enterScope();
				setState(136);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << IF) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << SEMICOLON) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
					{
					{
					setState(133);
					noReturnStatement();
					}
					}
					setState(138);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(139);
				match(END);
				currentScope = currentScope.exitScope();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(141);
				noReturnStatement();
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

	public static class NoReturnStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(FaplaParser.IF, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode THEN() { return getToken(FaplaParser.THEN, 0); }
		public List<NoReturnSupBlockContext> noReturnSupBlock() {
			return getRuleContexts(NoReturnSupBlockContext.class);
		}
		public NoReturnSupBlockContext noReturnSupBlock(int i) {
			return getRuleContext(NoReturnSupBlockContext.class,i);
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
		public NoReturnBlockContext noReturnBlock() {
			return getRuleContext(NoReturnBlockContext.class,0);
		}
		public NoReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noReturnStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).enterNoReturnStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof FaplaListener ) ((FaplaListener)listener).exitNoReturnStatement(this);
		}
	}

	public final NoReturnStatementContext noReturnStatement() throws RecognitionException {
		NoReturnStatementContext _localctx = new NoReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_noReturnStatement);
		try {
			setState(170);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(144);
				match(IF);
				setState(145);
				expression(0);
				setState(146);
				match(THEN);
				setState(147);
				noReturnSupBlock();
				setState(150);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(148);
					match(ELSE);
					setState(149);
					noReturnSupBlock();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(152);
				match(WHILE);
				setState(153);
				expression(0);
				setState(154);
				noReturnSupBlock();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(156);
				expression(0);
				setState(157);
				match(SEMICOLON);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(159);
				assignment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(160);
				match(SEMICOLON);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(161);
				varDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(162);
				match(WRITE);
				setState(163);
				expression(0);
				setState(164);
				match(SEMICOLON);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(166);
				match(READ);
				setState(167);
				match(Identifier);
				setState(168);
				match(SEMICOLON);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(169);
				noReturnBlock();
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
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
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
		enterRule(_localctx, 18, RULE_statement);
		try {
			setState(202);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(172);
				match(IF);
				setState(173);
				expression(0);
				setState(174);
				match(THEN);
				setState(175);
				supBlock();
				setState(178);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
				case 1:
					{
					setState(176);
					match(ELSE);
					setState(177);
					supBlock();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(180);
				match(WHILE);
				setState(181);
				expression(0);
				setState(182);
				supBlock();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(184);
				expression(0);
				setState(185);
				match(SEMICOLON);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(187);
				assignment();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(188);
				match(SEMICOLON);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(189);
				varDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(190);
				match(WRITE);
				setState(191);
				expression(0);
				setState(192);
				match(SEMICOLON);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(194);
				match(READ);
				setState(195);
				match(Identifier);
				setState(196);
				match(SEMICOLON);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(197);
				match(RETURN);
				setState(198);
				expression(0);
				setState(199);
				match(SEMICOLON);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(201);
				block();
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
		public Token Identifier;
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
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(222);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(205);
				match(STRINGCONSTANT);
				}
				break;
			case 2:
				{
				setState(206);
				match(REALCONSTANT);
				}
				break;
			case 3:
				{
				setState(207);
				match(BOOLEANCONSTANT);
				}
				break;
			case 4:
				{
				setState(208);
				match(PO);
				setState(209);
				expression(0);
				setState(210);
				match(PC);
				}
				break;
			case 5:
				{
				setState(212);
				((ExpressionContext)_localctx).Identifier = match(Identifier);
				setState(213);
				match(PO);
				setState(215);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BOOLEANCONSTANT) | (1L << STRINGCONSTANT) | (1L << REALCONSTANT) | (1L << NOT) | (1L << PO) | (1L << Identifier))) != 0)) {
					{
					setState(214);
					expressionList();
					}
				}

				setState(217);
				match(PC);
				}
				break;
			case 6:
				{
				setState(218);
				match(NOT);
				setState(219);
				expression(11);
				}
				break;
			case 7:
				{
				setState(220);
				((ExpressionContext)_localctx).Identifier = match(Identifier);
				if(currentScope.findSymbol((((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null)) == null) System.err.println("variable " +  (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null) + " not defined");
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(255);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(253);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(224);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(225);
						match(POW);
						setState(226);
						expression(10);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(227);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(228);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(229);
						expression(9);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(230);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(231);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(232);
						expression(8);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(233);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(234);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << EQUAL) | (1L << LE) | (1L << GE) | (1L << NOTEQUAL))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(235);
						expression(7);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(236);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(237);
						match(XOR);
						setState(238);
						expression(6);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(239);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(240);
						match(AND);
						setState(241);
						expression(5);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(242);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(243);
						match(OR);
						setState(244);
						expression(4);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(245);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(246);
						match(QUESTION);
						setState(247);
						expression(0);
						setState(248);
						match(COLON);
						setState(249);
						expression(3);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(251);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(252);
						match(FACTORIAL);
						}
						break;
					}
					} 
				}
				setState(257);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
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
		enterRule(_localctx, 22, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			expression(0);
			setState(263);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(259);
				match(COMMA);
				setState(260);
				expression(0);
				}
				}
				setState(265);
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
		public Token Identifier;
		public Token PrimitiveType;
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
		enterRule(_localctx, 24, RULE_varDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			((VarDeclarationContext)_localctx).Identifier = match(Identifier);
			setState(267);
			match(COLON);
			setState(268);
			((VarDeclarationContext)_localctx).PrimitiveType = match(PrimitiveType);
			setState(269);
			match(SEMICOLON);
			currentScope.addSymbol(new Symbol((((VarDeclarationContext)_localctx).Identifier!=null?((VarDeclarationContext)_localctx).Identifier.getText():null), (((VarDeclarationContext)_localctx).PrimitiveType!=null?((VarDeclarationContext)_localctx).PrimitiveType.getText():null), null));
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
		enterRule(_localctx, 26, RULE_assignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(Identifier);
			setState(273);
			match(ASSIGN);
			setState(274);
			expression(0);
			setState(275);
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
		case 10:
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\63\u0118\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\3\2\3\2\3\2\3\2\3\2\3\2\7\2"+
		"%\n\2\f\2\16\2(\13\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\7\2\62\n\2\f\2\16"+
		"\2\65\13\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\6\3@\n\3\r\3\16\3A\5\3"+
		"D\n\3\3\3\3\3\3\3\3\3\5\3J\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4"+
		"\3\4\6\4W\n\4\r\4\16\4X\5\4[\n\4\3\4\3\4\3\5\3\5\3\5\3\5\3\6\3\6\3\6\7"+
		"\6f\n\6\f\6\16\6i\13\6\3\6\3\6\3\6\3\7\3\7\3\7\7\7q\n\7\f\7\16\7t\13\7"+
		"\3\7\3\7\3\7\3\b\3\b\3\b\7\b|\n\b\f\b\16\b\177\13\b\3\b\3\b\3\b\5\b\u0084"+
		"\n\b\3\t\3\t\3\t\7\t\u0089\n\t\f\t\16\t\u008c\13\t\3\t\3\t\3\t\5\t\u0091"+
		"\n\t\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u0099\n\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n"+
		"\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u00ad\n\n\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\5\13\u00b5\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\5\13\u00cd\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5\f"+
		"\u00da\n\f\3\f\3\f\3\f\3\f\3\f\5\f\u00e1\n\f\3\f\3\f\3\f\3\f\3\f\3\f\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\f\3\f\3\f\7\f\u0100\n\f\f\f\16\f\u0103\13\f\3\r\3\r\3\r\7\r"+
		"\u0108\n\r\f\r\16\r\u010b\13\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\2\3\26\20\2\4\6\b\n\f\16\20\22\24\26\30\32\34\2\5"+
		"\4\2*+--\3\2()\4\2\33\34 #\u013c\2&\3\2\2\2\4\66\3\2\2\2\6M\3\2\2\2\b"+
		"^\3\2\2\2\nb\3\2\2\2\fm\3\2\2\2\16\u0083\3\2\2\2\20\u0090\3\2\2\2\22\u00ac"+
		"\3\2\2\2\24\u00cc\3\2\2\2\26\u00e0\3\2\2\2\30\u0104\3\2\2\2\32\u010c\3"+
		"\2\2\2\34\u0112\3\2\2\2\36\37\5\4\3\2\37 \b\2\1\2 %\3\2\2\2!\"\5\6\4\2"+
		"\"#\b\2\1\2#%\3\2\2\2$\36\3\2\2\2$!\3\2\2\2%(\3\2\2\2&$\3\2\2\2&\'\3\2"+
		"\2\2\')\3\2\2\2(&\3\2\2\2)*\5\b\5\2*\63\b\2\1\2+,\5\4\3\2,-\b\2\1\2-\62"+
		"\3\2\2\2./\5\6\4\2/\60\b\2\1\2\60\62\3\2\2\2\61+\3\2\2\2\61.\3\2\2\2\62"+
		"\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64\3\3\2\2\2\65\63\3\2\2\2\66"+
		"\67\7\21\2\2\67C\7\60\2\289\7\24\2\29?\7\37\2\2:;\7\60\2\2;<\7\37\2\2"+
		"<=\7\3\2\2=>\7\30\2\2>@\b\3\1\2?:\3\2\2\2@A\3\2\2\2A?\3\2\2\2AB\3\2\2"+
		"\2BD\3\2\2\2C8\3\2\2\2CD\3\2\2\2DI\3\2\2\2EF\7\25\2\2FG\7\37\2\2GH\7\3"+
		"\2\2HJ\7\30\2\2IE\3\2\2\2IJ\3\2\2\2JK\3\2\2\2KL\5\n\6\2L\5\3\2\2\2MN\7"+
		"\21\2\2NZ\7\60\2\2OP\7\24\2\2PV\7\37\2\2QR\7\60\2\2RS\7\37\2\2ST\7\3\2"+
		"\2TU\7\30\2\2UW\b\4\1\2VQ\3\2\2\2WX\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y[\3\2"+
		"\2\2ZO\3\2\2\2Z[\3\2\2\2[\\\3\2\2\2\\]\5\f\7\2]\7\3\2\2\2^_\7\21\2\2_"+
		"`\7\60\2\2`a\5\f\7\2a\t\3\2\2\2bc\7\22\2\2cg\b\6\1\2df\5\24\13\2ed\3\2"+
		"\2\2fi\3\2\2\2ge\3\2\2\2gh\3\2\2\2hj\3\2\2\2ig\3\2\2\2jk\7\23\2\2kl\b"+
		"\6\1\2l\13\3\2\2\2mn\7\22\2\2nr\b\7\1\2oq\5\22\n\2po\3\2\2\2qt\3\2\2\2"+
		"rp\3\2\2\2rs\3\2\2\2su\3\2\2\2tr\3\2\2\2uv\7\23\2\2vw\b\7\1\2w\r\3\2\2"+
		"\2xy\7\22\2\2y}\b\b\1\2z|\5\24\13\2{z\3\2\2\2|\177\3\2\2\2}{\3\2\2\2}"+
		"~\3\2\2\2~\u0080\3\2\2\2\177}\3\2\2\2\u0080\u0081\7\23\2\2\u0081\u0084"+
		"\b\b\1\2\u0082\u0084\5\24\13\2\u0083x\3\2\2\2\u0083\u0082\3\2\2\2\u0084"+
		"\17\3\2\2\2\u0085\u0086\7\22\2\2\u0086\u008a\b\t\1\2\u0087\u0089\5\22"+
		"\n\2\u0088\u0087\3\2\2\2\u0089\u008c\3\2\2\2\u008a\u0088\3\2\2\2\u008a"+
		"\u008b\3\2\2\2\u008b\u008d\3\2\2\2\u008c\u008a\3\2\2\2\u008d\u008e\7\23"+
		"\2\2\u008e\u0091\b\t\1\2\u008f\u0091\5\22\n\2\u0090\u0085\3\2\2\2\u0090"+
		"\u008f\3\2\2\2\u0091\21\3\2\2\2\u0092\u0093\7\16\2\2\u0093\u0094\5\26"+
		"\f\2\u0094\u0095\7\r\2\2\u0095\u0098\5\20\t\2\u0096\u0097\7\f\2\2\u0097"+
		"\u0099\5\20\t\2\u0098\u0096\3\2\2\2\u0098\u0099\3\2\2\2\u0099\u00ad\3"+
		"\2\2\2\u009a\u009b\7\20\2\2\u009b\u009c\5\26\f\2\u009c\u009d\5\20\t\2"+
		"\u009d\u00ad\3\2\2\2\u009e\u009f\5\26\f\2\u009f\u00a0\7\30\2\2\u00a0\u00ad"+
		"\3\2\2\2\u00a1\u00ad\5\34\17\2\u00a2\u00ad\7\30\2\2\u00a3\u00ad\5\32\16"+
		"\2\u00a4\u00a5\7\26\2\2\u00a5\u00a6\5\26\f\2\u00a6\u00a7\7\30\2\2\u00a7"+
		"\u00ad\3\2\2\2\u00a8\u00a9\7\27\2\2\u00a9\u00aa\7\60\2\2\u00aa\u00ad\7"+
		"\30\2\2\u00ab\u00ad\5\f\7\2\u00ac\u0092\3\2\2\2\u00ac\u009a\3\2\2\2\u00ac"+
		"\u009e\3\2\2\2\u00ac\u00a1\3\2\2\2\u00ac\u00a2\3\2\2\2\u00ac\u00a3\3\2"+
		"\2\2\u00ac\u00a4\3\2\2\2\u00ac\u00a8\3\2\2\2\u00ac\u00ab\3\2\2\2\u00ad"+
		"\23\3\2\2\2\u00ae\u00af\7\16\2\2\u00af\u00b0\5\26\f\2\u00b0\u00b1\7\r"+
		"\2\2\u00b1\u00b4\5\16\b\2\u00b2\u00b3\7\f\2\2\u00b3\u00b5\5\16\b\2\u00b4"+
		"\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00cd\3\2\2\2\u00b6\u00b7\7\20"+
		"\2\2\u00b7\u00b8\5\26\f\2\u00b8\u00b9\5\16\b\2\u00b9\u00cd\3\2\2\2\u00ba"+
		"\u00bb\5\26\f\2\u00bb\u00bc\7\30\2\2\u00bc\u00cd\3\2\2\2\u00bd\u00cd\5"+
		"\34\17\2\u00be\u00cd\7\30\2\2\u00bf\u00cd\5\32\16\2\u00c0\u00c1\7\26\2"+
		"\2\u00c1\u00c2\5\26\f\2\u00c2\u00c3\7\30\2\2\u00c3\u00cd\3\2\2\2\u00c4"+
		"\u00c5\7\27\2\2\u00c5\u00c6\7\60\2\2\u00c6\u00cd\7\30\2\2\u00c7\u00c8"+
		"\7\17\2\2\u00c8\u00c9\5\26\f\2\u00c9\u00ca\7\30\2\2\u00ca\u00cd\3\2\2"+
		"\2\u00cb\u00cd\5\n\6\2\u00cc\u00ae\3\2\2\2\u00cc\u00b6\3\2\2\2\u00cc\u00ba"+
		"\3\2\2\2\u00cc\u00bd\3\2\2\2\u00cc\u00be\3\2\2\2\u00cc\u00bf\3\2\2\2\u00cc"+
		"\u00c0\3\2\2\2\u00cc\u00c4\3\2\2\2\u00cc\u00c7\3\2\2\2\u00cc\u00cb\3\2"+
		"\2\2\u00cd\25\3\2\2\2\u00ce\u00cf\b\f\1\2\u00cf\u00e1\7\5\2\2\u00d0\u00e1"+
		"\7\6\2\2\u00d1\u00e1\7\4\2\2\u00d2\u00d3\7.\2\2\u00d3\u00d4\5\26\f\2\u00d4"+
		"\u00d5\7/\2\2\u00d5\u00e1\3\2\2\2\u00d6\u00d7\7\60\2\2\u00d7\u00d9\7."+
		"\2\2\u00d8\u00da\5\30\r\2\u00d9\u00d8\3\2\2\2\u00d9\u00da\3\2\2\2\u00da"+
		"\u00db\3\2\2\2\u00db\u00e1\7/\2\2\u00dc\u00dd\7&\2\2\u00dd\u00e1\5\26"+
		"\f\r\u00de\u00df\7\60\2\2\u00df\u00e1\b\f\1\2\u00e0\u00ce\3\2\2\2\u00e0"+
		"\u00d0\3\2\2\2\u00e0\u00d1\3\2\2\2\u00e0\u00d2\3\2\2\2\u00e0\u00d6\3\2"+
		"\2\2\u00e0\u00dc\3\2\2\2\u00e0\u00de\3\2\2\2\u00e1\u0101\3\2\2\2\u00e2"+
		"\u00e3\f\13\2\2\u00e3\u00e4\7,\2\2\u00e4\u0100\5\26\f\f\u00e5\u00e6\f"+
		"\n\2\2\u00e6\u00e7\t\2\2\2\u00e7\u0100\5\26\f\13\u00e8\u00e9\f\t\2\2\u00e9"+
		"\u00ea\t\3\2\2\u00ea\u0100\5\26\f\n\u00eb\u00ec\f\b\2\2\u00ec\u00ed\t"+
		"\4\2\2\u00ed\u0100\5\26\f\t\u00ee\u00ef\f\7\2\2\u00ef\u00f0\7\'\2\2\u00f0"+
		"\u0100\5\26\f\b\u00f1\u00f2\f\6\2\2\u00f2\u00f3\7$\2\2\u00f3\u0100\5\26"+
		"\f\7\u00f4\u00f5\f\5\2\2\u00f5\u00f6\7%\2\2\u00f6\u0100\5\26\f\6\u00f7"+
		"\u00f8\f\4\2\2\u00f8\u00f9\7\36\2\2\u00f9\u00fa\5\26\f\2\u00fa\u00fb\7"+
		"\37\2\2\u00fb\u00fc\5\26\f\5\u00fc\u0100\3\2\2\2\u00fd\u00fe\f\f\2\2\u00fe"+
		"\u0100\7\35\2\2\u00ff\u00e2\3\2\2\2\u00ff\u00e5\3\2\2\2\u00ff\u00e8\3"+
		"\2\2\2\u00ff\u00eb\3\2\2\2\u00ff\u00ee\3\2\2\2\u00ff\u00f1\3\2\2\2\u00ff"+
		"\u00f4\3\2\2\2\u00ff\u00f7\3\2\2\2\u00ff\u00fd\3\2\2\2\u0100\u0103\3\2"+
		"\2\2\u0101\u00ff\3\2\2\2\u0101\u0102\3\2\2\2\u0102\27\3\2\2\2\u0103\u0101"+
		"\3\2\2\2\u0104\u0109\5\26\f\2\u0105\u0106\7\31\2\2\u0106\u0108\5\26\f"+
		"\2\u0107\u0105\3\2\2\2\u0108\u010b\3\2\2\2\u0109\u0107\3\2\2\2\u0109\u010a"+
		"\3\2\2\2\u010a\31\3\2\2\2\u010b\u0109\3\2\2\2\u010c\u010d\7\60\2\2\u010d"+
		"\u010e\7\37\2\2\u010e\u010f\7\3\2\2\u010f\u0110\7\30\2\2\u0110\u0111\b"+
		"\16\1\2\u0111\33\3\2\2\2\u0112\u0113\7\60\2\2\u0113\u0114\7\32\2\2\u0114"+
		"\u0115\5\26\f\2\u0115\u0116\7\30\2\2\u0116\35\3\2\2\2\32$&\61\63ACIXZ"+
		"gr}\u0083\u008a\u0090\u0098\u00ac\u00b4\u00cc\u00d9\u00e0\u00ff\u0101"+
		"\u0109";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}