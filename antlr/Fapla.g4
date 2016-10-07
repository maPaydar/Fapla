grammar Fapla;

@lexer::header {
//package src.antlr;
import java.util.*;
}
@parser::header {
//package src.antlr;
//import src.antlr.FaplaLexer.Variable;
import java.util.*;
}
// explicitly define keyword token types to avoid implicit def warnings
// tokens { BEGIN, END, IF, THEN, WHILE }

@lexer::members {
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
}

@parser::members {
Map<String, FaplaLexer.Variable> variables = new HashMap<String, FaplaLexer.Variable>();
}

compilationUnit
    :   moduleDeclaration* mainModuleDeclaration /*varDeclaration* moduleDeclaration* varDeclaration**/ EOF
    ;

moduleDeclaration
    :   MODULE
        Identifier
        (moduleInput)?
        (moduleOutput)?
        (moduleBody)
    ;

mainModuleDeclaration
    :   MODULE
        MAIN
        (moduleBody)
    ;

moduleInput
    :   INPUT
        COLON
        (varDeclaration)*
    ;

moduleOutput
    :   OUTPUT
        COLON
        (primitiveType)
        SEMI
    ;

moduleBody
    :   block
    ;

block
    :   BEGIN (blockStatement)* END
    ;

blockStatement
    :   varDeclaration
    |   statement
    ;

statement
    :   IF expression { System.out.println($expression.text); } THEN statement (ELSE statement)?
    |   WHILE expression statement
    |   SEMI
    |   expression SEMI
    |   assignment
    |   varDeclaration
    |   RETURN expression SEMI
    |   block
    ;

expression
    :   NOT expression
    |   expression (MUL|DIV|MOD) expression
    |   expression (ADD|SUB) expression
    |   expression (LE | GE | GT | LT) expression
    |   expression (EQUAL | NOTEQUAL) expression
    |   expression AND expression
    |   expression POW expression
    |   expression XOR expression
    |   expression OR expression
    |   expression QUESTION expression COLON expression
    |   Identifier PO expressionList PC SEMI
    |   primary
    ;

expressionList
    :   expression (',' expression)*
    ;


primary
    :
//    |   literal
    |   Identifier /*{ if(variables.containsKey($Identifier)) { setType() } }*/
    ;


primitiveType
    :   BOOL
    |   REAL
    |   STRING
    ;

varDeclaration
    :   (Identifier
        COLON
        primitiveType SEMI) { variables.put($Identifier.text, new FaplaLexer.Variable($primitiveType.text, $Identifier.text, null));}
    ;


assignment
    :   Identifier ASSIGN expression SEMI { System.out.println($expression.text); }
    ;
/*
literal
    :   RealLiteral
    |   StringLiteral
    |   BoolLiteral
    ;
*/
/*
RealLiteral
    :   DecimalIntegerLiteral
    |   HexIntegerLiteral
    |   FloatingPointLiteral
    ;
FloatingPointLiteral
    :   DecimalFloatingPointLiteral
    ;
DecimalFloatingPointLiteral
    :   Digits '.' Digits? ExponentPart? FloatTypeSuffix?
    |   '.' Digits ExponentPart? FloatTypeSuffix?
    |   Digits ExponentPart FloatTypeSuffix?
    |   Digits FloatTypeSuffix
    ;
ExponentPart
    :   ExponentIndicator SignedInteger
    ;
ExponentIndicator
    :   [eE]
    ;
SignedInteger
    :   Sign? Digits
    ;
Sign
    :   [+-]
    ;
FloatTypeSuffix
    :   [fFdD]
    ;


DecimalIntegerLiteral
    :   DecimalNumeral IntegerTypeSuffix?
    ;
HexIntegerLiteral
    :   HexNumeral IntegerTypeSuffix?
    ;
IntegerTypeSuffix
    :   [lL]
    ;
DecimalNumeral
    :   '0'
    |   NonZeroDigit (Digits?)
    ;
Digits
    :   Digit (Digit+)?
    ;
Digit
    :   '0'
    |   NonZeroDigit
    ;
NonZeroDigit
    :   [1-9]
    ;
HexNumeral
    :   '0' [xX] HexDigits
    ;
HexDigits
    :   HexDigit (HexDigitOrUnderscore* HexDigit)?
    ;
HexDigit
    :   [0-9a-fA-F]
    ;
HexDigitOrUnderscore
    :   HexDigit
    |   '_'
    ;


BoolLiteral
    :   'true'
    |   'false'
    ;

StringLiteral
    :   '"' StringCharacters? '"'
    ;
StringCharacters
    :   StringCharacter+
    ;
StringCharacter
    :   ~["\\]
    |   EscapeSequence
    ;
EscapeSequence
    :   '\\' [btnfr"'\\]
    |   OctalEscape
    |   UnicodeEscape
    ;
OctalEscape
    :   '\\' OctalDigit
    |   '\\' OctalDigit OctalDigit
    |   '\\' ZeroToThree OctalDigit OctalDigit
    ;
OctalDigit
    :   [0-7]
    ;
ZeroToThree
    :   [0-3]
    ;
UnicodeEscape
    :   '\\' 'u' HexDigit HexDigit HexDigit HexDigit
    ;

*/

/* Data Types */
STRING        : 'String';
REAL          : 'Real';
BOOL          : 'Bool';

/* KeyWords */
ELSE          : 'else';
THEN          : 'then';
IF            : 'if';
RETURN        : 'return';
WHILE         : 'while';
MODULE        : 'module' | 'Module' ;
BEGIN         : 'Begin';
END           : 'End';
MAIN          : 'Main' | 'main';
INPUT         : 'Input' | 'input';
OUTPUT        : 'Output' | 'output';

SEMI            : ';';
COMMA           : ',';
DOT             : '.';
ASSIGN          : '=';
GT              : '>';
LT              : '<';
FACTORIAL       : '!';
QUESTION        : '?';
COLON           : ':';
EQUAL           : '==';
LE              : '<=';
GE              : '>=';
NOTEQUAL        : '<>';
AND             : 'and';
OR              : 'or';
NOT             : 'not';
XOR             : 'xor';
ADD             : '+';
SUB             : '-';
MUL             : '*';
DIV             : '/';
POW             : '^';
MOD             : '%';
PO              : '(';
PC              : ')';

/*
Identifier
    :   JavaLetter JavaLetterOrDigit*
    ;
JavaLetter
    :   [a-zA-Z]
    ;

JavaLetterOrDigit
    :   [a-zA-Z0-9]
    ;
*/
Identifier
:
/*
	Identifiernondigit
	| Identifier Identifiernondigit
	| Identifier DIGIT
	*/
	Identifiernondigit
	(
		Identifiernondigit
		| DIGIT
	)*
;

fragment
Identifiernondigit
:
	NONDIGIT
	| Universalcharactername
	/* other implementation defined characters*/
;
fragment
NONDIGIT
:
	[a-zA-Z_]
;
fragment
DIGIT
:
	[0-9]
;
fragment
Universalcharactername
:
	'\\u' Hexquad
	| '\\U' Hexquad Hexquad
;
/*Lexer*/
fragment
Hexquad
:
	HEXADECIMALDIGIT HEXADECIMALDIGIT HEXADECIMALDIGIT HEXADECIMALDIGIT
;
fragment
HEXADECIMALDIGIT
:
	[0-9a-fA-F]
;


WS  :  [ \t\r\n\u000C]+ -> skip
    ;

COMMENT
    :   '%%%' .*? '%%%' -> skip
    ;

LINE_COMMENT
    :   '%%' ~[\r\n]* -> skip
    ;