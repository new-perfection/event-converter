import firebase from 'firebase/app'
import 'firebase/functions'

const app = firebase.initializeApp({
  projectId: 'event-converter'
})

if (process.env.NODE_ENV === "development") {
  app.functions().useFunctionsEmulator('http://localhost:5000')
}

const timeConverter = app.functions().httpsCallable('v1/timeConverter')

export { timeConverter }
