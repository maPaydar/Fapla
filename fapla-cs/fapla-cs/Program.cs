using Antlr4.Runtime;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace faplacs
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			//Console.WriteLine ("Hello World!");
			StreamReader inputStream = new StreamReader(Console.OpenStandardInput());
			AntlrInputStream input = new AntlrInputStream(inputStream.ReadLine());
			var lexer = new FaplaLexer(input);
			CommonTokenStream tokens = new CommonTokenStream(lexer);
			var parser = new FaplaParser(tokens);
			var exp = parser.startState();
			Console.ReadLine();
		}
	}
}
