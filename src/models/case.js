
const cases = [{
  url: '/case/content.jpg', // 586 X 322px
  discription: 'Flexible LED 1.9mm, 155sqm, Spectrum of the Seas, 2019',
}, {
  url: '/case/content.jpg',
  discription: 'Unano1.8, GT Church, USA, 2018'
}, {
  url: '/case/content.jpg',
  discription: 'Unano1.8, Learning Technologies, UK, 2019',
}, {
  url: '/case/content.jpg',
  discription: 'Unano1.8, Learning Technologies, UK, 2019',
}]


export default {
  namespace: 'casestudy',

  state: {
    banner: '/case/banner.jpg',
    cases: cases 
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {
    *login({ payload, callback }, { call, put }) {
      
    },

  },

  reducers: {

  },
};