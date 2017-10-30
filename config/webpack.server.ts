import * as path from 'path';
import * as webpack from 'webpack';
import * as vuxLoader from 'vux-loader';
import * as nodeExternals from 'webpack-node-externals';
import * as VueSSRServerPlugin from 'vue-server-renderer/server-plugin';

const DEBUG = process.env.NODE_ENV === 'development';

const webpackConfig = {
  entry: {
    index: ['./src/entry-server.ts']
  },
  target: 'node',
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../static/server/js')
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: { vue: 'vue/dist/vue.js' }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /vux.src.*?js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
         test: /\.less/,
         use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  externals: nodeExternals({
    whitelist: /\.less$/
  }),
  plugins: [
    new VueSSRServerPlugin( ),
    new webpack.DefinePlugin({
         'process.env': {
            NODE_ENV: JSON.stringify( DEBUG ? 'development' : 'production' ),
            VUE_ENV: JSON.stringify( 'server' )
         }
    })
  ]
};

const config = vuxLoader.merge( webpackConfig, {
  plugins: ['vux-ui']
});

export default config;
