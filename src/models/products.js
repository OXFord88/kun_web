const productList = {
  narrowPixelPitch: [
    {
      url: '/production/products1.jpg',
      title: 'Narrow Pixel Pitch',
      text: 'LED Smart TV',
      smalltitle: 'UTVⅢ',
      disciption: 'UTVⅢ(Ultra HD LED Display)',
      link: '',
    },
  ],
  rental: [
    {
      url: '/production/products1.jpg',
      title: 'Rental',
      text: 'LED Smart TV',
      smalltitle: 'UTVⅢ',
      disciption: 'UTVⅢ(Ultra HD LED Display)',
      link: '',
    },
    {
      url: '/production/products1.jpg',
      title: 'Rental',
      text: 'LED Smart TV',
      smalltitle: 'UTVⅢ',
      disciption: 'UTVⅢ(Ultra HD LED Display)',
      link: '',
    },
  ],
  fixed: [
    {
      url: '/production/products1.jpg',
      title: 'Fixed',
      text: 'LED Smart TV',
      smalltitle: 'UTVⅢ',
      disciption: 'UTVⅢ(Ultra HD LED Display)',
      link: '',
    },
  ],
};

const productnav = [
  {
    title: 'Narrow Pixel Pitch',
    key: 'narrowPixelPitch',
  },
  {
    title: 'Rental',
    key: 'rental',
  },
  {
    title: 'Fixed',
    key: 'fixed',
  },
];

export default {
  namespace: 'products',

  state: {
    productList: {
      'finePitch': [{
        url: '/img/products1.jpg',
        title: 'Fine Pitch',
        text: 'Magnetic module and back cover fine pitch led displays',
        smalltitle: 'LS Series',
        disciption: '',
        link: '/production/detail?id=138',
      }],
      'rental': [{
        url: '/img/products1.jpg',
        title: 'Rental',
        text: 'Assembly and disassembly within 3 seconds by single person',
        smalltitle: 'E Series',
        disciption: '',
        link: '/production/detail?id=133',
      }],
      'fixed': [{
        url: '/img/products1.jpg',
        title: 'Fixed',
        text: 'The first fixed installation LED display with transparent control box',
        smalltitle: 'H series',
        disciption: '',
        link: '/production/detail?id=127',
      }, {
        url: '/img/products1.jpg',
        title: 'Rental',
        text: 'Magnesium aluminum alloy material, super light, super thin',
        smalltitle: 'Talent',
        disciption: '',
        link: '/production/detail?id=117',
      }, {
        url: '/img/products1.jpg',
        title: 'Rental',
        text: 'The Longest Lifespan Outdoor DIP LED Display P10, P16, P20 available',
        smalltitle: 'Outdoor DIP Solution',
        disciption: '',
        link: '/production/dip',
      }, {
        url: '/img/products1.jpg',
        title: 'Rental',
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
    *login({ payload, callback }, { call, put }) {
    },
  },

  reducers: {},
};
