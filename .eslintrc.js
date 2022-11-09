/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    // Specifying Environments
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es2021: true,
        worker: true,
        jest: true,
    },
    plugins: [
        //
        "@typescript-eslint",
        "import",
        "jest",
        "react",
        "react-hooks",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        // ecmaFeatures: {
        //     jsx: true,
        // },
        // ecmaVersion: 2018,
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    extends: [
        // "eslint:all",
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    rules: {
        // ESLint rules
        // https://eslint.org/docs/rules/
        "array-callback-return": "error",
        "no-await-in-loop": "error",
        "no-constructor-return": "error",
        "no-duplicate-imports": ["error", { includeExports: true }],
        "no-promise-executor-return": "error",
        "no-self-compare": "error",
        "no-unreachable-loop": "error",
        "no-use-before-define": "error",

        "block-scoped-var": "error",
        "camelcase": [
            "warn",
            {
                properties: "always",
                ignoreDestructuring: true,
                ignoreImports: true,
                ignoreGlobals: true,
            },
        ],
        "class-methods-use-this": "warn",
        "curly": "error",
        "default-case": "warn",
        "dot-notation": "off", // conflict TypeScript noPropertyAccessFromIndexSignature
        "eqeqeq": "warn",
        "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
        "no-console": "off",

        // "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

        // Import order
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
        "sort-imports": "off",
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                "alphabetize": { order: "asc", caseInsensitive: true },
            },
        ],
        "import/no-unresolved": "off",

        // React rules
        // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
    },
};
