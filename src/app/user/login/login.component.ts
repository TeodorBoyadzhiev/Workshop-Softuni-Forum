import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator } from '../../shared/validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('form', { read: NgForm }) form!: NgForm;

  emailValidator = emailValidator;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  login(form: NgForm): void {
    if (form.invalid) { return; }
    const { email, password } = form.value;
    this.userService.login({ email, password }).subscribe({
      next: () => {
        const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
        this.router.navigate([redirectUrl]);
      },
      error: (err) => {
        console.log(err);

      }
    });
  }
}


