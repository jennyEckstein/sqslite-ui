const sqslite = require("sqslite");
const { SQS } = require("aws-sdk");

const port = process.env.PORT || 5000;

const endpoint = `http://localhost:${port}`;
const region = "us-east-1";
const accessKeyId = "foo";
const secretAccessKey = "bar";

let sqsLiteClient;

sqsLiteServer = sqslite({});

sqslite({}).listen(port, (err, address) => {
  if (err) throw err;
  console.log(`server listening on ${address}`);

  sqsLiteClient = new SQS({
    endpoint,
    accessKeyId,
    region,
    secretAccessKey,
  });
});
