// about web of data

/*
  img: 图片 ---   地址--public/news. 590 X 400
  content: {
    title: 蓝色标题
    text: 相关文字内容
  }
*/


const data = [
  {
    img: "/news/new1.jpg", // 尺寸585 X 300
    title: 'Celebrate 2019 FIBA Basketball World Cup Opening Ceremony with Unilumin',
    til: 'Celebrate 2019 FIBA Basketball World Cup Opening',
    text: "Beijing (China), 30th August 2019 - The opening ceremony of 2019 FIBA Basketball World Cup was successfully held in Water Cube in Beijing, China. During the ceremony, China’s Present Mr. Xi Jinping delivered a speech and gave his encouragement to all the participants. Thirty-two national teams from all over the world have arrived respectively in eight Chinese cities and are ready to fight for Naismith Trophy, a trophy awarded to the men's champion of the FIBA Basketball World Cup. As the official LEDs Supplier of FIBA, Unilumin Sports will provide Integrated LED solutions for all the eight venues",
    time: "2019-12-12",
  },
  {
    img: "/news/new1.jpg",
    title: 'Celebrate 2019 FIBA Basketball World Cup Opening Ceremony with Unilumin',
    til: 'Celebrate 2019 FIBA Basketball World Cup Opening',
    text: "Beijing (China), 30th August 2019 - The opening ceremony of 2019 FIBA Basketball World Cup was successfully held in Water Cube in Beijing, China. During the ceremony, China’s Present Mr. Xi Jinping delivered a speech and gave his encouragement to all the participants. Thirty-two national teams from all over the world have arrived respectively in eight Chinese cities and are ready to fight for Naismith Trophy, a trophy awarded to the men's champion of the FIBA Basketball World Cup. As the official LEDs Supplier of FIBA, Unilumin Sports will provide Integrated LED solutions for all the eight venues",
    time: "2019-12-12",
  },
  {
    img: "/news/new1.jpg",
    title: 'Celebrate 2019 FIBA Basketball World Cup Opening Ceremony with Unilumin',
    til: 'Celebrate 2019 FIBA Basketball World Cup Opening',
    text: "Beijing (China), 30th August 2019 - The opening ceremony of 2019 FIBA Basketball World Cup was successfully held in Water Cube in Beijing, China. During the ceremony, China’s Present Mr. Xi Jinping delivered a speech and gave his encouragement to all the participants. Thirty-two national teams from all over the world have arrived respectively in eight Chinese cities and are ready to fight for Naismith Trophy, a trophy awarded to the men's champion of the FIBA Basketball World Cup. As the official LEDs Supplier of FIBA, Unilumin Sports will provide Integrated LED solutions for all the eight venues",
    time: "2019-12-12",
  },
  {
    img: "/news/news.jpg",
    title: 'Celebrate 2019 FIBA Basketball World Cup Opening Ceremony with Unilumin',
    til: 'Celebrate 2019 FIBA Basketball World Cup Opening',
    text: "Beijing (China), 30th August 2019 - The opening ceremony of 2019 FIBA Basketball World Cup was successfully held in Water Cube in Beijing, China. During the ceremony, China’s Present Mr. Xi Jinping delivered a speech and gave his encouragement to all the participants. Thirty-two national teams from all over the world have arrived respectively in eight Chinese cities and are ready to fight for Naismith Trophy, a trophy awarded to the men's champion of the FIBA Basketball World Cup. As the official LEDs Supplier of FIBA, Unilumin Sports will provide Integrated LED solutions for all the eight venues",
    time: "2019-12-12",
  },
]

export default {
  namespace: 'news',

  state: {
    banner: '/news/banner.jpg',
    list: data
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {

  },

  reducers: {

  },
};