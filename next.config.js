const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const withFonts = require('next-fonts');

const nextConfig = {
    exportTrailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/contact': { page: '/contact' },
        '/users': { page: '/users' }
      };
    },

    // cssModules: true,
    // compress: true,
    // cssLoaderOptions: {
    //   sourceMap: true,
    //   importLoaders: 1,
    // },
    
    webpack: function(config, { dev, isServer }) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000
              }
            }
        });

        config.module.rules.push({
            test: /\.(css|scss)/,
            loader: "emit-file-loader",
              options: {
                name: "dist/[path][name].[ext]"
              }
        });
        
        // config.module.rules.push({
        //   test: /\.s(a|c)ss$/,
        //   use: ['babel-loader', 'raw-loader', MiniCssExtractPlugin.loader,
        //     { loader: 'sass-loader' },
        //   ],
        // });

        return config
    }
}

module.exports = withSass(withCSS(nextConfig))