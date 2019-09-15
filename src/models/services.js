
// about web of data
// warranty profile source
/*
  img: 图片 ---   地址--public/about. 590 X 400
  content: {
    title: 蓝色标题
    text: 相关文字内容
  }
*/
const warranty = [
  {
    img: "/services/content1.jpg", 
    content: [
      {
        title: 'Genneral Introduction', 
        text: 'Unilumin Group Co., Ltd. (stock code 300232), a world-class LED display solution provider, aims to provide global customers with high quality LED display products. The LED display market share of Unilumin ranks among the top three in the world for consecutive years'
      },
      {
        title: 'Genneral Introduction', 
        text: 'Unilumin Group Co., Ltd. (stock code 300232), a world-class LED display solution provider, aims to provide global customers with high quality LED display products. The LED display market share of Unilumin ranks among the top three in the world for consecutive years'
      },
    ]
  },
  {
    img: "/services/content1.jpg",
    content: [
      {
        title: 'Genneral Introduction', 
        text: 'Unilumin Group Co., Ltd. (stock code 300232), a world-class LED display solution provider, aims to provide global customers with high quality LED display products. The LED display market share of Unilumin ranks among the top three in the world for consecutive years'
      },
    ]
  },
  {
    img: "/services/content1.jpg",
    content: [
      {
        title: 'Last Genneral Introduction', 
        text: 'Unilumin Group Co., Ltd. (stock code 300232), a world-class LED display solution provider, aims to provide global customers with high quality LED display products. The LED display market share of Unilumin ranks among the top three in the world for consecutive years'
      }
    ]
  },
]





export default {
  namespace: 'services',

  state: {
    banner: '/services/banner.jpg',
    warranty: warranty,
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {

  },

  reducers: {

  },
};
