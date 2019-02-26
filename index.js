module.exports = {
  extends: [
    "tslint:recommended",
    "tslint-react",
    "tslint-config-airbnb",
    "tslint-config-prettier"
  ],
  rules: {
    "import-name": false,
    "array-type": [true, "array"],
    "interface-name": [true, "never-prefix"],
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-pascal-case"
    ],
    "jsx-no-lambda": false,
    "no-namespace": false,
    "object-literal-sort-keys": false,
    "no-shadowed-variable": false,
    "jsx-boolean-value": false,
    "ordered-imports": [
      true,
      {
        "named-imports-order": "any"
      }
    ],
    "no-unused-variable": {
      severity: "warning"
    },
    "no-unused-expression": {
      severity: "warning"
    }
  }
};
