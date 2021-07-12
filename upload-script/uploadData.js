//const firestoreService = require("firestore-export-import");
const admin = require("firebase-admin");
const { restore } = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
  restore("./data/occasions.json");


