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
    title: 'Further protection',
    til: 'Further protection',
    text: "In June, south China just has steped into a long rainy season, as LED is a Moisture Senstive Deivice, here is some knowledge i think you would like to know: about how to maintain the LED screen in the enviroments with heavy humidity",
    time: "2019-12-12",
    link: '/news/detail?id=1',
  },{
    img: "/news/new1.jpg", // 尺寸585 X 300
    title: 'Future trend',
    til: 'Future trend',
    text: "Despite that more and more industry players across the world have built partnership and poured resources into Micro LED development and research, the commercialization of the next generation display technology is still delayed. Due to technology barriers and equipment limitation, production cost for Micro LED display remains sky high, leading to postponed timeline of Micro LED display commercialization.",
    time: "2019-12-12",
    link: '/news/detail?id=2',
  },{
    img: "/news/new1.jpg", // 尺寸585 X 300
    title: 'How to have a cool led',
    til: 'How to have a cool led',
    text: "With the development of technology, professional LED screen will be always improved in order to meet the application needs. Specialized products combined with application needs will form new LED product and areas. Safety must come first , today we’ll help you choose a real “cool screen”, especially outdoor ones.",
    time: "2019-12-12",
    link: '/news/detail?id=3',
  },{
    img: "/news/new1.jpg", // 尺寸585 X 300
    title: 'How to install your LED Displays from Different Ways',
    til: 'How to install your LED Displays from Different Ways',
    text: "",
    time: "2019-12-12",
    link: '/news/detail?id=4',
  },{
    img: "/news/new1.jpg", // 尺寸585 X 300
    title: 'Repair guidance---Several steps to repair LED and IC',
    til: 'Repair guidance---Several steps to repair LED and IC',
    text: "",
    time: "2019-12-12",
    link: '/news/detail?id=4',
  }
  
]

const obj = {
  '1': {
    title: 'Further protection---The importance of keeping your LED screen away from moisture',
    img: '/news/enor.jpeg',
    content: [
      {type: 'text', value: 'In June, south China just has steped into a long rainy season, as LED is a Moisture Senstive Deivice, here is some knowledge i think you would like to know: about how to maintain the LED screen in the enviroments with heavy humidity:'},
      {type: 'title', value: 'For indoor led screen,'},
      {type: 'text', value: 'First, Ventilation,Moderate ventilation can help the water adhered to the display screen to evaporate rapidly and reduce the relative humidity of the indoor environment. '},
      {type: 'text', value: 'While in some high humidity  and windless weather, ventilation should be avoid to increase the humidity  indoor.'},
      {type: 'text', value: 'Second, Place desiccant in the room to reduce the moisture in the air.'},
      {type: 'text', value: 'Third,Turn on the air conditioner or dehumidifiers for dehumidification. '},
      {type: 'text', value: 'While in ENOR,we have a special technology for further protection --- GOP technology.(Glue On PCB board),please check below picture.'},
      {type: 'img', value: '/news/1-1.png'},
      {type: 'text', value: 'This kind of technology is perfect for cases where the screens are near the beach(because of salty and wet environment),or at the swimming pool.etc,only very few factories have this technology,if you have such need ,please do mention it before placing the order so we can make arrangements for it.'},
      {type: 'title', value: 'For outdoor led screen,'},
      {type: 'text', value: 'The environment of outdoor LED display screen is more complex than that of indoor'},
      {type: 'text', value: 'First, Moisture-proof method is same with indoor screen.'},
      {type: 'text', value: 'and clean up the dust attached to the inside and outside of the display screen regularly can reduces the attachment of water vapor.'}, 
      {type: 'text', value: 'Second, Waterproof ability , The waterproof ability of outdoor LED display is determined by the  process of Production and Construction.'},
      {type: 'text', value: 'In a rainy season, excessive humidity causes the PCB board, power supply, power cord and other components of LED display to be easily oxidized and corroded.So this requires us to do anti-corrosion treatment in the production process, such as conformal coating'},
      {type: 'img', value: '/news/1-2.jpeg'},
      {type: 'text', value: 'In ENOR We have a conformal coating machine to do this job , and each module will go through strict high temp/humidity test'},
      {type: 'img', value: '/news/1-3.jpeg'},
      {type: 'text', value: 'And finished panels immersed in water test :'},
      {type: 'img', value: '/news/1-4.jpeg'},
      {type: 'text', value: 'In production process, we can have all the prevention process to ensure waterproof ability of the les screen itself, the other part needs to be implemented in the specific construction on site:'},
      {type: 'text', value: '1, good sealing installation/structure to prevent the rain to go inside,'},
      {type: 'text', value: '2, drainage design to make sure no water accumulation insde of the led screen.'},
      {type: 'text', value: "We provide the customized CAD drawing for the structure with ventilation and sealing design , if you need any advise, don't hesitate to contact me!"},
    ]
  },
  "2": {
    title: 'Future trend---LED technology development',
    img: '/news/enor.jpeg',
    content: [
      {type: 'text', value: 'Despite that more and more industry players across the world have built partnership and poured resources into Micro LED development and research, the commercialization of the next generation display technology is still delayed. Due to technology barriers and equipment limitation, production cost for Micro LED display remains sky high, leading to postponed timeline of Micro LED display commercialization.'},
      {type: 'img', value: '/news/2-1.jpeg'},
      {type: 'img', value: '/news/2-2.jpeg'},
      {type: 'img', value: '/news/2-3.jpeg'},
      {type: 'text', value: 'But why is the manufacture of Micro LED display so difficult? What are the challenges occurred during Micro LED production that slow down the commercial progress? '},
      {type: 'text', value: 'In comparison with conventional LED, the demands for Micro LED is more complicated and sophisticated since Micro LED chip size is only 1% of LED, which is less than 100 um. The extreme size of the components marked a new generation technology and also brought about numerous new challenges. Here, we would like to analyze the process of Micro LED display production and point out the barriers of different steps.'},
      {type: 'text', value: 'Same as LED, epitaxy wafer plays a fundamental role in Micro LED chips. However, the requirement of Micro LED epitaxy is much higher than conventional LED. Given that chip size of Micro LED is no bigger than 100 um, the wavelength uniformity of epitaxy become even more critical as wafer unevenness could lead to defect of LED chips. However, currently most of the existing equipment was designed for conventional LED wafers production and can hardly meet the demands for Micro LED wafers.'},
      {type: 'text', value: 'Chip process on epitaxy wafer is also crucial as it would affect further production process including bonding and transferring. In order to meet the requirements of different transferring methods, chip makers would have to work closely with transfer technology providers for improve overall yield and efficiency.'},
      {type: 'text', value: 'To turn LED chips into a high performance display, Micro LED chips first need to be removed from sapphire substrate to a temporary substrate then from the temporary substrate to different backplanes depending on function and purpose required. Since the numbers of chips are massive and the size is incredibly small, the transferring process is very challenging. Conventional pick and place process will take too much time transferring millions of LEDs, boosting manufacture cost. Other transferring technologies are also in development to speed up the process. Moreover, bonding and assembling chips accurately on targeted receiving substrates without damaging the chips is a key challenge as well.'},
      {type: 'text', value: 'In addition, it is necessary to check functions of Micro LED chips during each of the manufacturing process to assure efficiency and enhance overall yield. When defects are detected, corresponding repairing technology to precisely address the defect is also a must. However, the difficulties of these processes still lay on the miniaturized chips. Equipment makers and solution providers have dedicated themselves to create more efficient and accurate approaches to tackle these issues.'},
      {type: 'text', value: 'Apart from the challenges within the production process, backplane materials, full color solutions and driver IC design are also part of the bottlenecks for Micro LED display manufacture.'},
      {type: 'text', value: 'To overcome the technology barriers, industry players have formed vertical integration and strategic partnerships in the supply chain to leverage their expertise with more holistic approaches. These collaborations have led to several technology breakthroughs announced in 2019, bringing Micro LED display a step forwards real world applications. However, technology developments addressing the difficulties of production processes are still inevitable for Micro LED commercialization.'},
      
    ]
  },
  '3': {
    title: 'How to have a cool led',
    img: '/news/enor.jpeg',
    content: [
      {type: 'title', value: 'How to have a "cool" LED display?'},
      {type: 'text', value: 'With the development of technology, professional LED screen will be always improved in order to meet the application needs. Specialized products combined with application needs will form new LED product and areas. Safety must come first , today we’ll help you choose a real “cool screen”, especially outdoor ones.'},
      {type: 'img', value: '/news/3-1.png'},
      {type: 'text', value: 'First: Reliable materials'},
      {type: 'text', value: 'Key components of LED display such as PCB board, LED,IC and other electric components. etc are very important. LED display screen manufactures should pay special attention on those components. As an experienced manufacture ,CLT’s strategic partners are all big and reliable companies who also put safety as first priority. '},
      {type: 'img', value: '/news/3-2.png'},
      {type: 'text', value: 'Second: Structure and installation'},
      {type: 'text', value: 'Despite the fact that outdoor cabinet itself has extra cooling fans on the back doors  ,exterior and internal structure are also important factors to have keep the screen cool. The use of “hollow design”can help a lot because after heat is discharged from the cabinet, we’d create a good “airway”to let them go to the atmosphere as fast as possible. And regular inspection of professional technical personnel is also needed.'},
      {type: 'text', value: 'Third: Extra cooling system'},
      {type: 'text', value: 'If your screen has to run at a hot area for a long time. Then extra cooling system is needed.Before you start your LED screen project, please contact us, our engineer will help you decide if you need extra cooling fans(blowers) or air-conditioners based on the temperature ,screen size, structure.etc.'},
      {type: 'text', value: 'ENOR is a World-Class LED Display Supplier. We are growing up rapidly during the past years with our products exported to more than one hundred countries and regions. Our rich experiences and well-trained service team are standing by.Please do not hesitate to leave us a message if you have any questions about LED display screen.'},
    ]
  },
  '4': {
    title: 'How to install your LED Displays from Different Ways',
    img: '/news/enor.jpeg',
    content: [
      {type: 'title', value: 'How to install your LED Displays from Different Ways?'},
      {type: 'text', value: '1.Inside wall LED Screens installation'},
      {type: 'img', value: '/news/4-1.jpeg'},
      {type: 'text', value: '2.Wall mount LED Screens installation'},
      {type: 'img', value: '/news/4-2.jpeg'},
      {type: 'text', value: '3.Standing column LED screens installation'},
      {type: 'img', value: '/news/4-3.jpeg'},
      {type: 'text', value: '4.Top building LED screens installation'},
      {type: 'img', value: '/news/4-4.jpeg'},
      {type: 'text', value: '5.Wall hanging LED Screens installation'},
      {type: 'img', value: '/news/4-5.jpeg'},
      {type: 'text', value: 'Hanging LED screens installation'},
      {type: 'img', value: '/news/4-6.jpeg'},
      {type: 'text', value: 'Standing floor LED screens installation'},
      {type: 'img', value: '/news/4-7.jpeg'},
      {type: 'text', value: 'An LED Display is only good if it’s working and keeps working. Planning and the digital sign and mount design are essential to managing risks and ensuring a successful installation. An LED display that is mounted improperly and can’t be adjusted easily, that fails to integrate properly, is an expensive and unacceptable outcome.'},
      {type: 'text', value: 'ENOR can provide better guest experiences, ensure that the investment in the technology pays off. To learn more information please contact us freely.'},
    ]
  },
  '5': {
    title: 'Repair guidance---Several steps to repair LED and IC',
    img: '/news/enor.jpeg',
    content: [
      {type: 'text', value: 'Dear valued customer:'},
      {type: 'text', value: 'Here I would like to share with you : How to repair the dead pixel by yourself.'},
      {type: 'title', value: '1.The following tools are required:'},
      {type: 'text', value: 'Soldering iron, Glue, Receiving card, Tweezers, Screwdriver, '},
      {type: 'text', value: 'Mask screwdriver, power supply, Air gun, Multimeter,'},
      {type: 'text', value: 'Copper wire, Tin, Ribbon cable, Power cable, Module with the dead LED, New LED;'},
      {type: 'img', value: '/news/5-1.png'},
      {type: 'title', value: '2. Find out the dead pixel;'},
      {type: 'text', value: 'Firstly, Please connect the LED modules with power supply and receiving card with cables;'},
      {type: 'text', value: 'Meanwhile,Turn on the air gun / soldering Iron;'},
      {type: 'text', value: 'Secondly, display the pure color on led module,:Red/Green/Blue/White color;'},
      {type: 'text', value: 'then you will find out the dead pixel; '},
      {type: 'img', value: '/news/5-2.jpeg'},
      {type: 'title', value: '3, Remove the bad pixel on the LED module.'},
      {type: 'text', value: 'The first thing is power off the LED module.'},
      {type: 'text', value: 'Then remove the power cable, finally take off the ribbon cable (Please remember to follow this step) '},
      {type: 'text', value: 'After that, move out the module mask before removing the dead pixel. '},
      {type: 'img', value: '/news/5-3.jpeg'},
      {type: 'text', value: 'For outdoor LED module, we need to use the tweezer to remove the surface glue, then blow the dead pixel with the air gun'},
      {type: 'text', value: '(NOTE: set the wind temperature and wind speed as level 2, in case of hurt the PCB board) ,'},
      {type: 'text', value: 'please hand it stand upright 90 degrees, otherwise will easy to hurt the neighborhood.'},
      {type: 'text', value: 'When the bad pixel is loosing, please gently shake the dead LED with the tweezer, '},
      {type: 'text', value: 'wait the original tin on the PCB board melt into a liquid like  water, '},
      {type: 'text', value: 'then the dead LED will be easy to take out. '},
      {type: 'title', value: 'Please remember, do not use brute force to move the dead LED, this will hurt the PCB board.'},
      {type: 'img', value: '/news/5-4.jpeg'},
      {type: 'title', value: '4, Assemble the NEW LEDs on the LED module.'},
      {type: 'text', value: 'Step 1: Please clean the extra tin on the PCB board with the soldering iron and new tin. '},
      {type: 'title', value: '(Set as 500 degrees Celsius temperature for your soldering iron)'},
      {type: 'text', value: 'Step 2: find the right direction of the NEW LED the same as the LED module, there is positive and negative on the LED. '},
      {type: 'text', value: 'Step 3: Before put the new led on the PCB board, add some tin to make it more tight when it is seat on the PCB board. '},
      {type: 'text', value: 'Step 4 : use soldering iron to melt the tin, then glue the new LED on the PCB board. '},
      {type: 'img', value: '/news/5-5.jpeg'},
      {type: 'title', value: '5, Test the NEW LED on the LED module:'},
      {type: 'text', value: 'Please plug the ribbon cable first, then plug the power cable, this right step could protect your LED module. '},
      {type: 'text', value: 'Then power on the LED module, run the pure color, WHITE, RED, GREEN, BLUE again.'},
      {type: 'text', value: 'If the led module show the correct color, that means, we succeed ! New leds are working perfect with led module.'},
      {type: 'text', value: 'At last, we need to use the glue to re-cover the new LED, and wait for 30 minutes at least until the glue is dry, then screw back the mask. '},
      {type: 'text', value: 'Do you get it?'},
      {type: 'text', value: 'Any question about Led Screen please come to us for more details.'},
    ]
  }
}

export default {
  namespace: 'news',

  state: {
    list: data,
    datas: obj
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {

  },

  reducers: {

  },
};