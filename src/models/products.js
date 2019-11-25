// 在相应的分类种添加一组产品值，一个产品所需要的代码内容为一个花括号{}里面的内容
// url 为产品图片的位置
// link 为产品的链接，也是分为三个模版，模版类型参考首页讲述

export default {
  namespace: 'products',

  state: {
    productList: {
      'finePitch': [{ // 分类
        url: '/img/ls1.png',
        title: 'Fine Pitch',
        text: 'Magnetic module and back cover fine pitch led displays',
        smalltitle: 'LS Series',
        disciption: '',
        link: '/production/detail?id=138',
      }],
      'rental': [{ // 分类
        url: '/img/e1.png',
        title: 'Rental',
        text: 'Assembly and disassembly within 3 seconds by single person',
        smalltitle: 'E Series',
        disciption: '',
        link: '/production/detail?id=133',
      }],
      'fixed': [{ // 分类
        url: '/img/h1.jpg',
        title: 'Fixed',
        text: 'The first fixed installation LED display with transparent control box',
        smalltitle: 'H series',
        disciption: '',
        link: '/production/detail?id=127',
      }, {
        url: '/img/t1.jpg',
        title: 'Fixed',
        text: 'Magnesium aluminum alloy material, super light, super thin',
        smalltitle: 'Talent',
        disciption: '',
        link: '/production/detail?id=117',
      }, {
        url: '/img/dip1.jpeg',
        title: 'Fixed',
        text: 'The Longest Lifespan Outdoor DIP LED Display P10, P16, P20 available',
        smalltitle: 'Outdoor DIP Solution',
        disciption: '',
        link: '/production/dip',
      }, {
        url: '/img/cubic1.jpg',
        title: 'Fixed',
        text: '90° Right-angled screen',
        smalltitle: 'Cubic Series',
        disciption: '',
        link: '/production/cubic',
      }]
    },
    productnav: [
      {
        title: 'Fine Pitch',
        key: 'finePitch',
      },
      {
        title: 'Rental',
        key: 'rental',
      },
      {
        title: 'Fixed',
        key: 'fixed',
      }
    ],
    banner: '/production/banner.jpg'
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {
  },

  reducers: {},
};
