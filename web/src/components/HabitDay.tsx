import * as Checkbox from "@radix-ui/react-checkbox";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { Check } from "phosphor-react";
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

          <div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="group flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-zinc-800 bg-zinc-900 group-data-[state=checked]:border-green-500 group-data-[state=checked]:bg-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className="text-xl font-semibold leading-tight text-white group-data-[state=checked]:text-zinc-400 group-data-[state=checked]:line-through">
                Beber 2L de água
              </span>
            </Checkbox.Root>
          </div>

          <Popover.Arrow height={10} width={20} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
