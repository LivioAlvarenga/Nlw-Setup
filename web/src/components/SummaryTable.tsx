import { faker } from "@faker-js/faker";
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

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
    </div>
  );
}
