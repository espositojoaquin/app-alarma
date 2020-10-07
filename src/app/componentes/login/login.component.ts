import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../servicios/auth.service";
//import { ToastrService } from 'ngx-toastr';
import {ToastService  } from "../../servicios/toast.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  spiner:boolean = false;

  constructor(private route:Router,private auth:AuthService,private toast:ToastService) { }
  usuarios: Array<any> = [
    { id: 0, nombre: "admin", correo: "admin@admin.com", clave: 111111 },
    { id: 1, nombre: "invitado", correo: "invitado@invitado.com", clave: 222222 },
    { id: 2, nombre: "usuario", correo: "usuario@usuario.com", clave: 333333 },
    { id: 3, nombre: "anonimo", correo: "anonimo@anonimo.com", clave: 444444 },
    { id: 4, nombre: "tester", correo: "tester@tester.com", clave: 555555 },
    { id: 5, nombre: "joaquin", correo: "espositojoaquin1998@gmail.com", clave: 'rojorojo' }
  ] 
  onChange(id) {
    console.log("llega");
    console.info(this.usuarios[id].correo);
    this.email = this.usuarios[id].correo;
    this.password = this.usuarios[id].clave;
  }
  ingresar()
  { 
    this.spiner = true;
    this.auth.login(this.email, this.password)
      .then(res => {
       
       
        this.route.navigate(['/home']);
        this.spiner = false;
      })
      .catch(error => {
       
        this.spiner = false;
        this.toast.errorToast("Los datos son incorrectos o no existe el usuario");
     
       
      })
  }

  ngOnInit() {}
 

}
