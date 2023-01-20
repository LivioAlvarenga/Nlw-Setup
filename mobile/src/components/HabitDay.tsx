import clsx from "clsx";
import dayjs from "dayjs";
import { Dimensions, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  Dimensions.get("screen").width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5);

interface Props extends TouchableOpacityProps {
  date: Date;
  completed?: number;
  amount?: number;
}

export function HabitDay({ completed = 0, amount = 0, date, ...rest }: Props) {
  const completedPercentage =
    amount > 0 ? generateProgressPercentage(amount, completed) : 0;

  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return (
    <TouchableOpacity
      className={clsx("m-1 rounded-lg border-2", {
        ["border-zinc-800 bg-zinc-900"]: completedPercentage === 0,
        ["border-blue-700 bg-blue-900"]:
          completedPercentage > 0 && completedPercentage < 20,
        ["border-blue-600 bg-blue-800"]:
          completedPercentage >= 20 && completedPercentage < 40,
        ["border-blue-500 bg-blue-700"]:
          completedPercentage >= 40 && completedPercentage < 60,
        ["border-blue-400 bg-blue-600"]:
          completedPercentage >= 60 && completedPercentage < 80,
        ["border-blue-300 bg-blue-500"]: completedPercentage >= 80,
        ["border-3 border-yellow-500"]: isCurrentDay,
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
  );
}
