import React from "react";
import { View } from "react-native";

interface Props {
  progress?: number;
}

export default function ProgressBar({ progress = 0 }: Props) {
  return (
    <View className="mt-4 h-3 w-full rounded-xl bg-zinc-700">
      <View className="h-3 rounded-xl bg-blue-600" style={{ width: `${progress}%` }} />
    </View>
  );
}
