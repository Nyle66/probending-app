import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  hide: boolean = true;
  hideD: boolean = true;

  hide1: boolean = true;
  hide12: boolean = false;
  hide13: boolean = false;
  hide14: boolean = false;
  hide15: boolean = false;

  hide2: boolean = true;
  hide22: boolean = false;
  hide23: boolean = false;
  hide24: boolean = false;
  hide25: boolean = false;

  hide3: boolean = true;
  hide32: boolean = false;
  hide33: boolean = false;
  hide34: boolean = false;
  hide35: boolean = false;

  hide4: boolean = true;
  hide42: boolean = false;
  hide43: boolean = false;
  hide44: boolean = false;
  hide45: boolean = false;

  hide5: boolean = true;
  hide52: boolean = false;
  hide53: boolean = false;
  hide54: boolean = false;
  hide55: boolean = false;

  hide6: boolean = true;
  hide62: boolean = false;
  hide63: boolean = false;
  hide64: boolean = false;
  hide65: boolean = false;

  chara1: number = 2;
  chara2: number = 2;
  chara3: number = 2;
  chara4: number = 2;
  chara5: number = 2;
  chara6: number = 2;

  selected: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  showAttack(){
      this.hide = false;
  }

  choice1(){
    // alert('choose your attack Ordi 1 !');
    this.showAttack();
    this.selected = 1;
  }
  choice2(){
    // alert('choose your attack Ordi 2 !');
    this.showAttack();
    this.selected = 2;
  }
  choice3(){
    // alert('choose your attack Ordi 3 !');
    this.showAttack();
    this.selected = 3;
  }

  choice4(){
    // alert('choose your attack Player 1 !');
    this.showAttack();
    this.selected = 4;
  }
  choice5(){
    // alert('choose your attack PLayer 2 !');
    this.showAttack();
    this.selected = 5;
  }
  choice6(){
    // alert('choose your attack Player 3 !');
    this.showAttack();
    this.selected = 6;
  }

  choice12(){
    // alert('choose your attack Ordi 1 !');
    this.showAttack();
    this.selected = 12;
  }
  choice22(){
    // alert('choose your attack Ordi 2 !');
    this.showAttack();
    this.selected = 22;
  }
  choice32(){
    // alert('choose your attack Ordi 3 !');
    this.showAttack();
    this.selected = 32;
  }

  choice42(){
    // alert('choose your attack Player 1 !');
    this.showAttack();
    this.selected = 42;
  }
  choice52(){
    // alert('choose your attack PLayer 2 !');
    this.showAttack();
    this.selected = 52;
  }
  choice62(){
    // alert('choose your attack Player 3 !');
    this.showAttack();
    this.selected = 62;
  }

  choice13(){
    // alert('choose your attack Ordi 1 !');
    this.showAttack();
    this.selected = 13;
  }
  choice23(){
    // alert('choose your attack Ordi 2 !');
    this.showAttack();
    this.selected = 23;
  }
  choice33(){
    // alert('choose your attack Ordi 3 !');
    console.log('OK');
    this.showAttack();
    this.selected = 33;
    
  }

  choice43(){
    // alert('choose your attack Player 1 !');
    this.showAttack();
    this.selected = 43;
  }
  choice53(){
    // alert('choose your attack PLayer 2 !');
    this.showAttack();
    this.selected = 53;
  }
  choice63(){
    // alert('choose your attack Player 3 !');
    this.showAttack();
    this.selected = 63;
  }

  choice14(){
    // alert('choose your attack Ordi 1 !');
    this.showAttack();
    this.selected = 14;
  }
  choice24(){
    // alert('choose your attack Ordi 2 !');
    this.showAttack();
    this.selected = 24;
  }
  choice34(){
    // alert('choose your attack Ordi 3 !');
    console.log('OK');
    this.showAttack();
    this.selected = 34;
    
  }

  choice44(){
    // alert('choose your attack Player 1 !');
    this.showAttack();
    this.selected = 44;
  }
  choice54(){
    // alert('choose your attack PLayer 2 !');
    this.showAttack();
    this.selected = 54;
  }
  choice64(){
    // alert('choose your attack Player 3 !');
    this.showAttack();
    this.selected = 64;
  }

  choice15(){
    // alert('choose your attack Ordi 1 !');
    this.showAttack();
    this.selected = 15;
  }
  choice25(){
    // alert('choose your attack Ordi 2 !');
    this.showAttack();
    this.selected = 25;
  }
  choice35(){
    // alert('choose your attack Ordi 3 !');
    this.showAttack();
    this.selected = 35;
  }

  choice45(){
    // alert('choose your attack Player 1 !');
    this.showAttack();
    this.selected = 45;
  }
  choice55(){
    // alert('choose your attack PLayer 2 !');
    this.showAttack();
    this.selected = 55;
  }
  choice65(){
    // alert('choose your attack Player 3 !');
    this.showAttack();
    this.selected = 65;
  }

  

  attackF(){

    // Team Red 1

    if(this.selected == 1){
      
      this.chara4 -= 2;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide4 = false;
        this.hide42 = true;

        this.hide1 = false;
        this.hide12 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2; 
        }
      }    
    }

    if(this.selected == 12){
      this.chara4 -= 2;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide42 = false;
        this.hide43 = true;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
        }
      }    
    }

    if(this.selected == 13){
      
      this.chara4 -= 2;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide43 = false;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
        }
      }    
    }

    // Team Red 2

    if(this.selected == 2){
      this.chara5 -= 2;
      if(this.chara5 <= 0){
        alert("Back to inferior zone");
        this.hide5 = false;
        this.hide52 = true;

        this.hide2 = false;
        this.hide22 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara5 = 2; 
        }
      }    
    }

    if(this.selected == 22){
      this.chara5 -= 2;
      if(this.chara5 <= 0){
        alert("Back to inferior zone");
        this.hide52 = false;
        this.hide53 = true;

        this.hide22 = false;
        this.hide23 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara5 = 2;
        }
      }    
    }

    if(this.selected == 23){
      this.chara5 -= 2;
      if(this.chara5 <= 0){
        alert("Back to inferior zone");
        this.hide53 = false;

        this.hide22 = false;
        this.hide23 = true;

        this.selected = 0;

        if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara5 = 2;
        }
      }    
    }

    // Team Red 3

    if(this.selected == 3){
      this.chara6 -= 2;
      if(this.chara6 <= 0){
        alert("Back to inferior zone");
        this.hide6 = false;
        this.hide62 = true;

        this.hide3 = false;
        this.hide32 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara6 = 2; 
        }
      }    
    }

    if(this.selected == 32){
      this.chara6 -= 2;
      if(this.chara6 <= 0){
        alert("Back to inferior zone");
        this.hide62 = false;
        this.hide63 = true;

        this.hide32 = false;
        this.hide33 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara6 = 2;
        }
      }    
    }

    if(this.selected == 33){
      this.chara6 -= 2;
      if(this.chara6 <= 0){
        alert("Back to inferior zone");
        this.hide63 = false;
        

        this.hide32 = false;
        this.hide33 = true;

        this.selected = 0;

        if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara6 = 2;
        }
      }    
    }

    // Team Red 4

    if(this.selected == 4){
      this.chara1 -= 2;
      if(this.chara1 <= 0){
        alert("Back to inferior zone");
        this.hide1 = false;
        this.hide14 = true;

        this.hide4 = false;
        this.hide44 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara1 = 2; 
        }
      }    
    }

    if(this.selected == 44){
      this.chara1 -= 2;
      if(this.chara1 <= 0){
        alert("Back to inferior zone");
        this.hide44 = false;
        this.hide45 = true;

        this.hide14 = false;
        this.hide15 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara1 = 2;
        }
      }    
    }

    if(this.selected == 45){
      this.chara1 -= 2;
      if(this.chara1 <= 0){
        alert("Back to inferior zone");
        this.hide15 = false;
        

        //this.hide45 = false;
        //this.hide43 = true;

        this.selected = 0;

        if(this.hide1 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide34 == false && this.hide35 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara1 = 2;
        }
      }    
    }

    // Team Red 5

    if(this.selected == 5){
      this.chara2 -= 2;
      if(this.chara2 <= 0){
        alert("Back to inferior zone");
        this.hide2 = false;
        this.hide24 = true;

        this.hide5 = false;
        this.hide54 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2; 
        }
      }    
    }

    if(this.selected == 54){
      this.chara2 -= 2;
      if(this.chara2 <= 0){
        alert("Back to inferior zone");
        this.hide54 = false;
        this.hide55 = true;

        this.hide24 = false;
        this.hide25 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2;
        }
      }    
    }

    if(this.selected == 55){
      this.chara2 -= 2;
      if(this.chara2 <= 0){
        alert("Back to inferior zone");
        this.hide25 = false;
        

        // this.hide5 = false;
        // this.hide53 = true;

        this.selected = 0;

        if(this.hide1 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide34 == false && this.hide35 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2;
        }
      }    
    }

    // Team Red 6

    if(this.selected == 6){
      this.chara3 -= 2;
      if(this.chara3 <= 0){
        alert("Back to inferior zone");
        this.hide3 = false;
        this.hide34 = true;

        this.hide6 = false;
        this.hide64 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara3 = 2; 
        }
      }    
    }

    if(this.selected == 64){
      this.chara3 -= 2;
      if(this.chara3 <= 0){
        alert("Back to inferior zone");
        this.hide64 = false;
        this.hide65 = true;

        this.hide34 = false;
        this.hide35 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara3 = 2;
        }
      }    
    }

    if(this.selected == 65){
      this.chara3 -= 2;
      if(this.chara3 <= 0){
        alert("Back to inferior zone");
        this.hide35 = false;
        

        // this.hide5 = false;
        // this.hide53 = true;

        this.selected = 0;

        if(this.hide1 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide34 == false && this.hide35 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara3 = 2;
        }
      }    
    }

  }

  attackC(){

    // Team Red 1
    
    if(this.selected == 1){
      this.chara4 -= 1;
      this.selected = 0;
      this.hide = true;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide4 = false;
        this.hide42 = true;

        this.hide1 = false;
        this.hide12 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2; 
        }
      }    
    }

    if(this.selected == 12){
      this.chara4 -= 1;
      this.selected = 0;
      this.hide = true;

      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide42 = false;
        this.hide43 = true;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
        }
      }    
    }

    if(this.selected == 13){
      this.chara4 -= 1;
      this.selected = 0;
      this.hide = true;

      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide43 = false;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
        }
      }    
    }

    // Team Red 2
    
    if(this.selected == 2){
      this.chara4 -= 1;
      this.selected = 0;
      this.hide = true;
      if(this.chara5 <= 0){
        alert("Back to inferior zone");
        this.hide5 = false;
        this.hide52 = true;

        this.hide2 = false;
        this.hide22 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara5 = 2; 
        }
      }    
    }

    if(this.selected == 22){
      this.chara5 -= 1;
      this.selected = 0;
      this.hide = true;

      if(this.chara5 <= 0){
        alert("Back to inferior zone");
        this.hide52 = false;
        this.hide53 = true;

        this.hide22 = false;
        this.hide23 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara5 = 2;
        }
      }    
    }

    if(this.selected == 23){
      this.chara5 -= 1;
      this.selected = 0;
      this.hide = true;

      if(this.chara5 <= 0){
        alert("Back to inferior zone");
        this.hide53 = false;

        this.hide22 = false;
        this.hide23 = true;

        this.selected = 0;
        if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara5 = 2;
        }
      }    
    }

    // Team Red 3
    
    if(this.selected == 3){
      this.chara6 -= 1;
      this.selected = 0;
      this.hide = true;
      if(this.chara6 <= 0){
        alert("Back to inferior zone");
        this.hide6 = false;
        this.hide62 = true;

        this.hide3 = false;
        this.hide32 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara6 = 2; 
        }
      }    
    }

    if(this.selected == 32){
      this.chara4 -= 1;
      this.selected = 0;
      this.hide = true;

      if(this.chara6 <= 0){
        alert("Back to inferior zone");
        this.hide62 = false;
        this.hide63 = true;

        this.hide32 = false;
        this.hide33 = true;

        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara6 = 2;
        }
      }    
    }

    if(this.selected == 33){
      this.chara6 -= 1;
      this.selected = 0;
      this.hide = true;

      if(this.chara6 <= 0){
        alert("Back to inferior zone");
        this.hide63 = false;

        this.hide32 = false;
        this.hide33 = true;

        this.selected = 0;
        if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false){
          alert("WIN");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara6 = 2;
        }
      }    
    }
  }
}
