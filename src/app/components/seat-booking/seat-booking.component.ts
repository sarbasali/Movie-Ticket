import { Component } from '@angular/core';
declare var Razorpay :any

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss']
})
export class SeatBookingComponent {
seatArr:any
  btnColor: any;
  paywindow=false
  tcktAmt=180
  tctGrandamt=0
 totalAmt:string='00'
seatArr2:any =[]
seatArr3:any =[]


  ngOnInit(){
    this.seatArr=[
      {id:'A2', sno:6, },
      {id:'A2', sno:7, },
      {id:'A2', sno:8, },
      {id:'A2', sno:9, },
      {id:'A2', sno:10, },
      {id:'A2', sno:11, },
      {id:'A2', sno:12, },
      {id:'A2', sno:13, },
      {id:'A2', sno:14, },
      {id:'A2', sno:15, },

      {id:'B2', sno:6, },
      {id:'B2', sno:7, },
      {id:'B2', sno:8, },
      {id:'B2', sno:9, },
      {id:'B2', sno:10, },
      {id:'B2', sno:11, },
      {id:'B2', sno:12, },
      {id:'B2', sno:13, },
      {id:'B2', sno:14, },
      {id:'B2', sno:15, },

      {id:'C2', sno:6, },
      {id:'C2', sno:7, },
      {id:'C2', sno:8, },
      {id:'C2', sno:9, },
      {id:'C2', sno:10, },
      {id:'C2', sno:11, },
      {id:'C2', sno:12, },
      {id:'C2', sno:13, },
      {id:'C2', sno:14, },
      {id:'C2', sno:15, },

      {id:'D2', sno:6, },
      {id:'D2', sno:7, },
      {id:'D2', sno:8, },
      {id:'D2', sno:9, },
      {id:'D2', sno:10, },
      {id:'D2', sno:11, },
      {id:'D2', sno:12, },
      {id:'D2', sno:13, },
      {id:'D2', sno:14, },
      {id:'D2', sno:15, },

      {id:'E2', sno:6, },
      {id:'E2', sno:7, },
      {id:'E2', sno:8, },
      {id:'E2', sno:9, },
      {id:'E2', sno:10, },
      {id:'E2', sno:11, },
      {id:'E2', sno:12, },
      {id:'E2', sno:13, },
      {id:'E2', sno:14, },
      {id:'E2', sno:15, },

      {id:'F2', sno:6, },
      {id:'F2', sno:7, },
      {id:'F2', sno:8, },
      {id:'F2', sno:9, },
      {id:'F2', sno:10, },
      {id:'F2', sno:11, },
      {id:'F2', sno:12, },
      {id:'F2', sno:13, },
      {id:'F2', sno:14, },
      {id:'F2', sno:15, },

      {id:'G2', sno:6, },
      {id:'G2', sno:7, },
      {id:'G2', sno:8, },
      {id:'G2', sno:9, },
      {id:'G2', sno:10, },
      {id:'G2', sno:11, },
      {id:'G2', sno:12, },
      {id:'G2', sno:13, },
      {id:'G2', sno:14, },
      {id:'G2', sno:15, },

    ]
  this.seatArr2 =[
      
        {id:'A1', sno:1, },
        {id:'A1', sno:2, },
        {id:'A1', sno:3, },
        {id:'A1', sno:4, },
        {id:'A1', sno:5, },

        {id:'B1', sno:1, },
        {id:'B1', sno:2, },
        {id:'B1', sno:3, },
        {id:'B1', sno:4, },
        {id:'B1', sno:5, },

        {id:'C1', sno:1, },
        {id:'C1', sno:2, },
        {id:'C1', sno:3, },
        {id:'C1', sno:4, },
        {id:'C1', sno:5, },

        {id:'D1', sno:2, },
        {id:'D1', sno:1, },
        {id:'D1', sno:3, },
        {id:'D1', sno:4, },
        {id:'D1', sno:5, },

        {id:'E1', sno:2, },
        {id:'E1', sno:1, },
        {id:'E1', sno:3, },
        {id:'E1', sno:4, },
        {id:'E1', sno:5, },

        {id:'F1', sno:1, },
        {id:'F1', sno:2, },
        {id:'F1', sno:3, },
        {id:'F1', sno:4, },
        {id:'F1', sno:5, },



      
    ]
    this.seatArr3=[
      {id:'A2', sno:16, },
      {id:'A2', sno:17, },
      {id:'A2', sno:18, },
      {id:'A2', sno:19, },
      {id:'A2', sno:20, },

      {id:'B2', sno:16, },
      {id:'B2', sno:17, },
      {id:'B2', sno:18, },
      {id:'B2', sno:19, },
      {id:'B2', sno:20, },

      {id:'C2', sno:16, },
      {id:'C2', sno:17, },
      {id:'C2', sno:18, },
      {id:'C2', sno:19, },
      {id:'C2', sno:20, },

      {id:'D2', sno:16, },
      {id:'D2', sno:17, },
      {id:'D2', sno:18, },
      {id:'D2', sno:19, },
      {id:'D2', sno:20, },

      {id:'E2', sno:16, },
      {id:'E2', sno:17, },
      {id:'E2', sno:18, },
      {id:'E2', sno:19, },
      {id:'E2', sno:20, },

      {id:'F2', sno:16, },
      {id:'F2', sno:17, },
      {id:'F2', sno:18, },
      {id:'F2', sno:19, },
      {id:'F2', sno:20, },

   

    ]
    
  }
    
  toggle=true 
 sno='enable'

  booked(event:any){
 event.target.classList.toggle("mystyle")
  // event.target.style.backgroundColor= 'red'
  if(event.target.classList.contains("mystyle")){
    this.paywindow=true
    this.tctGrandamt += 1*this.tcktAmt
  }
  else{
    this.paywindow=true
    this.tctGrandamt -= 1*this.tcktAmt
  }
   console.log()
  
    
   
   
    
  }

  payment(){
    const RozarpayOptions={
      description:'sample Rozarpay demo',
      currency:'INR',
      amount:this.tctGrandamt+this.totalAmt,
      name:'sarbas',
      key:'rzp_test_SnOACtxc4GAEid',
      image:'',
      prefills:{
        name:'sarbas ali',
        email:'sarbas@gmail.com',
        phone:9876543210

      },
      theme:{
        color:'#f37254'

      },
      modal:{
        ondismiss:()=>{
          console.log('dismissed');
          
        }
      }

    }
    const successCallback=(paymentid:any)=>{
      console.log(paymentid);
      
    }
    const failureCallback=(e:any)=>{
      console.log(e);
      
    }
    Razorpay.open(RozarpayOptions,successCallback,failureCallback)

    


  }

}
