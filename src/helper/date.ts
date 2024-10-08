import dayjs from "dayjs";

export function getStrDate(date: Date): string {
  const strDate = dayjs(date).format("MMMM D, YYYY");
  return strDate;
}
