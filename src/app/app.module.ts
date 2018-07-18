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
import {SignupService} from './services/signup.service';
import {ProfileComponent} from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    PreComponent,
    ProfileComponent
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
    SignupService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
