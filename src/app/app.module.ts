import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './main/main.component';
import { ClassesComponent } from './classes/classes.component';
import {Routes, RouterModule } from '@angular/router';
import {StudentsService} from './students.service';
import {FormsModule} from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import {SubjectsService} from './subjects.service';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'classes', component: ClassesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    MainComponent,
    ClassesComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [StudentsService, SubjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
