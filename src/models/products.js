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
    banner: '/production/banner.jpg',
    productList: productList,
    productnav: productnav,
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
