const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        aliases: {
          "@img": "./src/img"
        }
      }
    }
  ]
};