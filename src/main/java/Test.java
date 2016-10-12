/**
 * Created by amin on 10/7/16.
 */

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.ParseTree;

import java.lang.System;

public class Test {


    public static void print(RuleContext ctx) {
        explore(ctx, 0);
    }

    private static void explore(RuleContext ctx, int indentation) {
        String ruleName = FaplaParser.ruleNames[ctx.getRuleIndex()];
        for (int i = 0; i < indentation; i++) {
            System.out.print("  ");
        }
        System.out.println(ruleName + " ==> " + ctx.getText());
        for (int i = 0; i < ctx.getChildCount(); i++) {
            ParseTree element = ctx.getChild(i);
            if (element instanceof RuleContext) {
                explore((RuleContext) element, indentation + 1);
            }
        }
    }

    public static void main(String[] args) {
        FaplaLexer lexer = new FaplaLexer((new ANTLRInputStream(
                "%%% this is a one line comment %%%\n" +
                        "Module print" +
                        "%%% this is a \none line comment %%%\n" +
                        " Input:" +
                        "__xYy:Real;" +
                        "y:Real;" +
                        "%%% this \n\n\nis a one line comment %%%\n" +
                        "Output:Real;" +
                        "Begin " +
                        "return x + y;" +
                        " End " +
                        "Module main\n" +
                        "Begin\n" +
                        "\n" +
                        "%%% this is a one line comment %%%\n" +
                        "\ttext: String;\n" +
                        "\tprint(text);\n" +
                        "a = 0x123 + 123.654;" +
                        "write \"asdxcnv__./^#$dewfasdfasdf\";" +
                        "\n" +
                        "End "
                        + "Module print" +
                        " Input:" +
                        "x:Real;" +
                        "y:Real;" +
                        "Output:Real;" +
                        "Begin " +
                        "return x + y;" +
                        " End ")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        FaplaParser parser = new FaplaParser(tokens);

        FaplaParser.CompilationUnitContext ctx = parser.compilationUnit();

        //FaplaBaseListener faplaBaseListener = new FaplaBaseListener();
        //faplaBaseListener.enterCompilationUnit(ctx);

        print(ctx);
    }
}
