// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
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
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
		"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "DigitOrLetter", 
		"PrimitiveType", "BOOLEANCONSTANT", "STRINGCONSTANT", "REALCONSTANT", 
		"STRING", "REAL", "BOOL", "TRUE", "FALSE", "ELSE", "THEN", "IF", "RETURN", 
		"WHILE", "MODULE", "BEGIN", "END", "MAIN", "INPUT", "OUTPUT", "WRITE", 
		"READ", "SEMICOLON", "COMMA", "ASSIGN", "GT", "LT", "FACTORIAL", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "NOT", "XOR", "ADD", 
		"SUB", "MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", "WS", "COMMENT", 
		"LINE_COMMENT"
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\64\u0223\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64"+
		"\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t"+
		"=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4"+
		"I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6"+
		"\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3"+
		"\16\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3"+
		"\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3"+
		"\34\3\35\3\35\3\35\5\35\u00d7\n\35\3\36\3\36\5\36\u00db\n\36\3\37\3\37"+
		"\7\37\u00df\n\37\f\37\16\37\u00e2\13\37\5\37\u00e4\n\37\3\37\3\37\3 \5"+
		" \u00e9\n \3 \6 \u00ec\n \r \16 \u00ed\3 \3 \6 \u00f2\n \r \16 \u00f3"+
		"\5 \u00f6\n \3 \3 \3 \6 \u00fb\n \r \16 \u00fc\5 \u00ff\n \3!\3!\3!\3"+
		"!\3!\3!\3!\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3%\3%\3%"+
		"\3%\3%\3%\3&\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3(\3(\3(\3)\3)\3)\3)\3)\3"+
		")\3)\3*\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3-\3-\3"+
		"-\3-\3.\3.\3.\3.\3.\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\3\60\3"+
		"\60\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3\63\3\63\3"+
		"\64\3\64\3\65\3\65\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3;\3<\3"+
		"<\3<\3=\3=\3=\3>\3>\3>\3?\3?\3?\3?\3@\3@\3@\3A\3A\3A\3A\3B\3B\3B\3B\3"+
		"C\3C\3D\3D\3E\3E\3F\3F\3G\3G\3H\3H\3I\3I\3J\3J\3K\3K\3K\3K\3K\3K\3K\3"+
		"K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\3"+
		"K\3K\5K\u01c0\nK\5K\u01c2\nK\5K\u01c4\nK\5K\u01c6\nK\5K\u01c8\nK\5K\u01ca"+
		"\nK\5K\u01cc\nK\5K\u01ce\nK\5K\u01d0\nK\5K\u01d2\nK\5K\u01d4\nK\5K\u01d6"+
		"\nK\5K\u01d8\nK\5K\u01da\nK\5K\u01dc\nK\5K\u01de\nK\5K\u01e0\nK\5K\u01e2"+
		"\nK\5K\u01e4\nK\5K\u01e6\nK\5K\u01e8\nK\5K\u01ea\nK\5K\u01ec\nK\5K\u01ee"+
		"\nK\5K\u01f0\nK\5K\u01f2\nK\5K\u01f4\nK\5K\u01f6\nK\5K\u01f8\nK\5K\u01fa"+
		"\nK\5K\u01fc\nK\5K\u01fe\nK\3L\6L\u0201\nL\rL\16L\u0202\3L\3L\3M\3M\3"+
		"M\3M\3M\7M\u020c\nM\fM\16M\u020f\13M\3M\3M\3M\3M\3M\3M\3N\3N\3N\3N\7N"+
		"\u021b\nN\fN\16N\u021e\13N\5N\u0220\nN\3N\3N\3\u020d\2O\3\2\5\2\7\2\t"+
		"\2\13\2\r\2\17\2\21\2\23\2\25\2\27\2\31\2\33\2\35\2\37\2!\2#\2%\2\'\2"+
		")\2+\2-\2/\2\61\2\63\2\65\2\67\29\3;\4=\5?\6A\7C\bE\tG\nI\13K\fM\rO\16"+
		"Q\17S\20U\21W\22Y\23[\24]\25_\26a\27c\30e\31g\32i\33k\34m\35o\36q\37s"+
		" u!w\"y#{$}%\177&\u0081\'\u0083(\u0085)\u0087*\u0089+\u008b,\u008d-\u008f"+
		".\u0091/\u0093\60\u0095\61\u0097\62\u0099\63\u009b\64\3\2#\4\2CCcc\4\2"+
		"DDdd\4\2EEee\4\2FFff\4\2GGgg\4\2HHhh\4\2IIii\4\2JJjj\4\2KKkk\4\2LLll\4"+
		"\2MMmm\4\2NNnn\4\2OOoo\4\2PPpp\4\2QQqq\4\2RRrr\4\2SSss\4\2TTtt\4\2UUu"+
		"u\4\2VVvv\4\2WWww\4\2XXxx\4\2YYyy\4\2ZZzz\4\2[[{{\4\2\\\\||\6\2//\62;"+
		"C\\c|\4\2\f\f\17\17\4\2--//\3\2\62;\5\2\62;CHch\4\2C\\c|\5\2\13\f\17\17"+
		"\"\"\u0236\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3"+
		"\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2"+
		"\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3\2\2\2\2"+
		"]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2\2\2g\3\2\2\2\2i\3"+
		"\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2"+
		"\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3"+
		"\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2"+
		"\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093"+
		"\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2"+
		"\2\3\u009d\3\2\2\2\5\u009f\3\2\2\2\7\u00a1\3\2\2\2\t\u00a3\3\2\2\2\13"+
		"\u00a5\3\2\2\2\r\u00a7\3\2\2\2\17\u00a9\3\2\2\2\21\u00ab\3\2\2\2\23\u00ad"+
		"\3\2\2\2\25\u00af\3\2\2\2\27\u00b1\3\2\2\2\31\u00b3\3\2\2\2\33\u00b5\3"+
		"\2\2\2\35\u00b7\3\2\2\2\37\u00b9\3\2\2\2!\u00bb\3\2\2\2#\u00bd\3\2\2\2"+
		"%\u00bf\3\2\2\2\'\u00c1\3\2\2\2)\u00c3\3\2\2\2+\u00c5\3\2\2\2-\u00c7\3"+
		"\2\2\2/\u00c9\3\2\2\2\61\u00cb\3\2\2\2\63\u00cd\3\2\2\2\65\u00cf\3\2\2"+
		"\2\67\u00d1\3\2\2\29\u00d6\3\2\2\2;\u00da\3\2\2\2=\u00dc\3\2\2\2?\u00fe"+
		"\3\2\2\2A\u0100\3\2\2\2C\u0107\3\2\2\2E\u010c\3\2\2\2G\u0111\3\2\2\2I"+
		"\u0116\3\2\2\2K\u011c\3\2\2\2M\u0121\3\2\2\2O\u0126\3\2\2\2Q\u0129\3\2"+
		"\2\2S\u0130\3\2\2\2U\u0136\3\2\2\2W\u013d\3\2\2\2Y\u0143\3\2\2\2[\u0147"+
		"\3\2\2\2]\u014c\3\2\2\2_\u0152\3\2\2\2a\u0159\3\2\2\2c\u015f\3\2\2\2e"+
		"\u0164\3\2\2\2g\u0166\3\2\2\2i\u0168\3\2\2\2k\u016a\3\2\2\2m\u016c\3\2"+
		"\2\2o\u016e\3\2\2\2q\u0170\3\2\2\2s\u0172\3\2\2\2u\u0174\3\2\2\2w\u0177"+
		"\3\2\2\2y\u017a\3\2\2\2{\u017d\3\2\2\2}\u0180\3\2\2\2\177\u0184\3\2\2"+
		"\2\u0081\u0187\3\2\2\2\u0083\u018b\3\2\2\2\u0085\u018f\3\2\2\2\u0087\u0191"+
		"\3\2\2\2\u0089\u0193\3\2\2\2\u008b\u0195\3\2\2\2\u008d\u0197\3\2\2\2\u008f"+
		"\u0199\3\2\2\2\u0091\u019b\3\2\2\2\u0093\u019d\3\2\2\2\u0095\u019f\3\2"+
		"\2\2\u0097\u0200\3\2\2\2\u0099\u0206\3\2\2\2\u009b\u0216\3\2\2\2\u009d"+
		"\u009e\t\2\2\2\u009e\4\3\2\2\2\u009f\u00a0\t\3\2\2\u00a0\6\3\2\2\2\u00a1"+
		"\u00a2\t\4\2\2\u00a2\b\3\2\2\2\u00a3\u00a4\t\5\2\2\u00a4\n\3\2\2\2\u00a5"+
		"\u00a6\t\6\2\2\u00a6\f\3\2\2\2\u00a7\u00a8\t\7\2\2\u00a8\16\3\2\2\2\u00a9"+
		"\u00aa\t\b\2\2\u00aa\20\3\2\2\2\u00ab\u00ac\t\t\2\2\u00ac\22\3\2\2\2\u00ad"+
		"\u00ae\t\n\2\2\u00ae\24\3\2\2\2\u00af\u00b0\t\13\2\2\u00b0\26\3\2\2\2"+
		"\u00b1\u00b2\t\f\2\2\u00b2\30\3\2\2\2\u00b3\u00b4\t\r\2\2\u00b4\32\3\2"+
		"\2\2\u00b5\u00b6\t\16\2\2\u00b6\34\3\2\2\2\u00b7\u00b8\t\17\2\2\u00b8"+
		"\36\3\2\2\2\u00b9\u00ba\t\20\2\2\u00ba \3\2\2\2\u00bb\u00bc\t\21\2\2\u00bc"+
		"\"\3\2\2\2\u00bd\u00be\t\22\2\2\u00be$\3\2\2\2\u00bf\u00c0\t\23\2\2\u00c0"+
		"&\3\2\2\2\u00c1\u00c2\t\24\2\2\u00c2(\3\2\2\2\u00c3\u00c4\t\25\2\2\u00c4"+
		"*\3\2\2\2\u00c5\u00c6\t\26\2\2\u00c6,\3\2\2\2\u00c7\u00c8\t\27\2\2\u00c8"+
		".\3\2\2\2\u00c9\u00ca\t\30\2\2\u00ca\60\3\2\2\2\u00cb\u00cc\t\31\2\2\u00cc"+
		"\62\3\2\2\2\u00cd\u00ce\t\32\2\2\u00ce\64\3\2\2\2\u00cf\u00d0\t\33\2\2"+
		"\u00d0\66\3\2\2\2\u00d1\u00d2\t\34\2\2\u00d28\3\2\2\2\u00d3\u00d7\5C\""+
		"\2\u00d4\u00d7\5E#\2\u00d5\u00d7\5A!\2\u00d6\u00d3\3\2\2\2\u00d6\u00d4"+
		"\3\2\2\2\u00d6\u00d5\3\2\2\2\u00d7:\3\2\2\2\u00d8\u00db\5G$\2\u00d9\u00db"+
		"\5I%\2\u00da\u00d8\3\2\2\2\u00da\u00d9\3\2\2\2\u00db<\3\2\2\2\u00dc\u00e3"+
		"\7$\2\2\u00dd\u00df\n\35\2\2\u00de\u00dd\3\2\2\2\u00df\u00e2\3\2\2\2\u00e0"+
		"\u00de\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e4\3\2\2\2\u00e2\u00e0\3\2"+
		"\2\2\u00e3\u00e0\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e5\3\2\2\2\u00e5"+
		"\u00e6\7$\2\2\u00e6>\3\2\2\2\u00e7\u00e9\t\36\2\2\u00e8\u00e7\3\2\2\2"+
		"\u00e8\u00e9\3\2\2\2\u00e9\u00eb\3\2\2\2\u00ea\u00ec\t\37\2\2\u00eb\u00ea"+
		"\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00eb\3\2\2\2\u00ed\u00ee\3\2\2\2\u00ee"+
		"\u00f5\3\2\2\2\u00ef\u00f1\7\60\2\2\u00f0\u00f2\t\37\2\2\u00f1\u00f0\3"+
		"\2\2\2\u00f2\u00f3\3\2\2\2\u00f3\u00f1\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4"+
		"\u00f6\3\2\2\2\u00f5\u00ef\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6\u00ff\3\2"+
		"\2\2\u00f7\u00f8\7\62\2\2\u00f8\u00fa\5\61\31\2\u00f9\u00fb\t \2\2\u00fa"+
		"\u00f9\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00fa\3\2\2\2\u00fc\u00fd\3\2"+
		"\2\2\u00fd\u00ff\3\2\2\2\u00fe\u00e8\3\2\2\2\u00fe\u00f7\3\2\2\2\u00ff"+
		"@\3\2\2\2\u0100\u0101\5\'\24\2\u0101\u0102\5)\25\2\u0102\u0103\5%\23\2"+
		"\u0103\u0104\5\23\n\2\u0104\u0105\5\35\17\2\u0105\u0106\5\17\b\2\u0106"+
		"B\3\2\2\2\u0107\u0108\5%\23\2\u0108\u0109\5\13\6\2\u0109\u010a\5\3\2\2"+
		"\u010a\u010b\5\31\r\2\u010bD\3\2\2\2\u010c\u010d\5\5\3\2\u010d\u010e\5"+
		"\37\20\2\u010e\u010f\5\37\20\2\u010f\u0110\5\31\r\2\u0110F\3\2\2\2\u0111"+
		"\u0112\5)\25\2\u0112\u0113\5%\23\2\u0113\u0114\5+\26\2\u0114\u0115\5\13"+
		"\6\2\u0115H\3\2\2\2\u0116\u0117\5\r\7\2\u0117\u0118\5\3\2\2\u0118\u0119"+
		"\5\31\r\2\u0119\u011a\5\'\24\2\u011a\u011b\5\13\6\2\u011bJ\3\2\2\2\u011c"+
		"\u011d\5\13\6\2\u011d\u011e\5\31\r\2\u011e\u011f\5\'\24\2\u011f\u0120"+
		"\5\13\6\2\u0120L\3\2\2\2\u0121\u0122\5)\25\2\u0122\u0123\5\21\t\2\u0123"+
		"\u0124\5\13\6\2\u0124\u0125\5\35\17\2\u0125N\3\2\2\2\u0126\u0127\5\23"+
		"\n\2\u0127\u0128\5\r\7\2\u0128P\3\2\2\2\u0129\u012a\5%\23\2\u012a\u012b"+
		"\5\13\6\2\u012b\u012c\5)\25\2\u012c\u012d\5+\26\2\u012d\u012e\5%\23\2"+
		"\u012e\u012f\5\35\17\2\u012fR\3\2\2\2\u0130\u0131\5/\30\2\u0131\u0132"+
		"\5\21\t\2\u0132\u0133\5\23\n\2\u0133\u0134\5\31\r\2\u0134\u0135\5\13\6"+
		"\2\u0135T\3\2\2\2\u0136\u0137\5\33\16\2\u0137\u0138\5\37\20\2\u0138\u0139"+
		"\5\t\5\2\u0139\u013a\5+\26\2\u013a\u013b\5\31\r\2\u013b\u013c\5\13\6\2"+
		"\u013cV\3\2\2\2\u013d\u013e\5\5\3\2\u013e\u013f\5\13\6\2\u013f\u0140\5"+
		"\17\b\2\u0140\u0141\5\23\n\2\u0141\u0142\5\35\17\2\u0142X\3\2\2\2\u0143"+
		"\u0144\5\13\6\2\u0144\u0145\5\35\17\2\u0145\u0146\5\t\5\2\u0146Z\3\2\2"+
		"\2\u0147\u0148\5\33\16\2\u0148\u0149\5\3\2\2\u0149\u014a\5\23\n\2\u014a"+
		"\u014b\5\35\17\2\u014b\\\3\2\2\2\u014c\u014d\5\23\n\2\u014d\u014e\5\35"+
		"\17\2\u014e\u014f\5!\21\2\u014f\u0150\5+\26\2\u0150\u0151\5)\25\2\u0151"+
		"^\3\2\2\2\u0152\u0153\5\37\20\2\u0153\u0154\5+\26\2\u0154\u0155\5)\25"+
		"\2\u0155\u0156\5!\21\2\u0156\u0157\5+\26\2\u0157\u0158\5)\25\2\u0158`"+
		"\3\2\2\2\u0159\u015a\5/\30\2\u015a\u015b\5%\23\2\u015b\u015c\5\23\n\2"+
		"\u015c\u015d\5)\25\2\u015d\u015e\5\13\6\2\u015eb\3\2\2\2\u015f\u0160\5"+
		"%\23\2\u0160\u0161\5\13\6\2\u0161\u0162\5\3\2\2\u0162\u0163\5\t\5\2\u0163"+
		"d\3\2\2\2\u0164\u0165\7=\2\2\u0165f\3\2\2\2\u0166\u0167\7.\2\2\u0167h"+
		"\3\2\2\2\u0168\u0169\7?\2\2\u0169j\3\2\2\2\u016a\u016b\7@\2\2\u016bl\3"+
		"\2\2\2\u016c\u016d\7>\2\2\u016dn\3\2\2\2\u016e\u016f\7#\2\2\u016fp\3\2"+
		"\2\2\u0170\u0171\7A\2\2\u0171r\3\2\2\2\u0172\u0173\7<\2\2\u0173t\3\2\2"+
		"\2\u0174\u0175\7?\2\2\u0175\u0176\7?\2\2\u0176v\3\2\2\2\u0177\u0178\7"+
		">\2\2\u0178\u0179\7?\2\2\u0179x\3\2\2\2\u017a\u017b\7@\2\2\u017b\u017c"+
		"\7?\2\2\u017cz\3\2\2\2\u017d\u017e\7>\2\2\u017e\u017f\7@\2\2\u017f|\3"+
		"\2\2\2\u0180\u0181\5\3\2\2\u0181\u0182\5\35\17\2\u0182\u0183\5\t\5\2\u0183"+
		"~\3\2\2\2\u0184\u0185\5\37\20\2\u0185\u0186\5%\23\2\u0186\u0080\3\2\2"+
		"\2\u0187\u0188\5\35\17\2\u0188\u0189\5\37\20\2\u0189\u018a\5)\25\2\u018a"+
		"\u0082\3\2\2\2\u018b\u018c\5\61\31\2\u018c\u018d\5\37\20\2\u018d\u018e"+
		"\5%\23\2\u018e\u0084\3\2\2\2\u018f\u0190\7-\2\2\u0190\u0086\3\2\2\2\u0191"+
		"\u0192\7/\2\2\u0192\u0088\3\2\2\2\u0193\u0194\7,\2\2\u0194\u008a\3\2\2"+
		"\2\u0195\u0196\7\61\2\2\u0196\u008c\3\2\2\2\u0197\u0198\7`\2\2\u0198\u008e"+
		"\3\2\2\2\u0199\u019a\7\'\2\2\u019a\u0090\3\2\2\2\u019b\u019c\7*\2\2\u019c"+
		"\u0092\3\2\2\2\u019d\u019e\7+\2\2\u019e\u0094\3\2\2\2\u019f\u01fd\t!\2"+
		"\2\u01a0\u01fb\5\67\34\2\u01a1\u01f9\5\67\34\2\u01a2\u01f7\5\67\34\2\u01a3"+
		"\u01f5\5\67\34\2\u01a4\u01f3\5\67\34\2\u01a5\u01f1\5\67\34\2\u01a6\u01ef"+
		"\5\67\34\2\u01a7\u01ed\5\67\34\2\u01a8\u01eb\5\67\34\2\u01a9\u01e9\5\67"+
		"\34\2\u01aa\u01e7\5\67\34\2\u01ab\u01e5\5\67\34\2\u01ac\u01e3\5\67\34"+
		"\2\u01ad\u01e1\5\67\34\2\u01ae\u01df\5\67\34\2\u01af\u01dd\5\67\34\2\u01b0"+
		"\u01db\5\67\34\2\u01b1\u01d9\5\67\34\2\u01b2\u01d7\5\67\34\2\u01b3\u01d5"+
		"\5\67\34\2\u01b4\u01d3\5\67\34\2\u01b5\u01d1\5\67\34\2\u01b6\u01cf\5\67"+
		"\34\2\u01b7\u01cd\5\67\34\2\u01b8\u01cb\5\67\34\2\u01b9\u01c9\5\67\34"+
		"\2\u01ba\u01c7\5\67\34\2\u01bb\u01c5\5\67\34\2\u01bc\u01c3\5\67\34\2\u01bd"+
		"\u01c1\5\67\34\2\u01be\u01c0\5\67\34\2\u01bf\u01be\3\2\2\2\u01bf\u01c0"+
		"\3\2\2\2\u01c0\u01c2\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2"+
		"\u01c4\3\2\2\2\u01c3\u01bd\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c6\3\2"+
		"\2\2\u01c5\u01bc\3\2\2\2\u01c5\u01c6\3\2\2\2\u01c6\u01c8\3\2\2\2\u01c7"+
		"\u01bb\3\2\2\2\u01c7\u01c8\3\2\2\2\u01c8\u01ca\3\2\2\2\u01c9\u01ba\3\2"+
		"\2\2\u01c9\u01ca\3\2\2\2\u01ca\u01cc\3\2\2\2\u01cb\u01b9\3\2\2\2\u01cb"+
		"\u01cc\3\2\2\2\u01cc\u01ce\3\2\2\2\u01cd\u01b8\3\2\2\2\u01cd\u01ce\3\2"+
		"\2\2\u01ce\u01d0\3\2\2\2\u01cf\u01b7\3\2\2\2\u01cf\u01d0\3\2\2\2\u01d0"+
		"\u01d2\3\2\2\2\u01d1\u01b6\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d2\u01d4\3\2"+
		"\2\2\u01d3\u01b5\3\2\2\2\u01d3\u01d4\3\2\2\2\u01d4\u01d6\3\2\2\2\u01d5"+
		"\u01b4\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6\u01d8\3\2\2\2\u01d7\u01b3\3\2"+
		"\2\2\u01d7\u01d8\3\2\2\2\u01d8\u01da\3\2\2\2\u01d9\u01b2\3\2\2\2\u01d9"+
		"\u01da\3\2\2\2\u01da\u01dc\3\2\2\2\u01db\u01b1\3\2\2\2\u01db\u01dc\3\2"+
		"\2\2\u01dc\u01de\3\2\2\2\u01dd\u01b0\3\2\2\2\u01dd\u01de\3\2\2\2\u01de"+
		"\u01e0\3\2\2\2\u01df\u01af\3\2\2\2\u01df\u01e0\3\2\2\2\u01e0\u01e2\3\2"+
		"\2\2\u01e1\u01ae\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2\u01e4\3\2\2\2\u01e3"+
		"\u01ad\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e6\3\2\2\2\u01e5\u01ac\3\2"+
		"\2\2\u01e5\u01e6\3\2\2\2\u01e6\u01e8\3\2\2\2\u01e7\u01ab\3\2\2\2\u01e7"+
		"\u01e8\3\2\2\2\u01e8\u01ea\3\2\2\2\u01e9\u01aa\3\2\2\2\u01e9\u01ea\3\2"+
		"\2\2\u01ea\u01ec\3\2\2\2\u01eb\u01a9\3\2\2\2\u01eb\u01ec\3\2\2\2\u01ec"+
		"\u01ee\3\2\2\2\u01ed\u01a8\3\2\2\2\u01ed\u01ee\3\2\2\2\u01ee\u01f0\3\2"+
		"\2\2\u01ef\u01a7\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0\u01f2\3\2\2\2\u01f1"+
		"\u01a6\3\2\2\2\u01f1\u01f2\3\2\2\2\u01f2\u01f4\3\2\2\2\u01f3\u01a5\3\2"+
		"\2\2\u01f3\u01f4\3\2\2\2\u01f4\u01f6\3\2\2\2\u01f5\u01a4\3\2\2\2\u01f5"+
		"\u01f6\3\2\2\2\u01f6\u01f8\3\2\2\2\u01f7\u01a3\3\2\2\2\u01f7\u01f8\3\2"+
		"\2\2\u01f8\u01fa\3\2\2\2\u01f9\u01a2\3\2\2\2\u01f9\u01fa\3\2\2\2\u01fa"+
		"\u01fc\3\2\2\2\u01fb\u01a1\3\2\2\2\u01fb\u01fc\3\2\2\2\u01fc\u01fe\3\2"+
		"\2\2\u01fd\u01a0\3\2\2\2\u01fd\u01fe\3\2\2\2\u01fe\u0096\3\2\2\2\u01ff"+
		"\u0201\t\"\2\2\u0200\u01ff\3\2\2\2\u0201\u0202\3\2\2\2\u0202\u0200\3\2"+
		"\2\2\u0202\u0203\3\2\2\2\u0203\u0204\3\2\2\2\u0204\u0205\bL\2\2\u0205"+
		"\u0098\3\2\2\2\u0206\u0207\7\'\2\2\u0207\u0208\7\'\2\2\u0208\u0209\7\'"+
		"\2\2\u0209\u020d\3\2\2\2\u020a\u020c\13\2\2\2\u020b\u020a\3\2\2\2\u020c"+
		"\u020f\3\2\2\2\u020d\u020e\3\2\2\2\u020d\u020b\3\2\2\2\u020e\u0210\3\2"+
		"\2\2\u020f\u020d\3\2\2\2\u0210\u0211\7\'\2\2\u0211\u0212\7\'\2\2\u0212"+
		"\u0213\7\'\2\2\u0213\u0214\3\2\2\2\u0214\u0215\bM\2\2\u0215\u009a\3\2"+
		"\2\2\u0216\u0217\7\'\2\2\u0217\u0218\7\'\2\2\u0218\u021f\3\2\2\2\u0219"+
		"\u021b\n\35\2\2\u021a\u0219\3\2\2\2\u021b\u021e\3\2\2\2\u021c\u021a\3"+
		"\2\2\2\u021c\u021d\3\2\2\2\u021d\u0220\3\2\2\2\u021e\u021c\3\2\2\2\u021f"+
		"\u021c\3\2\2\2\u021f\u0220\3\2\2\2\u0220\u0221\3\2\2\2\u0221\u0222\bN"+
		"\2\2\u0222\u009c\3\2\2\2\61\2\u00d6\u00da\u00e0\u00e3\u00e8\u00ed\u00f3"+
		"\u00f5\u00fc\u00fe\u01bf\u01c1\u01c3\u01c5\u01c7\u01c9\u01cb\u01cd\u01cf"+
		"\u01d1\u01d3\u01d5\u01d7\u01d9\u01db\u01dd\u01df\u01e1\u01e3\u01e5\u01e7"+
		"\u01e9\u01eb\u01ed\u01ef\u01f1\u01f3\u01f5\u01f7\u01f9\u01fb\u01fd\u0202"+
		"\u020d\u021c\u021f\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}