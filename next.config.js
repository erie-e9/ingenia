const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

const nextConfig = {
    compress: true,
    
    webpack: function(config, {dev, isServer }) {
        return config
    }
}

module.exports = withSass(withCSS(nextConfig));