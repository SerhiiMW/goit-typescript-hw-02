/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
Monday,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,
Sunday,
}

const isWeekend = (Days): boolean => { 
  return Days[Days.Saturday] | Days[Days.Sunday] ? true : false;
}