/**
 * Created by amin on 10/7/16.
 */

import org.antlr.v4.runtime.*;

import java.io.FileInputStream;
import java.io.IOException;

public class Test {

    private static String[] testFiles = {
            "./src/tests/test1.fapla",
            //"./src/tests/test2.fapla",
    };

    private static void lexicalAnalayze(String fileAddress) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(fileAddress);
        Fapla lexer = new Fapla(new ANTLRInputStream(fileInputStream));
        for (Token token : lexer.getAllTokens()) {
            System.out.println(lexer._SYMBOLIC_NAMES[token.getType()] + " : " + token.getText());
        }
    }

    public static void main(String[] args) throws IOException {
        for (int i = 0; i < testFiles.length; i++) {
            System.out.println("Test #" + i + " " + testFiles[i] + " lexical Analayzing START");
            lexicalAnalayze(testFiles[i]);
            System.out.println("Test #" + i + " " + testFiles[i] + " lexical Analayzing END");
        }
    }
}
