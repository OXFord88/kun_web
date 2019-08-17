export default {
  namespace: 'products',

  state: {
    productList: {
      'narrowPixelPitch': [{
        url: '/img/products1.jpg',
        title: 'Narrow Pixel Pitch',
        text: 'LED Smart TV',
        smalltitle: 'UTVⅢ',
        disciption: 'UTVⅢ(Ultra HD LED Display)',
        link: '',
      }],
      'rental': [{
        url: '/img/products1.jpg',
        title: 'Rental',
        text: 'LED Smart TV',
        smalltitle: 'UTVⅢ',
        disciption: 'UTVⅢ(Ultra HD LED Display)',
        link: '',
      }, {
        url: '/img/products1.jpg',
        title: 'Rental',
        text: 'LED Smart TV',
        smalltitle: 'UTVⅢ',
        disciption: 'UTVⅢ(Ultra HD LED Display)',
        link: '',
      }],
      'fixed': [{
        url: '/img/products1.jpg',
        title: 'Fixed',
        text: 'LED Smart TV',
        smalltitle: 'UTVⅢ',
        disciption: 'UTVⅢ(Ultra HD LED Display)',
        link: '',
      }]
    },
    productnav: [
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
      }
    ],
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {
    *login({ payload, callback }, { call, put }) {
      // const response = yield call(logins, payload);
      // if (response.code) {
      //   callback(response)
      // }else{
      //   yield put({
      //     type: 'changeLoginStatus',
      //     payload: response,
      //   });
      //   if (response.company_status === 'END') {
      //     // yield put(routerRedux.replace('/home'));
      //     yield put(routerRedux.replace('/orders'));
      //   }else if (response.company_status === 'HAVE_HAND' || response.company_status === 'REGECT') {
      //     yield put(routerRedux.replace(`/result?type=${response.company_status}`));
      //   }else {
      //     yield put(routerRedux.replace('/data'));
      //   }
      // }
    },

  },

  reducers: {

  },
};