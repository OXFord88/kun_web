

// 首页的banner图
const banners = [
  '/banner/E.jpg',  // 尺寸 无限宽 X 690
  '/banner/H.jpg', 
  '/banner/HQ.jpg', 
  '/banner/L.jpg',
  '/banner/Main.jpg',
  '/banner/R.jpg',
]

// 产品图 图片尺寸 170 X 200
// 首页产品图在此增加，例如我要新增一个产品，复制一行放在末尾，修改内容即可
// 图片文件放置在public/img里面就可以了
// link 表示的是详情页面，模版有三个种类，第一类为detail, 第二类为dip, 第三类为cubic，看详情页面的样子来选择不同的链接方式
const products = [
  {img: '/img/ls1.png', title: 'Fine Pitch', til: 'LS Series', link: '/production/detail?id=138'},
  {img: '/img/e1.png', title: 'Rental  ', til: 'E Series', link: '/production/detail?id=133'},
  {img: '/img/h1.jpg', title: 'FIXED', til: 'H series', link: '/production/detail?id=127'},
  {img: '/img/t1.jpg', title: 'FIXED', til: 'Talent', link: '/production/detail?id=117'},
  {img: '/img/dip1.jpeg', title: 'FIXED', til: 'Outdoor DIP Solution', link: '/production/dip'},
  {img: '/img/cubic1.jpg', title: 'FIXED', til: 'Cubic Series', link: '/production/cubic'},
]





// case study 图片尺寸 250 X 300
const casees = [
  {img: '/case/card/碧桂园 P2.5.jpg', title: '碧桂园 P2.5'},
  {img: '/case/card/Agentina P10.jpg', title: 'Agentina P10'},
  {img: '/case/card/America P2.9.jpg', title: 'America P2.9'}
]

// 图片尺寸 348 X 200
const news = [
  {
    img: '/news/1-1.png', // 尺寸585 X 300
    title: 'Further protection',
    til: 'Further protection',
    text: "In June, south China just has steped into a long rainy season, as LED is a Moisture Senstive Deivice, here is some knowledge i think you would like to know: about how to maintain the LED screen in the enviroments with heavy humidity",
    time: "2019-12-12",
    link: '/news/detail?id=1',
  },{
    img: '/news/2-1.jpeg', // 尺寸585 X 300
    title: 'Future trend',
    til: 'Future trend',
    text: "Despite that more and more industry players across the world have built partnership and poured resources into Micro LED development and research, the commercialization of the next generation display technology is still delayed. Due to technology barriers and equipment limitation, production cost for Micro LED display remains sky high, leading to postponed timeline of Micro LED display commercialization.",
    time: "2019-12-12",
    link: '/news/detail?id=2',
  },{
    img: '/news/3-1.png', // 尺寸585 X 300
    title: 'How to have a cool led',
    til: 'How to have a cool led',
    text: "With the development of technology, professional LED screen will be always improved in order to meet the application needs. Specialized products combined with application needs will form new LED product and areas. Safety must come first , today we’ll help you choose a real “cool screen”, especially outdoor ones.",
    time: "2019-12-12",
    link: '/news/detail?id=3',
  }
]


const contact = {
  Phone: '1888888888',
  Eamil: '361196961@qq.com',
  Addre: 'beijing city address beijing',
}

export default {
  namespace: 'home',

  state: {
    banners: banners,
    products: products,
    casees: casees,
    news: news,
    contact: contact,
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {

  },

  reducers: {

  },
};
