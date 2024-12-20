import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        jQuery: "readonly", // グローバル変数jQueryを追加
      },
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["essential"],
  {
    rules: {
      "no-console": "warn",
      "vue/no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "vue/multi-word-component-names": "off"
    },
  },
];
