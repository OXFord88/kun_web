export default {
  namespace: 'casestudy',

  state: {
    cases: [{
      url: '/case/cases/2.jpg',
      discription: 'Flexible LED 1.9mm, 155sqm, Spectrum of the Seas, 2019',
    }, {
      url: '/case/cases/2.jpg',
      discription: 'Unano1.8, GT Church, USA, 2018'
    }, {
      url: '/case/cases/2.jpg',
      discription: 'Unano1.8, Learning Technologies, UK, 2019',
    }, {
      url: '/case/cases/2.jpg',
      discription: 'Unano1.8, Learning Technologies, UK, 2019',
    }]
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