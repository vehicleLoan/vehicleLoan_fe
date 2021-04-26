import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { UserService } from '../user.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  
  cust:Customer = new Customer();
  constructor(private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
  }

  submit(){
    localStorage.setItem('appForm',JSON.stringify(this.cust));
    console.log(JSON.stringify(this.cust));

    this.userservice.addVehicleDetails(this.cust).subscribe(
      status=>{
        console.log(status);
        sessionStorage.setItem("vehicleId",status);
      }
    )
    this.router.navigateByUrl("/bankDetailsLink");
  }

  logout(){
    sessionStorage.removeItem("custId");
    sessionStorage.removeItem("formDetails");
    this.router.navigate(['/loginLink']);
  }

}
