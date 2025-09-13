module.exports = {
  root: true,
  extends: ["custom"],
   parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
};
