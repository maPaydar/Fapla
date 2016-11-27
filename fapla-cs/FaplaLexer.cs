//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.5.3
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from /home/amin/Documents/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591
// Ambiguous reference in cref attribute
#pragma warning disable 419

using System;
using System.Text;
using Antlr4.Runtime;
using Antlr4.Runtime.Atn;
using Antlr4.Runtime.Misc;
using DFA = Antlr4.Runtime.Dfa.DFA;

[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.5.3")]
[System.CLSCompliant(false)]
public partial class FaplaLexer : Lexer {
	public const int
		Literal=1, STRING=2, REAL=3, BOOL=4, ELSE=5, THEN=6, IF=7, RETURN=8, WHILE=9, 
		MODULE=10, BEGIN=11, END=12, MAIN=13, INPUT=14, OUTPUT=15, WRITE=16, READ=17, 
		SEMI=18, COMMA=19, DOT=20, ASSIGN=21, GT=22, LT=23, FACTORIAL=24, QUESTION=25, 
		COLON=26, EQUAL=27, LE=28, GE=29, NOTEQUAL=30, AND=31, OR=32, NOT=33, 
		XOR=34, ADD=35, SUB=36, MUL=37, DIV=38, POW=39, MOD=40, PO=41, PC=42, 
		Identifier=43, WS=44, COMMENT=45, LINE_COMMENT=46;
	public static string[] modeNames = {
		"DEFAULT_MODE"
	};

	public static readonly string[] ruleNames = {
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
		"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "DigitOrLetter", 
		"Literal", "STRING", "REAL", "BOOL", "ELSE", "THEN", "IF", "RETURN", "WHILE", 
		"MODULE", "BEGIN", "END", "MAIN", "INPUT", "OUTPUT", "WRITE", "READ", 
		"SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "FACTORIAL", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "NOT", "XOR", "ADD", 
		"SUB", "MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", "WS", "COMMENT", 
		"LINE_COMMENT"
	};


	public FaplaLexer(ICharStream input)
		: base(input)
	{
		Interpreter = new LexerATNSimulator(this,_ATN);
	}

	private static readonly string[] _LiteralNames = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, "';'", "','", "'.'", "'='", "'>'", 
		"'<'", "'!'", "'?'", "':'", "'=='", "'<='", "'>='", "'<>'", null, null, 
		null, null, "'+'", "'-'", "'*'", "'/'", "'^'", "'%'", "'('", "')'"
	};
	private static readonly string[] _SymbolicNames = {
		null, "Literal", "STRING", "REAL", "BOOL", "ELSE", "THEN", "IF", "RETURN", 
		"WHILE", "MODULE", "BEGIN", "END", "MAIN", "INPUT", "OUTPUT", "WRITE", 
		"READ", "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "FACTORIAL", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "NOT", "XOR", "ADD", 
		"SUB", "MUL", "DIV", "POW", "MOD", "PO", "PC", "Identifier", "WS", "COMMENT", 
		"LINE_COMMENT"
	};
	public static readonly IVocabulary DefaultVocabulary = new Vocabulary(_LiteralNames, _SymbolicNames);

	[NotNull]
	public override IVocabulary Vocabulary
	{
		get
		{
			return DefaultVocabulary;
		}
	}

	public override string GrammarFileName { get { return "Fapla.g4"; } }

	public override string[] RuleNames { get { return ruleNames; } }

	public override string[] ModeNames { get { return modeNames; } }

	public override string SerializedAtn { get { return _serializedATN; } }

	private static string _serializedATN = _serializeATN();
	private static string _serializeATN()
	{
	    StringBuilder sb = new StringBuilder();
	    sb.Append("\x3\x430\xD6D1\x8206\xAD2D\x4417\xAEF1\x8D80\xAADD\x2\x30");
		sb.Append("\x21E\b\x1\x4\x2\t\x2\x4\x3\t\x3\x4\x4\t\x4\x4\x5\t\x5\x4\x6");
		sb.Append("\t\x6\x4\a\t\a\x4\b\t\b\x4\t\t\t\x4\n\t\n\x4\v\t\v\x4\f\t\f");
		sb.Append("\x4\r\t\r\x4\xE\t\xE\x4\xF\t\xF\x4\x10\t\x10\x4\x11\t\x11\x4");
		sb.Append("\x12\t\x12\x4\x13\t\x13\x4\x14\t\x14\x4\x15\t\x15\x4\x16\t\x16");
		sb.Append("\x4\x17\t\x17\x4\x18\t\x18\x4\x19\t\x19\x4\x1A\t\x1A\x4\x1B");
		sb.Append("\t\x1B\x4\x1C\t\x1C\x4\x1D\t\x1D\x4\x1E\t\x1E\x4\x1F\t\x1F\x4");
		sb.Append(" \t \x4!\t!\x4\"\t\"\x4#\t#\x4$\t$\x4%\t%\x4&\t&\x4\'\t\'\x4");
		sb.Append("(\t(\x4)\t)\x4*\t*\x4+\t+\x4,\t,\x4-\t-\x4.\t.\x4/\t/\x4\x30");
		sb.Append("\t\x30\x4\x31\t\x31\x4\x32\t\x32\x4\x33\t\x33\x4\x34\t\x34\x4");
		sb.Append("\x35\t\x35\x4\x36\t\x36\x4\x37\t\x37\x4\x38\t\x38\x4\x39\t\x39");
		sb.Append("\x4:\t:\x4;\t;\x4<\t<\x4=\t=\x4>\t>\x4?\t?\x4@\t@\x4\x41\t\x41");
		sb.Append("\x4\x42\t\x42\x4\x43\t\x43\x4\x44\t\x44\x4\x45\t\x45\x4\x46");
		sb.Append("\t\x46\x4G\tG\x4H\tH\x4I\tI\x4J\tJ\x3\x2\x3\x2\x3\x3\x3\x3\x3");
		sb.Append("\x4\x3\x4\x3\x5\x3\x5\x3\x6\x3\x6\x3\a\x3\a\x3\b\x3\b\x3\t\x3");
		sb.Append("\t\x3\n\x3\n\x3\v\x3\v\x3\f\x3\f\x3\r\x3\r\x3\xE\x3\xE\x3\xF");
		sb.Append("\x3\xF\x3\x10\x3\x10\x3\x11\x3\x11\x3\x12\x3\x12\x3\x13\x3\x13");
		sb.Append("\x3\x14\x3\x14\x3\x15\x3\x15\x3\x16\x3\x16\x3\x17\x3\x17\x3");
		sb.Append("\x18\x3\x18\x3\x19\x3\x19\x3\x1A\x3\x1A\x3\x1B\x3\x1B\x3\x1C");
		sb.Append("\x3\x1C\x3\x1D\x5\x1D\xCD\n\x1D\x3\x1D\x6\x1D\xD0\n\x1D\r\x1D");
		sb.Append("\xE\x1D\xD1\x3\x1D\x6\x1D\xD5\n\x1D\r\x1D\xE\x1D\xD6\x3\x1D");
		sb.Append("\x5\x1D\xDA\n\x1D\x3\x1D\x6\x1D\xDD\n\x1D\r\x1D\xE\x1D\xDE\x3");
		sb.Append("\x1D\x3\x1D\x6\x1D\xE3\n\x1D\r\x1D\xE\x1D\xE4\x3\x1D\x3\x1D");
		sb.Append("\x3\x1D\x6\x1D\xEA\n\x1D\r\x1D\xE\x1D\xEB\x3\x1D\x3\x1D\a\x1D");
		sb.Append("\xF0\n\x1D\f\x1D\xE\x1D\xF3\v\x1D\x5\x1D\xF5\n\x1D\x3\x1D\x3");
		sb.Append("\x1D\x3\x1D\x3\x1D\x3\x1D\x3\x1D\x3\x1D\x3\x1D\x3\x1D\x3\x1D");
		sb.Append("\x3\x1D\x3\x1D\x5\x1D\x103\n\x1D\x3\x1E\x3\x1E\x3\x1E\x3\x1E");
		sb.Append("\x3\x1E\x3\x1E\x3\x1E\x3\x1F\x3\x1F\x3\x1F\x3\x1F\x3\x1F\x3");
		sb.Append(" \x3 \x3 \x3 \x3 \x3!\x3!\x3!\x3!\x3!\x3\"\x3\"\x3\"\x3\"\x3");
		sb.Append("\"\x3#\x3#\x3#\x3$\x3$\x3$\x3$\x3$\x3$\x3$\x3%\x3%\x3%\x3%\x3");
		sb.Append("%\x3%\x3&\x3&\x3&\x3&\x3&\x3&\x3&\x3\'\x3\'\x3\'\x3\'\x3\'\x3");
		sb.Append("\'\x3(\x3(\x3(\x3(\x3)\x3)\x3)\x3)\x3)\x3*\x3*\x3*\x3*\x3*\x3");
		sb.Append("*\x3+\x3+\x3+\x3+\x3+\x3+\x3+\x3,\x3,\x3,\x3,\x3,\x3,\x3-\x3");
		sb.Append("-\x3-\x3-\x3-\x3.\x3.\x3/\x3/\x3\x30\x3\x30\x3\x31\x3\x31\x3");
		sb.Append("\x32\x3\x32\x3\x33\x3\x33\x3\x34\x3\x34\x3\x35\x3\x35\x3\x36");
		sb.Append("\x3\x36\x3\x37\x3\x37\x3\x37\x3\x38\x3\x38\x3\x38\x3\x39\x3");
		sb.Append("\x39\x3\x39\x3:\x3:\x3:\x3;\x3;\x3;\x3;\x3<\x3<\x3<\x3=\x3=");
		sb.Append("\x3=\x3=\x3>\x3>\x3>\x3>\x3?\x3?\x3@\x3@\x3\x41\x3\x41\x3\x42");
		sb.Append("\x3\x42\x3\x43\x3\x43\x3\x44\x3\x44\x3\x45\x3\x45\x3\x46\x3");
		sb.Append("\x46\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3");
		sb.Append("G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3G\x3");
		sb.Append("G\x3G\x3G\x3G\x5G\x1BB\nG\x5G\x1BD\nG\x5G\x1BF\nG\x5G\x1C1\n");
		sb.Append("G\x5G\x1C3\nG\x5G\x1C5\nG\x5G\x1C7\nG\x5G\x1C9\nG\x5G\x1CB\n");
		sb.Append("G\x5G\x1CD\nG\x5G\x1CF\nG\x5G\x1D1\nG\x5G\x1D3\nG\x5G\x1D5\n");
		sb.Append("G\x5G\x1D7\nG\x5G\x1D9\nG\x5G\x1DB\nG\x5G\x1DD\nG\x5G\x1DF\n");
		sb.Append("G\x5G\x1E1\nG\x5G\x1E3\nG\x5G\x1E5\nG\x5G\x1E7\nG\x5G\x1E9\n");
		sb.Append("G\x5G\x1EB\nG\x5G\x1ED\nG\x5G\x1EF\nG\x5G\x1F1\nG\x5G\x1F3\n");
		sb.Append("G\x5G\x1F5\nG\x5G\x1F7\nG\x5G\x1F9\nG\x3H\x6H\x1FC\nH\rH\xE");
		sb.Append("H\x1FD\x3H\x3H\x3I\x3I\x3I\x3I\x3I\aI\x207\nI\fI\xEI\x20A\v");
		sb.Append("I\x3I\x3I\x3I\x3I\x3I\x3I\x3J\x3J\x3J\x3J\aJ\x216\nJ\fJ\xEJ");
		sb.Append("\x219\vJ\x5J\x21B\nJ\x3J\x3J\x3\x208\x2K\x3\x2\x5\x2\a\x2\t");
		sb.Append("\x2\v\x2\r\x2\xF\x2\x11\x2\x13\x2\x15\x2\x17\x2\x19\x2\x1B\x2");
		sb.Append("\x1D\x2\x1F\x2!\x2#\x2%\x2\'\x2)\x2+\x2-\x2/\x2\x31\x2\x33\x2");
		sb.Append("\x35\x2\x37\x2\x39\x3;\x4=\x5?\x6\x41\a\x43\b\x45\tG\nI\vK\f");
		sb.Append("M\rO\xEQ\xFS\x10U\x11W\x12Y\x13[\x14]\x15_\x16\x61\x17\x63\x18");
		sb.Append("\x65\x19g\x1Ai\x1Bk\x1Cm\x1Do\x1Eq\x1Fs u!w\"y#{$}%\x7F&\x81");
		sb.Append("\'\x83(\x85)\x87*\x89+\x8B,\x8D-\x8F.\x91/\x93\x30\x3\x2#\x4");
		sb.Append("\x2\x43\x43\x63\x63\x4\x2\x44\x44\x64\x64\x4\x2\x45\x45\x65");
		sb.Append("\x65\x4\x2\x46\x46\x66\x66\x4\x2GGgg\x4\x2HHhh\x4\x2IIii\x4");
		sb.Append("\x2JJjj\x4\x2KKkk\x4\x2LLll\x4\x2MMmm\x4\x2NNnn\x4\x2OOoo\x4");
		sb.Append("\x2PPpp\x4\x2QQqq\x4\x2RRrr\x4\x2SSss\x4\x2TTtt\x4\x2UUuu\x4");
		sb.Append("\x2VVvv\x4\x2WWww\x4\x2XXxx\x4\x2YYyy\x4\x2ZZzz\x4\x2[[{{\x4");
		sb.Append("\x2\\\\||\x6\x2//\x32;\x43\\\x63|\x4\x2--//\x3\x2\x32;\x5\x2");
		sb.Append("\x32;\x43H\x63h\x4\x2\f\f\xF\xF\x4\x2\x43\\\x63|\x5\x2\v\f\xF");
		sb.Append("\xF\"\"\x235\x2\x39\x3\x2\x2\x2\x2;\x3\x2\x2\x2\x2=\x3\x2\x2");
		sb.Append("\x2\x2?\x3\x2\x2\x2\x2\x41\x3\x2\x2\x2\x2\x43\x3\x2\x2\x2\x2");
		sb.Append("\x45\x3\x2\x2\x2\x2G\x3\x2\x2\x2\x2I\x3\x2\x2\x2\x2K\x3\x2\x2");
		sb.Append("\x2\x2M\x3\x2\x2\x2\x2O\x3\x2\x2\x2\x2Q\x3\x2\x2\x2\x2S\x3\x2");
		sb.Append("\x2\x2\x2U\x3\x2\x2\x2\x2W\x3\x2\x2\x2\x2Y\x3\x2\x2\x2\x2[\x3");
		sb.Append("\x2\x2\x2\x2]\x3\x2\x2\x2\x2_\x3\x2\x2\x2\x2\x61\x3\x2\x2\x2");
		sb.Append("\x2\x63\x3\x2\x2\x2\x2\x65\x3\x2\x2\x2\x2g\x3\x2\x2\x2\x2i\x3");
		sb.Append("\x2\x2\x2\x2k\x3\x2\x2\x2\x2m\x3\x2\x2\x2\x2o\x3\x2\x2\x2\x2");
		sb.Append("q\x3\x2\x2\x2\x2s\x3\x2\x2\x2\x2u\x3\x2\x2\x2\x2w\x3\x2\x2\x2");
		sb.Append("\x2y\x3\x2\x2\x2\x2{\x3\x2\x2\x2\x2}\x3\x2\x2\x2\x2\x7F\x3\x2");
		sb.Append("\x2\x2\x2\x81\x3\x2\x2\x2\x2\x83\x3\x2\x2\x2\x2\x85\x3\x2\x2");
		sb.Append("\x2\x2\x87\x3\x2\x2\x2\x2\x89\x3\x2\x2\x2\x2\x8B\x3\x2\x2\x2");
		sb.Append("\x2\x8D\x3\x2\x2\x2\x2\x8F\x3\x2\x2\x2\x2\x91\x3\x2\x2\x2\x2");
		sb.Append("\x93\x3\x2\x2\x2\x3\x95\x3\x2\x2\x2\x5\x97\x3\x2\x2\x2\a\x99");
		sb.Append("\x3\x2\x2\x2\t\x9B\x3\x2\x2\x2\v\x9D\x3\x2\x2\x2\r\x9F\x3\x2");
		sb.Append("\x2\x2\xF\xA1\x3\x2\x2\x2\x11\xA3\x3\x2\x2\x2\x13\xA5\x3\x2");
		sb.Append("\x2\x2\x15\xA7\x3\x2\x2\x2\x17\xA9\x3\x2\x2\x2\x19\xAB\x3\x2");
		sb.Append("\x2\x2\x1B\xAD\x3\x2\x2\x2\x1D\xAF\x3\x2\x2\x2\x1F\xB1\x3\x2");
		sb.Append("\x2\x2!\xB3\x3\x2\x2\x2#\xB5\x3\x2\x2\x2%\xB7\x3\x2\x2\x2\'");
		sb.Append("\xB9\x3\x2\x2\x2)\xBB\x3\x2\x2\x2+\xBD\x3\x2\x2\x2-\xBF\x3\x2");
		sb.Append("\x2\x2/\xC1\x3\x2\x2\x2\x31\xC3\x3\x2\x2\x2\x33\xC5\x3\x2\x2");
		sb.Append("\x2\x35\xC7\x3\x2\x2\x2\x37\xC9\x3\x2\x2\x2\x39\x102\x3\x2\x2");
		sb.Append("\x2;\x104\x3\x2\x2\x2=\x10B\x3\x2\x2\x2?\x110\x3\x2\x2\x2\x41");
		sb.Append("\x115\x3\x2\x2\x2\x43\x11A\x3\x2\x2\x2\x45\x11F\x3\x2\x2\x2");
		sb.Append("G\x122\x3\x2\x2\x2I\x129\x3\x2\x2\x2K\x12F\x3\x2\x2\x2M\x136");
		sb.Append("\x3\x2\x2\x2O\x13C\x3\x2\x2\x2Q\x140\x3\x2\x2\x2S\x145\x3\x2");
		sb.Append("\x2\x2U\x14B\x3\x2\x2\x2W\x152\x3\x2\x2\x2Y\x158\x3\x2\x2\x2");
		sb.Append("[\x15D\x3\x2\x2\x2]\x15F\x3\x2\x2\x2_\x161\x3\x2\x2\x2\x61\x163");
		sb.Append("\x3\x2\x2\x2\x63\x165\x3\x2\x2\x2\x65\x167\x3\x2\x2\x2g\x169");
		sb.Append("\x3\x2\x2\x2i\x16B\x3\x2\x2\x2k\x16D\x3\x2\x2\x2m\x16F\x3\x2");
		sb.Append("\x2\x2o\x172\x3\x2\x2\x2q\x175\x3\x2\x2\x2s\x178\x3\x2\x2\x2");
		sb.Append("u\x17B\x3\x2\x2\x2w\x17F\x3\x2\x2\x2y\x182\x3\x2\x2\x2{\x186");
		sb.Append("\x3\x2\x2\x2}\x18A\x3\x2\x2\x2\x7F\x18C\x3\x2\x2\x2\x81\x18E");
		sb.Append("\x3\x2\x2\x2\x83\x190\x3\x2\x2\x2\x85\x192\x3\x2\x2\x2\x87\x194");
		sb.Append("\x3\x2\x2\x2\x89\x196\x3\x2\x2\x2\x8B\x198\x3\x2\x2\x2\x8D\x19A");
		sb.Append("\x3\x2\x2\x2\x8F\x1FB\x3\x2\x2\x2\x91\x201\x3\x2\x2\x2\x93\x211");
		sb.Append("\x3\x2\x2\x2\x95\x96\t\x2\x2\x2\x96\x4\x3\x2\x2\x2\x97\x98\t");
		sb.Append("\x3\x2\x2\x98\x6\x3\x2\x2\x2\x99\x9A\t\x4\x2\x2\x9A\b\x3\x2");
		sb.Append("\x2\x2\x9B\x9C\t\x5\x2\x2\x9C\n\x3\x2\x2\x2\x9D\x9E\t\x6\x2");
		sb.Append("\x2\x9E\f\x3\x2\x2\x2\x9F\xA0\t\a\x2\x2\xA0\xE\x3\x2\x2\x2\xA1");
		sb.Append("\xA2\t\b\x2\x2\xA2\x10\x3\x2\x2\x2\xA3\xA4\t\t\x2\x2\xA4\x12");
		sb.Append("\x3\x2\x2\x2\xA5\xA6\t\n\x2\x2\xA6\x14\x3\x2\x2\x2\xA7\xA8\t");
		sb.Append("\v\x2\x2\xA8\x16\x3\x2\x2\x2\xA9\xAA\t\f\x2\x2\xAA\x18\x3\x2");
		sb.Append("\x2\x2\xAB\xAC\t\r\x2\x2\xAC\x1A\x3\x2\x2\x2\xAD\xAE\t\xE\x2");
		sb.Append("\x2\xAE\x1C\x3\x2\x2\x2\xAF\xB0\t\xF\x2\x2\xB0\x1E\x3\x2\x2");
		sb.Append("\x2\xB1\xB2\t\x10\x2\x2\xB2 \x3\x2\x2\x2\xB3\xB4\t\x11\x2\x2");
		sb.Append("\xB4\"\x3\x2\x2\x2\xB5\xB6\t\x12\x2\x2\xB6$\x3\x2\x2\x2\xB7");
		sb.Append("\xB8\t\x13\x2\x2\xB8&\x3\x2\x2\x2\xB9\xBA\t\x14\x2\x2\xBA(\x3");
		sb.Append("\x2\x2\x2\xBB\xBC\t\x15\x2\x2\xBC*\x3\x2\x2\x2\xBD\xBE\t\x16");
		sb.Append("\x2\x2\xBE,\x3\x2\x2\x2\xBF\xC0\t\x17\x2\x2\xC0.\x3\x2\x2\x2");
		sb.Append("\xC1\xC2\t\x18\x2\x2\xC2\x30\x3\x2\x2\x2\xC3\xC4\t\x19\x2\x2");
		sb.Append("\xC4\x32\x3\x2\x2\x2\xC5\xC6\t\x1A\x2\x2\xC6\x34\x3\x2\x2\x2");
		sb.Append("\xC7\xC8\t\x1B\x2\x2\xC8\x36\x3\x2\x2\x2\xC9\xCA\t\x1C\x2\x2");
		sb.Append("\xCA\x38\x3\x2\x2\x2\xCB\xCD\t\x1D\x2\x2\xCC\xCB\x3\x2\x2\x2");
		sb.Append("\xCC\xCD\x3\x2\x2\x2\xCD\xCF\x3\x2\x2\x2\xCE\xD0\t\x1E\x2\x2");
		sb.Append("\xCF\xCE\x3\x2\x2\x2\xD0\xD1\x3\x2\x2\x2\xD1\xCF\x3\x2\x2\x2");
		sb.Append("\xD1\xD2\x3\x2\x2\x2\xD2\x103\x3\x2\x2\x2\xD3\xD5\t\x1E\x2\x2");
		sb.Append("\xD4\xD3\x3\x2\x2\x2\xD5\xD6\x3\x2\x2\x2\xD6\xD4\x3\x2\x2\x2");
		sb.Append("\xD6\xD7\x3\x2\x2\x2\xD7\x103\x3\x2\x2\x2\xD8\xDA\t\x1D\x2\x2");
		sb.Append("\xD9\xD8\x3\x2\x2\x2\xD9\xDA\x3\x2\x2\x2\xDA\xDC\x3\x2\x2\x2");
		sb.Append("\xDB\xDD\t\x1E\x2\x2\xDC\xDB\x3\x2\x2\x2\xDD\xDE\x3\x2\x2\x2");
		sb.Append("\xDE\xDC\x3\x2\x2\x2\xDE\xDF\x3\x2\x2\x2\xDF\xE0\x3\x2\x2\x2");
		sb.Append("\xE0\xE2\x5_\x30\x2\xE1\xE3\t\x1E\x2\x2\xE2\xE1\x3\x2\x2\x2");
		sb.Append("\xE3\xE4\x3\x2\x2\x2\xE4\xE2\x3\x2\x2\x2\xE4\xE5\x3\x2\x2\x2");
		sb.Append("\xE5\x103\x3\x2\x2\x2\xE6\xE7\a\x32\x2\x2\xE7\xE9\x5\x31\x19");
		sb.Append("\x2\xE8\xEA\t\x1F\x2\x2\xE9\xE8\x3\x2\x2\x2\xEA\xEB\x3\x2\x2");
		sb.Append("\x2\xEB\xE9\x3\x2\x2\x2\xEB\xEC\x3\x2\x2\x2\xEC\x103\x3\x2\x2");
		sb.Append("\x2\xED\xF4\a$\x2\x2\xEE\xF0\n \x2\x2\xEF\xEE\x3\x2\x2\x2\xF0");
		sb.Append("\xF3\x3\x2\x2\x2\xF1\xEF\x3\x2\x2\x2\xF1\xF2\x3\x2\x2\x2\xF2");
		sb.Append("\xF5\x3\x2\x2\x2\xF3\xF1\x3\x2\x2\x2\xF4\xF1\x3\x2\x2\x2\xF4");
		sb.Append("\xF5\x3\x2\x2\x2\xF5\xF6\x3\x2\x2\x2\xF6\x103\a$\x2\x2\xF7\xF8");
		sb.Append("\x5)\x15\x2\xF8\xF9\x5%\x13\x2\xF9\xFA\x5+\x16\x2\xFA\xFB\x5");
		sb.Append("\v\x6\x2\xFB\x103\x3\x2\x2\x2\xFC\xFD\x5\r\a\x2\xFD\xFE\x5\x3");
		sb.Append("\x2\x2\xFE\xFF\x5\x19\r\x2\xFF\x100\x5\'\x14\x2\x100\x101\x5");
		sb.Append("\v\x6\x2\x101\x103\x3\x2\x2\x2\x102\xCC\x3\x2\x2\x2\x102\xD4");
		sb.Append("\x3\x2\x2\x2\x102\xD9\x3\x2\x2\x2\x102\xE6\x3\x2\x2\x2\x102");
		sb.Append("\xED\x3\x2\x2\x2\x102\xF7\x3\x2\x2\x2\x102\xFC\x3\x2\x2\x2\x103");
		sb.Append(":\x3\x2\x2\x2\x104\x105\x5\'\x14\x2\x105\x106\x5)\x15\x2\x106");
		sb.Append("\x107\x5%\x13\x2\x107\x108\x5\x13\n\x2\x108\x109\x5\x1D\xF\x2");
		sb.Append("\x109\x10A\x5\xF\b\x2\x10A<\x3\x2\x2\x2\x10B\x10C\x5%\x13\x2");
		sb.Append("\x10C\x10D\x5\v\x6\x2\x10D\x10E\x5\x3\x2\x2\x10E\x10F\x5\x19");
		sb.Append("\r\x2\x10F>\x3\x2\x2\x2\x110\x111\x5\x5\x3\x2\x111\x112\x5\x1F");
		sb.Append("\x10\x2\x112\x113\x5\x1F\x10\x2\x113\x114\x5\x19\r\x2\x114@");
		sb.Append("\x3\x2\x2\x2\x115\x116\x5\v\x6\x2\x116\x117\x5\x19\r\x2\x117");
		sb.Append("\x118\x5\'\x14\x2\x118\x119\x5\v\x6\x2\x119\x42\x3\x2\x2\x2");
		sb.Append("\x11A\x11B\x5)\x15\x2\x11B\x11C\x5\x11\t\x2\x11C\x11D\x5\v\x6");
		sb.Append("\x2\x11D\x11E\x5\x1D\xF\x2\x11E\x44\x3\x2\x2\x2\x11F\x120\x5");
		sb.Append("\x13\n\x2\x120\x121\x5\r\a\x2\x121\x46\x3\x2\x2\x2\x122\x123");
		sb.Append("\x5%\x13\x2\x123\x124\x5\v\x6\x2\x124\x125\x5)\x15\x2\x125\x126");
		sb.Append("\x5+\x16\x2\x126\x127\x5%\x13\x2\x127\x128\x5\x1D\xF\x2\x128");
		sb.Append("H\x3\x2\x2\x2\x129\x12A\x5/\x18\x2\x12A\x12B\x5\x11\t\x2\x12B");
		sb.Append("\x12C\x5\x13\n\x2\x12C\x12D\x5\x19\r\x2\x12D\x12E\x5\v\x6\x2");
		sb.Append("\x12EJ\x3\x2\x2\x2\x12F\x130\x5\x1B\xE\x2\x130\x131\x5\x1F\x10");
		sb.Append("\x2\x131\x132\x5\t\x5\x2\x132\x133\x5+\x16\x2\x133\x134\x5\x19");
		sb.Append("\r\x2\x134\x135\x5\v\x6\x2\x135L\x3\x2\x2\x2\x136\x137\x5\x5");
		sb.Append("\x3\x2\x137\x138\x5\v\x6\x2\x138\x139\x5\xF\b\x2\x139\x13A\x5");
		sb.Append("\x13\n\x2\x13A\x13B\x5\x1D\xF\x2\x13BN\x3\x2\x2\x2\x13C\x13D");
		sb.Append("\x5\v\x6\x2\x13D\x13E\x5\x1D\xF\x2\x13E\x13F\x5\t\x5\x2\x13F");
		sb.Append("P\x3\x2\x2\x2\x140\x141\x5\x1B\xE\x2\x141\x142\x5\x3\x2\x2\x142");
		sb.Append("\x143\x5\x13\n\x2\x143\x144\x5\x1D\xF\x2\x144R\x3\x2\x2\x2\x145");
		sb.Append("\x146\x5\x13\n\x2\x146\x147\x5\x1D\xF\x2\x147\x148\x5!\x11\x2");
		sb.Append("\x148\x149\x5+\x16\x2\x149\x14A\x5)\x15\x2\x14AT\x3\x2\x2\x2");
		sb.Append("\x14B\x14C\x5\x1F\x10\x2\x14C\x14D\x5+\x16\x2\x14D\x14E\x5)");
		sb.Append("\x15\x2\x14E\x14F\x5!\x11\x2\x14F\x150\x5+\x16\x2\x150\x151");
		sb.Append("\x5)\x15\x2\x151V\x3\x2\x2\x2\x152\x153\x5/\x18\x2\x153\x154");
		sb.Append("\x5%\x13\x2\x154\x155\x5\x13\n\x2\x155\x156\x5)\x15\x2\x156");
		sb.Append("\x157\x5\v\x6\x2\x157X\x3\x2\x2\x2\x158\x159\x5%\x13\x2\x159");
		sb.Append("\x15A\x5\v\x6\x2\x15A\x15B\x5\x3\x2\x2\x15B\x15C\x5\t\x5\x2");
		sb.Append("\x15CZ\x3\x2\x2\x2\x15D\x15E\a=\x2\x2\x15E\\\x3\x2\x2\x2\x15F");
		sb.Append("\x160\a.\x2\x2\x160^\x3\x2\x2\x2\x161\x162\a\x30\x2\x2\x162");
		sb.Append("`\x3\x2\x2\x2\x163\x164\a?\x2\x2\x164\x62\x3\x2\x2\x2\x165\x166");
		sb.Append("\a@\x2\x2\x166\x64\x3\x2\x2\x2\x167\x168\a>\x2\x2\x168\x66\x3");
		sb.Append("\x2\x2\x2\x169\x16A\a#\x2\x2\x16Ah\x3\x2\x2\x2\x16B\x16C\a\x41");
		sb.Append("\x2\x2\x16Cj\x3\x2\x2\x2\x16D\x16E\a<\x2\x2\x16El\x3\x2\x2\x2");
		sb.Append("\x16F\x170\a?\x2\x2\x170\x171\a?\x2\x2\x171n\x3\x2\x2\x2\x172");
		sb.Append("\x173\a>\x2\x2\x173\x174\a?\x2\x2\x174p\x3\x2\x2\x2\x175\x176");
		sb.Append("\a@\x2\x2\x176\x177\a?\x2\x2\x177r\x3\x2\x2\x2\x178\x179\a>");
		sb.Append("\x2\x2\x179\x17A\a@\x2\x2\x17At\x3\x2\x2\x2\x17B\x17C\x5\x3");
		sb.Append("\x2\x2\x17C\x17D\x5\x1D\xF\x2\x17D\x17E\x5\t\x5\x2\x17Ev\x3");
		sb.Append("\x2\x2\x2\x17F\x180\x5\x1F\x10\x2\x180\x181\x5%\x13\x2\x181");
		sb.Append("x\x3\x2\x2\x2\x182\x183\x5\x1D\xF\x2\x183\x184\x5\x1F\x10\x2");
		sb.Append("\x184\x185\x5)\x15\x2\x185z\x3\x2\x2\x2\x186\x187\x5\x31\x19");
		sb.Append("\x2\x187\x188\x5\x1F\x10\x2\x188\x189\x5%\x13\x2\x189|\x3\x2");
		sb.Append("\x2\x2\x18A\x18B\a-\x2\x2\x18B~\x3\x2\x2\x2\x18C\x18D\a/\x2");
		sb.Append("\x2\x18D\x80\x3\x2\x2\x2\x18E\x18F\a,\x2\x2\x18F\x82\x3\x2\x2");
		sb.Append("\x2\x190\x191\a\x31\x2\x2\x191\x84\x3\x2\x2\x2\x192\x193\a`");
		sb.Append("\x2\x2\x193\x86\x3\x2\x2\x2\x194\x195\a\'\x2\x2\x195\x88\x3");
		sb.Append("\x2\x2\x2\x196\x197\a*\x2\x2\x197\x8A\x3\x2\x2\x2\x198\x199");
		sb.Append("\a+\x2\x2\x199\x8C\x3\x2\x2\x2\x19A\x1F8\t!\x2\x2\x19B\x1F6");
		sb.Append("\x5\x37\x1C\x2\x19C\x1F4\x5\x37\x1C\x2\x19D\x1F2\x5\x37\x1C");
		sb.Append("\x2\x19E\x1F0\x5\x37\x1C\x2\x19F\x1EE\x5\x37\x1C\x2\x1A0\x1EC");
		sb.Append("\x5\x37\x1C\x2\x1A1\x1EA\x5\x37\x1C\x2\x1A2\x1E8\x5\x37\x1C");
		sb.Append("\x2\x1A3\x1E6\x5\x37\x1C\x2\x1A4\x1E4\x5\x37\x1C\x2\x1A5\x1E2");
		sb.Append("\x5\x37\x1C\x2\x1A6\x1E0\x5\x37\x1C\x2\x1A7\x1DE\x5\x37\x1C");
		sb.Append("\x2\x1A8\x1DC\x5\x37\x1C\x2\x1A9\x1DA\x5\x37\x1C\x2\x1AA\x1D8");
		sb.Append("\x5\x37\x1C\x2\x1AB\x1D6\x5\x37\x1C\x2\x1AC\x1D4\x5\x37\x1C");
		sb.Append("\x2\x1AD\x1D2\x5\x37\x1C\x2\x1AE\x1D0\x5\x37\x1C\x2\x1AF\x1CE");
		sb.Append("\x5\x37\x1C\x2\x1B0\x1CC\x5\x37\x1C\x2\x1B1\x1CA\x5\x37\x1C");
		sb.Append("\x2\x1B2\x1C8\x5\x37\x1C\x2\x1B3\x1C6\x5\x37\x1C\x2\x1B4\x1C4");
		sb.Append("\x5\x37\x1C\x2\x1B5\x1C2\x5\x37\x1C\x2\x1B6\x1C0\x5\x37\x1C");
		sb.Append("\x2\x1B7\x1BE\x5\x37\x1C\x2\x1B8\x1BC\x5\x37\x1C\x2\x1B9\x1BB");
		sb.Append("\x5\x37\x1C\x2\x1BA\x1B9\x3\x2\x2\x2\x1BA\x1BB\x3\x2\x2\x2\x1BB");
		sb.Append("\x1BD\x3\x2\x2\x2\x1BC\x1BA\x3\x2\x2\x2\x1BC\x1BD\x3\x2\x2\x2");
		sb.Append("\x1BD\x1BF\x3\x2\x2\x2\x1BE\x1B8\x3\x2\x2\x2\x1BE\x1BF\x3\x2");
		sb.Append("\x2\x2\x1BF\x1C1\x3\x2\x2\x2\x1C0\x1B7\x3\x2\x2\x2\x1C0\x1C1");
		sb.Append("\x3\x2\x2\x2\x1C1\x1C3\x3\x2\x2\x2\x1C2\x1B6\x3\x2\x2\x2\x1C2");
		sb.Append("\x1C3\x3\x2\x2\x2\x1C3\x1C5\x3\x2\x2\x2\x1C4\x1B5\x3\x2\x2\x2");
		sb.Append("\x1C4\x1C5\x3\x2\x2\x2\x1C5\x1C7\x3\x2\x2\x2\x1C6\x1B4\x3\x2");
		sb.Append("\x2\x2\x1C6\x1C7\x3\x2\x2\x2\x1C7\x1C9\x3\x2\x2\x2\x1C8\x1B3");
		sb.Append("\x3\x2\x2\x2\x1C8\x1C9\x3\x2\x2\x2\x1C9\x1CB\x3\x2\x2\x2\x1CA");
		sb.Append("\x1B2\x3\x2\x2\x2\x1CA\x1CB\x3\x2\x2\x2\x1CB\x1CD\x3\x2\x2\x2");
		sb.Append("\x1CC\x1B1\x3\x2\x2\x2\x1CC\x1CD\x3\x2\x2\x2\x1CD\x1CF\x3\x2");
		sb.Append("\x2\x2\x1CE\x1B0\x3\x2\x2\x2\x1CE\x1CF\x3\x2\x2\x2\x1CF\x1D1");
		sb.Append("\x3\x2\x2\x2\x1D0\x1AF\x3\x2\x2\x2\x1D0\x1D1\x3\x2\x2\x2\x1D1");
		sb.Append("\x1D3\x3\x2\x2\x2\x1D2\x1AE\x3\x2\x2\x2\x1D2\x1D3\x3\x2\x2\x2");
		sb.Append("\x1D3\x1D5\x3\x2\x2\x2\x1D4\x1AD\x3\x2\x2\x2\x1D4\x1D5\x3\x2");
		sb.Append("\x2\x2\x1D5\x1D7\x3\x2\x2\x2\x1D6\x1AC\x3\x2\x2\x2\x1D6\x1D7");
		sb.Append("\x3\x2\x2\x2\x1D7\x1D9\x3\x2\x2\x2\x1D8\x1AB\x3\x2\x2\x2\x1D8");
		sb.Append("\x1D9\x3\x2\x2\x2\x1D9\x1DB\x3\x2\x2\x2\x1DA\x1AA\x3\x2\x2\x2");
		sb.Append("\x1DA\x1DB\x3\x2\x2\x2\x1DB\x1DD\x3\x2\x2\x2\x1DC\x1A9\x3\x2");
		sb.Append("\x2\x2\x1DC\x1DD\x3\x2\x2\x2\x1DD\x1DF\x3\x2\x2\x2\x1DE\x1A8");
		sb.Append("\x3\x2\x2\x2\x1DE\x1DF\x3\x2\x2\x2\x1DF\x1E1\x3\x2\x2\x2\x1E0");
		sb.Append("\x1A7\x3\x2\x2\x2\x1E0\x1E1\x3\x2\x2\x2\x1E1\x1E3\x3\x2\x2\x2");
		sb.Append("\x1E2\x1A6\x3\x2\x2\x2\x1E2\x1E3\x3\x2\x2\x2\x1E3\x1E5\x3\x2");
		sb.Append("\x2\x2\x1E4\x1A5\x3\x2\x2\x2\x1E4\x1E5\x3\x2\x2\x2\x1E5\x1E7");
		sb.Append("\x3\x2\x2\x2\x1E6\x1A4\x3\x2\x2\x2\x1E6\x1E7\x3\x2\x2\x2\x1E7");
		sb.Append("\x1E9\x3\x2\x2\x2\x1E8\x1A3\x3\x2\x2\x2\x1E8\x1E9\x3\x2\x2\x2");
		sb.Append("\x1E9\x1EB\x3\x2\x2\x2\x1EA\x1A2\x3\x2\x2\x2\x1EA\x1EB\x3\x2");
		sb.Append("\x2\x2\x1EB\x1ED\x3\x2\x2\x2\x1EC\x1A1\x3\x2\x2\x2\x1EC\x1ED");
		sb.Append("\x3\x2\x2\x2\x1ED\x1EF\x3\x2\x2\x2\x1EE\x1A0\x3\x2\x2\x2\x1EE");
		sb.Append("\x1EF\x3\x2\x2\x2\x1EF\x1F1\x3\x2\x2\x2\x1F0\x19F\x3\x2\x2\x2");
		sb.Append("\x1F0\x1F1\x3\x2\x2\x2\x1F1\x1F3\x3\x2\x2\x2\x1F2\x19E\x3\x2");
		sb.Append("\x2\x2\x1F2\x1F3\x3\x2\x2\x2\x1F3\x1F5\x3\x2\x2\x2\x1F4\x19D");
		sb.Append("\x3\x2\x2\x2\x1F4\x1F5\x3\x2\x2\x2\x1F5\x1F7\x3\x2\x2\x2\x1F6");
		sb.Append("\x19C\x3\x2\x2\x2\x1F6\x1F7\x3\x2\x2\x2\x1F7\x1F9\x3\x2\x2\x2");
		sb.Append("\x1F8\x19B\x3\x2\x2\x2\x1F8\x1F9\x3\x2\x2\x2\x1F9\x8E\x3\x2");
		sb.Append("\x2\x2\x1FA\x1FC\t\"\x2\x2\x1FB\x1FA\x3\x2\x2\x2\x1FC\x1FD\x3");
		sb.Append("\x2\x2\x2\x1FD\x1FB\x3\x2\x2\x2\x1FD\x1FE\x3\x2\x2\x2\x1FE\x1FF");
		sb.Append("\x3\x2\x2\x2\x1FF\x200\bH\x2\x2\x200\x90\x3\x2\x2\x2\x201\x202");
		sb.Append("\a\'\x2\x2\x202\x203\a\'\x2\x2\x203\x204\a\'\x2\x2\x204\x208");
		sb.Append("\x3\x2\x2\x2\x205\x207\v\x2\x2\x2\x206\x205\x3\x2\x2\x2\x207");
		sb.Append("\x20A\x3\x2\x2\x2\x208\x209\x3\x2\x2\x2\x208\x206\x3\x2\x2\x2");
		sb.Append("\x209\x20B\x3\x2\x2\x2\x20A\x208\x3\x2\x2\x2\x20B\x20C\a\'\x2");
		sb.Append("\x2\x20C\x20D\a\'\x2\x2\x20D\x20E\a\'\x2\x2\x20E\x20F\x3\x2");
		sb.Append("\x2\x2\x20F\x210\bI\x2\x2\x210\x92\x3\x2\x2\x2\x211\x212\a\'");
		sb.Append("\x2\x2\x212\x213\a\'\x2\x2\x213\x21A\x3\x2\x2\x2\x214\x216\n");
		sb.Append(" \x2\x2\x215\x214\x3\x2\x2\x2\x216\x219\x3\x2\x2\x2\x217\x215");
		sb.Append("\x3\x2\x2\x2\x217\x218\x3\x2\x2\x2\x218\x21B\x3\x2\x2\x2\x219");
		sb.Append("\x217\x3\x2\x2\x2\x21A\x217\x3\x2\x2\x2\x21A\x21B\x3\x2\x2\x2");
		sb.Append("\x21B\x21C\x3\x2\x2\x2\x21C\x21D\bJ\x2\x2\x21D\x94\x3\x2\x2");
		sb.Append("\x2\x31\x2\xCC\xD1\xD6\xD9\xDE\xE4\xEB\xF1\xF4\x102\x1BA\x1BC");
		sb.Append("\x1BE\x1C0\x1C2\x1C4\x1C6\x1C8\x1CA\x1CC\x1CE\x1D0\x1D2\x1D4");
		sb.Append("\x1D6\x1D8\x1DA\x1DC\x1DE\x1E0\x1E2\x1E4\x1E6\x1E8\x1EA\x1EC");
		sb.Append("\x1EE\x1F0\x1F2\x1F4\x1F6\x1F8\x1FD\x208\x217\x21A\x3\b\x2\x2");
	    return sb.ToString();
	}

	public static readonly ATN _ATN =
		new ATNDeserializer().Deserialize(_serializedATN.ToCharArray());
}
