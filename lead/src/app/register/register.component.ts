import { UserregisterService } from './../services/userregister.service';
import { Component,OnInit,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,RequiredValidator } from '@angular/forms';
import { User } from '../models/adduser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;

 

  constructor(private fb:FormBuilder,  private userRegisterService: UserregisterService ) { }

  ngOnInit(): void {
 
     this.userForm=this.fb.group({
               'firstName':new FormControl('',Validators.required),
                'lastName':new FormControl('',[Validators.required]),
               'email':new FormControl('',[Validators.required, Validators.email]),
                'phoneNumber':new FormControl('',[Validators.required]),
               'address':new FormControl('',[Validators.required]),
                'dateofBirth':new FormControl('',[Validators.required]),
              'location':new FormControl('',[Validators.required]),
               'gender':new FormControl(''),

       
      });


     

    }

//  onSubmit() {
//           if (this.userForm.valid) {

//             console.log(this.userForm.value);
            
//           } else {
            
//             console.log('Form is invalid');
//           }
//         }
//         resetForm(){

// this.userForm.reset();

//         }

onSubmit(){
  if(this.userForm.valid){
    const formData=this.userForm.value;
    this.userRegisterService.adduser(formData).subscribe(
      (response) =>{console.log(response)
      
      }
    )
  }

}




// onSubmit() {
//   if (this.userForm.valid) {
//     const userData: User = this.userForm.value;
//     this.userRegisterService.adduser(userData);
//     this.userForm.reset();
//   } else {
//     console.log('Form is invalid');
//   }
// }





// onSubmit() {
//   if (this.userForm.valid) {
//     this. userregisterService.setUserData(this.userForm.value);
//     console.log('Form submitted successfully');
//     this.userForm.reset(); // Optionally reset the form after submission
//   } else {
//     console.log('Form is invalid');
//   }
}


 
    


    





