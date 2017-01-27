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
        if(functionTable[i].name == callerName.toLowerCase()) {
            break;
        }
    }
    for(j = 0; j < functionTable.length; j++) {
        if(functionTable[j].name == calleName.toLowerCase()) {
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

function checkArguments(func, args) {
    if(func.parameterList.length != args.length)
        FaplaParser.prototype.logger.error("module " + func.name + " need " + func.parameterList.length + " parameters but found " + args.length + " parameters");
    else {
        let i = 0;
        for (i = 0; i < func.parameterList.length; i++) {
            if(func.parameterList[i].type != args[i])
                break;
        }
        if(i < func.parameterList.length) {
            FaplaParser.prototype.logger.error("module " + func.name + " need " + func.toString() + " but found " + args);
        }
    }
}
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
            let f = new Function($a.text, null, null);
        }
        (INPUT COLON (Identifier COLON PrimitiveType SEMICOLON
        {
            var s = new Symbol($Identifier.text.toLowerCase(), $PrimitiveType.text, null);
            paramterList.push(s);
            currentScope.addSymbol(s);
        }
        )+)?
        {
            f.parameterList = paramterList;
        }
        (OUTPUT COLON PrimitiveType SEMICOLON
        {
            f.outputType = $PrimitiveType.text;
        })?
        {
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
            let f = new Function('main', null, null);
            functionTable.push(f);
        }
        moduleBlock
    ;

moduleBlock
    :
        BEGIN statement*
        {
             var f = getFunction(currentScope.name);
             if (!f.returnflag && f.outputType) {
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
        {   if(!TypeConverting.canConvertTo($expression.type, "bool"))
                FaplaParser.prototype.logger.error("expression " + $expression.text + " must be a bool in if-statement condition");
        }
        THEN supBlock (ELSE supBlock)?

    |   WHILE expression supBlock
        {   if(!TypeConverting.canConvertTo($expression.type, "bool"))
                FaplaParser.prototype.logger.error("expression " + $expression.text + " must be a bool in while-statement condition");
        }
    |   RETURN expression SEMICOLON
        {
            var f = getFunction(currentScope.name);
            f.returnflag = true;
            if(!f.outputType) {
                FaplaParser.prototype.logger.error("module " + f.name + " has no output");
            } else if(!TypeConverting.canConvertTo($expression.type, f.outputType)) {
                FaplaParser.prototype.logger.error("module " + f.name + " must return " + f.outputType);
            }
        }
    |   WRITE expression { if(!TypeConverting.canConvertTo($expression.type, "string")) FaplaParser.prototype.logger.error("write exprssion must be a string");}
        SEMICOLON
    |   READ Identifier SEMICOLON
        {
            if(!currentScope.findSymbol($Identifier.text.toLowerCase())) {
                FaplaParser.prototype.logger.error("variable " + $Identifier.text + " must be declared before");
                $type = "noType";
            } else $type = currentScope.findSymbol($Identifier.text.toLowerCase()).type;
        }
    |   expression SEMICOLON
    |   assignment
    |   SEMICOLON
    |   varDeclaration
    |   block
    ;

expression returns [value, type]
    :   STRINGCONSTANT {$expression.type = "string";
                        $expression.value = $STRINGCONSTANT.text; }

    |   REALCONSTANT {$expression.type = "real";
                      $expression.value = $REALCONSTANT.text; }

    |   BOOLEANCONSTANT {$expression.type = "bool";
                         $expression.value = $BOOLEANCONSTANT.text; }


    |   PO a=expression PC
        {
            $value = "(" + $expression.value + ")";
            $type = $a.type;
        }
    |   Identifier PO { let args = []; } (a=expressionList { args = $a.type; } )? PC
        {
            var callerName = currentScope.name;
            var calleName = $Identifier.text;
            var access = hasAccess(callerName, calleName, functionTable);
            if(access == "notFound") {
                FaplaParser.prototype.logger.error("module " + calleName + " not defined");
            } else if(access == "notDecBefore") {
                FaplaParser.prototype.logger.error("module " + calleName + " not defined before module " + callerName);
            } else {
                let func = getFunction(calleName);
                console.log(func.parameterList, args);
                checkArguments(func, args);
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
        {if(TypeConverting.canConvertTo($a.type, $b.type) && TypeConverting.canConvertTo($b.type, $a.type))
              $type = "bool";
         else {
              FaplaParser.prototype.logger.error($a.type + " can not EQUAL with " + $b.type);
              $type="noType";
         }
        }

    |   a=expression NOTEQUAL b=expression
        {if(TypeConverting.canConvertTo($a.type, $b.type) && TypeConverting.canConvertTo($b.type, $a.type))
              $type = "bool";
         else {
              FaplaParser.prototype.logger.error($a.type + " can not NOTEQUAL with " + $b.type);
              $type="noType";
         }
        }
    |   a=expression XOR b=expression
        {if(TypeConverting.canConvertTo($a.type, "bool") && TypeConverting.canConvertTo($b.type, "bool"))
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
              $type = TypeConverting.max($b.type, $c.type);
         else {
              FaplaParser.prototype.logger.error("condition expression must have a bool");
              $type="noType";
         }
        }
    |   Identifier {var s = currentScope.findSymbol($Identifier.text.toLowerCase());
                    if(!s) {
                        FaplaParser.prototype.logger.error("variable " +  $Identifier.text + " not defined");
                        $type = "noType";
                    } else {
                        $type = s.type;
                        $value = s.value;
                    }
                   }
    ;

expressionList returns [type]
    :   a=expression {$type = [$a.type];} (COMMA b=expression {$type[$type.length] = $b.type;} )*
    ;

varDeclaration
    :   Identifier
        COLON
        PrimitiveType SEMICOLON
        {
            if(currentScope.findSymbol($Identifier.text.toLowerCase())) {
                FaplaParser.prototype.logger.error("variable " +  $Identifier.text + " decleared before");
            } else {
                currentScope.addSymbol(new Symbol($Identifier.text.toLowerCase(), $PrimitiveType.text, null));
            }
        }
    ;

assignment returns [type]
    :   Identifier ASSIGN expression SEMICOLON
        {
            var s = currentScope.findSymbol($Identifier.text.toLowerCase());
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