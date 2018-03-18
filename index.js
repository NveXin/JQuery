require('./tools/db')


var express = require('express')

var app = express()

app.use(express.static('public'))

const shopModel = require('./models/Shop')
const ServiceModel = require('./models/Service')
const ItemModel = require('./models/Item')
// const ProjectModel = require('./models/ItemProject')


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

app.get('/getItem',function (req,res) {
  ItemModel.find({},function (err,data) {
    res.send({data:data})
  })
})

app.get('/getProject',function (req,res) {
  const page = req.query.page
  ItemModel.find({}).limit(10).skip((page-1)*10).exec((err, data) => {
    if(!err){
      res.send({data})
    }
  })

})


app.listen(3000,function () {
  console.log('服务器连接成功');
})