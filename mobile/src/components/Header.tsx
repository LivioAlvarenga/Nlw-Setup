import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import Logo from "../assets/logo.svg";

export function Header() {
  const { navigate } = useNavigation();

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate("new")}
        className="h-11 flex-row items-center rounded-lg border border-blue-500 px-4"
      >
        <Feather name="plus" color={colors.blue[500]} size={20} />
        <Text className="ml-3 text-base font-semibold text-white">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
