import * as path from "path";

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
};
