import moment from 'moment';

export const getCurrentDatetime = (format = 'DD/MM/YYYY | LT'): string => {
  return moment().format(format);
};

export const getCurrentDate = (format = 'DD/MM/YYYY'): string => {
  return moment().format(format);
};

export const getCurrentTime = (format = 'LT'): string => {
  return moment().format(format);
};

export const getTodayNumber = () => {
  const day = moment().format('dddd');

  switch (day) {
    case 'Monday':
      return 1;
    case 'Tuesday':
      return 2;
    case 'Wednesday':
      return 3;
    case 'Thursday':
      return 4;
    case 'Friday':
      return 5;
    case 'Saturday':
      return 6;
    default:
      return 0;
  }
};

export const dateToString = (date: string): string => {
  const res = moment(date.toString().split('T')[0], 'YYYY-MM-DD').format('DD MMMM YY');
  return res;
};

export const dateToTime = (date: string): string => {
  const res = moment(date.toString().split('T')[1], 'HH:mm:ss').format('hh:mm A');
  return res;
};

export const dateToDateTime = (date: string): string => {
  const res = moment(date.toString().split('T')[0], 'YYYY-MM-DD').format('YYYY-MM-DD');
  const time = moment(date.toString().split('T')[1], 'HH:mm:ss').format('HH:mm');
  return `${res} ${time}`;
};
