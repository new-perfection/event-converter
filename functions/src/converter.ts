

export default function (origin: Date, inputGmt: number, outputGmt: number) {

  let inputOffset = (inputGmt >= 0) ? -Math.abs(inputGmt) * 60 * 60000 : Math.abs(inputGmt) * 60 * 60000;
  let outputOffset = outputGmt * 60 * 60000;
  let output = new Date(origin.getTime() + inputOffset + outputOffset);


  return output;
}

