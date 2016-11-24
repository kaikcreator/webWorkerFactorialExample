import { Component } from '@angular/core';
var Big = require('big.js');




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'factorial calculator';
  items = [];
  progress:number = 0;
  computingFactorial:boolean = false;
  numberOfFactorials:number = 600;


  constructor(){
    //start using scientific notation if exponent is greater than or equal to 5
    Big.E_POS = 5; 
  }


  private factorial(n:number):Promise<any>{
    return new Promise((resolve, reject)=>
    {
      //if n is 0 or 1, resolve promise with value 1
      if(n==0 || n == 1){
        resolve(1);
      }
      //otherwise, compute factorial of n-1, 
      //and then resolve promise with its result multiplied by n. 
      else{
        let bigNum = new Big(n);
        this.factorial(n-1).then((result) =>{
          resolve(bigNum.mul(result));
        });        
      }
    })
  }


  public computeFactorial(){
    //clear list, reset progress indicator and show progress bar
    this.items = [];
    this.progress = 0;
    this.computingFactorial = true;
    
    //compute factorials
    for(let i=1; i<= this.numberOfFactorials; i++){
      this.factorial(i).then(result =>{
        //build new items array adding new computed value at the end
        this.items =[...this.items, result];
        //update progress
        this.progress = Math.round((i*100.0)/this.numberOfFactorials);
        //when we have computed all factorials, hide progress bar
        if(i == this.numberOfFactorials){
          this.computingFactorial = false;
        }
      })
    }

    //log on method exit
    console.log("exit compute factorial");
  }

  public cleanResults(){
    this.items = [];
  }


}


