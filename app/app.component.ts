import{Component} from 'angular2/core';
import{NgForm} from 'angular2/common';

declare var lock;

@Component({
  selector: 'greeting',
  templateUrl: 'views/app.html'
})


export class AppComponent{

  lock = new Auth0Lock('04dgaHHvrKWy2Oyhdl0IUlNKdlUqXmJq', 'jagaa.eu.auth0.com');

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
    this.lock.show(function(err: string, profile:string, id_token:string){
        if(err){
          throw new Error(err);
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', id_token);
    });
  }
}
