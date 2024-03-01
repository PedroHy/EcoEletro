import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'
import { provideStorage, getStorage } from '@angular/fire/storage'

import { provideClientHydration } from '@angular/platform-browser';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"training-5ad87","appId":"1:92246794599:web:c82d1e12ae2e2f0c4dcfc2","storageBucket":"training-5ad87.appspot.com","apiKey":"AIzaSyBSxzDw5xNce_3a3xTS_BhaYxzdUGhcMM8","authDomain":"training-5ad87.firebaseapp.com","messagingSenderId":"92246794599"}))), 
    importProvidersFrom(provideAuth(() => getAuth())), 
    importProvidersFrom(provideFirestore(() => getFirestore()), provideStorage(()=> getStorage())),
  ]
};
