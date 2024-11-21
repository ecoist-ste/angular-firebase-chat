import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-e69ba","appId":"1:393400145407:web:5e00210b592d447fba43ca","storageBucket":"friendlychat-e69ba.firebasestorage.app","apiKey":"AIzaSyDd7R5KYHkojosqlS8ioCQfk_wafaTfoho","authDomain":"friendlychat-e69ba.firebaseapp.com","messagingSenderId":"393400145407"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-e69ba","appId":"1:393400145407:web:5e00210b592d447fba43ca","storageBucket":"friendlychat-e69ba.firebasestorage.app","apiKey":"AIzaSyDd7R5KYHkojosqlS8ioCQfk_wafaTfoho","authDomain":"friendlychat-e69ba.firebaseapp.com","messagingSenderId":"393400145407"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
