const OfflinePlugin = require('offline-plugin');

exports.default = function(config) {
  return Object.assign(config, {
    webpack: function(webpackConfig) {
      return Object.assign(webpackConfig, {
        plugins: webpackConfig.plugins.concat([new OfflinePlugin()]),
      });
    }
  });
};
