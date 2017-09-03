import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> dbc0756 (elementos do formulario para cadastro de alunos)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
