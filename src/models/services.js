
// about web of data
// warranty profile source
/*
  img: 图片 ---   地址--public/about. 590 X 400
  content: {
    title: 蓝色标题
    text: 相关文字内容
  }
*/

export default {
  namespace: 'services',

  state: {
    banner: '/services/banner.jpg',
    message: {
      til: 'Service Network',
      text: '7 / 24 Service center providing the best and timely service',
      img: '/services/mes.jpeg',
      dear: 'Dear Customers,',
      head: 'We are deeply grateful for your support. Your satisfaction is our constant pursuit.  ',
      list: [
        {type: 'title', value: '1.Warranty Scope '},
        {type: 'text', value: 'This Warranty Policy applies to LED display products (hereinafter referred to as “Products”) purchased directly from ENOR ELECTRONICS CO., LIMITED (hereinafter referred to as “ENOR”) and within the Warranty Period. Any products not purchased directly from ENOR does not apply to this Warranty Policy.'},
        {type: 'title', value: '2.Warranty Period'},
        {type: 'text', value: 'he warranty period shall be in accordance with the specific sales contract. Please make sure warranty card or other valid warranty documents are in safekeeping.'},
        {type: 'title', value: '3. Warranty Service'},
        {type: 'text', value: 'Products shall be installed and used strictly aligned with the Installment Instructions and Cautions for Use stated in the product manual. If Products have defects of quality, materials, and manufacturing during normal use, ENOR provides warranty service for Products under this Warranty Policy.'},
        {type: 'img', value: '/services/s1.jpeg'},
        {type: 'title', value: '4. Warranty Service Types'},
        {type: 'text', value: '4.1 Online Remote Free Technical Service:'},
        {type: 'text', value: 'he remote technical guidance provided through instant messaging tools such as telephone, mail, and other means to help solve simple and common technical problems. This service is applicable for technical problems including but not limited to the connection issue of signal cable and power cable, system software issue of software use and parameter settings, and replacement issue of the module, power supply, system card, etc.'},
        {type: 'text', value: '4.2 Return to Factory Repair Service:'},
        {type: 'text', value: '(a) For problems of Products that cannot be solved by online remote service, ENOR will confirm with the customers whether to provide returning to the factory repair service.'},
        {type: 'text', value: '(b) If factory repair service is needed, the customer shall bear the freight, insurance, tariff and customs clearance for return delivery of the returned products or parts to ENOR’s service station. And ENOR will send back the repaired products or parts to customers and only bear one-way freight.'},
        {type: 'text', value: '(c) ENOR will reject unauthorized return delivery via pay upon arrival and will not be liable for any tariffs and custom clearance fees. ENOR shall not be held liable for any defects, damages or losses of the repaired products or parts due to transportation or improper package.'},
        {type: 'text', value: '4.3 Provide On-site Engineer Service for Quality Issues:'},
        {type: 'text', value: '(a) If there is a quality issue as stipulated in Article 5 of this Warranty Policy, and ENOR believes the condition is necessary, on-site engineer service free of charge will be provided. '},
        {type: 'text', value: '(b) In this case, customers shall provide a fault report to ENOR for on-site service application. The content of the fault report shall include but not limited to photos, videos, number of faults, etc., to enable ENOR to conduct preliminary fault judgment. If the quality problems are not covered by this Warranty Policy after the on-site investigation of ENOR’s engineer, customers shall pay travel expenses and technical service fees.'},
        {type: 'title', value: '5. Disclaimer'},
        {type: 'text', value: 'No warranty liability shall be assumed by ENOR for defects or damages due to the following conditions:'},
        {type: 'text', value: '5.1 Unless written agreed otherwise, this Warranty Policy does not apply to consumables, including but not limited to connectors, networks, fiber optic cables, cables, power cables, signal cables, aviation connectors, and other wire and connections.'},
        {type: 'text', value: '5.2 Defects, malfunctions or damages caused by improper use, improper handling, improper operation, improper installation/disassembly of the display or any other customer misconduct. Defects, malfunctions or damages caused during transportation.'},
        {type: 'text', value: '5.3 Unauthorized disassembly and repair without permission of ENOR.'},
        {type: 'text', value: '5.4 Improper use or improper maintenance not in accordance with the product manual.'},
        {type: 'text', value: '5.5 Man-made damages, physical damages, accident damages and product misuse, such as component defect damage, PCB board defect, etc.'},
        {type: 'text', value: '5.6 Product damage or malfunction caused by Force Majeure Events, including but not limited to war, terrorist activities, floods, fires, earthquakes, lightning, etc.'},
        {type: 'text', value: '5.7 The product shall be stored in a dry, ventilated environment. Any product defects, malfunctions or damages caused by storage in an external environment that does not comply with the product manual, including but not limited to extreme weather, humidity, salt haze, pressure, lightning, sealed environment, compressed space storage etc.'},
        {type: 'text', value: '5.8 Products used in conditions not meeting product parameters including, but not limited to lower or higher voltage, extreme or excessive power surges, improper power conditions.'},
        {type: 'text', value: '5.9 Defects, malfunctions, or damages caused by non-compliance with technical guidelines, instructions, or precautions during the installation.'},
        {type: 'text', value: '5.10 Natural loss of brightness and color under normal conditions. Normal degradation in the performance of the Product, normal wear and tear.'},
        {type: 'text', value: '5.11 Lack of necessary maintenance.'},
        {type: 'text', value: '5.12 Other repairs not caused by product quality, design, and manufacturing.'},
        {type: 'text', value: '5.13 Valid warranty documents cannot be provided. The product serial number is torn or damaged. Product shell or other external parts are damaged.'},
        {type: 'text', value: '5.14 Repairs after Warranty Period.'},
        {type: 'title', value: '6. Warranty Service Process'},
        {type: 'text', value: '6.1  Remote Service Process:'},
        {type: 'text', value: 'Submit service requirements through the website, email, telephone and other service channels of ENOR with a warranty card or contract number. The specific content of the service and contact information shall be provided.'},
        {type: 'text', value: '6.2  Product Return to Repair Process:'},
        {type: 'text', value: 'Submit service requirements through the website, email, telephone and other service channels of ENOR with a warranty card or contract number. Packing list of the returned product and postal information to receive the repaired product shall be provided.'},
        {type: 'text', value: 'A、ENOR’s postal information is stipulated in Article 11.'},
        {type: 'text', value: 'B、Customer instructions:'},
        {type: 'text', value: 'i.  Shall provide a brief fault report (can be attached to the surface of the repaired item)'},
        {type: 'text', value: 'ii. Shall provide packing list (including contract number, model and quantity of the repaired item)'},
        {type: 'text', value: 'iii.     Shall provide receipt postal information (company name, address, consignee, contact information, etc.)'},
        {type: 'text', value: 'iv. To avoid damages of the returned products during transportation, please be cautious about the package and protection of the products. ENOR is not responsible for any damages to the returned products or parts during delivery.'},
        {type: 'text', value: '6.3   On-site Engineer Service Process:'},
        {type: 'text', value: 'Submit service requirements through the website, email, telephone and other service channels of ENOR with a warranty card or contract number. Service content, site address, contact information, and visa application information shall be provided.'},
        {type: 'title', value: '7. General Terms'},
        {type: 'text', value: 'This Warranty Policy is a standard application of ENOR. No other third party (including any agent, distributor or sales representative) is authorized to make any representations or warranties that are different from this Warranty Policy. Unless otherwise confirmed by ENOR in written forms of contract or other documents, any warranty clauses that conflict with this Warranty Policy shall be deemed to be automatically invalid. Final power of interpretation of this Warranty Policy shall be vested in ENOR.'},
      ],
      lastText: 'Kind regards,',
      lastImg: '/logo_tiny.png'
    }
  },
  subscriptions: {
    setup({ dispatch }, done) {},
  },
  effects: {

  },

  reducers: {

  },
};
