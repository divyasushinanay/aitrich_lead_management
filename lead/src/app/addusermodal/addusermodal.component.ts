import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-addusermodal',
  templateUrl: './addusermodal.component.html',
  styleUrls: ['./addusermodal.component.css']
})
export class AddusermodalComponent {
  user: any = {}; // Object to hold user details

  constructor(public dialogRef: MatDialogRef<AddusermodalComponent>) { }

  ngOnInit(): void {
  }

  // Method to handle form submission
  onSubmit() {
    // Here you can implement logic to submit the user data
    console.log('Submitted user:', this.user);
    // Close the modal after submission
    this.dialogRef.close();
  }

}
