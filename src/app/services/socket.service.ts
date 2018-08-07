import {Injectable} from '@angular/core';
import {Socket} from 'ng-socket-io';

@Injectable()
export class SocketService {

  constructor(private socket: Socket) {
  }

  sendMessage(msg: string) {
    this.socket.emit('createMessage', msg);
  }

  getMessage() {
    this.socket.on('createMessage', function (data) {
      console.log(data.message);
    });
  }

}
