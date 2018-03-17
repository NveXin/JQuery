require('./tools/db')


var express = require('express')

var app = express()

app.use(express.static('public'))

const shopModel = require('./models/Shop')
const ServiceModel = require('./models/Service')
const ItemModel = require('./models/Item')


app.get('/getShopList',function (req,res) {
  shopModel.find({},function (err,data) {
    res.send({data:data})
  })
})

app.get('/getService',function (req,res) {
  ServiceModel.find({},function (err,data) {
    res.send({data:data})
  })
})

app.get('/getService',function (req,res) {
  ItemModel.find({},function (err,data) {
    res.send({data:data})
  })
})


app.listen(3000,function () {
  console.log('服务器连接成功');
})