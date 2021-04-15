import moment from 'moment';

const customDateTimeFormat = (datetimeString) => {
  return moment(datetimeString).format('DD MMM YYYY, hh:mm:ss a');
}

export { customDateTimeFormat };