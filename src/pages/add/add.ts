import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {HomePage} from '../home/home';


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  data = {
    name: '',
    description: '',
    price: 0,
 }
  constructor(public navCtrl: NavController, public navParams: NavParams,public sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  
  saveData(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO Course VALUES(NULL,?,?,?)', [
          this.data.name,
           this.data.description,
            this.data.price
        ])
          .then(() => {
          console.log('Executed SQL insert')
          this.navCtrl.push(HomePage)
        })
          .catch(e => console.log(e));
  }).catch(e => console.log(e));
  
  }
}
