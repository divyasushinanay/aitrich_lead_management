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
  user: User | any

 

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


// Submitting the form
onSubmit(){
  if(this.userForm.valid){
    const formData=this.userForm.value;
    this.userRegisterService.adduser(formData).subscribe(
      (response) =>{
        this.user = response
        this.userForm.reset() // Reseting form after submiting
      
      }
    )
  }

}

}


 
    


    





