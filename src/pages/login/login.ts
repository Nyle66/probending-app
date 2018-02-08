import {GamePage} from '../game/game';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyBddProvider } from '../../providers/my-bdd/my-bdd';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [MyBddProvider]
})
export class LoginPage {
  gamePage: any;


  public users: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public MyBddProvider: MyBddProvider) {
    this.gamePage = GamePage;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter(){
    this.MyBddProvider.getUsers()
      //Au moment ou la requête est terminé, subscribe se déclenche !
      .subscribe( (data) => {
            var users = data;
            //console.log(users[0].name);
            for(var i=0; i<users.length; i++){
              if(users[i].name == 'Nyle' && users[i].email == 'j.alsina@hotmail.fr'){
                //console.log("OK")
              }     
              //console.log(users[i]);       
            }
      },
        err => {
            alert(err);
      });
    
  }

  // login(){
  //   console.log(this.users);
  // }

}
