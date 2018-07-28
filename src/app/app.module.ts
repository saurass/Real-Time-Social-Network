import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import {ChatRoomService} from "./services/chat-room.service";


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    PreComponent,
    ProfileComponent,
    LoginComponent,
    CreateRoomComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,
    AuthService,
    TestService,
    AuthGuard,
    ChatRoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
