import { Component } from '@angular/core';
import { AngularFirestore,  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Clothes{
  name: string;
  lesson: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tutorial-app';

  _db:AngularFirestore;
clothes:  Observable<any[]>;
constructor( db: AngularFirestore) {
    //this.afAuth.auth.signInAnonymously();
    this.clothes = db.collection('Clothes').valueChanges();
    this._db = db;
  }

  addTshirt(sName: string, dPrice: number){
    let shirtsCollection = this._db.collection<Clothes>('Clothes');
    shirtsCollection.add({ name: sName, lesson: dPrice });
  }

}
