import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoI } from 'src/app/models/Producto';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-producto',
  templateUrl: './show-producto.component.html',
  styleUrls: ['./show-producto.component.css']
})
export class ShowProductoComponent implements OnInit {
  public productos: ProductoI[] = []
  public displayedColumns: string[] = ["id", "nombre", "descripcion"]
 
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarProducto()
  }
  mostrarProducto() {
    this.productoService.getproducto()
    .subscribe({
      next: (data) => {
        this.productos = data
        console.log(data)
      }
    })
  }

}
