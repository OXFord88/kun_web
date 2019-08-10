// import { routerRedux } from 'dva/router';
// import { stringify } from 'qs';
// import { logins, registers, perfectBasicMes, launchLogin, getCmpMessage, putBasicMes } from '@/services/api';
// import { setToken, clear, setUserInfo } from '@/utils/common';

export default {
  namespace: 'login',

  state: {
    status: undefined,
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
