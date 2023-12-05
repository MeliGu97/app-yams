import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule, pastriesRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { BorderCardDirective } from './border-card.directive';
import { PastryTagColorPipe } from './pastry-tag-color.pipe';

import { PaginateComponent } from './paginate/paginate.component';


@NgModule({
  declarations: [
    AppComponent,
    PastriesComponent,
    PastrieDetailsComponent,
    BorderCardDirective,
    PastryTagColorPipe,
    SearchComponent,
    PaginateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(pastriesRoutes),// chargement des routes dans l'application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
