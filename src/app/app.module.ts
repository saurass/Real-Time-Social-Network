import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';

import {RoutingModule} from './routing.module';
import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {TestService} from './test.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PreComponent} from './pre/pre.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {CreateRoomComponent} from './create-room/create-room.component';
import {ChatRoomService} from './services/chat-room.service';
import {RoomComponent} from './room/room.component';
import {SocketService} from './services/socket.service';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    PreComponent,
    ProfileComponent,
    LoginComponent,
    CreateRoomComponent,
    RoomComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    HttpClientModule,
    AuthService,
    TestService,
    AuthGuard,
    ChatRoomService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
