import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
// import { Clothes } from '../models/Clothes';
import { Observable } from 'rxjs';

// export interface Clothes {
//   $key: string;
//   name: string;
//   lesson: string;
// }

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // clothesRef: AngularFirestoreCollection<Clothes>
  // clothRef: AngularFireObject<any>

  constructor(
    private afs: AngularFirestore) { }

    // AddStudent(clothes: Clothes) {
    //   this.clothesRef.push({
    //     name: clothes.name,
    //     lesson: clothes.lesson
    //   })
    // }

    // GetStudent(id: string) {
    //   this.clothRef = this.db.object('Clothes/' + id);
    //   return this.clothRef;
    // }
    // // Fetch Students List
    // GetStudentsList() {
    //   this.clothesRef = this.db.list('Clothes');
    //   return this.clothRef;
    // }  
    // // Update Student Object
    // UpdateStudent(clothes: Clothes) {
    //   this.clothRef.update({
    //     name: clothes.name,
    //     lesson: clothes.lesson
    //   })
    // }  
    // // Delete Student Object
    // DeleteStudent(id: string) { 
    //   this.clothRef = this.db.object('Clothes/'+id);
    //   this.clothRef.remove();
    // }
}
