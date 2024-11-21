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
  ...pluginVue.configs["essential"], // "flat/essential" を "essential" に変更
  {
    rules: {
      "no-console": "warn", // コンソール使用を警告に設定
      "vue/no-unused-vars": "error", // 未使用変数をエラーに設定
    },
  },
];
