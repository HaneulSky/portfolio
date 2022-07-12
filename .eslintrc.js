module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: [0, 4],
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "space-infix-ops": ["error", { "int32Hint": true }],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "multiline-ternary": ["off", "always-multiline"]
    }
};
