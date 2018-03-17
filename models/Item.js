const mongoose = require('mongoose')
/*
创建模式对象(数据类型)
 */
const itemSchema = new mongoose.Schema({
  title:{type:String},
  name:{type:String},
  desc:{type:String},
  price:{type:Number},
  oldPrice:{type:Number},
  orderCount:{type:Number},
  soldCount:{type:Number},
  commentCount:{type:Number},
  accept:{type:String},
  praise:{type:String},
  imgUrl:{type:String},
  company:{type:String},
  profile:{type:String}
})

module.exports = mongoose.model('item', itemSchema)