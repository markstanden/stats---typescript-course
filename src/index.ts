import { CSVFileReader } from './CSVFileReader';
import { MatchResult } from './MatchResult';

const matchFile = new CSVFileReader(`football.csv`);
console.log(matchFile.filename);
matchFile.read();

let manUnitedWins = 0;
for (let match of matchFile.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United win total: ${manUnitedWins}`);
