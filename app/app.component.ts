import{Component} from 'angular2/core';
import{NgForm} from 'angular2/common';
@Component({
  selector: 'greeting',
  templateUrl: 'views/app.html'
})
export class AppComponent{
  public facebook_id: String;
  public password: String;
  constructor(){
    console.log(this.facebook_id +' '+ this.password);
  }
  showAlert(){
    console.log('clicked...kk');
  }
  login(){
    console.log(this.facebook_id + ' / ' + this.password);
  }
}
