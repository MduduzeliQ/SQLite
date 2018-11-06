import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {AddPage} from '../add/add';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data:any = [];
  constructor(public navCtrl: NavController,public sqlite: SQLite, public toastCtrl: ToastController, ) {
  }
  ionViewDidLoad(){
    this.GetData();
  }

  GetData(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS Course(id INTEGER PRIMARY KEY, name TEXT, description TEXT, price INT)', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
  
          db.executeSql('SELECT * FROM Course ORDER BY id DESC', [])
          .then(res=>{
  console.log('Executed SQL SELECT done');
  this.data = [];
  for (var i = 0; i < res.rows.length; i++){
  this.data.push({
    id: res.rows.item(i).id,
     name: res.rows.item(i).name, 
     description: res.rows.item(i).description, 
     price: res.rows.item(i).price,
  })
  }
  }).catch(e => console.log(e));
    
  
  }).catch(e => console.log(e));
    }

    deleteCourse(id){
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('DELETE FROM Course WHERE id=?', [id])
            .then(() =>{
              console.log('Executed SQL delete')
              this.GetData();
            })
            .catch(e => console.log(e));
        }).catch(e => console.log(e));
    }
    refresh(){
      this.GetData();
    }
    
      AddCourse(){
        const toast = this.toastCtrl.create({
          message: 'Welcome to Harvard school of Excellent.',
          duration: 2000
        });
        toast.present();
        this.navCtrl.push(AddPage);
      }

 
      
}
