grammar Fapla;

@parser::header {
import java.util.List;
import java.util.ArrayList;
}

@parser::members {
private Scope rootScope = new Scope(null);
private Scope currentScope = rootScope;
private List<Scope> rootScopeList = new ArrayList();
}

program
    :   (moduleDeclaration {Scope scope = new Scope(rootScope);currentScope=scope;} | noRetuenModuleDeclaration {Scope scope = new Scope(rootScope);currentScope=scope;})* mainModuleDeclaration {Scope mainScope = new Scope(rootScope);currentScope=mainScope;} (moduleDeclaration {Scope scope = new Scope(rootScope);currentScope=scope;} | noRetuenModuleDeclaration {Scope scope = new Scope(rootScope);currentScope=scope;})*
    ;

moduleDeclaration
    :   MODULE
        Identifier
        (INPUT COLON (Identifier COLON PrimitiveType SEMICOLON {currentScope.addSymbol(new Symbol($Identifier.text, $PrimitiveType.text, null));})+)?
        (OUTPUT COLON PrimitiveType SEMICOLON)?
        block
    ;

noRetuenModuleDeclaration
    :   MODULE
        Identifier
        (INPUT COLON (Identifier COLON PrimitiveType SEMICOLON {currentScope.addSymbol(new Symbol($Identifier.text, $PrimitiveType.text, null));})+)?
        noReturnBlock
    ;

mainModuleDeclaration
    :   MODULE
        Identifier
        noReturnBlock
    ;

block
    :   BEGIN {currentScope = currentScope.enterScope();} statement* END {currentScope = currentScope.exitScope();}
    ;

noReturnBlock
    :
        BEGIN {currentScope = currentScope.enterScope();} noReturnStatement* END {currentScope = currentScope.exitScope();}
    ;

supBlock
    :
        BEGIN {currentScope = currentScope.enterScope();} statement* END {currentScope = currentScope.exitScope();}
    |   statement
    ;

noReturnSupBlock
    :
    BEGIN {currentScope = currentScope.enterScope();}  noReturnStatement* END {currentScope = currentScope.exitScope();}
    |   noReturnStatement
    ;

noReturnStatement
    :
        IF expression THEN noReturnSupBlock (ELSE noReturnSupBlock)?
    |   WHILE expression noReturnSupBlock
    |   expression SEMICOLON
    |   assignment
    |   SEMICOLON
    |   varDeclaration
    |   WRITE expression SEMICOLON
    |   READ Identifier SEMICOLON
    |   noReturnBlock
    ;

statement
    :   IF expression THEN supBlock (ELSE supBlock)?
    |   WHILE expression supBlock
    |   expression SEMICOLON
    |   assignment
    |   SEMICOLON
    |   varDeclaration
    |   WRITE expression SEMICOLON
    |   READ Identifier SEMICOLON
    |   RETURN expression SEMICOLON
    |   block
    ;

expression
    :   STRINGCONSTANT
    |   REALCONSTANT
    |   BOOLEANCONSTANT
    |   PO expression PC
    |   Identifier PO expressionList? PC
    |   NOT expression
    |   expression FACTORIAL
    |   expression POW expression
    |   expression (MUL | DIV | MOD) expression
    |   expression (ADD | SUB) expression
    |   expression (LE | GE | GT | LT | EQUAL | NOTEQUAL) expression
    |   expression XOR expression
    |   expression AND expression
    |   expression OR expression
    |   expression QUESTION expression COLON expression
    |   Identifier {if(currentScope.findSymbol($Identifier.text) == null) System.err.println("variable " +  $Identifier.text + " not defined");}
    ;

expressionList
    :   expression (COMMA expression)*
    ;

varDeclaration
    :   Identifier
        COLON
        PrimitiveType SEMICOLON {currentScope.addSymbol(new Symbol($Identifier.text, $PrimitiveType.text, null));}
    ;

assignment
    :   Identifier ASSIGN expression SEMICOLON
    ;

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
DigitOrLetter : [a-zA-Z0-9];

PrimitiveType
    :   REAL
    |   BOOL
    |   STRING
    ;

BOOLEANCONSTANT :   TRUE | FALSE;

STRINGCONSTANT  :   '"' (~[\r\n]*)? '"';

REALCONSTANT
     :  [0-9]+
     |  [0-9]* ('.' [0-9]+)
     |  '0' X [0-9A-Fa-f]+
     ;

STRING        : S T R I N G;
REAL          : R E A L;
BOOL          : B O O L;
TRUE          : T R U E;
FALSE         : F A L S E;
ELSE          : E L S E;
THEN          : T H E N;
IF            : I F;
RETURN        : R E T U R N;
WHILE         : W H I L E;
MODULE        : M O D U L E;
BEGIN         : B E G I N;
END           : E N D;
INPUT         : I N P U T;
OUTPUT        : O U T P U T;
WRITE         : W R I T E;
READ          : R E A D;


SEMICOLON       : ';';
COMMA           : ',';
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
    :   '%%' ((~[\r\n])*)? -> skip
    ;