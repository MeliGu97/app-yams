import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { BorderCardDirective } from './border-card.directive';
import { PastryTagColorPipe } from './pastry-tag-color.pipe';

import { PaginateComponent } from './paginate/paginate.component';
import { LoginComponent } from './login/login.component';
import { GuardService } from './guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';

import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastrieDetailsComponent,
    BorderCardDirective,
    PastryTagColorPipe,
    SearchComponent,
    PaginateComponent,
    LoginComponent,
    DashboardComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot(routes),// chargement des routes dans l'application
  ],
  providers: [GuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
