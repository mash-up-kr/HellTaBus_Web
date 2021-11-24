export const getFirstAndLastDateStringFromCurrentWeek = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentDay = today.getDay();

  const sunday = new Date(currentYear, currentMonth, currentDate - currentDay);
  const saturday = new Date(currentYear, currentMonth, currentDate + (6 - currentDay));

  const sundayDateString = `${sunday.getFullYear()}-${sunday.getMonth() + 1}-${sunday.getDate()}`;
  const saturdayDateString = `${saturday.getFullYear()}-${
    saturday.getMonth() + 1
  }-${saturday.getDate()}`;

  return { sundayDateString, saturdayDateString };
};
