import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface Clothes {
  $key: string;
  name: string;
  lesson: string;
}

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
  
  clothes: any[] = [];
  
  constructor(
    private firestore: AngularFirestore, 
    private location: Location,
    private rout: Router) {
  }

    ngOnInit(): void {
      this.firestore.collection('Clothes')
      .get().subscribe((data) => {
        data.docs.forEach((doc) => {
          this.clothes.push(doc.data())
        })
      })
      
    }

    create(){
      this.rout.navigateByUrl('add')
    }

}
