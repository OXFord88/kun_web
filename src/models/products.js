export default {
  namespace: 'products',

  state: {
    productList: [{
      url: '/img/products1.jpg',
      title: 'Narrow Pixel Pitch',
      text: 'LED Smart TV',
      linkBtn: 'UTVⅢ',
      categoryLink: '',
      link: '',
    }, {
      url: '/img/products1.jpg',
      title: 'Narrow Pixel Pitch222',
      text: 'LED Smart TV2',
      linkBtn: 'UTVⅢ2',
      categoryLink: '',
      link: '',
    }, {
      url: '/img/products1.jpg',
      title: 'Narrow Pixel Pitch222',
      text: 'LED Smart TV2',
      linkBtn: 'UTVⅢ2',
      categoryLink: '',
      link: '',
    }, {
      url: '/img/products1.jpg',
      title: 'Narrow Pixel Pitch222',
      text: 'LED Smart TV2',
      linkBtn: 'UTVⅢ2',
      categoryLink: '',
      link: '',
    }, {
      url: '/img/products1.jpg',
      title: 'Narrow Pixel Pitch222',
      text: 'LED Smart TV2',
      linkBtn: 'UTVⅢ2',
      categoryLink: '',
      link: '',
    }, {
      url: '/img/products1.jpg',
      title: 'Narrow Pixel Pitch222',
      text: 'LED Smart TV2',
      linkBtn: 'UTVⅢ2',
      categoryLink: '',
      link: '',
    }, {
      url: '/img/products1.jpg',
      title: 'Narrow Pixel Pitch222',
      text: 'LED Smart TV2',
      linkBtn: 'UTVⅢ2',
      categoryLink: '',
      link: '',
    }],
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