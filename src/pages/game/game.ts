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

  defenseF: number = 0;
  defenseC: number = 0;

  number: number;
  // 0 == def faible 1 == def forte

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
  tour: boolean = true;

  ia: number;
  shoot: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    // this.randomnumber();
    // console.log(this.number);
    // this.randomIa();
    // console.log(this.ia);
  }

  showAttack(){
      this.hide = false;
  }

  randomnumber(){
    let rand = Math.floor((Math.random() * 2));
    this.number = rand;
  }

  randomshoot(){
    let randshoot = Math.floor((Math.random()*2)+1);
    this.shoot = randshoot;

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
    if(this.tour == true){
      this.showAttack();
      this.selected = 4;
      this.tour = false;
    }
  }
  choice5(){
    // alert('choose your attack PLayer 2 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 5;
      this.tour = false;
    }
  }
  choice6(){
    // alert('choose your attack Player 3 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 6;
      this.tour = false;
    }
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
    if(this.tour == true){
      this.showAttack();
      this.selected = 42;
      this.tour = false;
    }
  }
  choice52(){
    // alert('choose your attack PLayer 2 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 52;
      this.tour = false;
    }
  }
  choice62(){
    // alert('choose your attack Player 3 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 62;
      this.tour = false;
    }
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
      this.showAttack();
      this.selected = 33;
  }

  choice43(){
    // alert('choose your attack Player 1 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 43;
      this.tour = false;
    }
  }
  choice53(){
    // alert('choose your attack PLayer 2 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 53;
      this.tour = false;
    }
  }
  choice63(){
    // alert('choose your attack Player 3 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 63;
      this.tour = false;
    }
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
      this.showAttack();
      this.selected = 34;
  }

  choice44(){
    // alert('choose your attack Player 1 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 44;
      this.tour = false;
    }
  }
  choice54(){
    // alert('choose your attack PLayer 2 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 54;
      this.tour = false;
    }
  }
  choice64(){
    // alert('choose your attack Player 3 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 64;
      this.tour = false;
    }
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
    if(this.tour == true){
      this.showAttack();
      this.selected = 45;
      this.tour = false;
    }
  }
  choice55(){
    // alert('choose your attack PLayer 2 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 55;
      this.tour = false;
    }
  }
  choice65(){
    // alert('choose your attack Player 3 !');
    if(this.tour == true){
      this.showAttack();
      this.selected = 65;
      this.tour = false;
    }
  }

  frontal(){
    if(this.hide1 == true && this.tour == false && this.defenseC == 1){
      if(this.selected == 1){
        
        this.chara4 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara4 <= 0){
          alert("Back to inferior zone");
          this.hide4 = false;
          this.hide42 = true;
  
          this.hide1 = false;
          this.hide12 = true;
  
          this.chara4 = 2; 
          this.chara1 = 2;
        }    
      } 
    }
    if(this.hide12 == true && this.tour == false && this.defenseC == 1){
      if(this.selected == 12){
        this.chara4 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara4 <= 0){
          alert("Back to inferior zone");
          this.hide42 = false;
          this.hide43 = true;
  
          this.hide12 = false;
          this.hide13 = true;
  
          this.chara4 = 2;
          this.chara1 = 2;
        }    
      }
    }
    if(this.hide13 == true && this.tour == false && this.defenseC == 1){
      if(this.selected == 13){
        
        this.chara4 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara4 <= 0){
          alert("Back to inferior zone");
          this.hide43 = false;
  
          this.hide12 = false;
          this.hide13 = true;
  
          this.chara4 = 2;
          this.chara1 = 2;
          
          if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide44 == false  && this.hide45 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide54 == false && this.hide55 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false  && this.hide64 == false  && this.hide65 == false){
            alert("WIN IA");
          }
          
        }    
      }
    }
    if(this.hide14 == true && this.tour == false && this.defenseC == 1){
      if(this.selected == 14){
        this.chara4 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara4 <= 0){
          alert("Back to inferior zone");
          this.hide44 = false;
          this.hide4 = true;
  
          this.hide14 = false;
          this.hide1 = true;
  
          this.chara4 = 2;
          this.chara1 = 2;
        }    
      }
    }
    if(this.hide15 == true && this.tour == false && this.defenseC == 1){
      if(this.selected == 15){
        this.chara4 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara4 <= 0){
          alert("Back to inferior zone");
          this.hide45 = false;
          this.hide44 = true;
  
          this.hide15 = false;
          this.hide14 = true;
  
          this.chara4 = 2;
          this.chara1 = 2;
        }    
      }
    }
    if(this.hide2 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 2){
        this.chara5 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara5 <= 0){
          alert("Back to inferior zone");
          this.hide5 = false;
          this.hide52 = true;
  
          this.hide2 = false;
          this.hide22 = true;
  
          this.chara5 = 2; 
          this.chara2 = 2;
        }    
      }
    }
    if(this.hide22 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 22){
        this.chara5 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara5 <= 0){
          alert("Back to inferior zone");
          this.hide52 = false;
          this.hide53 = true;
  
          this.hide22 = false;
          this.hide23 = true;
  
          this.chara5 = 2;
          this.chara2 = 2;
        }    
      }
      
    }
    if(this.hide23 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 23){
        this.chara5 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara5 <= 0){
          alert("Back to inferior zone");
          this.hide53 = false;
  
          this.hide22 = false;
          this.hide23 = true;
  
          this.chara5 = 2;
          this.chara2 = 2;
  
          if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide44 == false  && this.hide45 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide54 == false && this.hide55 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false  && this.hide64 == false  && this.hide65 == false){
            alert("WIN IA");
          }
        }    
      }  
    }
    if(this.hide24 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 24){
        this.chara5 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara5 <= 0){
          alert("Back to inferior zone");
          this.hide54 = false;
          this.hide5 = true;
  
          this.hide24 = false;
          this.hide2 = true;
  
          this.chara5 = 2;
          this.chara2 = 2;
        }    
      }
    }
    if(this.hide25 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 25){
        this.chara5 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara5 <= 0){
          alert("Back to inferior zone");
          this.hide55 = false;
          this.hide54 = true;
  
          this.hide25 = false;
          this.hide24 = true;
  
          this.chara5 = 2;
          this.chara2 = 2;
        }    
      }
    }
    if(this.hide3 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 3){
        this.chara6 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara6 <= 0){
          alert("Back to inferior zone");
          this.hide6 = false;
          this.hide62 = true;
  
          this.hide3 = false;
          this.hide32 = true;
  
          this.chara6 = 2; 
          this.chara3 = 2;
        }    
      }
    }
    if(this.hide32 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 32){
        this.chara6 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara6 <= 0){
          alert("Back to inferior zone");
          this.hide62 = false;
          this.hide63 = true;
  
          this.hide32 = false;
          this.hide33 = true;
  
          this.chara6 = 2;
          this.chara3 = 2;
        }    
      }
    }
    if(this.hide33 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 33){
        this.chara6 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara6 <= 0){
          alert("Back to inferior zone");
          this.hide63 = false;
          
  
          this.hide32 = false;
          this.hide33 = true;
  
          this.chara6 = 2;
          this.chara3 = 2;
  
          if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide44 == false  && this.hide45 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide54 == false && this.hide55 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false  && this.hide64 == false  && this.hide65 == false){
            alert("WIN IA");
          }
          
        }    
      }
    }
    if(this.hide34 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 34){
        this.chara6 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara6 <= 0){
          alert("Back to inferior zone");
          this.hide64 = false;
          this.hide6 = true;
  
          this.hide34 = false;
          this.hide3 = true;
  
          this.chara6 = 2;
          this.chara3 = 2;
        }    
      }
    }
    if(this.hide35 == true && this.tour == false && this.defenseC == 1){

      if(this.selected == 35){
        this.chara6 -= 2;
        this.defenseC = 0;
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
        if(this.chara6 <= 0){
          alert("Back to inferior zone");
          this.hide65 = false;
          this.hide64 = true;
  
          this.hide35 = false;
          this.hide34 = true;
  
          this.chara6 = 2;
          this.chara3 = 2;
        }    
      }
    }
    else{
      this.selected = 0;
      
      if(this.selected == 0){
        this.hide = true;
        this.tour = true;
      }
    }
  }

  cote(){

    if(this.selected == 1 && this.defenseF == 1 && this.tour == false){
      
      this.chara4 -= 1;
      this.defenseF = 0;
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
          this.chara1 = 2; 
          this.tour = true;
        }
      }    
    }
    if(this.selected == 12 && this.defenseF == 1 && this.tour == false){
      this.chara4 -= 1;
      this.defenseF = 0;
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
          this.chara1 = 2; 
          this.tour = true;
        }
      }    
    }
    if(this.selected == 13 && this.defenseF == 1 && this.tour == false){
      
      this.chara4 -= 1;
      this.defenseF = 0;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide43 = false;

        this.hide12 = false;
        this.hide13 = true;

        this.selected = 0;
        if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide44 == false  && this.hide45 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide54 == false && this.hide55 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false  && this.hide64 == false  && this.hide65 == false){
          alert("WIN IA");
        }
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
          this.chara1 = 2;
          this.tour = true; 
        }
      }    
    }
    if(this.selected == 14 && this.defenseF == 1 && this.tour == false){
      this.chara4 -= 1;
      this.defenseF = 0;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide44 = false;
        this.hide4 = true;

        this.hide14 = false;
        this.hide1 = true;

        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
          this.chara1 = 2; 
          this.tour = true;
        }
      }    
    }
    if(this.selected == 15 && this.defenseF == 1 && this.tour == false){
      this.chara4 -= 1;
      this.defenseF = 0;
      if(this.chara4 <= 0){
        alert("Back to inferior zone");
        this.hide45 = false;
        this.hide44 = true;

        this.hide15 = false;
        this.hide14 = true;

        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.chara4 = 2;
          this.chara1 = 2; 
          this.tour = true;
        }
      }    
    }
    

    if(this.hide2 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 2){
        this.chara5 -= 1;
        this.defenseF = 0;
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
            this.chara2 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide22 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 22){
        this.chara5 -= 1;
        this.defenseF = 0;
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
            this.chara2 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide23 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 23){
        this.chara5 -= 1;
        this.defenseF = 0;
        if(this.chara5 <= 0){
          alert("Back to inferior zone");
          this.hide53 = false;
  
          this.hide22 = false;
          this.hide23 = true;
  
          this.selected = 0;
  
          if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide44 == false  && this.hide45 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide54 == false && this.hide55 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false  && this.hide64 == false  && this.hide65 == false){
            alert("WIN IA");
          }
          if(this.selected == 0){
            this.hide = true;
            this.chara5 = 2;
            this.chara2 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide24 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 24){
        this.chara5 -= 1;
        this.defenseF = 0;
        if(this.chara5 <= 0){
          alert("Back to inferior zone");
          this.hide54 = false;
          this.hide5 = true;
  
          this.hide24 = false;
          this.hide2 = true;
  
          this.selected = 0;
          
          if(this.selected == 0){
            this.hide = true;
            this.chara5 = 2;
            this.chara2 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide25 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 25){
        this.chara5 -= 1;
        this.defenseF = 0;
        if(this.chara5 <= 0){
          alert("Back to inferior zone");
          this.hide55 = false;
          this.hide54 = true;
  
          this.hide25 = false;
          this.hide24 = true;
  
          this.selected = 0;
          
          if(this.selected == 0){
            this.hide = true;
            this.chara5 = 2;
            this.chara2 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide3 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 3){
        this.chara6 -= 1;
        this.defenseF = 0;
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
            this.chara3 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide32 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 32){
        this.chara6 -= 1;
        this.defenseF = 0;
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
            this.chara3 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide33 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 33){
        this.chara6 -= 1;
        this.defenseF = 0;
        if(this.chara6 <= 0){
          alert("Back to inferior zone");
          this.hide63 = false;
          
  
          this.hide32 = false;
          this.hide33 = true;
  
          this.selected = 0;
  
          if(this.hide4 == false && this.hide42 == false && this.hide43 == false && this.hide44 == false  && this.hide45 == false && this.hide5 == false && this.hide52 == false && this.hide53 == false && this.hide54 == false && this.hide55 == false && this.hide6 == false && this.hide62 == false && this.hide63 == false  && this.hide64 == false  && this.hide65 == false){
            alert("WIN IA");
          }
          if(this.selected == 0){
            this.hide = true;
            this.chara6 = 2;
            this.chara3 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide34 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 34){
        this.chara6 -= 1;
        this.defenseF = 0;
        if(this.chara6 <= 0){
          alert("Back to inferior zone");
          this.hide64 = false;
          this.hide6 = true;
  
          this.hide34 = false;
          this.hide3 = true;
  
          this.selected = 0;
          
          if(this.selected == 0){
            this.hide = true;
            this.chara6 = 2;
            this.chara3 = 2; 
            this.tour = true;
          }
        }    
      }
    }
    if(this.hide35 == true && this.tour == false && this.defenseF == 1){

      if(this.selected == 35){
        this.chara6 -= 1;
        this.defenseF = 0;
        if(this.chara6 <= 0){
          alert("Back to inferior zone");
          this.hide65 = false;
          this.hide64 = true;
  
          this.hide35 = false;
          this.hide34 = true;
  
          this.selected = 0;
          
          if(this.selected == 0){
            this.hide = true;
            this.chara6 = 2;
            this.chara3 = 2; 
            this.tour = true;
          }
        }    
      }
    }

    else{
      this.selected = 0;
      
      if(this.selected == 0){
        this.hide = true;
        this.tour = true;
      }
    }
  }

  setDefenseF(){
    console.log("defense frontale choisie");
    console.log(this.ia);
    if(this.ia == 1){
      if(this.hide1 == true && this.tour == false){
        this.choice1();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide12 == true && this.tour == false){
        this.choice12();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide13 == true && this.tour == false){
        this.choice13();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide14 == true && this.tour == false){
        this.choice14();
        if(this.shoot == 2){
          this.cote();
        }
      }
      
      if(this.hide15 == true && this.tour == false){
        this.choice15();
        if(this.shoot == 2){
          this.cote();
        }
      }
      else{
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
      }
      this.hideD = true;
    }
    if(this.ia == 2){
      if(this.hide2 == true && this.tour == false){
        this.choice2();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide22 == true && this.tour == false){
        this.choice22();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide23 == true && this.tour == false){
        this.choice23();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide24 == true && this.tour == false){
        this.choice24();
        if(this.shoot == 2){
          this.cote();
        }
      }
      
      if(this.hide25 == true && this.tour == false){
        this.choice25();
        if(this.shoot == 2){
          this.cote();
        }
      }
      else{
        this.selected = 0;
        
        if(this.selected == 0){
          this.hide = true;
          this.tour = true;
        }
      }
      this.hideD = true;
    }
    if(this.ia == 3){
      if(this.hide3 == true && this.tour == false){
        this.choice3();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide32 == true && this.tour == false){
        this.choice32();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide33 == true && this.tour == false){
        this.choice33();
        if(this.shoot == 2){
          this.cote();
        }
      }
      if(this.hide34 == true && this.tour == false){
        this.choice34();
        if(this.shoot == 2){
          this.cote();
        }
      }
      
      if(this.hide35 == true && this.tour == false){
        this.choice35();
        if(this.shoot == 2){
          this.cote();
        }
      }
    
    
    else{
      this.selected = 0;
      
      if(this.selected == 0){
        this.hide = true;
        this.tour = true;
      }
    }
    this.hideD = true;
  }
}

  setDefenseC(){
    console.log("defense coté choisie");
    console.log(this.ia);
    if(this.ia == 1){
      if(this.hide1 == true && this.tour == false){
        this.choice1();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide12 == true && this.tour == false){
        this.choice12();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide13 == true && this.tour == false){
        this.choice13();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide14 == true && this.tour == false){
        this.choice14();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      
      if(this.hide15 == true && this.tour == false){
        this.choice15();
        if(this.shoot == 1){
          this.frontal();
        }
      }
    }
    if(this.ia == 2){
      if(this.hide2 == true && this.tour == false){
        this.choice2();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide22 == true && this.tour == false){
        this.choice22();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide23 == true && this.tour == false){
        this.choice23();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide24 == true && this.tour == false){
        this.choice24();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      
      if(this.hide25 == true && this.tour == false){
        this.choice25();
        if(this.shoot == 1){
          this.frontal();
        }
      }
    }
    if(this.ia == 3){
      console.log('fuck');
      if(this.hide3 == true && this.tour == false){
        this.choice3();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide32 == true && this.tour == false){
        this.choice32();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide33 == true && this.tour == false){
        this.choice33();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      if(this.hide34 == true && this.tour == false){
        this.choice34();
        if(this.shoot == 1){
          this.frontal();
        }
      }
      
      if(this.hide35 == true && this.tour == false){
        this.choice35();
        if(this.shoot == 1){
          this.frontal();
        }
      }
    }
    
    else{  
      console.log('fucke2');
      this.selected = 0;
      
      if(this.selected == 0){
        this.hide = true;
        this.tour = true;
      }
    }
    this.hideD = true;
  }

  randomIa(){

    let randia = Math.floor((Math.random() * 3)+1);
    this.ia = randia;
    this.randomshoot();

    if(this.shoot == 1){
      console.log("attaque frontale");
      if(this.ia == 1 && this.hide1 == true || this.ia == 1 && this.hide12 == true || this.ia == 1 && this.hide13 == true || this.ia == 1 && this.hide14 == true || this.ia == 1 && this.hide15 == true){
        console.log(this.ia);
        this.hideD = false;
      }
    
      if(this.ia == 2 && this.hide2 == true || this.ia == 2 && this.hide22 == true || this.ia == 2 && this.hide23 == true || this.ia == 2 && this.hide24 == true || this.ia == 2 && this.hide25 == true){
        console.log(this.ia);
        this.hideD = false;
      }
      if(this.ia == 3 && this.hide3 == true || this.ia == 3 && this.hide32 == true || this.ia == 3 && this.hide33 == true || this.ia == 3 && this.hide34 == true || this.ia == 3 && this.hide35 == true){
        console.log(this.ia);
        this.hideD = false;
      }
    }
    if(this.shoot == 2){
      console.log("attaque coté");
      if(this.ia == 1 && this.hide1 == true || this.ia == 1 && this.hide12 == true || this.ia == 1 && this.hide13 == true || this.ia == 1 && this.hide14 == true || this.ia == 1 && this.hide15 == true){
        console.log(this.ia);
        this.hideD = false;
      }
      if(this.ia == 2 && this.hide2 == true || this.ia == 2 && this.hide22 == true || this.ia == 2 && this.hide23 == true || this.ia == 2 && this.hide24 == true || this.ia == 2 && this.hide25 == true){
        console.log(this.ia);
        this.hideD = false;
      }
      if(this.ia == 3 && this.hide3 == true || this.ia == 3 && this.hide32 == true || this.ia == 3 && this.hide33 == true || this.ia == 3 && this.hide34 == true || this.ia == 3 && this.hide35 == true){
        console.log(this.ia);
        this.hideD = false;
      }
    }
  }

  attackF(){

    // Team Red 4

    if(this.selected == 4){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
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
            this.chara4 = 2; 
            this.tour = false;
          }
        } 
        this.randomIa();
      }
      else{
        console.log('echec');
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara1 = 2; 
          this.chara4 = 2; 
          this.tour = false;
        }
        this.randomIa(); 
      }
    }

    if(this.selected == 42){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara1 -= 2;
        if(this.chara1 <= 0){
          alert("Back to inferior zone");
          this.hide12 = false;
          this.hide1 = true;
  
          this.hide42 = false;
          this.hide4 = true;
  
          this.selected = 0;
          if(this.selected == 0){
            this.hide = true;
            this.chara1 = 2; 
            this.chara4 = 2; 
            this.tour = false;
          }
        }
        this.randomIa();    
      }
      else{
        console.log('echec');
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara1 = 2; 
          this.chara4 = 2; 
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 43){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara1 -= 2;
        if(this.chara1 <= 0){
          alert("Back to inferior zone");
          this.hide13 = false;
          this.hide12 = true;
  
          this.hide43 = false;
          this.hide42 = true;
  
          this.selected = 0;
          if(this.selected == 0){
            this.hide = true;
            this.chara1 = 2; 
            this.chara4 = 2; 
            this.tour = false;
          }
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara1 = 2; 
          this.chara4 = 2; 
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 44){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
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
            this.chara4 = 2; 
            this.tour = false;
          }
        } 
        this.randomIa();   
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara1 = 2;
          this.chara4 = 2; 
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 45){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara1 -= 2;
        if(this.chara1 <= 0){
          alert("Back to inferior zone");
          this.hide15 = false;
          
  
          //this.hide45 = false;
          //this.hide43 = true;
  
          this.selected = 0;
  
          if(this.hide1 == false && this.hide12 == false && this.hide13 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide22 == false && this.hide23 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide32 == false && this.hide33 == false && this.hide34 == false && this.hide35 == false){
            alert("WIN PLAYER");
          }
          if(this.selected == 0){
            this.hide = true;
            this.chara1 = 2;
            this.chara4 = 2; 
            this.tour = false;
          }
        }
        this.randomIa();    
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara1 = 2;
          this.chara4 = 2; 
          this.tour = false;
        }
        this.randomIa();
      }
    }

    // Team Red 5

    if(this.selected == 5){

      this.randomnumber();
      if(this.number ==0){
        console.log("touch");
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
            this.chara5 = 2; 
            this.tour = false;
          }
        }
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2; 
          this.chara5 = 2; 
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 52){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara2 -= 2;
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide22 = false;
          this.hide2 = true;
  
          this.hide52 = false;
          this.hide5 = true;
  
          this.selected = 0;
          if(this.selected == 0){
            this.hide = true;
            this.chara2 = 2;
            this.chara5 = 2;  
            this.tour = false;
          }
        }  
        this.randomIa();
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2;
          this.chara5 = 2;  
          this.tour = false;
        }
        this.randomIa();
      } 
    }

    if(this.selected == 53){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara2 -= 2;
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide23 = false;
          this.hide22 = true;
  
          this.hide53 = false;
          this.hide52 = true;
  
          this.selected = 0;
          if(this.selected == 0){
            this.hide = true;
            this.chara2 = 2;
            this.chara5 = 2; 
            this.tour = false;
          }
        }   
        this.randomIa(); 
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2;
          this.chara5 = 2; 
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 54){
      
      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
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
            this.chara5 = 2;
            this.tour = false;
          }
        }  
        this.randomIa(); 
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2;
          this.chara5 = 2;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 55){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara2 -= 2;
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide25 = false;
          
  
          // this.hide5 = false;
          // this.hide53 = true;
  
          this.selected = 0;
  
          if(this.hide1 == false && this.hide12 == false && this.hide13 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide22 == false && this.hide23 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide32 == false && this.hide33 == false && this.hide34 == false && this.hide35 == false){
            alert("WIN PLAYER");
          }
          if(this.selected == 0){
            this.hide = true;
            this.chara2 = 2;
            this.chara5 = 2;
            this.tour = false;
          }
        } 
        this.randomIa();   
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2;
          this.chara5 = 2;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    // Team Red 6

    if(this.selected == 6){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
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
            this.chara6 = 2;
            this.tour = false;
          }
        } 
        this.randomIa();   
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara3 = 2; 
          this.chara6 = 2;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 62){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara2 -= 2;
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide32 = false;
          this.hide3 = true;
  
          this.hide62 = false;
          this.hide6 = true;
  
          this.selected = 0;
          if(this.selected == 0){
            this.hide = true;
            this.chara2 = 2; 
            this.chara6 = 2;
            this.tour = false;
          }
        }   
        this.randomIa();
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2; 
          this.chara6 = 2;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 63){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara2 -= 2;
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide33 = false;
          this.hide32 = true;
  
          this.hide63 = false;
          this.hide62 = true;
  
          this.selected = 0;
          if(this.selected == 0){
            this.hide = true;
            this.chara2 = 2; 
            this.chara6 = 2;
            this.tour = false;
          }
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara2 = 2; 
          this.chara6 = 2;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 64){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
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
            this.chara6 = 2;
            this.tour = false;
          }
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara3 = 2;
          this.chara6 = 2;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 65){

      this.randomnumber();
      if(this.number == 0){
        console.log("touch");
        this.chara3 -= 2;
        if(this.chara3 <= 0){
          alert("Back to inferior zone");
          this.hide35 = false;
          
  
          // this.hide5 = false;
          // this.hide53 = true;
  
          this.selected = 0;
  
          if(this.hide1 == false && this.hide12 == false && this.hide13 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide22 == false && this.hide23 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide32 == false && this.hide33 == false && this.hide34 == false && this.hide35 == false){
            alert("WIN PLAYER");
          }
          if(this.selected == 0){
            this.hide = true;
            this.chara3 = 2;
            this.chara6 = 2;
            this.tour = false;
          }
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.chara3 = 2;
          this.chara6 = 2;
          this.tour = false;
        }
        this.randomIa();
      }
    }
  }

  attackC(){


    // Team Red 4

    if(this.selected == 4){

      this.randomnumber();
      if(this.number == 1){
        console.log('touch');
        this.chara1 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
        }
        if(this.chara1 <= 0){
          alert("Back to inferior zone");
          this.hide1 = false;
          this.hide14 = true;
  
          this.hide4 = false;
          this.hide44 = true;
  
          this.chara1 = 2;
          this.chara4 = 2; 
          this.tour = false;
        }
        this.randomIa();
      }
      else{
        console.log('echec');
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }    
    }

    if(this.selected == 42){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara1 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara1 <= 0){
          alert("Back to inferior zone");
          this.hide12 = false;
          this.hide1 = true;
  
          this.hide42 = false;
          this.hide4 = true;
  
          this.chara1 = 2; 
          this.chara4 = 2; 
          this.tour = false;
        }    
        this.randomIa();
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 43){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara1 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara1 <= 0){
          alert("Back to inferior zone");
          this.hide13 = false;
          this.hide12 = true;
  
          this.hide43 = false;
          this.hide42 = true;
  
          this.chara1 = 2; 
          this.chara4 = 2; 
          this.tour = false;
        }
        this.randomIa();    
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 44){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara1 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara1 <= 0){
          alert("Back to inferior zone");
          this.hide44 = false;
          this.hide45 = true;
  
          this.hide14 = false;
          this.hide15 = true;
  
          this.chara1 = 2;
          this.chara4 = 2; 
          this.tour = false;
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 45){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara1 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara1 <= 0){
          alert("Back to inferior zone");
          this.hide15 = false;
          
  
          //this.hide45 = false;
          //this.hide43 = true;
  
          this.chara1 = 2;
          this.chara4 = 2; 
          this.tour = false;
          if(this.hide1 == false && this.hide12 == false && this.hide13 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide22 == false && this.hide23 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide32 == false && this.hide33 == false && this.hide34 == false && this.hide35 == false){
            alert("WIN PLAYER");
          }
        }   
        this.randomIa(); 
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    // Team Red 5

    if(this.selected == 5){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara2 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide2 = false;
          this.hide24 = true;
  
          this.hide5 = false;
          this.hide54 = true;
  
          this.chara2 = 2; 
          this.chara5 = 2; 
          this.tour = false;
        } 
        this.randomIa();   
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 52){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara2 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
         
        }
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide22 = false;
          this.hide2 = true;
  
          this.hide52 = false;
          this.hide5 = true;
  
          this.chara2 = 2; 
          this.chara5 = 2;
          this.tour = false;
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 53){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara2 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide23 = false;
          this.hide22 = true;
  
          this.hide53 = false;
          this.hide52 = true;
  
          this.chara2 = 2; 
          this.chara5 = 2;
          this.tour = false;
        } 
        this.randomIa();   
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 54){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara2 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide54 = false;
          this.hide55 = true;
  
          this.hide24 = false;
          this.hide25 = true;
  
          this.chara2 = 2;
          this.chara5 = 2;
          this.tour = false;
        }  
        this.randomIa();
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      } 
    }

    if(this.selected == 55){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara2 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide25 = false;
          
  
          // this.hide5 = false;
          // this.hide53 = true;
  
          this.chara2 = 2;
          this.chara5 = 2;
          this.tour = false;
  
          if(this.hide1 == false && this.hide12 == false && this.hide13 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide22 == false && this.hide23 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide32 == false && this.hide33 == false && this.hide34 == false && this.hide35 == false){
            alert("WIN PLAYER");
          }
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    // Team Red 6

    if(this.selected == 6){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara3 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara3 <= 0){
          alert("Back to inferior zone");
          this.hide3 = false;
          this.hide34 = true;
  
          this.hide6 = false;
          this.hide64 = true;
  
          this.chara3 = 2; 
          this.chara6 = 2;
          this.tour = false;
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 62){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara2 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide32 = false;
          this.hide3 = true;
  
          this.hide62 = false;
          this.hide6 = true;
  
          this.chara3 = 2; 
          this.chara6 = 2;
          this.tour = false;
        }  
        this.randomIa(); 
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 63){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara2 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara2 <= 0){
          alert("Back to inferior zone");
          this.hide33 = false;
          this.hide32 = true;
  
          this.hide63 = false;
          this.hide62 = true;
  
          this.chara3 = 2;
          this.chara6 = 2; 
          this.tour = false;
        }  
        this.randomIa();
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      } 
    }

    if(this.selected == 64){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara3 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara3 <= 0){
          alert("Back to inferior zone");
          this.hide64 = false;
          this.hide65 = true;
  
          this.hide34 = false;
          this.hide35 = true;
  
          this.chara3 = 2;
          this.chara6 = 2;
          this.tour = false;
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }

    if(this.selected == 65){

      this.randomnumber();
      if(this.number == 1){
        console.log("touch");
        this.chara3 -= 1;
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          
        }
        if(this.chara3 <= 0){
          alert("Back to inferior zone");
          this.hide35 = false;
  
          // this.hide5 = false;
          // this.hide53 = true;
  
          this.chara3 = 2;
          this.chara6 = 2
          this.tour = false;
          if(this.hide1 == false && this.hide12 == false && this.hide13 == false && this.hide14 == false && this.hide15 == false && this.hide2 == false && this.hide22 == false && this.hide23 == false && this.hide24 == false && this.hide25 == false && this.hide3 == false && this.hide32 == false && this.hide33 == false && this.hide34 == false && this.hide35 == false){
            alert("WIN PLAYER");
          }
        }  
        this.randomIa();  
      }
      else{
        console.log("echec");
        this.selected = 0;
        if(this.selected == 0){
          this.hide = true;
          this.tour = false;
        }
        this.randomIa();
      }
    }
  }
}