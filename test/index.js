/*
暴露模型数据
 */
require('../tools/db')

const ShopModel = require('./models/Shop')
const ServiceModel = require('./models/Service)
const ItemModel = require('./models/Item)
const ProjectModel = require('./models/ItemProject)

ShopModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})

ServiceModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})

ItemModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})

ProjectModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})