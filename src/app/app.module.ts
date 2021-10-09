import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ClothesComponent } from './clothes/clothes.component';
import { AddClothesComponent } from './add-clothes/add-clothes.component'
import { EditClothesComponent } from './edit-clothes/edit-clothes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ClothesComponent,
    AddClothesComponent,
    EditClothesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
