

// 首页的banner图
const banners = [
  '/banner/Main1.jpg',  // 尺寸 无限宽 X 690
  '/banner/Main2.jpg', 
  '/banner/Main3.jpg', 
  '/banner/L.jpg',
  '/banner/E.jpg',
  '/banner/HQ.jpg',
  '/banner/H251R.jpg',
]

// 产品图 图片尺寸 170 X 200
const products = [
  {img: '/home/product/pro_1.jpg', title: '1Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '2Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '3Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '4Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '5Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '6Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '7Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '8Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '9Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '10Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '11Narrow Pixel Pitch', til: 'UTV'},
  {img: '/home/product/pro_1.jpg', title: '12Narrow Pixel Pitch', til: 'UTV'},
]
// case study 图片尺寸 250 X 300
const casees = [
  {img: '/home/case/unao1.jpg', title: '1Unano1.8, GT Church, USA, 2018'},
  {img: '/home/case/unao2.jpg', title: '2Unano1.8, GT ChurchChurchChurch, USA, 2018'},
  {img: '/home/case/unao1.jpg', title: '3Unano1.8, GT Church, USA, 2018'}
]

// 图片尺寸 348 X 200
const news = [
  {img: "/home/solu/1a.jpg", title: '1Security Monitoring', text: 'As the quantity of security access signal and screen signal is numerous, and resolution is restricted by display area...'},
  {img: "/home/solu/1a.jpg", title: '2Security Monitoring', text: 'As the quantity of security access signal and screen signal is numerous, and resolution is restricted by display area...'},
  {img: "/home/solu/1a.jpg", title: '3Security Monitoring', text: 'As the quantity of security access signal and screen signal is numerous, and resolution is restricted by display area...'}
]

export default {
  namespace: 'home',

  state: {
    banners: banners,
    products: products,
    casees: casees,
    news: news,
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {

  },

  reducers: {

  },
};
