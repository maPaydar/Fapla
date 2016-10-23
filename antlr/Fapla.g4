lexer grammar Fapla;

Literal
    :   [0-9]+ | [0-9]+ DOT [0-9]+ | '0'('x'|'X')[0-9A-Fa-f]+ | ('0'('x'|'X')[0-9A-Fa-f]+ DOT '0'('x'|'X')[0-9A-Fa-f]+)
    |   '"' (~["\\, '\n']*)? '"'
    |   'true' |'false'
    ;

PrimitiveType
    :   BOOL
    |   REAL
    |   STRING
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
    : [a-zA-Z_]
    ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9]
    ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9]
    ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9]
    ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9]
    ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9]
    ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9] ([a-zA-Z_] | [0-9]
     ([a-zA-Z_] | [0-9] [a-zA-Z_] | [0-9]?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?)?
;


WS  :  [ \t\r\n\u000C]+ -> skip
    ;

COMMENT
    :   '%%%' .*? '%%%' -> skip
    ;

LINE_COMMENT
    :   '%%' ~[\r\n]* -> skip
    ;