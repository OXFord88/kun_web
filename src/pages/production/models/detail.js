const obj1 = [
    {
        title: 'LS Series',
        text: [
            'Magnetic module and back cover fine pitch led displays.',
        ],
        img: '/img/ls1.png'
    },{
        title: 'Quick and fast maintenance',
        text: [
            'Front and rear maintenance for module, power and system',
            'Full magnetic design',
            'Tool-free and 3 seconds fast maintenance'
        ],
        img: '/img/ls2.png'
    },{
        title: 'Falling protection',
        text: [
            'Double contact falling protection',
            'More stable for the arrangement',
            'More reliable to protect the lamps'
        ],
        img: '/img/ls3.png'
    },{
        title: 'Hidden wires design',
        text: [
            'Hidden wires between the cabinets',
            'The whole screen is more neat and beautiful',
        ],
        img: '/img/ls4.png'
    }
]


const obj2 = [
    {
        title: 'E Series',
        text: [
            'Assembly and disassembly within 3 seconds by single person.',
        ],
        img: '/img/e1.png'
    },{
        title: 'Anti-collision patented design on every angle to protect the cabinet',
        text: [
            'Private corner protection patented design',
        ],
        img: '/img/e2.png'
    },{
        title: 'Magnetic module with quick front and back service design',
        text: [
            'Magnetic module without PC base design',
            'Support front service with magnetic tool or non-tool maintenance',
            'Module equipped with safety rope, more safe and reliable',
            'Easy maintenance'
        ],
        img: '/img/e3.png'
    },{
        title: 'Tool-free design to remove control box',
        text: [
            'Simple, reliable and efficient',
        ],
        img: '/img/e4.png'
    },{
        title: 'Only 6kg weight',
        text: [
            'Only 6kg weight per panel by adopting Die-casting Aluminum',
        ],
        img: '/img/e5.png'
    }
]




const obj3 = [
    {
        title: 'H series',
        text: [
            'The first fixed installation LED display with transparent control box',
        ],
        img: '/img/h1.jpg'
    },{
        title: 'The first transparent fixed installation LED display',
        text: [
            'The first fixed installation LED display with transparent control box.',
            'Adopt tawny color, grit finish.',
            'Subvert traditional design and bring more novel appearance.',
        ],
        img: '/img/h2.jpg'
    },{
        title: 'Complete front&rear service, simple and convenient',
        text: [
            'upgrade the efficiency of front service',
            'Easier operation to achieve quicker installation',
            'save labor cost',
        ],
        img: '/img/h3.jpg'
    },{
        title: 'Intelligent LED module, calibration saving',
        text: [
            'adopt data saving function to achieve LED module calibration saving.',
            'Save time and labor cost from 2nd time calibration after LED module replacement.'
        ],
        img: '/img/h4.jpg'
    },{
        title: 'Power & control box front & rear service',
        text: [
            'upgrade the efficiency of front service',
            'Easier operation to achieve quicker installation',
            'save labor cost'
        ],
        img: '/img/h5.jpg'
    },{
        title: 'Common platform that can be compatible with a variety of pixel',
        text: [
            'H series A2 version have H151, H161, H181, H201, H251, H301 and many models,',
            'including P1.5, P1.6, P1.8, P2.0, P2.5, P3.0 and so on,',
            'Use the standardized size 480*480mm cabinet to achieve the effect of multi pixel space',
            'sharing platform, save time, labor and save money.',

        ],
        img: '/img/h6.jpg'
    },{
        title: 'Simple, light, visible',
        text: [
            'H series A2 version cabinet is lighter, simpler and more beautiful,',
            'the thinness and weight are only 94% of the first version.',
            'The interior wireless design is more stable and reliable.'
        ],
        img: '/img/h7.jpg'
    }
]



const obj4 = [
    {
        title: 'Talent',
        text: [
            'Magnesium aluminum alloy material, super light, super thin',
        ],
        img: '/img/t1.jpg'
    },{
        title: 'High protection grade, front IP 65, rear IP 54.',
        text: [
        ],
        img: '/img/t2.png'
    },{
        title: 'Standardize, serialize design, reduce warehousing costs, and save maintenance costs for later',
        text: [
        ],
        img: '/img/t3.png'
    }
]
export default {
    namespace: 'detail',
  
    state: {
        detail: {
            '138': obj1,
            '133': obj2,
            '127': obj3,
            '117': obj4,
        },
        last: {
            '138': '/img/ls5.png',
            '133': '/img/e_last.png',
            '117': [
                'Serial compatibility design: 4mm, 5mm, 6.7 mm, 8mm and 10mm',
                'Standardized box: 960x960, standardized module: 320x160',
                'Large visual Angle, high brightness, suitable for various environments.'
            ],
        },
        table: {
            img: '/img/table.jpg',
            th: ['Parameters','T400','T500','T660','T800','T1000'],
            td: [
                ['','','','','',''],
                ['','','','','',''],
                ['','','','','',''],
                ['','','','','',''],
            ]
        },
        cubic: {
            title: 'iThin',
            text1: '90° right angle splicing',
            textImg: '/img/cubic1.jpg',

            ht1: 'Ultra narrow pixel pitch',
            hp1: 'Light weight---4kg， Ultra thin---42mm thickness，  Multiple cabinet dimensions，  Fan-less and noiseless',
            img1: '/img/cur1.png',

            ht2: 'Flexible Installation',
            hp2: 'corner angle & curved screen to make different shapes. ',
            img2: '/img/cur2.jpeg',


            ht3: 'Flexible maintenance',
            hp3: 'Air Suction Front Maintenance',
            hp31: 'Safety: Anti-bumping, Plug and Play',
            hp32: 'Easy and Fast: 2 seconds disassembly',
            img3: '/img/cur3.png',
            img31: '/img/cur31.png',
            img32: '/img/cur32.png',

        },
        dip: {
            title: 'Outdoor DIP Solution',
            text1: 'The Longest Lifespan Outdoor DIP LED Display',
            text2: ' P10, P16, P20 available',
            textImg: '/img/dip1.jpeg',
            saving: '/img/saving.png',

            ht1: 'Saving Structure',
            hp1: 'Traditional cabinet design,regular structure.',
            img1: '/img/img1.png',

            ht2: 'Saving Space',
            hp2: 'Front or rear access available(We use special 640*640mm Aluminum cabinet for frontal service solution,if you need,please tell in advance )',
            img2: '/img/img2.jpeg',

            power: '/img/power.png',
            powerH2: 'Saving Power',
            powerP: ['Aluminum cabinet with fan-less design,','Noiseless, more energy efficient,','saving 30%-40% power consumption'],

            ht3: 'Saving Installation',
            hp3: 'Quick plug design, high installation efficiency',
            img3: '/img/img3.png',

            main: '/img/main.png',
            mainH2: 'Saving Power',
            mainP: ['IP65 in front','Strong water-proof feature'],

            ht4: 'Saving Transportation Cost',
            hp4: 'Economical design fits more cabinets in one container.',
            img4: '/img/img4.png',

            ht5: 'Wide Viewing Angle',
            hp5: 'Wide viewing angle at H:140°, V:120°',
            img5: '/img/img5.jpg',

            ht6: 'Integrated control system',
            hp6: 'Easy access design',
            hp61: 'Accessible to advertisers regardless of location.',
            hp62: 'Ads can be sent to the office with Unilumin’s integrated control system.',
            img6: '/img/img6.jpg',

            table: {
                th: ['item','P10-Front','P10','P16','P20'],
                td: [
                    ['Cabinet resolution(pixels)','64*64','96*96','64*64','48*48'],
                    ['Cabinet size(mm)','640*640','960*960','1024*1024','960*960'],
                    ['Material','Aluminum','Steel','Steel','Steel'],
                    ['Brightness(cd/sqm)','>7500','>7500','>8000','>8000']
                ]
            }
        }

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