import * as input from "./input";

export class Parser {
  origin: Date;
  errors: string;
  constructor(request: input.RootObject) {
    try {
      this.origin = new Date(request.inputDate.year, request.inputDate.month - 1,
        request.inputDate.day, request.inputDate.hour, request.inputDate.minute);
    }
    catch (error) {
      this.errors = error;
    }
  }
}

