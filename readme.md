# Age countring challenge

## Description

In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. Your goal is to count how many items exist that have an age equal to 32.

Then you should create a write stream to a file called output.txt and the contents should be the key values (from the json) each on a separate line in the order they appeared in the json file (the file should end with a newline character on its own line). Finally, then output the SHA1 hash of the file.

## Examples

### Filtered files output

```
XZbHV
OO2Mc
uumoL
cUS5f
A5gR0
GIDFA
```

### Value of hashed file

```
0a62c37e2a121f0fdfdf722aeecd27734380afe4fc45f198cdc8a9476ebb1433
```

## How to run it?

```
cd ageCountingChallenge
npm i
node ageCountingChallenge.js
```
