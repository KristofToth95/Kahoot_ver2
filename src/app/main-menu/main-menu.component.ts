import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';
import { RestDataSource } from '../model/rest.datasource';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  constructor(){}
  

  // gameCode = new FormControl('');
  // profileForm = new FormGroup({
  //   userName: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required])
  // });
  // registrationForm = this.fb.group({
  //   UserName: ['', Validators.required],
  //   Email: ['', Validators.required],
  //   FullName: [''],
  //   Passwords: this.fb.group({
  //     Password: ['', [Validators.required, Validators.minLength(4)]],
  //     ConfirmPassword: ['', [Validators.required]]
  //   }, { validator: this.comparePasswords })
  // })

  // login_active: Boolean = false;
  // play_active: Boolean = false;
  // @ViewChild('login_slider', { static: false }) login_slider: ElementRef;
  // @ViewChild('play_slider', { static: false }) play_slider: ElementRef;

  // constructor(private renderer: Renderer2, private auth: AuthService, private router: Router, private fb: FormBuilder, private rest: RestDataSource) { }

  // onSubmitUser() {
  //   this.auth.authenticate(this.profileForm.value.userName, this.profileForm.value.password)
  //     .subscribe(response => {
  //       if (response) {
  //         this.router.navigateByUrl("/admin");
  //       } else {
  //         console.warn("Authentivation Failed");
  //       }
  //     })
  // }
  // onSubmitGame() {
  //   console.warn(this.gameCode);
  // }
  // loginButtonClick() {
  //   if (this.login_active) {
  //     this.renderer.removeClass(this.login_slider.nativeElement, 'active');
  //     this.login_active = false;
  //   } else {
  //     this.renderer.addClass(this.login_slider.nativeElement, 'active');
  //     this.login_active = true;
  //     this.renderer.removeClass(this.play_slider.nativeElement, 'active');
  //     this.play_active = false;
  //   }
  // }
  // playButtonClick() {
  //   if (this.play_active) {
  //     this.renderer.removeClass(this.play_slider.nativeElement, 'active');
  //     this.play_active = false;
  //   } else {
  //     this.renderer.addClass(this.play_slider.nativeElement, 'active');
  //     this.play_active = true;
  //     this.renderer.removeClass(this.login_slider.nativeElement, 'active');
  //     this.login_active = false;
  //   }
  // }
  // comparePasswords(fb: FormGroup) {
  //   let confirmPswrdCtrl = fb.get('ConfirmPassword');
  //   //passwordMismatch
  //   //confirmPswrdCtrl.errors={passwordMismatch:true}
  //   if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
  //     if (fb.get('Password').value != confirmPswrdCtrl.value)
  //       confirmPswrdCtrl.setErrors({ passwordMismatch: true });
  //     else
  //       confirmPswrdCtrl.setErrors(null);
  //   }
  // }
  // onSubmitRegistration(){
  //   var body = {
  //     UserName: this.registrationForm.value.UserName,
  //     Email: this.registrationForm.value.Email,
  //     FullName: this.registrationForm.value.FullName,
  //     Password: this.registrationForm.value.Passwords.Password
  //   }
  //   this.rest.registration(body).subscribe(
  //     (res: any) => {
  //       if(res.succeded) {
  //         this.registrationForm.reset();
  //       } 
  //     }
  //   );
  // }

}
