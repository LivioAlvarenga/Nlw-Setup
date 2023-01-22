import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps {
  checked?: boolean;
  title: string;
}

export function Checkbox({ title, checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
      className="mb-2 flex-row items-center"
    >
      {checked ? (
        <Animated.View
          entering={ZoomIn}
          exiting={ZoomOut}
          className="h-8 w-8 items-center justify-center rounded-lg bg-green-500"
        >
          <Feather name="check" size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 rounded-lg bg-zinc-900" />
      )}

      <Text className="ml-3 text-base font-semibold text-white">{title}</Text>
    </TouchableOpacity>
  );
}
