function getCurrentDayAndMonth() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // JavaScript months are 0-indexed

  return {
    day: day,
    month: month,
  };
}

export default getCurrentDayAndMonth