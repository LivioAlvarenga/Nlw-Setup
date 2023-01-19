import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import ProgressBar from "./ProgressBar";

interface HabitDayProps {
  completed: number;
  amount: number;
}

export default function HabitDay(props: HabitDayProps) {
  const completedPercentage = Math.round((props.completed / props.amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("h-10 w-10 cursor-pointer rounded-lg border-2", {
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
        })}
      />

      <Popover.Portal>
        <Popover.Content className="flex min-w-[320px] flex-col rounded-2xl bg-zinc-900 p-6">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 text-3xl font-extrabold leading-tight">17/01</span>

          <ProgressBar progress={completedPercentage} />

          <Popover.Arrow height={10} width={20} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
