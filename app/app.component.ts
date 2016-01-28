import{Component} from 'angular2/core';

@Component({
  selector: 'greeting',
  template: '<div class="container" (click)="showAlert()"><div class="jumbotron">Hello Jagaa</div></div>'
})
export class AppComponent{
  public name: String;
  public greeting: String;
  constructor(){
    this.name = "Jagaa";
    this.greeting = 'Hello';
    console.log(this.name +' '+ this.greeting);
  }
  showAlert(){
    alert('from ' + this.name);
  }
}
