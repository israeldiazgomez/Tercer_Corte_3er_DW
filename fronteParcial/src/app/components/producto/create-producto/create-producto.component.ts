import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoI } from 'src/app/models/Producto';
@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {
  public formulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required]
  })
  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    const formValue: ProductoI = this.formulario.value;
    this.productoService.create(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Registro creado Exitosamente ', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/producto');
      },
      err => {
        this.snackBar.open(
          'Sorry no fue creado exitosamente ', 'PAILAS', {
            duration: 5000,
          }
        )

      }
    )
    
  }
}
