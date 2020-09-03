/** takes a date in string format DD/MM/YYYY and converts to a date object */
export const dateStringToDate = (dateString: string): Date => {
  // splits the date string into a three item string array
  const dateStringArray: string[] = dateString.split('/');

  // converts each array element into a number
  const dateNumArray: number[] = dateStringArray.map((value: string): number => {
    return parseInt(value);
  });

  // logic to rearrange the date array and sent to Date constructor
  const dateDay: number = dateNumArray[0];
  // NOTE month is 0 based, so JANUARY has a value of 0, DECEMBER has a value of 11...
  const dateMonth: number = dateNumArray[1] - 1;
  const dateYear: number = dateNumArray[2];

  return new Date(dateYear, dateMonth, dateDay);
};
