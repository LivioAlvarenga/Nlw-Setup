import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import dayjs from "dayjs";
import { useState } from "react";
import HabitList from "./HabitList";
import ProgressBar from "./ProgressBar";

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export default function HabitDay({
  defaultCompleted = 0,
  amount = 0,
  date,
}: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  function handleCompletedChanged(completed: number) {
    setCompleted(completed);
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "group relative h-10 w-10 cursor-pointer rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background",
          {
            "border-zinc-800 bg-zinc-900 ": completedPercentage === 0,
            "border-blue-700 bg-blue-900 ":
              completedPercentage > 0 && completedPercentage < 20,
            "border-blue-600 bg-blue-800 ":
              completedPercentage >= 20 && completedPercentage < 40,
            "border-blue-500 bg-blue-700 ":
              completedPercentage >= 40 && completedPercentage < 60,
            "border-blue-400 bg-blue-600 ":
              completedPercentage >= 60 && completedPercentage < 80,
            "border-blue-300 bg-blue-500 ": completedPercentage >= 80,
          }
        )}
      >
        {" "}
        <span
          className={clsx("", {
            "absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-600 text-xs font-bold text-background group-focus:outline-none group-focus:ring-2 group-focus:ring-yellow-600 group-focus:ring-offset-2 group-focus:ring-offset-background":
              isCurrentDay,
          })}
        >
          {isCurrentDay ? "H" : ""}
        </span>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="flex min-w-[320px] flex-col rounded-2xl bg-zinc-900 p-6">
          <span className="font-semibold capitalize text-zinc-400">{dayOfWeek}</span>

          <span className="mt-1 text-3xl font-extrabold leading-tight">
            {dayAndMonth}
          </span>

          <ProgressBar progress={completedPercentage} />

          <HabitList date={date} onCompletedChanged={handleCompletedChanged} />

          <Popover.Arrow height={10} width={20} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
