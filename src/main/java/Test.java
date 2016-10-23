/**
 * Created by amin on 10/7/16.
 */

import org.antlr.v4.runtime.*;

import java.io.IOException;

public class Test {

    private static void ex(String source) throws IOException {
        //FileInputStream f = new FileInputStream(fileAddress);
        Fapla lexer = new Fapla(new ANTLRInputStream(source));
        for (Token t : lexer.getAllTokens()) {
            System.out.println(lexer.tokenNames[t.getType()]);
        }
    }


    public static void main(String[] args) throws IOException {
        ex("%%% this is a one line comment %%%\n" +
                "Module printpriprintpriprintpriprintpri" + " %%% this is a one line comment %%% " +
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
                " End ");
    }
}
