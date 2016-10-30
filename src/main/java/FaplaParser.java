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
		Literal=1, PrimitiveType=2, STRING=3, REAL=4, BOOL=5, ELSE=6, THEN=7, 
		IF=8, RETURN=9, WHILE=10, MODULE=11, BEGIN=12, END=13, MAIN=14, INPUT=15, 
		OUTPUT=16, WRITE=17, READ=18, SEMI=19, COMMA=20, DOT=21, ASSIGN=22, GT=23, 
		LT=24, FACTORIAL=25, QUESTION=26, COLON=27, EQUAL=28, LE=29, GE=30, NOTEQUAL=31, 
		AND=32, OR=33, NOT=34, XOR=35, ADD=36, SUB=37, MUL=38, DIV=39, POW=40, 
		MOD=41, PO=42, PC=43, Identifier=44, WS=45, COMMENT=46, LINE_COMMENT=47;
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
		null, null, null, null, null, null, null, "';'", "','", "'.'", "'='", 
		"'>'", "'<'", "'!'", "'?'", "':'", "'=='", "'<='", "'>='", "'<>'", null, 
		null, null, null, "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", "'('", "')'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "Literal", "PrimitiveType", "STRING", "REAL", "BOOL", "ELSE", "THEN", 
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
			 Module m = new Module(); 
			setState(35);
			((ModuleDeclarationContext)_localctx).Identifier = match(Identifier);
			 m.name = (((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null);
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
					m.args.add(new Variable((((ModuleDeclarationContext)_localctx).primitiveType!=null?_input.getText(((ModuleDeclarationContext)_localctx).primitiveType.start,((ModuleDeclarationContext)_localctx).primitiveType.stop):null), (((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null), null)); variables.put((((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null), new Variable((((ModuleDeclarationContext)_localctx).primitiveType!=null?_input.getText(((ModuleDeclarationContext)_localctx).primitiveType.start,((ModuleDeclarationContext)_localctx).primitiveType.stop):null), (((ModuleDeclarationContext)_localctx).Identifier!=null?((ModuleDeclarationContext)_localctx).Identifier.getText():null), null));
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

			 m.returnType = (((ModuleDeclarationContext)_localctx).primitiveType!=null?_input.getText(((ModuleDeclarationContext)_localctx).primitiveType.start,((ModuleDeclarationContext)_localctx).primitiveType.stop):null); 
			{
			setState(60);
			block();
			}
			 modules.put(m.name, m);le
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
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(FaplaParser.ELSE, 0); }
		public TerminalNode WHILE() { return getToken(FaplaParser.WHILE, 0); }
		public TerminalNode SEMI() { return getToken(FaplaParser.SEMI, 0); }
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
		enterRule(_localctx, 12, RULE_statement);
		try {
			setState(118);
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
				statement();
				setState(95);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(93);
					match(ELSE);
					setState(94);
					statement();
					}
					break;
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
				expression(0);
				setState(109);
				match(SEMI);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(111);
				match(READ);
				setState(112);
				match(Identifier);
				setState(113);
				match(SEMI);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(114);
				match(RETURN);
				setState(115);
				expression(0);
				setState(116);
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
			setState(133);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				setState(121);
				match(NOT);
				setState(122);
				expression(14);
				}
				break;
			case 2:
				{
				setState(123);
				((ExpressionContext)_localctx).Identifier = match(Identifier);
				setState(124);
				match(PO);
				setState(125);
				expressionList();
				setState(126);
				match(PC);
				 if(!modules.containsKey((((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null))) { System.err.println("Error:: Module " + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null) + " not decleared before at line::" + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getLine():0)); } 
				}
				break;
			case 3:
				{
				setState(129);
				match(Literal);
				}
				break;
			case 4:
				{
				setState(130);
				((ExpressionContext)_localctx).Identifier = match(Identifier);
				 if(!variables.containsKey((((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null))) { System.err.println("Error:: Variable " + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getText():null) + " not decleared before at line::" + (((ExpressionContext)_localctx).Identifier!=null?((ExpressionContext)_localctx).Identifier.getLine():0)); } 
				}
				break;
			case 5:
				{
				setState(132);
				block();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(167);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(165);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(135);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(136);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MUL) | (1L << DIV) | (1L << MOD))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(137);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(138);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(139);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(140);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(141);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(142);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << GT) | (1L << LT) | (1L << LE) | (1L << GE))) != 0)) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(143);
						expression(12);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(144);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(145);
						_la = _input.LA(1);
						if ( !(_la==EQUAL || _la==NOTEQUAL) ) {
						_errHandler.recoverInline(this);
						} else {
							consume();
						}
						setState(146);
						expression(11);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(147);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(148);
						match(AND);
						setState(149);
						expression(10);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(150);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(151);
						match(POW);
						setState(152);
						expression(9);
						}
						break;
					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(153);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(154);
						match(XOR);
						setState(155);
						expression(8);
						}
						break;
					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(156);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(157);
						match(OR);
						setState(158);
						expression(7);
						}
						break;
					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(159);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(160);
						match(QUESTION);
						setState(161);
						expression(0);
						setState(162);
						match(COLON);
						setState(163);
						expression(6);
						}
						break;
					}
					} 
				}
				setState(169);
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
			setState(170);
			expression(0);
			setState(175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(171);
				match(COMMA);
				setState(172);
				expression(0);
				}
				}
				setState(177);
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
		enterRule(_localctx, 18, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
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
			setState(180);
			((VarDeclarationContext)_localctx).Identifier = match(Identifier);
			setState(181);
			match(COLON);
			setState(182);
			((VarDeclarationContext)_localctx).primitiveType = primitiveType();
			setState(183);
			match(SEMI);
			}
			 variables.put((((VarDeclarationContext)_localctx).Identifier!=null?((VarDeclarationContext)_localctx).Identifier.getText():null), new Variable((((VarDeclarationContext)_localctx).primitiveType!=null?_input.getText(((VarDeclarationContext)_localctx).primitiveType.start,((VarDeclarationContext)_localctx).primitiveType.stop):null), (((VarDeclarationContext)_localctx).Identifier!=null?((VarDeclarationContext)_localctx).Identifier.getText():null), null)); 
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
			setState(187);
			((AssignmentContext)_localctx).Identifier = match(Identifier);
			setState(188);
			match(ASSIGN);
			setState(189);
			expression(0);
			setState(190);
			match(SEMI);
			 if(!variables.containsKey((((AssignmentContext)_localctx).Identifier!=null?((AssignmentContext)_localctx).Identifier.getText():null))) { System.err.println("Error:: Variable " + (((AssignmentContext)_localctx).Identifier!=null?((AssignmentContext)_localctx).Identifier.getText():null) + " not decleared before at line::" + (((AssignmentContext)_localctx).Identifier!=null?((AssignmentContext)_localctx).Identifier.getLine():0)); } 
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\61\u00c4\4\2\t\2"+
		"\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\3\2\7\2\34\n\2\f\2\16\2\37\13\2\3\2\3\2\3\2\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3\60\n\3\f\3\16\3\63\13"+
		"\3\5\3\65\n\3\3\3\3\3\3\3\3\3\3\3\5\3<\n\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4"+
		"\3\4\3\5\3\5\3\5\7\5I\n\5\f\5\16\5L\13\5\3\6\3\6\3\6\3\6\3\6\3\7\3\7\7"+
		"\7U\n\7\f\7\16\7X\13\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\5\bb\n\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\5\by\n\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\5\t\u0088\n\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\t\7\t\u00a8"+
		"\n\t\f\t\16\t\u00ab\13\t\3\n\3\n\3\n\7\n\u00b0\n\n\f\n\16\n\u00b3\13\n"+
		"\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\3\r\3\r\3\r\2\3"+
		"\20\16\2\4\6\b\n\f\16\20\22\24\26\30\2\7\4\2()++\3\2&\'\4\2\31\32\37 "+
		"\4\2\36\36!!\3\2\5\7\u00d4\2\35\3\2\2\2\4#\3\2\2\2\6A\3\2\2\2\bE\3\2\2"+
		"\2\nM\3\2\2\2\fR\3\2\2\2\16x\3\2\2\2\20\u0087\3\2\2\2\22\u00ac\3\2\2\2"+
		"\24\u00b4\3\2\2\2\26\u00b6\3\2\2\2\30\u00bd\3\2\2\2\32\34\5\4\3\2\33\32"+
		"\3\2\2\2\34\37\3\2\2\2\35\33\3\2\2\2\35\36\3\2\2\2\36 \3\2\2\2\37\35\3"+
		"\2\2\2 !\5\6\4\2!\"\7\2\2\3\"\3\3\2\2\2#$\7\r\2\2$%\b\3\1\2%&\7.\2\2&"+
		"\64\b\3\1\2\'(\7\21\2\2(\61\7\35\2\2)*\7.\2\2*+\7\35\2\2+,\5\24\13\2,"+
		"-\7\25\2\2-.\b\3\1\2.\60\3\2\2\2/)\3\2\2\2\60\63\3\2\2\2\61/\3\2\2\2\61"+
		"\62\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\64\'\3\2\2\2\64\65\3\2\2\2\65"+
		";\3\2\2\2\66\67\7\22\2\2\678\7\35\2\289\5\24\13\29:\7\25\2\2:<\3\2\2\2"+
		";\66\3\2\2\2;<\3\2\2\2<=\3\2\2\2=>\b\3\1\2>?\5\f\7\2?@\b\3\1\2@\5\3\2"+
		"\2\2AB\7\r\2\2BC\7\20\2\2CD\5\f\7\2D\7\3\2\2\2EF\7\21\2\2FJ\7\35\2\2G"+
		"I\5\26\f\2HG\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2K\t\3\2\2\2LJ\3\2\2"+
		"\2MN\7\22\2\2NO\7\35\2\2OP\5\24\13\2PQ\7\25\2\2Q\13\3\2\2\2RV\7\16\2\2"+
		"SU\5\16\b\2TS\3\2\2\2UX\3\2\2\2VT\3\2\2\2VW\3\2\2\2WY\3\2\2\2XV\3\2\2"+
		"\2YZ\7\17\2\2Z\r\3\2\2\2[\\\7\n\2\2\\]\5\20\t\2]^\7\t\2\2^a\5\16\b\2_"+
		"`\7\b\2\2`b\5\16\b\2a_\3\2\2\2ab\3\2\2\2by\3\2\2\2cd\7\f\2\2de\5\20\t"+
		"\2ef\5\16\b\2fy\3\2\2\2gy\7\25\2\2hi\5\20\t\2ij\7\25\2\2jy\3\2\2\2ky\5"+
		"\30\r\2ly\5\26\f\2mn\7\23\2\2no\5\20\t\2op\7\25\2\2py\3\2\2\2qr\7\24\2"+
		"\2rs\7.\2\2sy\7\25\2\2tu\7\13\2\2uv\5\20\t\2vw\7\25\2\2wy\3\2\2\2x[\3"+
		"\2\2\2xc\3\2\2\2xg\3\2\2\2xh\3\2\2\2xk\3\2\2\2xl\3\2\2\2xm\3\2\2\2xq\3"+
		"\2\2\2xt\3\2\2\2y\17\3\2\2\2z{\b\t\1\2{|\7$\2\2|\u0088\5\20\t\20}~\7."+
		"\2\2~\177\7,\2\2\177\u0080\5\22\n\2\u0080\u0081\7-\2\2\u0081\u0082\b\t"+
		"\1\2\u0082\u0088\3\2\2\2\u0083\u0088\7\3\2\2\u0084\u0085\7.\2\2\u0085"+
		"\u0088\b\t\1\2\u0086\u0088\5\f\7\2\u0087z\3\2\2\2\u0087}\3\2\2\2\u0087"+
		"\u0083\3\2\2\2\u0087\u0084\3\2\2\2\u0087\u0086\3\2\2\2\u0088\u00a9\3\2"+
		"\2\2\u0089\u008a\f\17\2\2\u008a\u008b\t\2\2\2\u008b\u00a8\5\20\t\20\u008c"+
		"\u008d\f\16\2\2\u008d\u008e\t\3\2\2\u008e\u00a8\5\20\t\17\u008f\u0090"+
		"\f\r\2\2\u0090\u0091\t\4\2\2\u0091\u00a8\5\20\t\16\u0092\u0093\f\f\2\2"+
		"\u0093\u0094\t\5\2\2\u0094\u00a8\5\20\t\r\u0095\u0096\f\13\2\2\u0096\u0097"+
		"\7\"\2\2\u0097\u00a8\5\20\t\f\u0098\u0099\f\n\2\2\u0099\u009a\7*\2\2\u009a"+
		"\u00a8\5\20\t\13\u009b\u009c\f\t\2\2\u009c\u009d\7%\2\2\u009d\u00a8\5"+
		"\20\t\n\u009e\u009f\f\b\2\2\u009f\u00a0\7#\2\2\u00a0\u00a8\5\20\t\t\u00a1"+
		"\u00a2\f\7\2\2\u00a2\u00a3\7\34\2\2\u00a3\u00a4\5\20\t\2\u00a4\u00a5\7"+
		"\35\2\2\u00a5\u00a6\5\20\t\b\u00a6\u00a8\3\2\2\2\u00a7\u0089\3\2\2\2\u00a7"+
		"\u008c\3\2\2\2\u00a7\u008f\3\2\2\2\u00a7\u0092\3\2\2\2\u00a7\u0095\3\2"+
		"\2\2\u00a7\u0098\3\2\2\2\u00a7\u009b\3\2\2\2\u00a7\u009e\3\2\2\2\u00a7"+
		"\u00a1\3\2\2\2\u00a8\u00ab\3\2\2\2\u00a9\u00a7\3\2\2\2\u00a9\u00aa\3\2"+
		"\2\2\u00aa\21\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ac\u00b1\5\20\t\2\u00ad\u00ae"+
		"\7\26\2\2\u00ae\u00b0\5\20\t\2\u00af\u00ad\3\2\2\2\u00b0\u00b3\3\2\2\2"+
		"\u00b1\u00af\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\23\3\2\2\2\u00b3\u00b1"+
		"\3\2\2\2\u00b4\u00b5\t\6\2\2\u00b5\25\3\2\2\2\u00b6\u00b7\7.\2\2\u00b7"+
		"\u00b8\7\35\2\2\u00b8\u00b9\5\24\13\2\u00b9\u00ba\7\25\2\2\u00ba\u00bb"+
		"\3\2\2\2\u00bb\u00bc\b\f\1\2\u00bc\27\3\2\2\2\u00bd\u00be\7.\2\2\u00be"+
		"\u00bf\7\30\2\2\u00bf\u00c0\5\20\t\2\u00c0\u00c1\7\25\2\2\u00c1\u00c2"+
		"\b\r\1\2\u00c2\31\3\2\2\2\16\35\61\64;JVax\u0087\u00a7\u00a9\u00b1";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}