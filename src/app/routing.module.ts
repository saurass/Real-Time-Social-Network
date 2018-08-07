import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {CreateRoomComponent} from './create-room/create-room.component';
import {RoomComponent} from './room/room.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
  {path: 'createRoom', canActivate: [AuthGuard], component: CreateRoomComponent},
  {path: 'room/:roomName', canActivate: [AuthGuard], component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {
}
