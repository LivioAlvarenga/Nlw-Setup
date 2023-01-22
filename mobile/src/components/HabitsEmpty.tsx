import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export default function HabitsEmpty() {
  const { navigate } = useNavigation();
  return (
    <Text className="text-base text-zinc-400">
      Você ainda não está monitorando nenhum hábito{" "}
      <Text
        onPress={() => navigate("new")}
        className="text-base text-blue-400 underline active:text-blue-500"
      >
        comece cadastrando um.
      </Text>
    </Text>
  );
}
