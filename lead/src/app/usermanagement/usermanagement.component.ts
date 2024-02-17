import { Component ,OnInit} from '@angular/core';
import { UserregisterService } from '../services/userregister.service';
import { User } from '../models/adduser';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  userData: User  | any

  constructor(private userRegisterService: UserregisterService) { }

  ngOnInit(): void {
    this.userRegisterService.getuser().subscribe(data => {
      this.userData=data;
    });
  }
}