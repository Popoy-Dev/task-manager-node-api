const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, 'Must provide name'],
    maxlength: [20, 'name can not be more than 20 characters']
    }, 
    completed: {
    type: Boolean,
    default: false
    }
  });

  module.exports = mongoose.model('Task', taskSchema);