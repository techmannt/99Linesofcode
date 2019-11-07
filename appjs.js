let friends = [];

friends = ["Bill", "Ruth", "Jon", "Mike", "Heidi"];
let output = "";
let line = " lines";
let beginning = " of code in the file, ";
let middleOne = " of code; ";
let middleTwo = " strikes one out, clears it all out, ";
let end = " of code in the file";

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].toUpperCase());
  for (let j = 99; j > 0; j--) {
    output = j + " " + ((j > 1) ? "lines" : "line") + beginning + j + ((j > 1) ? " lines" : " line") + middleOne + friends[i] + middleTwo + ((j > 1) ? j + line : "no more lines") + end;
    console.log(output);
  }
}
