import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { CreateClienteComponent } from './components/cliente/create-cliente/create-cliente.component';
import { ShowProductoComponent } from './components/producto/show-producto/show-producto.component';
import { CreateProductoComponent } from './components/producto/create-producto/create-producto.component';
import { NavComponent } from './components/layouts/nav/nav.component';
import { ClienteService } from './services/cliente.service';
import { ProductoService } from './services/producto.service';
@NgModule({
  declarations: [
    AppComponent,
    ShowClienteComponent,
    CreateClienteComponent,
    ShowProductoComponent,
    CreateProductoComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    ClienteService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }