import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,   private sqlite: SQLite) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
  }

}





