import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'app/service/auth-service.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashbord: any;
  constructor(private authServiceService: AuthServiceService) { }

  ngOnInit(): void {
    this.getAllInfoDashbord()
  }

  getAllInfoDashbord() {
    this.authServiceService.dashbord().subscribe((response: any) => {
      this.dashbord = response;
      console.log("hello", response);

    })
  }
}
