grammar Fapla;

@parser::header {
const Scope = require('./Scope').Scope;
const Symbol = require('./Symbol').Symbol;
const Function = require('./Function').Function;
const TypeConverting = require('./TypeConverting').TypeConverting;
var rootScope = new Scope('root', null);
var currentScope = rootScope;
var functionTable = [];

function hasAccess(callerName, calleName, functionTable) {
    var i = 0, j = 0;
    for(i = 0; i < functionTable.length; i++) {
        if(functionTable[i].name == callerName) {
            break;
        }
    }
    for(j = 0; j < functionTable.length; j++) {
        if(functionTable[j].name == calleName) {
            break;
        }
    }
    if(j == functionTable.length) {
        return "notFound";
    } else if (j > i) {
        return "notDecBefore";
    }
    return null;
}

function getFunction(functionName) {
    for(var i = 0; i < functionTable.length; i++) {
        if(functionTable[i].name == functionName) {
            break;
        }
    }
    return functionTable[i];
}
}

@parser::members {

}

program
    :   (moduleDeclaration)* mainModuleDeclaration (moduleDeclaration)*
    ;

moduleDeclaration
    :   MODULE
        a=Identifier
        {
            var scope = new Scope($a.text, rootScope);
            currentScope = scope;
            var paramterList = [];
        }
        (INPUT COLON (Identifier COLON PrimitiveType SEMICOLON
        {
            var s = new Symbol($Identifier.text, $PrimitiveType.text, null);
            paramterList.push(s);
            currentScope.addSymbol(s);
        }
        )+)?
        (OUTPUT COLON PrimitiveType SEMICOLON)?
        {
            var f = new Function($a.text, $PrimitiveType.text, paramterList);
            functionTable.push(f);
        }
        moduleBlock
    ;

mainModuleDeclaration
    :   MODULE
        'main'
        {
            var mainScope = new Scope('main', rootScope);
            currentScope = mainScope;
            var f = new Function('main', null, null);
            functionTable.push(f);
        }
        moduleBlock
    ;

moduleBlock
    :
        BEGIN statement*
        {
             var f = getFunction(currentScope.name);
             if (!f.hadReturn && f.name != 'main') {
                 FaplaParser.prototype.logger.error("module " + f.name + " must be has return experssion");
             }
        }
        END
    ;

block
    :   BEGIN {currentScope = currentScope.enterScope();} statement* END {currentScope = currentScope.exitScope();}
    ;

supBlock
    :
        BEGIN {currentScope = currentScope.enterScope();} statement* END {currentScope = currentScope.exitScope();}
    |   statement
    ;

statement returns [type]
    :   IF expression
        {   if($expression.type != "bool")
                FaplaParser.prototype.logger.error("expression " + $expression.text + " must be a bool in if-statement condition");
        }
        THEN supBlock (ELSE supBlock)?

    |   WHILE expression supBlock
        {   if($expression.type != "bool")
                FaplaParser.prototype.logger.error("expression " + $expression.text + " must be a bool in if-statement condition");
        }
    |   expression SEMICOLON
    |   assignment
    |   SEMICOLON
    |   varDeclaration
    |   WRITE expression SEMICOLON
    |   READ Identifier SEMICOLON
        {
            if(!currentScope.findSymbol($Identifier.text)) {
                FaplaParser.prototype.logger.error("variable " + $Identifier.text + " must be declared before");
            }
        }
    |   RETURN expression SEMICOLON
        {
            // check if currentFunctinon has output or not
            var f = getFunction(currentScope.name);
            f.hadReturn = true;
            if(!f.outputType) {
                FaplaParser.prototype.logger.error("module " + f.name + " has no output");
            } else if(!TypeConverting.canConvertTo($expression.type, f.outputType)) {
                FaplaParser.prototype.logger.error("module " + f.name + " must return " + f.outputType);
            }
        }
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
        {
            var callerName = currentScope.name;
            var calleName = $Identifier.text;
            var access = hasAccess(callerName, calleName, functionTable);
            if(access == "notFound") {
                FaplaParser.prototype.logger.error("module " + calleName + " not defined");
            } else if(access == "notDecBefore") {
                FaplaParser.prototype.logger.error("module " + calleName + " not defined before module " + callerName);
            } else {

            }
        }
    |   NOT a=expression {if(TypeConverting.canConvertTo($a.type, "bool")) {
                           $type = "bool";
                       } else {
                           FaplaParser.prototype.logger.error($a.type + " can not NOT");
                           $type="noType";
                       }
                      }


    |   a=expression FACTORIAL {if(TypeConverting.canConvertTo($a.type, "real")) {
                                    $type = "real";
                                } else {
                                    FaplaParser.prototype.logger.error($a.type + " can not factorial");
                                    $type="noType";
                                }
                               }

    |   a=expression POW b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
                $type = "real";
           else {
                FaplaParser.prototype.logger.error($a.type + " can not POW with " + $b.type);
                $type="noType";
           }
          }

    |   a=expression MUL b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
              $type = "real";
         else {
              FaplaParser.prototype.logger.error($a.type + " can not MUL with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression DIV b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
           $type = "real";
        else {
           FaplaParser.prototype.logger.error($a.type + " can not DIV with " + $b.type);
           $type="noType";
        }
        }
    |   a=expression MOD b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
            $type = "real";
        else {
            FaplaParser.prototype.logger.error($a.type + " can not MOD with " + $b.type);
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
              FaplaParser.prototype.logger.error($a.type + " can not SUB with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression LE b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
               $type = "bool";
          else {
               FaplaParser.prototype.logger.error($a.type + " can not LE with " + $b.type);
               $type="noType";
          }
         }
    |   a=expression GE b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
               $type = "bool";
          else {
               FaplaParser.prototype.logger.error($a.type + " can not GE with " + $b.type);
               $type="noType";
          }
         }

    |   a=expression GT b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
           $type = "bool";
         else {
           FaplaParser.prototype.logger.error($a.type + " can not GT with " + $b.type);
           $type="noType";
         }
        }

    |   a=expression LT b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
           $type = "bool";
         else {
           FaplaParser.prototype.logger.error($a.type + " can not SUB with " + $b.type);
           $type="noType";
         }
        }

    |   a=expression EQUAL b=expression
        {if(TypeConverting.canConvertTo($a.type, $b.type))
              $type = "bool";
         else {
              FaplaParser.prototype.logger.error($a.type + " can not EQUAL with " + $b.type);
              $type="noType";
         }
        }

    |   a=expression NOTEQUAL b=expression
        {if(TypeConverting.canConvertTo($a.type, $b.type))
              $type = "bool";
         else {
              FaplaParser.prototype.logger.error($a.type + " can not NOTEQUAL with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression XOR b=expression
        {if(TypeConverting.canConvertTo($a.type, "real") && TypeConverting.canConvertTo($b.type, "real"))
              $type = "real";
         else {
              FaplaParser.prototype.logger.error($a.type + " can not XOR with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression AND b=expression
        {if(TypeConverting.canConvertTo($a.type, "bool") && TypeConverting.canConvertTo($b.type, "bool"))
              $type = "bool";
         else {
              FaplaParser.prototype.logger.error($a.type + " can not AND with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression OR b=expression
        {if(TypeConverting.canConvertTo($a.type, "bool") && TypeConverting.canConvertTo($b.type, "bool"))
              $type = "bool";
         else {
              FaplaParser.prototype.logger.error($a.type + " can not OR with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression QUESTION b=expression COLON c=expression
        {if(TypeConverting.canConvertTo($a.type, "bool"))
              $type = $b.type;
         else {
              FaplaParser.prototype.logger.error("condition expression must have a bool");
              $type="noType";
         }
        }
    |   Identifier {var s = currentScope.findSymbol($Identifier.text);
                    if(!s) {
                        FaplaParser.prototype.logger.error("variable " +  $Identifier.text + " not defined");
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
                FaplaParser.prototype.logger.error("variable " +  $Identifier.text + " not defined");
                $type = "noType";
            } else {
                if(TypeConverting.canConvertTo($expression.type, s.type)) {
                    s.value = $expression.value;
                    $type = s.type;
                } else {
                    FaplaParser.prototype.logger.error("can not assign " + $expression.type + " to " + s.type);
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