import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routing } from './app.routes';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/authguard.service';
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    ProductModule
  ],
  providers: [AuthService, AuthGuard, provideAuth({
    tokenName: 'token',
    headerPrefix: 'JWT',
    tokenGetter: () => localStorage.getItem("token")
  }), DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
