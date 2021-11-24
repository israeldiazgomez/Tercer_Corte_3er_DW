import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClienteComponent } from './components/cliente/create-cliente/create-cliente.component';
import { ShowClienteComponent } from './components/cliente/show-cliente/show-cliente.component';
import { CreateProductoComponent } from './components/producto/create-producto/create-producto.component';
import { ShowProductoComponent } from './components/producto/show-producto/show-producto.component';

const routes: Routes = [
  {
    path: "cliente",
    component: ShowClienteComponent
  },
  {
    path: "crearCliente",
    component: CreateClienteComponent
  },
  {
    path: "producto",
    component: ShowProductoComponent
  },
  {
    path: "crearProducto",
    component: CreateProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
