import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  router: any;
  public time=true
  btnhide=false
//  public hid: true
    constructor(private serv:ServiceService){}
  getArray:any
  img:any="https://image.tmdb.org/t/p/original"
  public checkwindow = false
  ngOnInit(){
  //   this.serv.getPost().subscribe((res)=>{
  //     this.getArray=res
  //     console.log(this.getArray);
  // })
  

  this.serv.getEachPost().subscribe(data=>{
    // console.log(data);
    this.getArray=data
    console.log(this.getArray);
    
    
  })
 
}

book(){
  this.time=false
  console.log(this.time);
  this.checkwindow=true
  this.btnhide=true
}

}