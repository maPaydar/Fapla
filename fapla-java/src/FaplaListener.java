// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3

import java.util.List;
import java.util.ArrayList;

import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link FaplaParser}.
 */
public interface FaplaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link FaplaParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(FaplaParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(FaplaParser.ProgramContext ctx);
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
	 * Enter a parse tree produced by {@link FaplaParser#noRetuenModuleDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterNoRetuenModuleDeclaration(FaplaParser.NoRetuenModuleDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#noRetuenModuleDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitNoRetuenModuleDeclaration(FaplaParser.NoRetuenModuleDeclarationContext ctx);
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
	 * Enter a parse tree produced by {@link FaplaParser#noReturnBlock}.
	 * @param ctx the parse tree
	 */
	void enterNoReturnBlock(FaplaParser.NoReturnBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#noReturnBlock}.
	 * @param ctx the parse tree
	 */
	void exitNoReturnBlock(FaplaParser.NoReturnBlockContext ctx);
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
	 * Enter a parse tree produced by {@link FaplaParser#noReturnSupBlock}.
	 * @param ctx the parse tree
	 */
	void enterNoReturnSupBlock(FaplaParser.NoReturnSupBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#noReturnSupBlock}.
	 * @param ctx the parse tree
	 */
	void exitNoReturnSupBlock(FaplaParser.NoReturnSupBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link FaplaParser#noReturnStatement}.
	 * @param ctx the parse tree
	 */
	void enterNoReturnStatement(FaplaParser.NoReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link FaplaParser#noReturnStatement}.
	 * @param ctx the parse tree
	 */
	void exitNoReturnStatement(FaplaParser.NoReturnStatementContext ctx);
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