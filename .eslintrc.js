module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "node"
    ],
    "rules": {
        // prettier
        "prettier/prettier": [
            "error",
            {
                "singleQuote": true,
            }
        ],

        // react
        "react/jsx-uses-vars": "error",
        "react/jsx-uses-react": "error",   

        // node
        "node/no-missing-import": "error",

        // typescript
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "indent": "off",
        "@typescript-eslint/indent": ["error", 2],
        "camelcase": "off",
        "@typescript-eslint/camelcase": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-parameter-properties": "off",
    },
    "settings": {
        "node": {
            "tryExtensions": [".ts", ".js", ".json", ".node", ".tsx"]
        },
    },
};
