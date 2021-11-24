import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteI } from 'src/app/models/Cliente';
@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  public formulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    cedula: ['', Validators.required],
    fecha: ['', Validators.required],
    resultado: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private snackBar: MatSnackBar,
    private roter: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    const formValue: ClienteI = this.formulario.value;
    this.clienteService.create(formValue).subscribe(
      () => {
        this.snackBar.open(
          'Registro creado Exitosamente ', 'OK', {
            duration: 5000,
          }
        );
        this.roter.navigateByUrl('/cliente');
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
