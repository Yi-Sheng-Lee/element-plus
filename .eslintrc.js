module.exports = {
  root: true,
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "prettier",
    // "plugin:vue/recommended" // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    "vue/no-multiple-template-root": "off",
    indent: ["warn", 4],
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  globals: {
    Aliplayer: true,
  },
};
