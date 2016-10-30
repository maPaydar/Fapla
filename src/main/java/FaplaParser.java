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
		T__0=1, T__1=2, T__2=3, Literal=4, STRING=5, REAL=6, BOOL=7, ELSE=8, THEN=9, 
		IF=10, RETURN=11, WHILE=12, MODULE=13, BEGIN=14, END=15, MAIN=16, INPUT=17, 
		OUTPUT=18, WRITE=19, READ=20, SEMI=21, COMMA=22, DOT=23, ASSIGN=24, GT=25, 
		LT=26, FACTORIAL=27, QUESTION=28, COLON=29, EQUAL=30, LE=31, GE=32, NOTEQUAL=33, 
		AND=34, OR=35, NOT=36, XOR=37, ADD=38, SUB=39, MUL=40, DIV=41, POW=42, 
		MOD=43, PO=44, PC=45, Identifier=46, WS=47, COMMENT=48, LINE_COMMENT=49;
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
		null, "'real'", "'bool'", "'string'", null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, "';'", 
		"','", "'.'", "'='", "'>'", "'<'", "'!'", "'?'", "':'", "'=='", "'<='", 
		"'>='", "'<>'", null, null, null, null, "'+'", "'-'", "'*'", "'/'", "'^'", 
		"'%'", "'('", "')'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, "Literal", "STRING", "REAL", "BOOL", "ELSE", "THEN", 
		"IF", "RETURN", "WHILE", "MODULE", "BEGIN", "END", "MAIN", "INPUT", "OUTPUT", 
		"WRITE", "READ", "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "FACTORIAL", 
		"QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "NOT", 
		"XOR", "ADD", "SUB", "MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", 
		"WS", "COMMENT", "LINE_COMMENT"
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
			setState(33);
			match(MODULE);
			 /*Module m = new Module();*/ 
			setState(35);
			((ModuleDeclarationContext)_localctx).Identifier = match(Identifier);
			 /*m.name = (((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null);*/
			setState(50);
			_la = _input.LA(1);
			if (_la==INPUT) {
				{
				setState(37);
				match(INPUT);
				setState(38);
				match(COLON);
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==Identifier) {
					{
					{
					setState(39);
					((ModuleDeclarationContext)_localctx).Identifier = match(Identifier);
					setState(40);
					match(COLON);
					setState(41);
					((ModuleDeclarationContext)_localctx).primitiveType = primitiveType();
					setState(42);
					match(SEMI);
					/*m.args.add(new Variable($primitiveType.text, $Identifier.text, null)); variables.put($Identifier.text, new Variable($primitiveType.text, $Identifier.text, null));*/
					}
					}
					setState(49);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(57);
			_la = _input.LA(1);
			if (_la==OUTPUT) {
				{
				setState(52);
				match(OUTPUT);
				setState(53);
				match(COLON);
				{
				setState(54);
				((ModuleDeclarationContext)_localctx).primitiveType = primitiveType();
				}
				setState(55);
				match(SEMI);
				}
			}

			 /*m.returnType = (((ModuleDeclarationContext)_localctx).primitiveType!=null?_input.getText(((ModuleDeclarationContext)_localctx).primitiveType.start,((ModuleDeclarationContext)_localctx).primitiveType.stop):null);*/ 
			{
			setState(60);
			block();
			}
			 /*modules.put(m.name, m);*/
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
			setState(63);
			match(MODULE);
			setState(64);
			match(MAIN);
			{
			setState(65);
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
			setState(67);
			match(INPUT);
			setState(68);
			match(COLON);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Identifier) {
				{
				{
				setState(69);
				varDeclaration();
				}
				}
				setState(74);
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
			setState(75);
			match(OUTPUT);
			setState(76);
			match(COLON);
			{
			setState(77);
			primitiveType();
			}
			setState(78);
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
			setState(80);
			match(BEGIN);
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Literal) | (1L << IF) | (1L << RETURN) | (1L << WHILE) | (1L << BEGIN) | (1L << WRITE) | (1L << READ) | (1L << SEMI) | (1L << NOT) | (1L << Identifier))) != 0)) {
				{
				{
				setState(81);
				statement();
				}
				}
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(87);
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
			setState(120);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(89);
				match(IF);
				setState(90);
				expression(0);
				setState(91);
				match(THEN);
				setState(92);
				block();
				setState(95);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(93);
					match(ELSE);
					setState(94);
					block();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(97);
				match(WHILE);
				setState(98);
				expression(0);
				setState(99);
				statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(101);
				match(SEMI);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(102);
				expression(0);
				setState(103);
				match(SEMI);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(105);
				assignment();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(106);
				varDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(107);
				match(WRITE);
				setState(108);
				match(PO);
				setState(109);
				expression(0);
				setState(110);
				match(PC);
				setState(111);
				match(SEMI);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(113);
				match(READ);
				setState(114);
				match(Identifier);
				setState(115);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(116);
				match(RETURN);
				setState(117);
				expression(0);
				setState(118);
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
			setState(135);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(123);
				match(NOT);
				setState(124);
				expression(14);
				}
				break;
			case 2:
				{
				setState(125);
				((ExpressionContext)_localctx).Identifier = match(Identifier);
				setState(126);
				match(PO);
				setState(127);
				expressionList();
				setState(128);
				match(PC);
				 /*if(!modules.containsKey((((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null))) { System.err.println("Error:: Module " + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null) + " not decleared before at line::" + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getLine():0)); }*/ 
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
				((ExpressionContext)_localctx).Identifier = match(Identifier);
				 /*if(!variables.containsKey((((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null))) { System.err.println("Error:: Variable " + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null) + " not decleared before at line::" + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getLine():0)); } */
				}
				break;
			case 5:
				{
				setState(134);
				block();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(169);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(167);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(137);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(138);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(139);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(140);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(141);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(142);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(143);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(144);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(145);
						expression(12);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(146);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(147);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(148);
						expression(11);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(149);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(150);
						match(AND);
						setState(151);
						expression(10);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(152);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(153);
						match(POW);
						setState(154);
						expression(9);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(156);
						match(XOR);
						setState(157);
						expression(8);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(158);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(159);
						match(OR);
						setState(160);
						expression(7);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(161);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(162);
						match(QUESTION);
						setState(163);
						expression(0);
						setState(164);
						match(COLON);
						setState(165);
						expression(6);
						}
						break;
					}
					} 
				}
				setState(171);
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
			setState(172);
			expression(0);
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(173);
				match(COMMA);
				setState(174);
				expression(0);
				}
				}
				setState(179);
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
			setState(180);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2))) != 0)) ) {
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
			setState(182);
			((VarDeclarationContext)_localctx).Identifier = match(Identifier);
			setState(183);
			match(COLON);
			setState(184);
			((VarDeclarationContext)_localctx).primitiveType = primitiveType();
			setState(185);
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
			setState(189);
			((AssignmentContext)_localctx).Identifier = match(Identifier);
			setState(190);
			match(ASSIGN);
			setState(191);
			expression(0);
			setState(192);
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\63\u00c6\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\3\2\7\2\34\n\2\f\2\16\2\37\13\2\3\2\3\2\3\2\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3\60\n\3\f\3\16\3\63\13"+
		"\3\5\3\65\n\3\3\3\3\3\3\3\3\3\3\3\5\3<\n\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4"+
		"\3\4\3\5\3\5\3\5\7\5I\n\5\f\5\16\5L\13\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\7"+
		"\7U\n\7\f\7\16\7X\13\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\5\bb\n\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\5\b{\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\5\t\u008a\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3"+
		"\t\7\t\u00aa\n\t\f\t\16\t\u00ad\13\t\3\n\3\n\3\n\7\n\u00b2\n\n\f\n\16"+
		"\n\u00b5\13\n\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3"+
		"\r\3\r\3\r\2\3\20\16\2\4\6\b\n\f\16\20\22\24\26\30\2\7\4\2*+--\3\2()\4"+
		"\2\33\34!\"\4\2  ##\3\2\3\5\u00d6\2\35\3\2\2\2\4#\3\2\2\2\6A\3\2\2\2\b"+
		"E\3\2\2\2\nM\3\2\2\2\fR\3\2\2\2\16z\3\2\2\2\20\u0089\3\2\2\2\22\u00ae"+
		"\3\2\2\2\24\u00b6\3\2\2\2\26\u00b8\3\2\2\2\30\u00bf\3\2\2\2\32\34\5\4"+
		"\3\2\33\32\3\2\2\2\34\37\3\2\2\2\35\33\3\2\2\2\35\36\3\2\2\2\36 \3\2\2"+
		"\2\37\35\3\2\2\2 !\5\6\4\2!\"\7\2\2\3\"\3\3\2\2\2#$\7\17\2\2$%\b\3\1\2"+
		"%&\7\60\2\2&\64\b\3\1\2\'(\7\23\2\2(\61\7\37\2\2)*\7\60\2\2*+\7\37\2\2"+
		"+,\5\24\13\2,-\7\27\2\2-.\b\3\1\2.\60\3\2\2\2/)\3\2\2\2\60\63\3\2\2\2"+
		"\61/\3\2\2\2\61\62\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\64\'\3\2\2\2\64"+
		"\65\3\2\2\2\65;\3\2\2\2\66\67\7\24\2\2\678\7\37\2\289\5\24\13\29:\7\27"+
		"\2\2:<\3\2\2\2;\66\3\2\2\2;<\3\2\2\2<=\3\2\2\2=>\b\3\1\2>?\5\f\7\2?@\b"+
		"\3\1\2@\5\3\2\2\2AB\7\17\2\2BC\7\22\2\2CD\5\f\7\2D\7\3\2\2\2EF\7\23\2"+
		"\2FJ\7\37\2\2GI\5\26\f\2HG\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2K\t\3"+
		"\2\2\2LJ\3\2\2\2MN\7\24\2\2NO\7\37\2\2OP\5\24\13\2PQ\7\27\2\2Q\13\3\2"+
		"\2\2RV\7\20\2\2SU\5\16\b\2TS\3\2\2\2UX\3\2\2\2VT\3\2\2\2VW\3\2\2\2WY\3"+
		"\2\2\2XV\3\2\2\2YZ\7\21\2\2Z\r\3\2\2\2[\\\7\f\2\2\\]\5\20\t\2]^\7\13\2"+
		"\2^a\5\f\7\2_`\7\n\2\2`b\5\f\7\2a_\3\2\2\2ab\3\2\2\2b{\3\2\2\2cd\7\16"+
		"\2\2de\5\20\t\2ef\5\16\b\2f{\3\2\2\2g{\7\27\2\2hi\5\20\t\2ij\7\27\2\2"+
		"j{\3\2\2\2k{\5\30\r\2l{\5\26\f\2mn\7\25\2\2no\7.\2\2op\5\20\t\2pq\7/\2"+
		"\2qr\7\27\2\2r{\3\2\2\2st\7\26\2\2tu\7\60\2\2u{\7\27\2\2vw\7\r\2\2wx\5"+
		"\20\t\2xy\7\27\2\2y{\3\2\2\2z[\3\2\2\2zc\3\2\2\2zg\3\2\2\2zh\3\2\2\2z"+
		"k\3\2\2\2zl\3\2\2\2zm\3\2\2\2zs\3\2\2\2zv\3\2\2\2{\17\3\2\2\2|}\b\t\1"+
		"\2}~\7&\2\2~\u008a\5\20\t\20\177\u0080\7\60\2\2\u0080\u0081\7.\2\2\u0081"+
		"\u0082\5\22\n\2\u0082\u0083\7/\2\2\u0083\u0084\b\t\1\2\u0084\u008a\3\2"+
		"\2\2\u0085\u008a\7\6\2\2\u0086\u0087\7\60\2\2\u0087\u008a\b\t\1\2\u0088"+
		"\u008a\5\f\7\2\u0089|\3\2\2\2\u0089\177\3\2\2\2\u0089\u0085\3\2\2\2\u0089"+
		"\u0086\3\2\2\2\u0089\u0088\3\2\2\2\u008a\u00ab\3\2\2\2\u008b\u008c\f\17"+
		"\2\2\u008c\u008d\t\2\2\2\u008d\u00aa\5\20\t\20\u008e\u008f\f\16\2\2\u008f"+
		"\u0090\t\3\2\2\u0090\u00aa\5\20\t\17\u0091\u0092\f\r\2\2\u0092\u0093\t"+
		"\4\2\2\u0093\u00aa\5\20\t\16\u0094\u0095\f\f\2\2\u0095\u0096\t\5\2\2\u0096"+
		"\u00aa\5\20\t\r\u0097\u0098\f\13\2\2\u0098\u0099\7$\2\2\u0099\u00aa\5"+
		"\20\t\f\u009a\u009b\f\n\2\2\u009b\u009c\7,\2\2\u009c\u00aa\5\20\t\13\u009d"+
		"\u009e\f\t\2\2\u009e\u009f\7\'\2\2\u009f\u00aa\5\20\t\n\u00a0\u00a1\f"+
		"\b\2\2\u00a1\u00a2\7%\2\2\u00a2\u00aa\5\20\t\t\u00a3\u00a4\f\7\2\2\u00a4"+
		"\u00a5\7\36\2\2\u00a5\u00a6\5\20\t\2\u00a6\u00a7\7\37\2\2\u00a7\u00a8"+
		"\5\20\t\b\u00a8\u00aa\3\2\2\2\u00a9\u008b\3\2\2\2\u00a9\u008e\3\2\2\2"+
		"\u00a9\u0091\3\2\2\2\u00a9\u0094\3\2\2\2\u00a9\u0097\3\2\2\2\u00a9\u009a"+
		"\3\2\2\2\u00a9\u009d\3\2\2\2\u00a9\u00a0\3\2\2\2\u00a9\u00a3\3\2\2\2\u00aa"+
		"\u00ad\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\21\3\2\2"+
		"\2\u00ad\u00ab\3\2\2\2\u00ae\u00b3\5\20\t\2\u00af\u00b0\7\30\2\2\u00b0"+
		"\u00b2\5\20\t\2\u00b1\u00af\3\2\2\2\u00b2\u00b5\3\2\2\2\u00b3\u00b1\3"+
		"\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\23\3\2\2\2\u00b5\u00b3\3\2\2\2\u00b6"+
		"\u00b7\t\6\2\2\u00b7\25\3\2\2\2\u00b8\u00b9\7\60\2\2\u00b9\u00ba\7\37"+
		"\2\2\u00ba\u00bb\5\24\13\2\u00bb\u00bc\7\27\2\2\u00bc\u00bd\3\2\2\2\u00bd"+
		"\u00be\b\f\1\2\u00be\27\3\2\2\2\u00bf\u00c0\7\60\2\2\u00c0\u00c1\7\32"+
		"\2\2\u00c1\u00c2\5\20\t\2\u00c2\u00c3\7\27\2\2\u00c3\u00c4\b\r\1\2\u00c4"+
		"\31\3\2\2\2\16\35\61\64;JVaz\u0089\u00a9\u00ab\u00b3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}