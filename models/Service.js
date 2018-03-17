const mongoose = require('mongoose')
/*
创建模式对象(数据类型)
 */
const serviceSchema = new mongoose.Schema({
  title:{type:String},
  orderCount: {type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String}
},
{
  connection:'services'
  })

module.exports = mongoose.model('service', serviceSchema)