import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { ListaAlimnosComponent } from './pages/lista-alimnos/lista-alimnos.component';
import { AlumnoService } from './services/alumno.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlimnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
