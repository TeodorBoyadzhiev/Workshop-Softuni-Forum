import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';

import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './themes/theme.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    ThemeModule,
    AppRoutingModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
