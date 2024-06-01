const mongoose = require("mongoose")

const TransactionSchema =  mongoose.Schema({

description: {
    type: String,
    required: true
},
amount: {
    type: Number,
    required: true
},
userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
}

},{timestamps:true})
module.exports =  mongoose.model('Transaction', TransactionSchema)