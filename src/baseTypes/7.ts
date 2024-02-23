/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum days {
Mon = 'робочий',
Tue = 'робочий',
Wed = 'робочий',
Thu = 'робочий',
Fri = 'робочий',
Sat = 'вихідний',
Sun = 'вихідний',
}

const isWeekend = (days : string): boolean => { 
  return days === 'робочий' ? true : false;
}