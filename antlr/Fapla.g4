grammar Fapla;

compilationUnit
    :   moduleDeclaration* mainModuleDeclaration moduleDeclaration* EOF
    ;

moduleDeclaration
    :   MODULE
        Identifier
        (INPUT COLON (Identifier COLON primitiveType SEMI)*)?
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
    :   IF expression THEN statement (ELSE statement)?
    |   WHILE expression statement
    |   SEMI
    |   expression SEMI
    |   assignment
    |   varDeclaration
    |   WRITE expression SEMI
    |   READ Identifier SEMI
    |   RETURN expression SEMI
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
    |   Identifier PO expressionList PC
    |   Literal
    |   Identifier
    |   block
    ;

expressionList
    :   expression (COMMA expression)*
    ;

primitiveType
    :   BOOL
    |   REAL
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
    :   [0-9]+ | [0-9]+ DOT [0-9]+ | '0'('x'|'X')[0-9A-Fa-f]+ | ('0'('x'|'X')[0-9A-Fa-f]+ DOT '0'('x'|'X')[0-9A-Fa-f]+)
    |   '"' (~["\\, '\n']*)? '"'
    |   'true' |'false'
    ;


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
WRITE         : 'write';
READ          : 'read';

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


Identifier
    : [a-zA-Z_] ([a-zA-Z_] | [0-9])*
;


WS  :  [ \t\r\n\u000C]+ -> skip
    ;

COMMENT
    :   '%%%' .*? '%%%' -> skip
    ;

LINE_COMMENT
    :   '%%' ~[\r\n]* -> skip
    ;