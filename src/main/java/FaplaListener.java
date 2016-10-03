// Generated from src/antlr/Fapla.g4 by ANTLR 4.5
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FaplaParser}.
 */
public interface FaplaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FaplaParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void enterCompilationUnit(FaplaParser.CompilationUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void exitCompilationUnit(FaplaParser.CompilationUnitContext ctx);
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
	 * Enter a parse tree produced by {@link FaplaParser#moduleInput}.
	 * @param ctx the parse tree
	 */
	void enterModuleInput(FaplaParser.ModuleInputContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#moduleInput}.
	 * @param ctx the parse tree
	 */
	void exitModuleInput(FaplaParser.ModuleInputContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#moduleOutput}.
	 * @param ctx the parse tree
	 */
	void enterModuleOutput(FaplaParser.ModuleOutputContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#moduleOutput}.
	 * @param ctx the parse tree
	 */
	void exitModuleOutput(FaplaParser.ModuleOutputContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#moduleBody}.
	 * @param ctx the parse tree
	 */
	void enterModuleBody(FaplaParser.ModuleBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#moduleBody}.
	 * @param ctx the parse tree
	 */
	void exitModuleBody(FaplaParser.ModuleBodyContext ctx);
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
	 * Enter a parse tree produced by {@link FaplaParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void enterBlockStatement(FaplaParser.BlockStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void exitBlockStatement(FaplaParser.BlockStatementContext ctx);
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
	 * Enter a parse tree produced by {@link FaplaParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterPrimary(FaplaParser.PrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitPrimary(FaplaParser.PrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#primitiveType}.
	 * @param ctx the parse tree
	 */
	void enterPrimitiveType(FaplaParser.PrimitiveTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#primitiveType}.
	 * @param ctx the parse tree
	 */
	void exitPrimitiveType(FaplaParser.PrimitiveTypeContext ctx);
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
	 * Enter a parse tree produced by {@link FaplaParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(FaplaParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(FaplaParser.LiteralContext ctx);
}