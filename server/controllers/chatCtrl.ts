import {roomSchema as Room} from '../app/models/Room';

export default class ChatCtrl {

  createNewChatRoom = (req, res) => {
    const room = new Room;
    room.roomName = req.body.roomName;
    room.created_by_id = req.body.created_by_id;
    room.save(function (err) {
      if (err) {
        res.status(400).json({'status': 'N', 'message': 'couldnt save room'});
      } else {
        res.status(200).json({'status': 'Y', 'message': 'room saved successfully !!!'});
      }
    });
  }

  getAllRooms = (req, res) => {
    return Room.find({created_by_id: req.payload._id}, (err, room) => {
      if (room) {
        res.status(200).json(room);
      } else {
        res.status(400).json(err);
      }
    });
  }

}
