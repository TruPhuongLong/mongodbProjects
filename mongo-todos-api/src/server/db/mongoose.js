const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/TodoApp'

mongoose.PromiseProvider = global.Promise
mongoose.connect(url)

module.exports = {mongoose}