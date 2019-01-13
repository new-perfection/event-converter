import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'
import { Parser } from './parser'
import convert from "./converter"
import * as input from "./input"
import * as output from "./output"
const app = express()

app.use(cors())
app.use(express.json())
app.post('/timeConverter', (req, res) => {

  let request = new input.RootObject();
  try {
    request = req.body.data;
  } catch (error) {
    res.status(400).send("wrong request format");
    return;
  }
  let parsed = new Parser(request);
  let result = new output.OutputObject();
  result.resultDate = new output.ResultDate();
  if (!parsed.errors) {
    let responseDate = convert(parsed.origin, request.inputTimezone, request.desiredTimezone);
    result.resultDate.year = responseDate.getFullYear();
    result.resultDate.month = responseDate.getMonth() + 1;
    result.resultDate.day = responseDate.getDate();
    result.resultDate.hour = responseDate.getHours();
    result.resultDate.minute = responseDate.getMinutes();
    result.resultTimezone = request.desiredTimezone;
  } else {
    res.status(400).send("something went wrong: " + parsed.errors + ", object input is:" + JSON.stringify(request) + "\n,output is: " + JSON.stringify(parsed) + "date converted is: " + convert(parsed.origin, request.inputTimezone, request.desiredTimezone));
    return;
  }
  res.status(200).send({
    data: result
  });
  return;
})

export const v1 = functions.https.onRequest(app)
