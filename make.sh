#!/bin/bash
Dir=$(pwd)
Lang=$1
OutPutLang=""
AntlrGrammerPath="$Dir/fapla-antlr/Fapla.g4"
AntlrJarPath="/fapla-antlr/lib/antlr-4.5.3-complete.jar"

if [ "$Lang" = "Java" ]; then
    OutPutLang="/fapla-java/src"
elif [ "$Lang" = "Python" ]; then
    Lang="Python3"
    OutPutLang="/fapla-python"
    echo expression evaluated as python
elif [ "$Lang" = "JavaScript" ]; then
    OutPutLang="/fapla-js"
    echo expression evaluated as js
elif [ "$Lang" = "CSharp" ]; then
    OutPutLang="/fapla-cs"
    echo expression evaluated as cs
fi

AntlrMake="java -jar $Dir$AntlrJarPath -Dlanguage=$Lang $AntlrGrammerPath -o $Dir$OutPutLang"
echo $AntlrJar
$AntlrJar
