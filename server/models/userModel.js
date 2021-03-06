var mongoose = require('mongoose'),
    list = require('./listSchema'),
    subTask = require('./subTaskSchema'),
    task = require('./taskSchema'),
    Schema = mongoose.Schema,
    userSchema;

userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  lists: [list],
  tasks: [task],
  subTasks: [subTask]
});

userSchema.set('versionKey', false);

module.exports = mongoose.model('User', userSchema);
