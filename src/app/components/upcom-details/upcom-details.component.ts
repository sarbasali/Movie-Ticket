import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-upcom-details',
  templateUrl: './upcom-details.component.html',
  styleUrls: ['./upcom-details.component.scss']
})
export class UpcomDetailsComponent implements OnInit{
  constructor(private servi:ServiceService){}
  upcom:any
  img:any="https://image.tmdb.org/t/p/original"

  ngOnInit(): void {
      this.servi.getUpcoming().subscribe(data=>{
    console.log(data);
    this.upcom=data
    console.log(this.upcom);
    
      
  })
  


}
}