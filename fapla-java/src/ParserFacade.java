
import org.antlr.v4.gui.TreeViewer;
import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;

import javax.swing.*;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.util.Arrays;


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
        ParseTree tree = parser.program();
        JFrame frame = new JFrame("Antlr TreeViewer");
        JPanel panel = new JPanel();
        TreeViewer viewr = new TreeViewer(Arrays.asList(
                parser.getRuleNames()), tree);
        viewr.setScale(1.4);
        panel.add(viewr);
        JScrollPane scroll = new JScrollPane(panel);
        frame.add(scroll);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setExtendedState(JFrame.MAXIMIZED_BOTH);
        frame.setVisible(true);
        return (ParserRuleContext) tree;
    }
}
