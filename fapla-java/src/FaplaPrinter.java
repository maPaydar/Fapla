

import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.RuleContext;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.tree.ParseTree;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * Created by amin on 10/30/16.
 */
public class FaplaPrinter {

    public static final String TEST_FILE_PATH = "./fapla-java/test/test3.fapla";

    public static void printTokens() throws IOException {
        FaplaLexer lexer = new FaplaLexer(new ANTLRInputStream(new FileInputStream(new File(TEST_FILE_PATH))));
        for (Token token : lexer.getAllTokens()) {
            System.out.println("Token : " + token);
        }
    }

    public static void printRules() throws IOException {
        ParserFacade.parse(new File(TEST_FILE_PATH));
        //printRules();
    }

    public static void printRules(RuleContext ctx) {
        explore(ctx, 0);
    }

    private static void explore(RuleContext ctx, int indentation) {
        String ruleName = FaplaParser.ruleNames[ctx.getRuleIndex()];
        for (int i = 0; i < indentation; i++) {
            System.out.print("  ");
        }
        System.out.println(ruleName);
        for (int i = 0; i < ctx.getChildCount(); i++) {
            ParseTree element = ctx.getChild(i);
            if (element instanceof RuleContext) {
                explore((RuleContext) element, indentation + 1);
            }
        }
    }
}
