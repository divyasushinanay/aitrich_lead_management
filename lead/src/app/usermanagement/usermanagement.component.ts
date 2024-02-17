import { Component ,OnInit} from '@angular/core';
import { UserregisterService } from '../services/userregister.service';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
  userData: any[] = [];

  constructor(private userRegisterService: UserregisterService) { }

  ngOnInit(): void {
    // this.userRegisterService.getData().subscribe(data => {
    //   console.log(data); // or do something with the data
    //   this.userData=data;
    // });
  }
}