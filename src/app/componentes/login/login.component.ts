import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  usuarios: Array<any> = [
    { id: 0, nombre: "admin", correo: "admin@admin.com", clave: 111111 },
    { id: 1, nombre: "invitado", correo: "invitado@invitado.com", clave: 222222 },
    { id: 2, nombre: "usuario", correo: "usuario@usuario.com", clave: 333333 },
    { id: 3, nombre: "anonimo", correo: "anonimo@anonimo.com", clave: 444444 },
    { id: 4, nombre: "tester", correo: "tester@tester.com", clave: 555555 }
  ] 
  onChange(id) {
    console.log("llega");
    console.info(this.usuarios[id].correo);
    this.email = this.usuarios[id].correo;
    this.password = this.usuarios[id].clave;
  }
  constructor(private route:Router) { }
  ingresar()
  {
    this.route.navigate(['/home']);
  }

  ngOnInit() {}
 

}
