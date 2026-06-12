import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import htmlPlugin from "eslint-plugin-html";

export default [
  js.configs.recommended,
  pluginReact.configs.flat?.recommended || {},
  {
    files: ["**/*.{js,mjs,cjs,jsx,html}"], 
    plugins: { 
      html: htmlPlugin 
    },
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      "no-undef": "error"
    }
  }
];