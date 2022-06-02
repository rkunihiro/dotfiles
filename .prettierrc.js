/**
 * @type {import("prettier").Config}
 */
module.exports = {
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    quoteProps: "consistent",
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",

    overrides: [
        {
            files: ["Makefile", "makefile", "*.mk"],
            options: {
                useTabs: true,
            },
        },
        {
            files: "*.go",
            options: {
                useTabs: true,
            },
        },
        {
            files: ["*.yaml", "*.yml"],
            options: {
                tabWidth: 2,
                singleQuote: true,
            },
        },
    ],
};
