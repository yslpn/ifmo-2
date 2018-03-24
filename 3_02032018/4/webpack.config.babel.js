export default {
  "mode": "production",
  "module": {
    "rules": [{
      "loader": "babel-loader",
      "query": {
        "babelrc": false,
        "plugins": ["transform-pipeline-operator"],
        "presets": [
          ["env", {
            "modules": false
          }]
        ]
      }
    }]
  }
};
