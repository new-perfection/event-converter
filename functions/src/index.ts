import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'

const app = express()

// const allowedOrigins = [
//   'https://event-converter.firebaseapp.com'
// ]
//
// app.use(cors({
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }))

app.use(cors())

app.post('/', (req, res) => {
  res.status(200).send({
    data: 'hello'
  });
})

export const v1 = functions.https.onRequest(app)

// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
