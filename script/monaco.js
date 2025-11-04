require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.49.0/min/vs" } });

let codeEditor

require(["vs/editor/editor.main"], function (monaco) {
    setTokeniser(monaco)
});

function setTokeniser(monaco) {
    registerLanguage(monaco)
    setEditor(monaco)
}

function setEditor(monaco) {
    codeEditor = monaco.editor.create(document.getElementById("code"), {
    value: ``,
    language: "javascript",
    theme: "vs-dark",
    automaticLayout: true
    });
}

function registerLanguage() {
    monaco.languages.register({ id: "tcScript" });

    monaco.languages.setMonarchTokensProvider("tcScript", {
	tokenizer: {
		root: [
			[/\[error.*/, "custom-error"],
			[/\[notice.*/, "custom-notice"],
			[/\[info.*/, "custom-info"],
			[/\[[a-zA-Z 0-9:]+\]/, "custom-date"],
		],
	},
    });

    monaco.editor.defineTheme("myCoolTheme", {
	base: "vs",
	inherit: false,
	rules: [
		{ token: "custom-info", foreground: "808080" },
		{ token: "custom-error", foreground: "ff0000", fontStyle: "bold" },
		{ token: "custom-notice", foreground: "FFA500" },
		{ token: "custom-date", foreground: "008800" },
	],
	colors: {
		"editor.foreground": "#000000",
	},
});

// Register a completion item provider for the new language
monaco.languages.registerCompletionItemProvider("tcScript", {
	provideCompletionItems: (model, position) => {
		var word = model.getWordUntilPosition(position);
		var range = {
			startLineNumber: position.lineNumber,
			endLineNumber: position.lineNumber,
			startColumn: word.startColumn,
			endColumn: word.endColumn,
		};
		var suggestions = [
			{
				label: "simpleText",
				kind: monaco.languages.CompletionItemKind.Text,
				insertText: "simpleText",
				range: range,
			},
			{
				label: "testing",
				kind: monaco.languages.CompletionItemKind.Keyword,
				insertText: "testing(${1:condition})",
				insertTextRules:
					monaco.languages.CompletionItemInsertTextRule
						.InsertAsSnippet,
				range: range,
			},
			{
				label: "ifelse",
				kind: monaco.languages.CompletionItemKind.Snippet,
				insertText: [
					"if (${1:condition}) {",
					"\t$0",
					"} else {",
					"\t",
					"}",
				].join("\n"),
				insertTextRules:
					monaco.languages.CompletionItemInsertTextRule
						.InsertAsSnippet,
				documentation: "If-Else Statement",
				range: range,
			},
		];
		return { suggestions: suggestions };
	},
});
}
