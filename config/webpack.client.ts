import * as path from 'path';
import * as webpack from 'webpack';
import * as vuxLoader from 'vux-loader';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';

const DEBUG = process.env.NODE_ENV === 'development';

const webpackConfig = {
  entry: {
    vendor: ['./src/vendor.js'],
    index: ['./src/entry-client.ts']
  },
  output: {
    filename: DEBUG ? '[name].js' : '[name].[chunkhash:8].js',
    path: path.join( __dirname, '../static/client/js' ),
    publicPath: '/static/client/js/'
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
         test: /\.css/,
         use: ['style-loader', 'css-loader']
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
  plugins: [

    /** 提取公共文件 */
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'index', 'vendor' ]
    }),

    /** 编译前清空文件夹 */
    new CleanWebpackPlugin(['static/client/js'], {
      root: path.join(__dirname, '../'),
      verbose: true,
      dry: false
    }),

    /** 注入全局变量 */
    new webpack.DefinePlugin({
         'process.env': {
            NODE_ENV: JSON.stringify( DEBUG ? 'development' : 'production' ),
            VUE_ENV: JSON.stringify( 'client' )
         }
    })
  ]
};

const config = vuxLoader.merge( webpackConfig, {
  plugins: ['vux-ui']
});

export default config;
