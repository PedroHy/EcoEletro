import { Injectable } from '@angular/core';
import { CollectionReference, Firestore, collection } from '@angular/fire/firestore';
import { Enterprise } from '../interfaces/Enterprise';
import { Local } from '../interfaces/Local';
import { addDoc, getDocs, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';

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
      enterprise.ref
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

  deleteEnterprise = async (uid: string)=>{
    const enterprises = (await getDocs(this.enterpriseCollection)).docs;
    enterprises.forEach((enterprise)=>{
      if (enterprise.data().uid == uid){
        deleteDoc(enterprise.ref)
      }
    })
  }

  updateEnterprise = async (input: Enterprise)=>{
    const enterprises = (await getDocs(this.enterpriseCollection)).docs;
    enterprises.forEach((enterprise)=>{
      if (enterprise.data().uid == input.uid){
        updateDoc(enterprise.ref, {name: input.name, email: input.email, uid: input.uid})
      }
    })
  }
}
