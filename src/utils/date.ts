export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const getTodayAndTomorrow = () => {
  const today = new Date();

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  return {
    today: formatDate(today),
    tomorrow: formatDate(tomorrow),
  };
};
