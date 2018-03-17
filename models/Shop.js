const mongoose = require('mongoose')
/*
创建模式对象(数据类型)
 */
const shopSchema = new mongoose.Schema({
  serviceIndex:{type:String},
  serviceType:{type:Array},
  shopList:{type:Array}
})

module.exports = mongoose.model('shop', shopSchema)