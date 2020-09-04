import { MatchResult } from './MatchResult';

// create a tuple to deocument types contained within the football.csv file, as types are known prior to compile
export type MatchData = [Date, string, string, number, number, MatchResult, string];
