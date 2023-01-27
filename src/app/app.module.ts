import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
//import { AnimalComponent } from './components/animal/animal.component'

import { AnimalModule } from './components/animal/animal.module';
import { MainModule } from './components/main/main.module';
import { AnimalIndexModule } from './components/animal/animal-index/animal-index.module';
import { AnimalAllModule } from './components/animal/animal-all/animal-all.module';
import { AnimalDetailModule } from './components/animal/animal-detail/animal-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,   
    AnimalModule,
    AnimalIndexModule, 
    AnimalAllModule,
    AnimalDetailModule,
    FormsModule,
    HttpClientModule,
    MainModule,

    routing,

  ],
  providers: [
    appRoutingProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
