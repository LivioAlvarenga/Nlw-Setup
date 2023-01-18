import dayjs from "dayjs";

// Gera um array com todos os dias do ano de 1/jan ate hoje.
export default function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf("year");
  const today = new Date();

  const dates = [];
  let compareDate = firstDayOfTheYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
