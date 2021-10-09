import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireObject } from '@angular/fire/compat/database'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.scss']
})
export class AddClothesComponent implements OnInit {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
  ngOnInit() {
  }

  form = new FormGroup({
    name: new FormControl(''),
    lesson: new FormControl('')
  })
 
  submitClothesData() {
    this.firestore.collection('Clothes')
    .add({
      name: this.form.value.name,
      lesson: this.form.value.lesson
    })
    .then(res => {
      this.form.reset()
    })
    .catch(e => {
      console.log(e);
    })
   };

}
