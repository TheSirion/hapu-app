const { alias } = require('react-app-rewire-alias')

module.exports = {
  webpack: (config, env) => {
    alias({
      '@components': './src/components',
      '@assets': './src/assets',
      '@apis': './src/apis',
    })(config)

    return config
  },
}
