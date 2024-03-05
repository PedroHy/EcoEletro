import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, collection } from '@angular/fire/firestore';
import { Enterprise } from '../interfaces/Enterprise';
import { Local } from '../interfaces/Local';
import { addDoc, getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  constructor(private firestore: Firestore) { }
  
  enterpriseCollection = collection(this.firestore, 'enterprises') as CollectionReference<Enterprise>

  createEnterprise = async (enterprise: Enterprise) => {
    const doc = await addDoc(this.enterpriseCollection, enterprise);
    console.log(doc);
  }

  getEnterprise = async (uid: string) => {
    let selected: Enterprise = {};
    const enterprises = (await getDocs(this.enterpriseCollection)).docs;
    enterprises.forEach((enterprise)=>{
      if (enterprise.data().uid == uid){
        selected = {
          email: enterprise.data().email,
          name: enterprise.data().name,
          uid: enterprise.data().uid
        };
      }
    })

    return selected;
  }

}
