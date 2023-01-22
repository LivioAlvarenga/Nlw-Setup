import { Feather } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { api } from "../lib/axios";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-Feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const [title, setTitle] = useState("");

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) => prevState.filter((weekDay) => weekDay !== weekDayIndex));
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }

  async function handleCreateNewHabit() {
    try {
      if (!title.trim() || weekDays.length === 0) {
        return Alert.alert("Novo Hábito", "Informe o nome do hábito e a periodicidade");
      }

      await api.post("/habits", {
        title,
        weekDays,
      });

      setTitle("");
      setWeekDays([]);

      Alert.alert("Novo Hábito", "Hábito criado com sucesso!");
    } catch (error) {
      Alert.alert("Ops", "Não foi possível criar o novo hábito");
      console.log(error);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-3xl font-extrabold text-white">Criar hábito</Text>

        <Text className="mt-6 text-base font-semibold text-white">
          Qual seu comprometimento?
        </Text>

        <TextInput
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
          onChangeText={setTitle}
          value={title}
          className="mt-3 h-12 rounded-lg border-2 border-zinc-800 bg-zinc-900 pl-4 text-white  focus:border-green-600 "
        />

        <Text className="mt-4 mb-3 text-base font-semibold text-white">
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <Checkbox
            key={faker.datatype.uuid()}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleCreateNewHabit}
          className="mt-6 h-14 w-full flex-row items-center justify-center rounded-lg bg-green-600"
        >
          <Feather name="check" size={20} color={colors.white} />

          <Text className="ml-2 text-base font-semibold text-white">Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
