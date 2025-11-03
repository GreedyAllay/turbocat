require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.49.0/min/vs" } });

let codeEditor

require(["vs/editor/editor.main"], function () {
    codeEditor = monaco.editor.create(document.getElementById("code"), {
    value: `// A little example. This moves the sprite and rotates it slightly.
transform.shift(5, 5)
transform.spin(20)
`,
    language: "javascript",
    theme: "vs-dark",
    automaticLayout: true
    });
});

monaco.languages.typescript.javascriptDefaults.addExtraLib(`

declare const transform: {
    move(x: number, y: number): void;
};

declare const sprites: poop;
declare const textures: any;
`)
