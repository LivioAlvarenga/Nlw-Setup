import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import generateDatesFromYearBeginning from "../utils/generate-dates-from-year-beginning";
import HabitDay from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDateSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDateSize - summaryDates.length;

type Summary = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export default function SummaryTable() {
  const [summary, setSummary] = useState<Summary>([]);

  useEffect(() => {
    api.get("/summary").then((response) => {
      setSummary(response.data);
    });
  }, []);

  return (
    <div className="flex w-full">
      <div className="grid grid-flow-row grid-rows-7 gap-3">
        {weekDays.map((weekDay) => {
          return (
            <div
              key={faker.datatype.uuid()}
              className="flex h-10 w-10 items-center justify-center text-xl font-bold text-zinc-400"
            >
              {weekDay}
            </div>
          );
        })}
      </div>

      <div className="grid grid-flow-col grid-rows-7 gap-3">
        {summary.length > 0 &&
          summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, "day");
            });

            return (
              <HabitDay
                key={faker.datatype.uuid()}
                date={date}
                amount={dayInSummary?.amount}
                defaultCompleted={dayInSummary?.completed}
              />
            );
          })}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map(() => {
            return (
              <div
                className="h-10 w-10 rounded-lg border-2 border-zinc-800 bg-zinc-900 opacity-40"
                key={faker.datatype.uuid()}
              />
            );
          })}
      </div>
    </div>
  );
}
