const fetch = require("node-fetch");
const fs = require("fs");
const crypto = require("crypto");
const hash = crypto.createHash("sha1");
const endpoint = "https://coderbyte.com/api/challenges/json/age-counting";

async function getData() {
  let data = await fetch(endpoint);
  let dataToParse = await data.json();
  return dataToParse;
}

async function getParsedData() {
  dataToParse = await getData();
  let dataToParseSplit = dataToParse.data.split(",");
  let ages = [];
  let ageElement = {};

  //Create the clean parsed objects array
  for (let i = 0; i < dataToParseSplit.length; i = i + 2) {
    ageElement = {
      key: dataToParseSplit[i].split("=")[1],
      age: dataToParseSplit[i + 1].split("=")[1],
    };

    ages.push(ageElement);
  }
  return ages;
}

async function getFilteredData() {
  //Save into a new array the items that have an age equal to 32
  ages = await getParsedData();
  var itemsFiltered = ages.filter((element) => {
    return element.age == 32;
  });

  return itemsFiltered;
}

async function CreateHashedOutput() {
  itemsFiltered = await getFilteredData();

  //Create the file output.txt
  var output = fs.createWriteStream("./output.txt");

  //Iterate the new array and write each element on the output.txt. Adds a new line except from the last item of the array
  itemsFiltered.forEach((element, index, array) => {
    if (index === array.length - 1) output.write(element.key);
    else output.write(element.key + "\r\n");
  });

  //Create the stream to read the file
  var input = fs.createReadStream("output.txt");

  //Hash the document, create the hashedOutput.txt file and write it with the hashed output.
  input.on("readable", () => {
    const data = input.read();
    if (data) hash.update(data);
    else {
      var output = fs.createWriteStream("./hashedOutput.txt");
      output.write(hash.digest("hex"));
    }
  });
}

// Execute the function
CreateHashedOutput();
