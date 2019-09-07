module.exports = {
  extends: [
    "tslint:recommended",
    "tslint-react",
    "tslint-config-airbnb",
    "tslint-config-prettier"
  ],
  rules: {
    "array-type": [true, "array"],
    "interface-name": [true, "never-prefix"],
    "import-name": [
      true,
      {
        react: "React",
        "react-dom": "ReactDom",
        "styled-components": "styled"
      }
    ],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-pascal-case"
    ],
    "no-namespace": false,
    "object-literal-sort-keys": false,
    "ordered-imports": [
      true,
      {
        "named-imports-order": "any"
      }
    ],
    "no-unused-variable": true,
    "no-unused-expression": true,
    quotemark: [true, "single", "jsx-double"]
  }
};
