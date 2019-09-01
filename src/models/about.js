
// about web of data
// company profile source
/*
  img: 图片 ---   地址--public/about. 590 X 400
  content: {
    title: 蓝色标题
    text: 相关文字内容
  }
*/
const company = [
  {
    img: "/about/content1.jpg", 
    content: [
      {
        title: 'Genneral Introduction', 
        text: 'Unilumin Group Co., Ltd. (stock code 300232), a world-class LED display solution provider, aims to provide global customers with high quality LED display products. The LED display market share of Unilumin ranks among the top three in the world for consecutive years'
      },
      {
        title: 'Genneral Introduction', 
        text: 'Unilumin Group Co., Ltd. (stock code 300232), a world-class LED display solution provider, aims to provide global customers with high quality LED display products. The LED display market share of Unilumin ranks among the top three in the world for consecutive years'
      },
    ]
  },
  {
    img: "/about/content1.jpg",
    content: [
      {
        title: 'Genneral Introduction', 
        text: 'Unilumin Group Co., Ltd. (stock code 300232), a world-class LED display solution provider, aims to provide global customers with high quality LED display products. The LED display market share of Unilumin ranks among the top three in the world for consecutive years'
      },
    ]
  },
  {
    img: "/about/content1.jpg",
    content: [
      {
        title: 'Last Genneral Introduction', 
        text: 'Unilumin Group Co., Ltd. (stock code 300232), a world-class LED display solution provider, aims to provide global customers with high quality LED display products. The LED display market share of Unilumin ranks among the top three in the world for consecutive years'
      }
    ]
  },
]


// contact us source
/*
  img: 图片 ---   地址--public/about
  til: 小标题
  text: 内容
*/
const address = [
  {
    img: "/about/address.gif",
    til: 'Address',
    text: [
      '112 Yongfu Rd., Qiaotou Village, Fuyong Town, Baoan District, Shenzhen 518103 China'
    ]
  },
  {
    img: "/about/tel.gif",
    til: 'Tel',
    text: [
      '112 Yongfu Rd., Qiaotou Village, Fuyong Town, Baoan District, Shenzhen 518103 China'
    ]
  },
  {
    img: "/about/fax.gif",
    til: 'Fax',
    text: [
      '112 Yongfu Rd., Qiaotou Village, Fuyong Town, Baoan District, Shenzhen 518103 China'
    ]
  },
  {
    img: "/about/factory.gif",
    til: 'Factory Address',
    text: [
      '112 Yongfu Rd., Qiaotou Village, Fuyong Town, Baoan District, Shenzhen 518103 China'
    ]
  },
]
const area = [
  {
    img: "/about/img_1.jpg", // 尺寸 295 X 300
    title: 'UNILUMIN USA WEST COAST OFFICE',
    addr: 'addr: 5635 Saticoy Street, Unit A, Van Nuy',
    tel: 'tel : +1(818) 386 8444‬',
    email: 'email: sales@unilumin.com'
  },
  {
    img: "/about/img_1.jpg",
    title: 'UNILUMIN USA WEST COAST OFFICE',
    addr: '5635 Saticoy Street, Unit A, Van Nuy',
    tel: '+1(818) 386 8444‬',
    email: 'sales@unilumin.com'
  },
  {
    img: "/about/img_1.jpg",
    title: 'UNILUMIN USA WEST COAST OFFICE',
    addr: '5635 Saticoy Street, Unit A, Van Nuy',
    tel: '+1(818) 386 8444‬',
    email: 'sales@unilumin.com'
  },
  {
    img: "/about/img_1.jpg",
    title: 'UNILUMIN USA WEST COAST OFFICE',
    addr: '5635 Saticoy Street, Unit A, Van Nuy',
    tel: '+1(818) 386 8444‬',
    email: 'sales@unilumin.com'
  },
]

const bottom = [
  {
    img: "/about/tel.gif",
    til: 'Tel',
    text: [
      '+86-755-29918999'
    ]
  },
  {
    img: "/about/fax.gif",
    til: 'Fax',
    text: [
      '+86-755-29892092'
    ]
  },
  {
    img: "/about/email.gif",
    til: 'E-mail',
    text: [
      'ledlighting@unilumin.com'
    ]
  }
]




export default {
  namespace: 'about',

  state: {
    company: company,
    contact: {
      address: {
        title: 'UNILUMIN GROUP CO., LTD.',
        list: address
      },
      area: {
        title: 'UNILUMIN GROUP CO., LTD.',
        til: 'OFFICIAL WEBSITE: HTTP://WWW.UNILUMIN.COM',
        list: area
      },
      bottom: {
        title: 'LED LIGHTINGDIVISION',
        til: 'OVERSEAS MARKETING DEPARTMENT',
        list: bottom
      }
    },
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {

  },

  reducers: {

  },
};
