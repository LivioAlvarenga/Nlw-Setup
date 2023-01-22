import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  progress?: number;
}

export default function ProgressBar({ progress = 0 }: Props) {
  const sharedProgress = useSharedValue(progress);

  const style = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`,
    };
  });

  useEffect(() => {
    sharedProgress.value = withTiming(progress);
  }, [progress]);

  return (
    <View className="mt-4 h-3 w-full rounded-xl bg-zinc-700">
      <Animated.View className="h-3 rounded-xl bg-blue-600" style={style} />
    </View>
  );
}
