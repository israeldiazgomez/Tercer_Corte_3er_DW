import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteI } from 'src/app/models/Cliente';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-cliente',
  templateUrl: './show-cliente.component.html',
  styleUrls: ['./show-cliente.component.css']
})
export class ShowClienteComponent implements OnInit {
  public clientes: ClienteI[] = []
  public displayedColumns: string[] = ["id", "nombre", "apellido", "cedula", "fecha", "resultado"]
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarCliente()
  }
  mostrarCliente() {
    this.clienteService.getcliente()
    .subscribe({
      next: (data) => {
        this.clientes = data
        console.log(data)
      }
    })
  }

}
