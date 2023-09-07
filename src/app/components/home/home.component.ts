import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private service:ServiceService,
    private router: Router
    ){}
  img:any="https://image.tmdb.org/t/p/original"
  postArray:any
sortArray:any
  ngOnInit(){
    this.service.getPost().subscribe((res)=>{
      this.postArray=res
      console.log(this.postArray);

     this.sortArray=this.postArray.results.slice(0,5);

    console.log(this.sortArray);
    
      
    })

   
  }
  nextcomp(id:any){
    this.service.ids = id
    console.log(this.service.ids)
    // this.router.navigate(['/', 'details'])
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

 
}
