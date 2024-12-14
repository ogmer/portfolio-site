import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  pluginJs.configs.recommended,
  ...pluginVue.configs["essential"], // "flat/essential" を "essential" に変更
  {
    rules: {
      "no-console": "warn", // コンソール使用を警告に設定
      "vue/no-unused-vars": "error", // 未使用変数をエラーに設定
      "no-unused-expressions": "error", // 未使用の式をエラーに設定
      "prefer-const": "error" // 追加ルール
    },
  },
];
