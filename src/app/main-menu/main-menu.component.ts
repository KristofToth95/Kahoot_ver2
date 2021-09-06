import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  gameCode = new FormControl('');
  profileForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  login_active: Boolean = false;
  play_active: Boolean = false;
  @ViewChild('login_slider', { static: false }) login_slider: ElementRef;
  @ViewChild('play_slider', { static: false }) play_slider: ElementRef;

  constructor(private renderer: Renderer2, private auth: AuthService, private router: Router) { }

  onSubmitUser() {
    this.auth.authenticate(this.profileForm.value.userName, this.profileForm.value.password)
    .subscribe(response => {
      if(response){
        this.router.navigateByUrl("/admin");
      }
      console.warn("Authentivation Failed");
    })   
  }
  onSubmitGame() {
    console.warn(this.gameCode);
  }
  loginButtonClick() {
    if (this.login_active) {
      this.renderer.removeClass(this.login_slider.nativeElement, 'active');
      this.login_active = false;
    } else {
      this.renderer.addClass(this.login_slider.nativeElement, 'active');
      this.login_active = true;
      this.renderer.removeClass(this.play_slider.nativeElement, 'active');
      this.play_active = false;
    }
  }
  playButtonClick() {
    if (this.play_active) {
      this.renderer.removeClass(this.play_slider.nativeElement, 'active');
      this.play_active = false;
    } else {
      this.renderer.addClass(this.play_slider.nativeElement, 'active');
      this.play_active = true;
      this.renderer.removeClass(this.login_slider.nativeElement, 'active');
      this.login_active = false;
    }
  }

}
