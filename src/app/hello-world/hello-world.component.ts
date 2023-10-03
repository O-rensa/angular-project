import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {
  
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  inputList: Array<any> = []

  onSubmit():void {
    if (this.message.length > 20){
      alert('Message max length is 20.')
    } else {
      if (this.name != '' && this.email != '' && this.message != ''){
        this.isSubmitted = true;
        this.inputList.push({
          'name': this.name,
          'email': this.email,
          'message': this.message
        })
      } else {
        alert('Fill everything motherfucker!');
      }
    }

  }

  deleteInput(index:number){
    this.inputList.splice(index,1)
  }
}
