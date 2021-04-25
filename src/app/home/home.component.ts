import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  calc(){
    this.router.navigate(['/emiCalcLink']);
  }

  apply(){
   this.router.navigate(['/eligibleLink']);
  }

  imageObject = [
    {
      image: '../assets/images/scroll1.jpg',
      thumbImage: '../assets/images/scroll1.jpg',
      
    }, 
    {
      image: '../assets/images/scroll2.jpg',
      thumbImage: '../assets/images/scroll2.jpg'
    }, 
    {
      image: '../assets/images/loans/3.jpg',
      thumbImage: '../assets/images/loans/3.jpg',
      
    },
    {
      image: '../assets/images/hero-slider/1.jpg',
      thumbImage: '../assets/images/hero-slider/1.jpg',
      
    }, 
    {
      image: '../assets/images/hero-slider/2.jpg',
      thumbImage: '../assets/images/hero-slider/2.jpg'
    }
  ];

}
