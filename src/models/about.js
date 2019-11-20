
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
    img: "/about/WechatIMG210.jpeg", 
    content: [
      {
        title: 'Genneral Introduction', 
        text: 'ENOR ELECTRONICS CO., LIMITED , a world-class LED display solution provider, aims to provide global customers with high quality LED display products. Enor comes from an old saying which means “we value your trust, we value our promise.'
      },
    ]
  },
  {
    img: "/about/WechatIMG212.jpeg",
    content: [
      {
        title: 'Our Strength',
        text: 'We now have three production lines---regular product line, fine pitch product line and DIP production line. We are growing up rapidly during the past years with our products exported to more than one hundred countries and regions, such as USA, Europe, Africa, India... ISO9001 and ISO14001 quality management systems are strictly carried out, our products have already passed CE, ROHS, FCC and UL certifications. Up to now, we have completed more than 10,000 projects around the world successfully.'
      }
    ]
  },
  {
    img: "/about/WechatIMG213.jpeg",
    content: [
      {
        title: 'Our Mission',
        text: 'Our mission at Enor is to provide the best LED screen solution for our trusted customers all around the world. For presales service, we have professional engineers to reply all your questions and enquiries and provide all-round solutions for your projects and offer technical training. For after sales service, we provide customized support, such as sending required spare parts in time, online support, on site repair, etc. We make every possible effort to meet customers’ requirements and ensure mutual benefit and long term cooperation.'
      }
    ]
  },
  {
    img: "/about/WechatIMG211.jpeg",
    content: [
      {
        title: '',
        text: 'Your satisfaction, our inspiration'
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
      'QIAOTONG Industrial Part, Shiyan, Baoan District, Shenzhen,China'
    ]
  },
  {
    img: "/about/tel.gif",
    til: 'Tel',
    text: [
      '+86-13631566043'
    ]
  },
  {
    img: "/about/fax.gif",
    til: 'Fax',
    text: [
      '+86-755-61881888'
    ]
  },
  {
    img: "/about/factory.gif",
    til: 'Factory Address',
    text: [
      'Website:www.enorled.com'
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
      '+86-13631566043'
    ]
  },
  {
    img: "/about/fax.gif",
    til: 'Fax',
    text: [
      '+86-755-61881888'
    ]
  },
  {
    img: "/about/email.gif",
    til: 'E-mail',
    text: [
      'info@enorled.com'
    ]
  }
]




export default {
  namespace: 'about',

  state: {
    company: company,
    contact: {
      address: {
        title: 'ENOR ELECTRONICS CO., LIMITED',
        list: address,
        maps: '/about/pg.png'
      },
      area: {
        title: 'WORK WITH US',
        text: 'We’re flexible and cooperative and determined to help you with your LED screen project. Over the last few years, we have specialized and affirmed in the LED video industry with a growing network of agents. Our team is dynamic, flexible and competitive. If you have a need,we’re here for you.If you’re interested in being our agent.',
        // list: area
        list: []
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
