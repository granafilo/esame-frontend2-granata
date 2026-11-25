export const formatDate = (dateString?: string): string => {
  if (!dateString) return "";

  const [year, month, day] = dateString.split("-");
  if (!year || !month || !day) return dateString;
  return `${day}/${month}/${year}`;
};

export const formatRating = (rating?: number): string => {
  if (rating === undefined || rating === null) return "N/D";

  return rating.toFixed(1);
};
