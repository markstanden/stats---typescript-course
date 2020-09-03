"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const MatchResult_1 = require("./MatchResult");
const matchFile = new CSVFileReader_1.CSVFileReader(`football.csv`);
console.log(matchFile.filename);
matchFile.read();
let manUnitedWins = 0;
for (let match of matchFile.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United win total: ${manUnitedWins}`);
