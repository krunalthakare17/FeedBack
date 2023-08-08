
import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery to avoid TypeScript errors


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements AfterViewInit{
  
  ngAfterViewInit() {
    // Initialize the date picker on the input element with the 'datepicker' class
    $('.datepicker').datepicker();
  }
  // $('.datepicker').datepicker().on('changeDate', function (e: any) {
  //   // Handle the selected date here
  //   console.log('Selected date: ', e.date);
  // });
  
}


