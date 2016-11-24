grammar Fapla;

fragment
A   :   'a' | 'A';
fragment
B   :   'b' | 'B';
fragment
C   :   'c' | 'C';
fragment
D   :   'd' | 'D';
fragment
E   :   'e' | 'E';
fragment
F   :   'f' | 'F';
fragment
G   :   'g' | 'G';
fragment
H   :   'h' | 'H';
fragment
I   :   'i' | 'I';
fragment
J   :   'j' | 'J';
fragment
K   :   'k' | 'K';
fragment
L   :   'l' | 'L';
fragment
M   :   'm' | 'M';
fragment
N   :   'n' | 'N';
fragment
O   :   'o' | 'O';
fragment
P   :   'p' | 'P';
fragment
Q   :   'q' | 'Q';
fragment
R   :   'r' | 'R';
fragment
S   :   's' | 'S';
fragment
T   :   't' | 'T';
fragment
U   :   'u' | 'U';
fragment
V   :   'v' | 'V';
fragment
W   :   'w' | 'W';
fragment
X   :   'x' | 'X';
fragment
Y   :   'y' | 'Y';
fragment
Z   :   'z' | 'Z';

fragment
DigitOrLetter : [a-z-A-Z0-9];

startState
    :   moduleDeclaration* mainModuleDeclaration moduleDeclaration* EOF
    ;

moduleDeclaration
    :   MODULE
        Identifier
        (INPUT COLON (Identifier COLON primitiveType SEMI )*)?
        (OUTPUT COLON (primitiveType) SEMI)?
        (block)
    ;

mainModuleDeclaration
    :   MODULE
        MAIN
        (block)
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

block
    :   BEGIN (statement)* END
    ;

statement
    :   IF expression THEN block (ELSE block)?
    |   WHILE expression statement
    |   SEMI
    |   expression SEMI
    |   assignment
    |   varDeclaration
    |   WRITE PO expression PC SEMI
    |   READ Identifier SEMI
    |   RETURN expression SEMI
    ;
//ToDo recursive functions
//ToDo function arguments not found
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
    |   Identifier PO expressionList PC
    |   Literal
    |   Identifier
    |   block
    ;

expressionList
    :   expression (COMMA expression)*
    ;

primitiveType
    :   REAL
    |   BOOL
    |   STRING
    ;

varDeclaration
    :   (Identifier
        COLON
        primitiveType SEMI)
    ;

assignment
    :   Identifier ASSIGN expression SEMI
    ;

Literal
    :   ('-' | '+')? [0-9]+ | [0-9]+ |  ('-' | '+')? [0-9]+ DOT [0-9]+ | '0' X [0-9A-Fa-f]+
    |   '"' (~[\r\n]*)? '"'
    |   T R U E | F A L S E
    ;

STRING        : S T R I N G;
REAL          : R E A L;
BOOL          : B O O L;

ELSE          : E L S E;
THEN          : T H E N;
IF            : I F;
RETURN        : R E T U R N;
WHILE         : W H I L E;
MODULE        : M O D U L E;
BEGIN         : B E G I N;
END           : E N D;
MAIN          : M A I N;
INPUT         : I N P U T;
OUTPUT        : O U T P U T;
WRITE         : W R I T E;
READ          : R E A D;

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
AND             : A N D;
OR              : O R;
NOT             : N O T;
XOR             : X O R;
ADD             : '+';
SUB             : '-';
MUL             : '*';
DIV             : '/';
POW             : '^';
MOD             : '%';
PO              : '(';
PC              : ')';

Identifier
    : [a-zA-Z](DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter
    (DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter
    (DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter
    (DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter
    (DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter
    (DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter(DigitOrLetter
    (DigitOrLetter(DigitOrLetter?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?
;

WS  :  [ \t\r\n]+ -> skip
    ;

COMMENT
    :   '%%%' .*? '%%%' -> skip
    ;
LINE_COMMENT
    :   '%%' (~[\r\n]*)? -> skip
    ;