import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/model/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName:'',
    Password:''
  }
  constructor(private router: Router, private toastr: ToastrService, private auth: AuthService) { }

  ngOnInit() {
   // if (localStorage.getItem('token') != null)
      //this.router.navigateByUrl('/admin');
  }
  onSubmit(form: NgForm) {
    this.auth.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/admin');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }

}
