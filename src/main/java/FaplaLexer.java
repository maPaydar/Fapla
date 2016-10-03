// Generated from src/antlr/Fapla.g4 by ANTLR 4.5
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FaplaLexer extends Lexer {
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
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"WS", "COMMENT", "LINE_COMMENT", "RealLiteral", "FloatingPointLiteral", 
		"DecimalFloatingPointLiteral", "ExponentPart", "ExponentIndicator", "SignedInteger", 
		"Sign", "FloatTypeSuffix", "DecimalIntegerLiteral", "HexIntegerLiteral", 
		"IntegerTypeSuffix", "DecimalNumeral", "Digits", "Digit", "NonZeroDigit", 
		"HexNumeral", "HexDigits", "HexDigit", "HexDigitOrUnderscore", "BoolLiteral", 
		"StringLiteral", "StringCharacters", "StringCharacter", "EscapeSequence", 
		"OctalEscape", "OctalDigit", "ZeroToThree", "UnicodeEscape", "STRING", 
		"REAL", "BOOL", "ELSE", "IF", "RETURN", "WHILE", "MODULE", "SEMI", "COMMA", 
		"DOT", "BEGIN", "END", "ASSIGN", "GT", "LT", "FACTORIAL", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", 
		"SUB", "MUL", "DIV", "CARET", "MOD", "Identifier", "JavaLetter", "JavaLetterOrDigit"
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


	public FaplaLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Fapla.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2N\u0204\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3"+
		"\3\3\3\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3"+
		"\t\3\t\3\n\3\n\3\n\3\n\3\13\6\13\u00d0\n\13\r\13\16\13\u00d1\3\13\3\13"+
		"\3\f\3\f\3\f\3\f\7\f\u00da\n\f\f\f\16\f\u00dd\13\f\3\f\3\f\3\f\3\f\3\f"+
		"\3\r\3\r\3\r\3\r\7\r\u00e8\n\r\f\r\16\r\u00eb\13\r\3\r\3\r\3\16\3\16\3"+
		"\16\5\16\u00f2\n\16\3\17\3\17\3\20\3\20\3\20\5\20\u00f9\n\20\3\20\5\20"+
		"\u00fc\n\20\3\20\5\20\u00ff\n\20\3\20\3\20\3\20\5\20\u0104\n\20\3\20\5"+
		"\20\u0107\n\20\3\20\3\20\3\20\5\20\u010c\n\20\3\20\3\20\3\20\5\20\u0111"+
		"\n\20\3\21\3\21\3\21\3\22\3\22\3\23\5\23\u0119\n\23\3\23\3\23\3\24\3\24"+
		"\3\25\3\25\3\26\3\26\5\26\u0123\n\26\3\27\3\27\5\27\u0127\n\27\3\30\3"+
		"\30\3\31\3\31\3\31\5\31\u012e\n\31\5\31\u0130\n\31\3\32\3\32\6\32\u0134"+
		"\n\32\r\32\16\32\u0135\5\32\u0138\n\32\3\33\3\33\5\33\u013c\n\33\3\34"+
		"\3\34\3\35\3\35\3\35\3\35\3\36\3\36\7\36\u0146\n\36\f\36\16\36\u0149\13"+
		"\36\3\36\5\36\u014c\n\36\3\37\3\37\3 \3 \5 \u0152\n \3!\3!\3!\3!\3!\3"+
		"!\3!\3!\3!\5!\u015d\n!\3\"\3\"\5\"\u0161\n\"\3\"\3\"\3#\6#\u0166\n#\r"+
		"#\16#\u0167\3$\3$\5$\u016c\n$\3%\3%\3%\3%\5%\u0172\n%\3&\3&\3&\3&\3&\3"+
		"&\3&\3&\3&\3&\3&\5&\u017f\n&\3\'\3\'\3(\3(\3)\3)\3)\3)\3)\3)\3)\3*\3*"+
		"\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3-\3-\3-\3-\3-\3.\3.\3."+
		"\3/\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61"+
		"\3\61\3\61\3\61\3\62\3\62\3\63\3\63\3\64\3\64\3\65\3\65\3\65\3\65\3\65"+
		"\3\65\3\66\3\66\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3<\3<\3=\3"+
		"=\3=\3>\3>\3>\3?\3?\3?\3@\3@\3@\3A\3A\3A\3A\3B\3B\3B\3C\3C\3C\3D\3D\3"+
		"D\3E\3E\3F\3F\3G\3G\3H\3H\3I\3I\3J\3J\3K\3K\7K\u01fc\nK\fK\16K\u01ff\13"+
		"K\3L\3L\3M\3M\3\u00db\2N\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f"+
		"\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63"+
		"\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62"+
		"c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087"+
		"E\u0089F\u008bG\u008dH\u008fI\u0091J\u0093K\u0095L\u0097M\u0099N\3\2\21"+
		"\5\2\13\f\16\17\"\"\4\2\f\f\17\17\4\2GGgg\4\2--//\6\2FFHHffhh\4\2NNnn"+
		"\3\2\63;\4\2ZZzz\5\2\62;CHch\4\2$$^^\n\2$$))^^ddhhppttvv\3\2\629\3\2\62"+
		"\65\4\2C\\c|\5\2\62;C\\c|\u0225\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2"+
		"\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2"+
		"\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2"+
		"\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2"+
		"\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2"+
		"\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O"+
		"\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2"+
		"\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2"+
		"\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u"+
		"\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081"+
		"\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2"+
		"\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093"+
		"\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2\2\3\u009b\3\2\2"+
		"\2\5\u00a2\3\2\2\2\7\u00a7\3\2\2\2\t\u00ac\3\2\2\2\13\u00b2\3\2\2\2\r"+
		"\u00b8\3\2\2\2\17\u00bf\3\2\2\2\21\u00c6\3\2\2\2\23\u00ca\3\2\2\2\25\u00cf"+
		"\3\2\2\2\27\u00d5\3\2\2\2\31\u00e3\3\2\2\2\33\u00f1\3\2\2\2\35\u00f3\3"+
		"\2\2\2\37\u0110\3\2\2\2!\u0112\3\2\2\2#\u0115\3\2\2\2%\u0118\3\2\2\2\'"+
		"\u011c\3\2\2\2)\u011e\3\2\2\2+\u0120\3\2\2\2-\u0124\3\2\2\2/\u0128\3\2"+
		"\2\2\61\u012f\3\2\2\2\63\u0131\3\2\2\2\65\u013b\3\2\2\2\67\u013d\3\2\2"+
		"\29\u013f\3\2\2\2;\u0143\3\2\2\2=\u014d\3\2\2\2?\u0151\3\2\2\2A\u015c"+
		"\3\2\2\2C\u015e\3\2\2\2E\u0165\3\2\2\2G\u016b\3\2\2\2I\u0171\3\2\2\2K"+
		"\u017e\3\2\2\2M\u0180\3\2\2\2O\u0182\3\2\2\2Q\u0184\3\2\2\2S\u018b\3\2"+
		"\2\2U\u0192\3\2\2\2W\u0197\3\2\2\2Y\u019c\3\2\2\2[\u01a1\3\2\2\2]\u01a4"+
		"\3\2\2\2_\u01ab\3\2\2\2a\u01b1\3\2\2\2c\u01b8\3\2\2\2e\u01ba\3\2\2\2g"+
		"\u01bc\3\2\2\2i\u01be\3\2\2\2k\u01c4\3\2\2\2m\u01c8\3\2\2\2o\u01ca\3\2"+
		"\2\2q\u01cc\3\2\2\2s\u01ce\3\2\2\2u\u01d0\3\2\2\2w\u01d2\3\2\2\2y\u01d4"+
		"\3\2\2\2{\u01d7\3\2\2\2}\u01da\3\2\2\2\177\u01dd\3\2\2\2\u0081\u01e0\3"+
		"\2\2\2\u0083\u01e4\3\2\2\2\u0085\u01e7\3\2\2\2\u0087\u01ea\3\2\2\2\u0089"+
		"\u01ed\3\2\2\2\u008b\u01ef\3\2\2\2\u008d\u01f1\3\2\2\2\u008f\u01f3\3\2"+
		"\2\2\u0091\u01f5\3\2\2\2\u0093\u01f7\3\2\2\2\u0095\u01f9\3\2\2\2\u0097"+
		"\u0200\3\2\2\2\u0099\u0202\3\2\2\2\u009b\u009c\7O\2\2\u009c\u009d\7q\2"+
		"\2\u009d\u009e\7f\2\2\u009e\u009f\7w\2\2\u009f\u00a0\7n\2\2\u00a0\u00a1"+
		"\7g\2\2\u00a1\4\3\2\2\2\u00a2\u00a3\7O\2\2\u00a3\u00a4\7c\2\2\u00a4\u00a5"+
		"\7k\2\2\u00a5\u00a6\7p\2\2\u00a6\6\3\2\2\2\u00a7\u00a8\7o\2\2\u00a8\u00a9"+
		"\7c\2\2\u00a9\u00aa\7k\2\2\u00aa\u00ab\7p\2\2\u00ab\b\3\2\2\2\u00ac\u00ad"+
		"\7K\2\2\u00ad\u00ae\7p\2\2\u00ae\u00af\7r\2\2\u00af\u00b0\7w\2\2\u00b0"+
		"\u00b1\7v\2\2\u00b1\n\3\2\2\2\u00b2\u00b3\7k\2\2\u00b3\u00b4\7p\2\2\u00b4"+
		"\u00b5\7r\2\2\u00b5\u00b6\7w\2\2\u00b6\u00b7\7v\2\2\u00b7\f\3\2\2\2\u00b8"+
		"\u00b9\7Q\2\2\u00b9\u00ba\7w\2\2\u00ba\u00bb\7v\2\2\u00bb\u00bc\7r\2\2"+
		"\u00bc\u00bd\7w\2\2\u00bd\u00be\7v\2\2\u00be\16\3\2\2\2\u00bf\u00c0\7"+
		"q\2\2\u00c0\u00c1\7w\2\2\u00c1\u00c2\7v\2\2\u00c2\u00c3\7r\2\2\u00c3\u00c4"+
		"\7w\2\2\u00c4\u00c5\7v\2\2\u00c5\20\3\2\2\2\u00c6\u00c7\7p\2\2\u00c7\u00c8"+
		"\7q\2\2\u00c8\u00c9\7v\2\2\u00c9\22\3\2\2\2\u00ca\u00cb\7z\2\2\u00cb\u00cc"+
		"\7q\2\2\u00cc\u00cd\7t\2\2\u00cd\24\3\2\2\2\u00ce\u00d0\t\2\2\2\u00cf"+
		"\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00cf\3\2\2\2\u00d1\u00d2\3\2"+
		"\2\2\u00d2\u00d3\3\2\2\2\u00d3\u00d4\b\13\2\2\u00d4\26\3\2\2\2\u00d5\u00d6"+
		"\7\61\2\2\u00d6\u00d7\7,\2\2\u00d7\u00db\3\2\2\2\u00d8\u00da\13\2\2\2"+
		"\u00d9\u00d8\3\2\2\2\u00da\u00dd\3\2\2\2\u00db\u00dc\3\2\2\2\u00db\u00d9"+
		"\3\2\2\2\u00dc\u00de\3\2\2\2\u00dd\u00db\3\2\2\2\u00de\u00df\7,\2\2\u00df"+
		"\u00e0\7\61\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e2\b\f\2\2\u00e2\30\3\2\2"+
		"\2\u00e3\u00e4\7\61\2\2\u00e4\u00e5\7\61\2\2\u00e5\u00e9\3\2\2\2\u00e6"+
		"\u00e8\n\3\2\2\u00e7\u00e6\3\2\2\2\u00e8\u00eb\3\2\2\2\u00e9\u00e7\3\2"+
		"\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00ec\3\2\2\2\u00eb\u00e9\3\2\2\2\u00ec"+
		"\u00ed\b\r\2\2\u00ed\32\3\2\2\2\u00ee\u00f2\5+\26\2\u00ef\u00f2\5-\27"+
		"\2\u00f0\u00f2\5\35\17\2\u00f1\u00ee\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f1"+
		"\u00f0\3\2\2\2\u00f2\34\3\2\2\2\u00f3\u00f4\5\37\20\2\u00f4\36\3\2\2\2"+
		"\u00f5\u00f6\5\63\32\2\u00f6\u00f8\7\60\2\2\u00f7\u00f9\5\63\32\2\u00f8"+
		"\u00f7\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fb\3\2\2\2\u00fa\u00fc\5!"+
		"\21\2\u00fb\u00fa\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00fe\3\2\2\2\u00fd"+
		"\u00ff\5)\25\2\u00fe\u00fd\3\2\2\2\u00fe\u00ff\3\2\2\2\u00ff\u0111\3\2"+
		"\2\2\u0100\u0101\7\60\2\2\u0101\u0103\5\63\32\2\u0102\u0104\5!\21\2\u0103"+
		"\u0102\3\2\2\2\u0103\u0104\3\2\2\2\u0104\u0106\3\2\2\2\u0105\u0107\5)"+
		"\25\2\u0106\u0105\3\2\2\2\u0106\u0107\3\2\2\2\u0107\u0111\3\2\2\2\u0108"+
		"\u0109\5\63\32\2\u0109\u010b\5!\21\2\u010a\u010c\5)\25\2\u010b\u010a\3"+
		"\2\2\2\u010b\u010c\3\2\2\2\u010c\u0111\3\2\2\2\u010d\u010e\5\63\32\2\u010e"+
		"\u010f\5)\25\2\u010f\u0111\3\2\2\2\u0110\u00f5\3\2\2\2\u0110\u0100\3\2"+
		"\2\2\u0110\u0108\3\2\2\2\u0110\u010d\3\2\2\2\u0111 \3\2\2\2\u0112\u0113"+
		"\5#\22\2\u0113\u0114\5%\23\2\u0114\"\3\2\2\2\u0115\u0116\t\4\2\2\u0116"+
		"$\3\2\2\2\u0117\u0119\5\'\24\2\u0118\u0117\3\2\2\2\u0118\u0119\3\2\2\2"+
		"\u0119\u011a\3\2\2\2\u011a\u011b\5\63\32\2\u011b&\3\2\2\2\u011c\u011d"+
		"\t\5\2\2\u011d(\3\2\2\2\u011e\u011f\t\6\2\2\u011f*\3\2\2\2\u0120\u0122"+
		"\5\61\31\2\u0121\u0123\5/\30\2\u0122\u0121\3\2\2\2\u0122\u0123\3\2\2\2"+
		"\u0123,\3\2\2\2\u0124\u0126\59\35\2\u0125\u0127\5/\30\2\u0126\u0125\3"+
		"\2\2\2\u0126\u0127\3\2\2\2\u0127.\3\2\2\2\u0128\u0129\t\7\2\2\u0129\60"+
		"\3\2\2\2\u012a\u0130\7\62\2\2\u012b\u012d\5\67\34\2\u012c\u012e\5\63\32"+
		"\2\u012d\u012c\3\2\2\2\u012d\u012e\3\2\2\2\u012e\u0130\3\2\2\2\u012f\u012a"+
		"\3\2\2\2\u012f\u012b\3\2\2\2\u0130\62\3\2\2\2\u0131\u0137\5\65\33\2\u0132"+
		"\u0134\5\65\33\2\u0133\u0132\3\2\2\2\u0134\u0135\3\2\2\2\u0135\u0133\3"+
		"\2\2\2\u0135\u0136\3\2\2\2\u0136\u0138\3\2\2\2\u0137\u0133\3\2\2\2\u0137"+
		"\u0138\3\2\2\2\u0138\64\3\2\2\2\u0139\u013c\7\62\2\2\u013a\u013c\5\67"+
		"\34\2\u013b\u0139\3\2\2\2\u013b\u013a\3\2\2\2\u013c\66\3\2\2\2\u013d\u013e"+
		"\t\b\2\2\u013e8\3\2\2\2\u013f\u0140\7\62\2\2\u0140\u0141\t\t\2\2\u0141"+
		"\u0142\5;\36\2\u0142:\3\2\2\2\u0143\u014b\5=\37\2\u0144\u0146\5? \2\u0145"+
		"\u0144\3\2\2\2\u0146\u0149\3\2\2\2\u0147\u0145\3\2\2\2\u0147\u0148\3\2"+
		"\2\2\u0148\u014a\3\2\2\2\u0149\u0147\3\2\2\2\u014a\u014c\5=\37\2\u014b"+
		"\u0147\3\2\2\2\u014b\u014c\3\2\2\2\u014c<\3\2\2\2\u014d\u014e\t\n\2\2"+
		"\u014e>\3\2\2\2\u014f\u0152\5=\37\2\u0150\u0152\7a\2\2\u0151\u014f\3\2"+
		"\2\2\u0151\u0150\3\2\2\2\u0152@\3\2\2\2\u0153\u0154\7v\2\2\u0154\u0155"+
		"\7t\2\2\u0155\u0156\7w\2\2\u0156\u015d\7g\2\2\u0157\u0158\7h\2\2\u0158"+
		"\u0159\7c\2\2\u0159\u015a\7n\2\2\u015a\u015b\7u\2\2\u015b\u015d\7g\2\2"+
		"\u015c\u0153\3\2\2\2\u015c\u0157\3\2\2\2\u015dB\3\2\2\2\u015e\u0160\7"+
		"$\2\2\u015f\u0161\5E#\2\u0160\u015f\3\2\2\2\u0160\u0161\3\2\2\2\u0161"+
		"\u0162\3\2\2\2\u0162\u0163\7$\2\2\u0163D\3\2\2\2\u0164\u0166\5G$\2\u0165"+
		"\u0164\3\2\2\2\u0166\u0167\3\2\2\2\u0167\u0165\3\2\2\2\u0167\u0168\3\2"+
		"\2\2\u0168F\3\2\2\2\u0169\u016c\n\13\2\2\u016a\u016c\5I%\2\u016b\u0169"+
		"\3\2\2\2\u016b\u016a\3\2\2\2\u016cH\3\2\2\2\u016d\u016e\7^\2\2\u016e\u0172"+
		"\t\f\2\2\u016f\u0172\5K&\2\u0170\u0172\5Q)\2\u0171\u016d\3\2\2\2\u0171"+
		"\u016f\3\2\2\2\u0171\u0170\3\2\2\2\u0172J\3\2\2\2\u0173\u0174\7^\2\2\u0174"+
		"\u017f\5M\'\2\u0175\u0176\7^\2\2\u0176\u0177\5M\'\2\u0177\u0178\5M\'\2"+
		"\u0178\u017f\3\2\2\2\u0179\u017a\7^\2\2\u017a\u017b\5O(\2\u017b\u017c"+
		"\5M\'\2\u017c\u017d\5M\'\2\u017d\u017f\3\2\2\2\u017e\u0173\3\2\2\2\u017e"+
		"\u0175\3\2\2\2\u017e\u0179\3\2\2\2\u017fL\3\2\2\2\u0180\u0181\t\r\2\2"+
		"\u0181N\3\2\2\2\u0182\u0183\t\16\2\2\u0183P\3\2\2\2\u0184\u0185\7^\2\2"+
		"\u0185\u0186\7w\2\2\u0186\u0187\5=\37\2\u0187\u0188\5=\37\2\u0188\u0189"+
		"\5=\37\2\u0189\u018a\5=\37\2\u018aR\3\2\2\2\u018b\u018c\7u\2\2\u018c\u018d"+
		"\7v\2\2\u018d\u018e\7t\2\2\u018e\u018f\7k\2\2\u018f\u0190\7p\2\2\u0190"+
		"\u0191\7i\2\2\u0191T\3\2\2\2\u0192\u0193\7t\2\2\u0193\u0194\7g\2\2\u0194"+
		"\u0195\7c\2\2\u0195\u0196\7n\2\2\u0196V\3\2\2\2\u0197\u0198\7d\2\2\u0198"+
		"\u0199\7q\2\2\u0199\u019a\7q\2\2\u019a\u019b\7n\2\2\u019bX\3\2\2\2\u019c"+
		"\u019d\7g\2\2\u019d\u019e\7n\2\2\u019e\u019f\7u\2\2\u019f\u01a0\7g\2\2"+
		"\u01a0Z\3\2\2\2\u01a1\u01a2\7k\2\2\u01a2\u01a3\7h\2\2\u01a3\\\3\2\2\2"+
		"\u01a4\u01a5\7t\2\2\u01a5\u01a6\7g\2\2\u01a6\u01a7\7v\2\2\u01a7\u01a8"+
		"\7w\2\2\u01a8\u01a9\7t\2\2\u01a9\u01aa\7p\2\2\u01aa^\3\2\2\2\u01ab\u01ac"+
		"\7y\2\2\u01ac\u01ad\7j\2\2\u01ad\u01ae\7k\2\2\u01ae\u01af\7n\2\2\u01af"+
		"\u01b0\7g\2\2\u01b0`\3\2\2\2\u01b1\u01b2\7o\2\2\u01b2\u01b3\7q\2\2\u01b3"+
		"\u01b4\7f\2\2\u01b4\u01b5\7w\2\2\u01b5\u01b6\7n\2\2\u01b6\u01b7\7g\2\2"+
		"\u01b7b\3\2\2\2\u01b8\u01b9\7=\2\2\u01b9d\3\2\2\2\u01ba\u01bb\7.\2\2\u01bb"+
		"f\3\2\2\2\u01bc\u01bd\7\60\2\2\u01bdh\3\2\2\2\u01be\u01bf\7D\2\2\u01bf"+
		"\u01c0\7g\2\2\u01c0\u01c1\7i\2\2\u01c1\u01c2\7k\2\2\u01c2\u01c3\7p\2\2"+
		"\u01c3j\3\2\2\2\u01c4\u01c5\7G\2\2\u01c5\u01c6\7p\2\2\u01c6\u01c7\7f\2"+
		"\2\u01c7l\3\2\2\2\u01c8\u01c9\7?\2\2\u01c9n\3\2\2\2\u01ca\u01cb\7@\2\2"+
		"\u01cbp\3\2\2\2\u01cc\u01cd\7>\2\2\u01cdr\3\2\2\2\u01ce\u01cf\7#\2\2\u01cf"+
		"t\3\2\2\2\u01d0\u01d1\7A\2\2\u01d1v\3\2\2\2\u01d2\u01d3\7<\2\2\u01d3x"+
		"\3\2\2\2\u01d4\u01d5\7?\2\2\u01d5\u01d6\7?\2\2\u01d6z\3\2\2\2\u01d7\u01d8"+
		"\7>\2\2\u01d8\u01d9\7?\2\2\u01d9|\3\2\2\2\u01da\u01db\7@\2\2\u01db\u01dc"+
		"\7?\2\2\u01dc~\3\2\2\2\u01dd\u01de\7>\2\2\u01de\u01df\7@\2\2\u01df\u0080"+
		"\3\2\2\2\u01e0\u01e1\7c\2\2\u01e1\u01e2\7p\2\2\u01e2\u01e3\7f\2\2\u01e3"+
		"\u0082\3\2\2\2\u01e4\u01e5\7q\2\2\u01e5\u01e6\7t\2\2\u01e6\u0084\3\2\2"+
		"\2\u01e7\u01e8\7-\2\2\u01e8\u01e9\7-\2\2\u01e9\u0086\3\2\2\2\u01ea\u01eb"+
		"\7/\2\2\u01eb\u01ec\7/\2\2\u01ec\u0088\3\2\2\2\u01ed\u01ee\7-\2\2\u01ee"+
		"\u008a\3\2\2\2\u01ef\u01f0\7/\2\2\u01f0\u008c\3\2\2\2\u01f1\u01f2\7,\2"+
		"\2\u01f2\u008e\3\2\2\2\u01f3\u01f4\7\61\2\2\u01f4\u0090\3\2\2\2\u01f5"+
		"\u01f6\7`\2\2\u01f6\u0092\3\2\2\2\u01f7\u01f8\7\'\2\2\u01f8\u0094\3\2"+
		"\2\2\u01f9\u01fd\5\u0097L\2\u01fa\u01fc\5\u0099M\2\u01fb\u01fa\3\2\2\2"+
		"\u01fc\u01ff\3\2\2\2\u01fd\u01fb\3\2\2\2\u01fd\u01fe\3\2\2\2\u01fe\u0096"+
		"\3\2\2\2\u01ff\u01fd\3\2\2\2\u0200\u0201\t\17\2\2\u0201\u0098\3\2\2\2"+
		"\u0202\u0203\t\20\2\2\u0203\u009a\3\2\2\2 \2\u00d1\u00db\u00e9\u00f1\u00f8"+
		"\u00fb\u00fe\u0103\u0106\u010b\u0110\u0118\u0122\u0126\u012d\u012f\u0135"+
		"\u0137\u013b\u0147\u014b\u0151\u015c\u0160\u0167\u016b\u0171\u017e\u01fd"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}