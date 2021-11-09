import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContateNosComponent,
    CadastroUsuarioComponent,
    GaleriaComponent,
    ReservasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
