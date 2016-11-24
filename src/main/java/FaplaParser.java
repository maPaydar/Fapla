// Generated from Fapla.g4 by ANTLR 4.5

//package src.antlr;
//import src.antlr.FaplaLexer.Variable;
import java.util.*;

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
	static { RuntimeMetaData.checkVersion("4.5", RuntimeMetaData.VERSION); }

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


	static class Variable {
	    public String type;
	    public String name;
	    public String value;
	    public Variable(String type, String name, String value) {
	        this.type = type;
	        this.name = name;
	        this.value = value;
	    }

	    @Override
	    public boolean equals(Object obj) {
	        return obj.equals(this.name);
	    }
	}
	static class Module {
	    public String name;
	    public List<Variable> args = new ArrayList();
	    public String returnType;
	    public Module(){}
	    public Module(String name, String returnType, List<Variable> args) {
	        this.name = name;
	        this.args = args;
	        this.returnType = returnType;
	    }
	}

	Map<String, Variable> variables = new HashMap<String, Variable>();
	Map<String, Module> modules = new HashMap<String, Module>();

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
		public Token Identifier;
		public PrimitiveTypeContext primitiveType;
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
			 Module m = new Module(); 
			setState(41);
			((ModuleDeclarationContext)_localctx).Identifier = match(Identifier);
			 m.name = (((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null);
			setState(56);
			_la = _input.LA(1);
			if (_la==INPUT) {
				{
				setState(43);
				match(INPUT);
				setState(44);
				match(COLON);
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Identifier) {
					{
					{
					setState(45);
					((ModuleDeclarationContext)_localctx).Identifier = match(Identifier);
					setState(46);
					match(COLON);
					setState(47);
					((ModuleDeclarationContext)_localctx).primitiveType = primitiveType();
					setState(48);
					match(SEMI);
					m.args.add(new Variable((((ModuleDeclarationContext)_localctx).primitiveType!=null?_input.getText(((ModuleDeclarationContext)_localctx).primitiveType.start,((ModuleDeclarationContext)_localctx).primitiveType.stop):null), (((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null), null)); variables.put((((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null), new Variable((((ModuleDeclarationContext)_localctx).primitiveType!=null?_input.getText(((ModuleDeclarationContext)_localctx).primitiveType.start,((ModuleDeclarationContext)_localctx).primitiveType.stop):null), (((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null), null));
					}
					}
					setState(55);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(63);
			_la = _input.LA(1);
			if (_la==OUTPUT) {
				{
				setState(58);
				match(OUTPUT);
				setState(59);
				match(COLON);
				{
				setState(60);
				((ModuleDeclarationContext)_localctx).primitiveType = primitiveType();
				}
				setState(61);
				match(SEMI);
				}
			}

			 m.returnType = (((ModuleDeclarationContext)_localctx).primitiveType!=null?_input.getText(((ModuleDeclarationContext)_localctx).primitiveType.start,((ModuleDeclarationContext)_localctx).primitiveType.stop):null); 
			{
			setState(66);
			block();
			}
			 modules.put(m.name, m);
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
			setState(69);
			match(MODULE);
			setState(70);
			match(MAIN);
			{
			setState(71);
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
			setState(73);
			match(INPUT);
			setState(74);
			match(COLON);
			setState(78);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Identifier) {
				{
				{
				setState(75);
				varDeclaration();
				}
				}
				setState(80);
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
			setState(81);
			match(OUTPUT);
			setState(82);
			match(COLON);
			{
			setState(83);
			primitiveType();
			}
			setState(84);
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
			setState(86);
			match(BEGIN);
			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Literal) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << SEMI) | (1L << NOT) | (1L << Identifier))) != 0)) {
				{
				{
				setState(87);
				statement();
				}
				}
				setState(92);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(93);
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
			setState(126);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(95);
				match(IF);
				setState(96);
				expression(0);
				setState(97);
				match(THEN);
				setState(98);
				block();
				setState(101);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(99);
					match(ELSE);
					setState(100);
					block();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				match(WHILE);
				setState(104);
				expression(0);
				setState(105);
				statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(107);
				match(SEMI);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(108);
				expression(0);
				setState(109);
				match(SEMI);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(111);
				assignment();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(112);
				varDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(113);
				match(WRITE);
				setState(114);
				match(PO);
				setState(115);
				expression(0);
				setState(116);
				match(PC);
				setState(117);
				match(SEMI);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(119);
				match(READ);
				setState(120);
				match(Identifier);
				setState(121);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(122);
				match(RETURN);
				setState(123);
				expression(0);
				setState(124);
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
		public Token Identifier;
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
			setState(141);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				setState(129);
				match(NOT);
				setState(130);
				expression(14);
				}
				break;
			case 2:
				{
				setState(131);
				((ExpressionContext)_localctx).Identifier = match(Identifier);
				setState(132);
				match(PO);
				setState(133);
				expressionList();
				setState(134);
				match(PC);
				 /*if(!modules.containsKey((((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null))) { System.err.println("Error:: Module " + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null) + " not decleared before at line::" + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getLine():0)); } */
				}
				break;
			case 3:
				{
				setState(137);
				match(Literal);
				}
				break;
			case 4:
				{
				setState(138);
				((ExpressionContext)_localctx).Identifier = match(Identifier);
				 /*if(!variables.containsKey((((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null))) { System.err.println("Error:: Variable " + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null) + " not decleared before at line::" + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getLine():0)); } */
				}
				break;
			case 5:
				{
				setState(140);
				block();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(175);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(173);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(143);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(144);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(145);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(146);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(147);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(148);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(149);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(150);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(151);
						expression(12);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(152);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(153);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(154);
						expression(11);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(156);
						match(AND);
						setState(157);
						expression(10);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(158);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(159);
						match(POW);
						setState(160);
						expression(9);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(161);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(162);
						match(XOR);
						setState(163);
						expression(8);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(164);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(165);
						match(OR);
						setState(166);
						expression(7);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(167);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(168);
						match(QUESTION);
						setState(169);
						expression(0);
						setState(170);
						match(COLON);
						setState(171);
						expression(6);
						}
						break;
					}
					} 
				}
				setState(177);
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
			setState(178);
			expression(0);
			setState(183);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(179);
				match(COMMA);
				setState(180);
				expression(0);
				}
				}
				setState(185);
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
			setState(186);
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
		public Token Identifier;
		public PrimitiveTypeContext primitiveType;
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
			setState(188);
			((VarDeclarationContext)_localctx).Identifier = match(Identifier);
			setState(189);
			match(COLON);
			setState(190);
			((VarDeclarationContext)_localctx).primitiveType = primitiveType();
			setState(191);
			match(SEMI);
			}
			 /*variables.put((((VarDeclarationContext)_localctx).Identifier!=null?((VarDeclarationContext)_localctx).Identifier.getText():null), new Variable((((VarDeclarationContext)_localctx).primitiveType!=null?_input.getText(((VarDeclarationContext)_localctx).primitiveType.start,((VarDeclarationContext)_localctx).primitiveType.stop):null), (((VarDeclarationContext)_localctx).Identifier!=null?((VarDeclarationContext)_localctx).Identifier.getText():null), null));*/ 
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
		public Token Identifier;
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
			setState(195);
			((AssignmentContext)_localctx).Identifier = match(Identifier);
			setState(196);
			match(ASSIGN);
			setState(197);
			expression(0);
			setState(198);
			match(SEMI);
			 /*if(!variables.containsKey((((AssignmentContext)_localctx).Identifier!=null?((AssignmentContext)_localctx).Identifier.getText():null))) { System.err.println("Error:: Variable " + (((AssignmentContext)_localctx).Identifier!=null?((AssignmentContext)_localctx).Identifier.getText():null) + " not decleared before at line::" + (((AssignmentContext)_localctx).Identifier!=null?((AssignmentContext)_localctx).Identifier.getLine():0)); }*/ 
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\60\u00cc\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\3\2\7\2\34\n\2\f\2\16\2\37\13\2\3\2\3\2\7\2#\n\2"+
		"\f\2\16\2&\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\7\3\66\n\3\f\3\16\39\13\3\5\3;\n\3\3\3\3\3\3\3\3\3\3\3\5\3B\n\3\3\3"+
		"\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\5\3\5\3\5\7\5O\n\5\f\5\16\5R\13\5\3\6\3"+
		"\6\3\6\3\6\3\6\3\7\3\7\7\7[\n\7\f\7\16\7^\13\7\3\7\3\7\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\5\bh\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u0081\n\b\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u0090\n\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\7\t\u00b0\n\t\f\t\16\t\u00b3\13\t\3\n\3"+
		"\n\3\n\7\n\u00b8\n\n\f\n\16\n\u00bb\13\n\3\13\3\13\3\f\3\f\3\f\3\f\3\f"+
		"\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\2\3\20\16\2\4\6\b\n\f\16\20\22\24"+
		"\26\30\2\7\4\2\'(**\3\2%&\4\2\30\31\36\37\4\2\35\35  \3\2\4\6\u00dd\2"+
		"\35\3\2\2\2\4)\3\2\2\2\6G\3\2\2\2\bK\3\2\2\2\nS\3\2\2\2\fX\3\2\2\2\16"+
		"\u0080\3\2\2\2\20\u008f\3\2\2\2\22\u00b4\3\2\2\2\24\u00bc\3\2\2\2\26\u00be"+
		"\3\2\2\2\30\u00c5\3\2\2\2\32\34\5\4\3\2\33\32\3\2\2\2\34\37\3\2\2\2\35"+
		"\33\3\2\2\2\35\36\3\2\2\2\36 \3\2\2\2\37\35\3\2\2\2 $\5\6\4\2!#\5\4\3"+
		"\2\"!\3\2\2\2#&\3\2\2\2$\"\3\2\2\2$%\3\2\2\2%\'\3\2\2\2&$\3\2\2\2\'(\7"+
		"\2\2\3(\3\3\2\2\2)*\7\f\2\2*+\b\3\1\2+,\7-\2\2,:\b\3\1\2-.\7\20\2\2.\67"+
		"\7\34\2\2/\60\7-\2\2\60\61\7\34\2\2\61\62\5\24\13\2\62\63\7\24\2\2\63"+
		"\64\b\3\1\2\64\66\3\2\2\2\65/\3\2\2\2\669\3\2\2\2\67\65\3\2\2\2\678\3"+
		"\2\2\28;\3\2\2\29\67\3\2\2\2:-\3\2\2\2:;\3\2\2\2;A\3\2\2\2<=\7\21\2\2"+
		"=>\7\34\2\2>?\5\24\13\2?@\7\24\2\2@B\3\2\2\2A<\3\2\2\2AB\3\2\2\2BC\3\2"+
		"\2\2CD\b\3\1\2DE\5\f\7\2EF\b\3\1\2F\5\3\2\2\2GH\7\f\2\2HI\7\17\2\2IJ\5"+
		"\f\7\2J\7\3\2\2\2KL\7\20\2\2LP\7\34\2\2MO\5\26\f\2NM\3\2\2\2OR\3\2\2\2"+
		"PN\3\2\2\2PQ\3\2\2\2Q\t\3\2\2\2RP\3\2\2\2ST\7\21\2\2TU\7\34\2\2UV\5\24"+
		"\13\2VW\7\24\2\2W\13\3\2\2\2X\\\7\r\2\2Y[\5\16\b\2ZY\3\2\2\2[^\3\2\2\2"+
		"\\Z\3\2\2\2\\]\3\2\2\2]_\3\2\2\2^\\\3\2\2\2_`\7\16\2\2`\r\3\2\2\2ab\7"+
		"\t\2\2bc\5\20\t\2cd\7\b\2\2dg\5\f\7\2ef\7\7\2\2fh\5\f\7\2ge\3\2\2\2gh"+
		"\3\2\2\2h\u0081\3\2\2\2ij\7\13\2\2jk\5\20\t\2kl\5\16\b\2l\u0081\3\2\2"+
		"\2m\u0081\7\24\2\2no\5\20\t\2op\7\24\2\2p\u0081\3\2\2\2q\u0081\5\30\r"+
		"\2r\u0081\5\26\f\2st\7\22\2\2tu\7+\2\2uv\5\20\t\2vw\7,\2\2wx\7\24\2\2"+
		"x\u0081\3\2\2\2yz\7\23\2\2z{\7-\2\2{\u0081\7\24\2\2|}\7\n\2\2}~\5\20\t"+
		"\2~\177\7\24\2\2\177\u0081\3\2\2\2\u0080a\3\2\2\2\u0080i\3\2\2\2\u0080"+
		"m\3\2\2\2\u0080n\3\2\2\2\u0080q\3\2\2\2\u0080r\3\2\2\2\u0080s\3\2\2\2"+
		"\u0080y\3\2\2\2\u0080|\3\2\2\2\u0081\17\3\2\2\2\u0082\u0083\b\t\1\2\u0083"+
		"\u0084\7#\2\2\u0084\u0090\5\20\t\20\u0085\u0086\7-\2\2\u0086\u0087\7+"+
		"\2\2\u0087\u0088\5\22\n\2\u0088\u0089\7,\2\2\u0089\u008a\b\t\1\2\u008a"+
		"\u0090\3\2\2\2\u008b\u0090\7\3\2\2\u008c\u008d\7-\2\2\u008d\u0090\b\t"+
		"\1\2\u008e\u0090\5\f\7\2\u008f\u0082\3\2\2\2\u008f\u0085\3\2\2\2\u008f"+
		"\u008b\3\2\2\2\u008f\u008c\3\2\2\2\u008f\u008e\3\2\2\2\u0090\u00b1\3\2"+
		"\2\2\u0091\u0092\f\17\2\2\u0092\u0093\t\2\2\2\u0093\u00b0\5\20\t\20\u0094"+
		"\u0095\f\16\2\2\u0095\u0096\t\3\2\2\u0096\u00b0\5\20\t\17\u0097\u0098"+
		"\f\r\2\2\u0098\u0099\t\4\2\2\u0099\u00b0\5\20\t\16\u009a\u009b\f\f\2\2"+
		"\u009b\u009c\t\5\2\2\u009c\u00b0\5\20\t\r\u009d\u009e\f\13\2\2\u009e\u009f"+
		"\7!\2\2\u009f\u00b0\5\20\t\f\u00a0\u00a1\f\n\2\2\u00a1\u00a2\7)\2\2\u00a2"+
		"\u00b0\5\20\t\13\u00a3\u00a4\f\t\2\2\u00a4\u00a5\7$\2\2\u00a5\u00b0\5"+
		"\20\t\n\u00a6\u00a7\f\b\2\2\u00a7\u00a8\7\"\2\2\u00a8\u00b0\5\20\t\t\u00a9"+
		"\u00aa\f\7\2\2\u00aa\u00ab\7\33\2\2\u00ab\u00ac\5\20\t\2\u00ac\u00ad\7"+
		"\34\2\2\u00ad\u00ae\5\20\t\b\u00ae\u00b0\3\2\2\2\u00af\u0091\3\2\2\2\u00af"+
		"\u0094\3\2\2\2\u00af\u0097\3\2\2\2\u00af\u009a\3\2\2\2\u00af\u009d\3\2"+
		"\2\2\u00af\u00a0\3\2\2\2\u00af\u00a3\3\2\2\2\u00af\u00a6\3\2\2\2\u00af"+
		"\u00a9\3\2\2\2\u00b0\u00b3\3\2\2\2\u00b1\u00af\3\2\2\2\u00b1\u00b2\3\2"+
		"\2\2\u00b2\21\3\2\2\2\u00b3\u00b1\3\2\2\2\u00b4\u00b9\5\20\t\2\u00b5\u00b6"+
		"\7\25\2\2\u00b6\u00b8\5\20\t\2\u00b7\u00b5\3\2\2\2\u00b8\u00bb\3\2\2\2"+
		"\u00b9\u00b7\3\2\2\2\u00b9\u00ba\3\2\2\2\u00ba\23\3\2\2\2\u00bb\u00b9"+
		"\3\2\2\2\u00bc\u00bd\t\6\2\2\u00bd\25\3\2\2\2\u00be\u00bf\7-\2\2\u00bf"+
		"\u00c0\7\34\2\2\u00c0\u00c1\5\24\13\2\u00c1\u00c2\7\24\2\2\u00c2\u00c3"+
		"\3\2\2\2\u00c3\u00c4\b\f\1\2\u00c4\27\3\2\2\2\u00c5\u00c6\7-\2\2\u00c6"+
		"\u00c7\7\27\2\2\u00c7\u00c8\5\20\t\2\u00c8\u00c9\7\24\2\2\u00c9\u00ca"+
		"\b\r\1\2\u00ca\31\3\2\2\2\17\35$\67:AP\\g\u0080\u008f\u00af\u00b1\u00b9";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}