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
        text: 'Magnetic module and back cover fine pitch led displays，480*480mm Die casting Aluminum material-P1.5 P1.6 P1.8 P2.5',
        smalltitle: 'LS Series',
        disciption: '',
        link: '/production/detail?id=138',
      }, {
        url: '/img/lm1.png',
        title: 'Fine Pitch',
        text: 'Super Cost-effective Fine Pitch LED screen,with golden ratio,600*337.5mm Die casting Aluminum material --P1.2 P1.5 P1.8 P2.5',
        smalltitle: 'LM Series',
        disciption: '',
        link: '/production/detail?id=139',
      }],
      'rental': [{ // 分类
        url: '/img/e1.png',
        title: 'Rental',
        text: 'E as in EASY,E series can be assembled and disassembled within 3 seconds by one single person.Pixel pitch P2.6 P3.9',
        smalltitle: 'E Series',
        disciption: '',
        link: '/production/detail?id=133',
      }, {
        url: '/img/r1.png',
        title: 'Rental',
        text: 'Cost-effective Rental product,Multiple Pixel pitches---P2.6 P2.9 P3.9 P4.8 P5.9,both for indoor and outdoor',
        smalltitle: 'R Series',
        disciption: '',
        link: '/production/detail?id=134',
      }],
      'fixed': [{ // 分类
        url: '/img/h1.jpg',
        title: 'Fixed',
        text: 'The first fixed installation LED display with transparent control box,Die cast Aluminum,Direct connection without wire or cable.P1.5 P1.8 P2.5',
        smalltitle: 'H series',
        disciption: '',
        link: '/production/detail?id=127',
      }, {
        url: '/img/n1.png',
        title: 'Fixed',
        text: ' High Cost Performance Indoor Fixed Installation LED screen,everything you need is here.500*500mm Plus 500*1000mm ---P2.9 P3.9 P4.8',
        smalltitle: 'N series',
        disciption: '',
        link: '/production/detail?id=135',
      }, {
        url: '/img/o1.png',
        title: 'Fixed',
        text: ' High Cost Performance Outdoor Fixed Installation LED screen,standard design,curve solution available,cabinet dimension can be customized---P4 P5 P6 P8 P10 P12',
        smalltitle: 'O series',
        disciption: '',
        link: '/production/detail?id=136',
      }, {
        url: '/img/t1.jpg',
        title: 'Fixed',
        text: 'Magnesium aluminum alloy material, super light, super thin,suitable for projects that needs light weight and for some outdoor rental projects---P4 P5 P6 P8 P10',
        smalltitle: 'T Series',
        disciption: '',
        link: '/production/detail?id=117',
      }, {
        url: '/img/dip1.jpeg',
        title: 'Fixed',
        text: 'The Longest Lifespan Outdoor DIP LED Display,energy saving,perfect for outdoor big screens, P10, P16, P20',
        smalltitle: 'Outdoor DIP Solution',
        disciption: '',
        link: '/production/dip',
      }, {
        url: '/img/cubic1.jpg',
        title: 'Fixed',
        text: '90° Right-angled screen.Designed for installation on cuboid-shaped site.P1.5 P1.8 P2.5 P3.1',
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
