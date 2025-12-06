import js from "@eslint/js";
import typescript from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    // ESLint
    js.configs.recommended,

    // typescript-eslint
    ...typescript.configs.recommended,

    // Custom rules
    {
        rules: {
            "no-console": "warn",
        },
    },

    // Global ignores
    {
        ignores: [
            "**/build",
            "**/dist",
            "**/node_modules",
            "**/out",
        ],
    },
];
