import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  otpForm !: FormGroup;
  loginSpinner = false;
  errormessage = false;
  isActive = true;
  errorMsg = '';
  submitted = false;
  otpSubmitted = false;
  showLogin = false;
  otpData = "";
  // otp = "";
  otpId = "";
  isError=false;
  constructor(private router: Router, private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern("^[A-Za-z][A-Za-z0-9_]{2,29}$")]],
      password: ['', [Validators.required]]
    });
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required]]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  get s(): { [key: string]: AbstractControl } {
    return this.otpForm.controls;
  }

  login() {
    this.otpSubmitted = true;
    this.isError=false;
    this.errorMsg = '';
    if (this.otpForm.invalid) { return; }

    var loginRequest = {
      "username": this.f.username.value,
      "password": this.f.password.value,
      "otp": this.s.otp.value,
      "otpId": this.otpId
    }
    console.log(loginRequest);
    this.router.navigate(['/dashboard']);
    sessionStorage.setItem("login", "true");
    // this.api.postRequestResponseDataLogin("/rest/auth/verifyOtp", loginRequest).subscribe(res => {
    //   if (res) {
    //     console.log(res.messages[0]);
    //     if (res.payload.token == "0.123") {
    //       this.isError = true;
    //       this.errorMsg = res.message[0];
    //       return;
    //     }
    //     sessionStorage.setItem("login", "true");
    //     this.router.navigate(['/dashboard']);
    //     sessionStorage.setItem("mainWallet", res.payload.user.main_wallet);
    //     sessionStorage.setItem("token", res.payload.token);
    //     sessionStorage.setItem("userId", btoa(res.payload.user.id));
    //     sessionStorage.setItem("userType", btoa(res.payload.user.isApiUser));
    //     sessionStorage.setItem("userName", btoa(res.payload.user.username));
    //     sessionStorage.setItem("isLoggin", "true");
    //     sessionStorage.setItem("fullName", btoa(res.payload.user.name));
    //     sessionStorage.setItem("mobile", btoa(res.payload.user.mobile));
    //     sessionStorage.setItem("email", btoa(res.payload.user.email));

    //   }
    // });

  }
  logout() {
  }
  sendOtp() {
    this.submitted = true;

    //if form is valid
    if (this.loginForm.valid) {
      this.loginSpinner = true;
    }
    if (this.loginForm.invalid) {
      return;
    }

    var loginRequest = {
      "username": this.f.username.value,
      "password": this.f.password.value
    }
    console.log("comes here..")
    this.showLogin = true;
    // this.api.postRequestResponseDataLogin("/rest/auth/sendOtp", loginRequest).subscribe(res => {
    //   console.log(res)
    //   if (res) {
    //     this.showLogin = true;
    //     this.otpId = res.payload.token;
    //     const Toast = Swal.mixin({
    //       toast: true,
    //       position: "top-end",
    //       showConfirmButton: false,
    //       timer: 3000,
    //       timerProgressBar: true,
    //       didOpen: (toast) => {
    //         toast.onmouseenter = Swal.stopTimer;
    //         toast.onmouseleave = Swal.resumeTimer;
    //       }
    //     });
    //     Toast.fire({
    //       icon: "success",
    //       title: "Otp sent successfully"
    //     });
    //   }
    // });

  }
}
