import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;

/**
 * Created by amin on 10/30/16.
 */
public class ParserFacade {

    private static String readFile(File file, Charset encoding) throws IOException {
        byte[] encoded = Files.readAllBytes(file.toPath());
        return new String(encoded, encoding);
    }

    public static ParserRuleContext parse(File file) throws IOException {
        String code = readFile(file, Charset.forName("UTF-8"));
        FaplaLexer lexer = new FaplaLexer(new ANTLRInputStream(code));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        FaplaParser parser = new FaplaParser(tokens);
        return parser.startState();
    }
}
