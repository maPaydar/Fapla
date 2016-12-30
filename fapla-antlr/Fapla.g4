grammar Fapla;

@parser::header {
const Scope = require('./Scope').Scope;
const Symbol = require('./Symbol').Symbol;
const TypeConverting = require('./TypeConverting').TypeConverting;
var rootScope = new Scope(null);
var currentScope = rootScope;
}

@parser::members {

}

program
    :   (moduleDeclaration {var scope = new Scope(rootScope);currentScope=scope;} | noRetuenModuleDeclaration {var scope = new Scope(rootScope);currentScope=scope;})* mainModuleDeclaration {var mainScope = new Scope(rootScope);currentScope=mainScope;} (moduleDeclaration {var scope = new Scope(rootScope);currentScope=scope;} | noRetuenModuleDeclaration {var scope = new Scope(rootScope);currentScope=scope;})*
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
    :   IF expression {if($expression.type != "bool") console.log("expression " + $expression.text + " must be a bool in if-statement condition");} THEN supBlock (ELSE supBlock)?
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

expression returns [value, type]
    :   STRINGCONSTANT {$expression.type = "string";
                        $expression.value = $STRINGCONSTANT.text; }

    |   REALCONSTANT {$expression.type = "real";
                      $expression.value = $REALCONSTANT.text; }

    |   BOOLEANCONSTANT {$expression.type = "bool";
                         $expression.value = $BOOLEANCONSTANT.text; }


    |   PO expression PC {$value = "(" + $expression.value + ")";}


    |   Identifier PO expressionList? PC


    |   NOT a=expression {if(TypeConverting.canConvertTo($a.type, "bool")) {
                           $type = "bool";
                       } else {
                           console.log($a.type + " can not NOT");
                           $type="noType";
                       }
                      }


    |   a=expression FACTORIAL {if(TypeConverting.canConvertTo($a.type, "real")) {
                                    $type = "real";
                                } else {
                                    console.log($a.type + " can not factorial");
                                    $type="noType";
                                }
                               }

    |   a=expression POW b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
                $type = "real";
           else {
                console.log($a.type + " can not POW with " + $b.type);
                $type="noType";
           }
          }

    |   a=expression MUL b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
              $type = "real";
         else {
              console.log($a.type + " can not MUL with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression DIV b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
           $type = "real";
        else {
           console.log($a.type + " can not DIV with " + $b.type);
           $type="noType";
        }
        }
    |   a=expression MOD b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
            $type = "real";
        else {
            console.log($a.type + " can not MOD with " + $b.type);
            $type="noType";
        }
        }
    |   a=expression ADD b=expression
        {
            $type = TypeConverting.max($a.type, $b.type);
        }
    |   a=expression SUB b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
              $type = "real";
         else {
              console.log($a.type + " can not SUB with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression LE b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
               $type = "bool";
          else {
               console.log($a.type + " can not LE with " + $b.type);
               $type="noType";
          }
         }
    |   a=expression GE b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
               $type = "bool";
          else {
               console.log($a.type + " can not GE with " + $b.type);
               $type="noType";
          }
         }

    |   a=expression GT b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
           $type = "bool";
         else {
           console.log($a.type + " can not GT with " + $b.type);
           $type="noType";
         }
        }

    |   a=expression LT b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
           $type = "bool";
         else {
           console.log($a.type + " can not SUB with " + $b.type);
           $type="noType";
         }
        }

    |   a=expression EQUAL b=expression
        {if(TypeConverting.canConvertTo($a.type, $b.type))
              $type = "bool";
         else {
              console.log($a.type + " can not EQUAL with " + $b.type);
              $type="noType";
         }
        }

    |   a=expression NOTEQUAL b=expression
        {if(TypeConverting.canConvertTo($a.type, $b.type))
              $type = "bool";
         else {
              console.log($a.type + " can not NOTEQUAL with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression XOR b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
              $type = "real";
         else {
              console.log($a.type + " can not XOR with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression AND b=expression
        {if(TypeConverting.canConvertTo($a.type, "bool") && TypeConverting.canConvertTo($b.type, "bool"))
              $type = "bool";
         else {
              console.log($a.type + " can not AND with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression OR b=expression
        {if(TypeConverting.canConvertTo($a.type, "bool") && TypeConverting.canConvertTo($b.type, "bool"))
              $type = "bool";
         else {
              console.log($a.type + " can not OR with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression QUESTION b=expression COLON c=expression
        {if(TypeConverting.canConvertTo($a.type, "bool"))
              $type = $b.type;
         else {
              console.log("condition expression must have a bool");
              $type="noType";
         }
        }
    |   Identifier {var s = currentScope.findSymbol($Identifier.text);
                    if(!s) {
                        console.log("variable " +  $Identifier.text + " not defined");
                        $type = "noType";
                    } else {
                        $type = s.type;
                        $value = s.value;
                    }
                   }
    ;

expressionList
    :   expression (COMMA expression)*
    ;

varDeclaration
    :   Identifier
        COLON
        PrimitiveType SEMICOLON {currentScope.addSymbol(new Symbol($Identifier.text, $PrimitiveType.text, null));}
    ;

assignment returns [type]
    :   Identifier ASSIGN expression SEMICOLON
        {
            var s = currentScope.findSymbol($Identifier.text);
            if(!s) {
                console.log("variable " +  $Identifier.text + " not defined");
                $type = "noType";
            } else {
                if(TypeConverting.canConvertTo($expression.type, s.type)) {
                    s.value = $expression.value;
                    $type = s.type;
                } else {
                    console.log("can not assign " + $expression.type + " to " + s.type);
                    $type = "noType";
                }
            }
        }
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