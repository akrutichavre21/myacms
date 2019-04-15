const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EnableSchema = new Schema({

    pid: {type: Schema.Types.ObjectId, ref: 'Project' },
    userid   : String


});
module.exports = mongoose.model('Enable', EnableSchema);
