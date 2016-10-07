grammar Fapla;

@lexer::header {
package src.antlr;
import java.util.*;
}
// explicitly define keyword token types to avoid implicit def warnings
// tokens { BEGIN, END, IF, THEN, WHILE }

@lexer::members {
class Variable {
    public type;
    public name;
    public value;

    public Variable(String type, String name, String value) {
        this.type = type;
        this.name = name;
        this.value = value;
    }
}
List<Variable> variables = new ArrayList();
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
        ('Main'|'main')
        (moduleBody)
    ;

moduleInput
    :   ('Input'|'input')
        COLON
        (varDeclaration)*
    ;

moduleOutput
    :   ('Output'|'output')
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
    :   'if' expression { System.out.println($expression.text); } statement ('else' statement)?
    |   'while' expression statement
    |   ';'
    |   expression ';'
    |   varDeclaration
    |   RETURN expression SEMI
    |   block
    ;

expression
    :   primary
    |   ('not') expression
    |   expression ('*'|'/'|'%') expression
    |   expression ('+'|'-') expression
    |   expression ('<' '<' | '>' '>' '>' | '>' '>') expression
    |   expression ('<=' | '>=' | '>' | '<') expression
    |   expression ('==' | '<>') expression
    |   expression 'and' expression
    |   expression '^' expression
    |   expression 'xor' expression
    |   expression 'or' expression
    |   expression '?' expression ':' expression
    ;

expressionList
    :   expression (',' expression)*
    ;


primary
    :
//    |   literal
    |   Identifier
    ;


primitiveType
    :   BOOL
    |   REAL
    |   STRING
    ;

varDeclaration
    :   (Identifier
        COLON
        primitiveType SEMI) { variables.add(new Variable($primitiveType.text, $Identifier.text, null)); }
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
STRING        : 'string';
REAL          : 'Real';
BOOL          : 'Bool';

/* KeyWords */
ELSE          : 'else';
THEN          : 'then';
IF            : 'if';
RETURN        : 'return';
WHILE         : 'while';
MODULE        : 'module' | 'Module' ;
BEGIN           : 'Begin';
END             : 'End';


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
INC             : '++';
DEC             : '--';
ADD             : '+';
SUB             : '-';
MUL             : '*';
DIV             : '/';
CARET           : '^';
MOD             : '%';



Identifier
    :   JavaLetter JavaLetterOrDigit*
    ;
JavaLetter
    :   [a-zA-Z]
    ;

JavaLetterOrDigit
    :   [a-zA-Z0-9]
    ;


WS  :  [ \t\r\n\u000C]+ -> skip
    ;

COMMENT
    :   '%%%' .*? '%%%' -> skip
    ;

LINE_COMMENT
    :   '%%' ~[\r\n]* -> skip
    ;