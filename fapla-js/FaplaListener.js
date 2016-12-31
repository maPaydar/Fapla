// Generated from /home/amin/Programming/Courses/Fapla/fapla-antlr/Fapla.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by FaplaParser.
function FaplaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

FaplaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
FaplaListener.prototype.constructor = FaplaListener;

// Enter a parse tree produced by FaplaParser#program.
FaplaListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#program.
FaplaListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#moduleDeclaration.
FaplaListener.prototype.enterModuleDeclaration = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#moduleDeclaration.
FaplaListener.prototype.exitModuleDeclaration = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#mainModuleDeclaration.
FaplaListener.prototype.enterMainModuleDeclaration = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#mainModuleDeclaration.
FaplaListener.prototype.exitMainModuleDeclaration = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#moduleBlock.
FaplaListener.prototype.enterModuleBlock = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#moduleBlock.
FaplaListener.prototype.exitModuleBlock = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#moduleBlockWithReturn.
FaplaListener.prototype.enterModuleBlockWithReturn = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#moduleBlockWithReturn.
FaplaListener.prototype.exitModuleBlockWithReturn = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#block.
FaplaListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#block.
FaplaListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#supBlock.
FaplaListener.prototype.enterSupBlock = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#supBlock.
FaplaListener.prototype.exitSupBlock = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#statement.
FaplaListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#statement.
FaplaListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#expression.
FaplaListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#expression.
FaplaListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#expressionList.
FaplaListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#expressionList.
FaplaListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#varDeclaration.
FaplaListener.prototype.enterVarDeclaration = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#varDeclaration.
FaplaListener.prototype.exitVarDeclaration = function(ctx) {
};


// Enter a parse tree produced by FaplaParser#assignment.
FaplaListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by FaplaParser#assignment.
FaplaListener.prototype.exitAssignment = function(ctx) {
};



exports.FaplaListener = FaplaListener;