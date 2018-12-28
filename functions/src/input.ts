export class InputDate {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}

export class RootObject {
  inputTimezone: number;
  desiredTimezone: number;
  inputDate: InputDate;
}
