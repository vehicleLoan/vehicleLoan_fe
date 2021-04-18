import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  
  cust:Customer = new Customer();
  StateOfPurchase;CityOfPurchase;ExShowroomPrice;VehicleModel;VehicleMake;OnRoadPrice;
  EmiMonths;
  constructor() { }

  ngOnInit(): void {
  }

}
