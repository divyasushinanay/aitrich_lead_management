import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  companyName: string = "Aitrich Technologies";
  originalCompanyName: string = ""; // Variable to store original company name
  isEditingName: boolean = false;

  toggleEditName() {
    if (!this.isEditingName) {
      // Store the original company name before editing
      this.originalCompanyName = this.companyName;
    } else {
      // If editing is canceled, restore the original company name
      // If the original company name is not empty, restore it
      // Otherwise, reset to default value
      this.companyName = this.originalCompanyName !== '' ? this.originalCompanyName : 'Aitrich Technologies';
    }
    this.isEditingName = !this.isEditingName; // Toggle editing mode
  }
}
