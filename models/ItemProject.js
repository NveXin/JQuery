const mongoose = require('mongoose')
/*
创建模式对象(数据类型)
 */
const projectSchema = new mongoose.Schema({
    createtime: {type:Number},
    star: {type:Number},
    iconUrl:{type:String},
    area:{type:String},
    city:{type:String},
    comment:{type:String},
    nick:{type:String}
  })

module.exports = mongoose.model('service', projectSchema)