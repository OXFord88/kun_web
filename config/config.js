import pageRoutes from './router.config';

const plugins = [
  ['umi-plugin-react', {
    antd: false,
    dva: true,
    dynamicImport: { 
      webpackChunkName: true,
      loadingComponent: './components/PageLoading/Index', 
    },
    title: '官网',
    dll: true,
    locale: {
      enable: true,
      default: 'en-US',
    },
    routes: {
      exclude: [
        /models\//,
        /utis\//,
        /assets\//,
        /less\//,
        /model\.(t|j)sx?$/,
        /service\.(t|j)sx?$/,
        /components\//,
      ],
    },
  }],
]
export default {
  treeShaking: true,
  targets: {
    ie: 11,
  },
  plugins,
  alias: {
    '@': require('path').resolve(__dirname, 'src'),
  },
  hash: true,
  routes: pageRoutes,
  // extraBabelPlugins: process.env.NODE_ENV === 'production' ? ["transform-remove-console"] : []

}
