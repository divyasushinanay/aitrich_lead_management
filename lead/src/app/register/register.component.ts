import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      address: [''],
      location: [''],
      city: [''],
      country: [''],
      age: [''],
      gender: [''],
      password: ['', Validators.required]
    });
  }

 
  onSubmit() {
    if (this.userForm.valid) {
      // Submit the form data
      console.log(this.userForm.value);
    }
  }

}
