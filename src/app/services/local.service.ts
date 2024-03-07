import { Injectable } from '@angular/core';
import { Firestore, CollectionReference, collection } from '@angular/fire/firestore';
import { Local } from '../interfaces/Local';
import { addDoc, deleteDoc, getDocs } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  localCollection = collection(this.fireStore, 'locals') as CollectionReference<Local>

  constructor(private fireStore: Firestore) { }

  createLocal = async (local: Local) => {
    const doc = await addDoc(this.localCollection, local);
    return doc;
  }

  getLocalsByEnterprise = async (uid: string)=> {
    let enterpriseLocals: Local[] = []
    const locals = (await getDocs(this.localCollection)).docs;
    locals.forEach((local)=>{
      if (local.data().uid == uid) enterpriseLocals.push(local.data());
    })

    return enterpriseLocals;
  }

  removeLocal = async (localId: string) => {
    const locals = (await getDocs(this.localCollection)).docs;
    locals.forEach((local)=>{
      if (local.data().id == localId) deleteDoc(local.ref);
    })
  }

}
