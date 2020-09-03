//import fs.readFileSync from node standard library, needed for file importing
import { readFileSync } from 'fs';

//my utility functions
import { dateStringToDate } from './utils';

// enum alias
import { MatchResult } from './MatchResult';

export class CSVFileReader {
  public encodingType: string = 'utf-8';

  // Create rawData property which will hold the imported csv string
  private rawData: string = '';
  // Create data array which will hold the parsed csv data
  public data: string[][] = [];

  /** constructor requires a filename to load */
  constructor(public filename: string) {}

  private load(): void {
    this.rawData = readFileSync(this.filename, {
      encoding: 'utf-8',
    });
    console.log(`Loading the file ${this.filename} which is encoded with ${this.encodingType}`);
  }

  private parse(): void {
    this.data = this.rawData
      // split whole data payload into an array of lines
      // returns an array of strings each item previosuly separated by newline character
      .split('\n')
      // Takes the returned array, and splits each line into a array of items
      // (each previously separated by commas)
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((row: string[]): any => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }

  read(): void {
    this.load();
    this.parse();
  }
}
