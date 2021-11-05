import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/model/shared/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(public auth: AuthService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.auth.formModel.reset();
  }

  onSubmit() {
    this.auth.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.auth.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken', 'Registration failed.');
                break;

              default:
                this.toastr.error(element.description, 'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
