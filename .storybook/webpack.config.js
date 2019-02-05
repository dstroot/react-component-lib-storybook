const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig with scss support!
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  defaultConfig.resolve.extensions.push(".scss", ".css");

  return defaultConfig;
};
