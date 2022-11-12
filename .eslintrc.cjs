import { off } from "process";

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:pretier/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "pretier"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": off,
        "prettier/prettier": ["error", {
            "semi": false,
        }]
    }
}
