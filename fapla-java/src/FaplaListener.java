// Generated from /home/amin/Documents/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FaplaParser}.
 */
public interface FaplaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FaplaParser#startState}.
	 * @param ctx the parse tree
	 */
	void enterStartState(FaplaParser.StartStateContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#startState}.
	 * @param ctx the parse tree
	 */
	void exitStartState(FaplaParser.StartStateContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#moduleDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterModuleDeclaration(FaplaParser.ModuleDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#moduleDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitModuleDeclaration(FaplaParser.ModuleDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#mainModuleDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterMainModuleDeclaration(FaplaParser.MainModuleDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#mainModuleDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitMainModuleDeclaration(FaplaParser.MainModuleDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(FaplaParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(FaplaParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#supBlock}.
	 * @param ctx the parse tree
	 */
	void enterSupBlock(FaplaParser.SupBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#supBlock}.
	 * @param ctx the parse tree
	 */
	void exitSupBlock(FaplaParser.SupBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(FaplaParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(FaplaParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(FaplaParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(FaplaParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList(FaplaParser.ExpressionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList(FaplaParser.ExpressionListContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#varDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVarDeclaration(FaplaParser.VarDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#varDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVarDeclaration(FaplaParser.VarDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#assignment}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(FaplaParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#assignment}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(FaplaParser.AssignmentContext ctx);
}