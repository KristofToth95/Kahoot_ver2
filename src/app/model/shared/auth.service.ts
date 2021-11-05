import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class AuthService {
  constructor(private datasource: RestDataSource,private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURL = 'https://localhost:44313/api';


  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
  get gameID(){
    return Number(localStorage.getItem('gameID'));
  }
  get userID(){
    return Number(localStorage.getItem('userID'));
  }
  register() {
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURL + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURL + '/ApplicationUser/Login', formData);
  }

  play(formData){
    return this.http.post(`${this.BaseURL}/Play/JoinGame`, formData)
  }
  getGameStart(): boolean{
    this.datasource.getGameStart(this.gameID).subscribe(
      (res: true) =>{
        return true;
      }
    )
    return false;
}

}
