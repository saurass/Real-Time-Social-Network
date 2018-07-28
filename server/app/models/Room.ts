import * as mongoose from 'mongoose';

let roomSchema = mongoose.Schema({
  roomName: {type: String, unique: true},
  created_by_id: {type: String}
});

roomSchema = mongoose.model('Room', roomSchema);

export {roomSchema};
