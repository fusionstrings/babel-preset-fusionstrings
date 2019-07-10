module.exports = (api, options) => {
  const {
    debug = false,
    modules = "auto",
    shippedProposals = true,
    spec = true,
    useBuiltIns = "entry"
  } = options;

  return {
    presets: [
      [
        require("@babel/preset-env"),
        {
          debug,
          modules,
          shippedProposals,
          spec,
          useBuiltIns,
          corejs: {
            version: 3,
            proposals: true
          }
        }
      ],
      require("@babel/preset-react"),
      require("@babel/preset-typescript")
    ].filter(Boolean),
    plugins: [
      require("@babel/plugin-proposal-class-properties"),
      require("@babel/plugin-proposal-json-strings"),
      require("@babel/plugin-syntax-dynamic-import"),
      require("@babel/plugin-syntax-import-meta"),
      api.env("test") && require("babel-plugin-dynamic-import-node")
    ].filter(Boolean)
  };
};
