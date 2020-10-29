const mongoose = require('mongoose');

const budgetItemsSchema = new mongoose.Schema({
    title: {
        type:String,
        trim: true,
        required:true,
        unique: true,
        uppercase:true
    },
    value:{
        type:Number,
        trim: true,
        required:true
    },
    color:{
        type:String,
        trim: true,
        required:true,
        uppercase:true,
        minlength: 6
    }

}, { collection: 'budget_items' });

module.exports = mongoose.model("budget_items", budgetItemsSchema);