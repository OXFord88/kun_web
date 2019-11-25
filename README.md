协作官网

1、增加产品步骤
--1）首页产品增加步骤
    文件：/src/models/home.js
    在 const products里面添加

--2）产品页(production)添加产品
    文件：/src/models/products.js

2、增加详情页面
依据模版的不同，选择不同的模版，
一类为链接地址包含 production/detail
二类为链接地址包含 production/dip
三类为链接地址包含 production/cubic
选择不同的地址对应不同的文档
A:一类模版
文件地址： /src/production/CommonDetail.js
数据模版：/src/production/models/detail.js 中的 通过明细


B:二类模版
文件地址： /src/production/DipDetail.js
数据模版：/src/production/models/detail.js 中的 dip产品明细

C:三类模版
文件地址： /src/production/CommonDetail.js
数据模版：/src/production/models/detail.js 中的 cubic产品明细