import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
ids:any
  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/upcoming?api_key=6a68c6df996c189f425e5d5fe930e493`)
    // .pipe(map((res)=>{
    //   return res
    // })
    // )

  }
  getEachPost(){
    return this.http.get<any>(` https://api.themoviedb.org/3/movie/${this.ids}?api_key=6a68c6df996c189f425e5d5fe930e493`)
    // .pipe(map((res)=>{
    //   return res
    // })
    // )

  }

  

}
