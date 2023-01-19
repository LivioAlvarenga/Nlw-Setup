import { faker } from "@faker-js/faker";
import generateDatesFromYearBeginning from "../utils/generate-dates-from-year-beginning";
import HabitDay from "./HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();

const minimumSummaryDateSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDateSize - summaryDates.length;

export default function SummaryTable() {
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
        {summaryDates.map((date) => {
          return <HabitDay key={faker.datatype.uuid()} amount={5} completed={4} />;
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
