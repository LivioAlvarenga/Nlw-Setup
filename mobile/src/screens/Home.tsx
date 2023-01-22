import { faker } from "@faker-js/faker";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";
import Loading from "../components/Loading";
import { api } from "../lib/axios";
import generateDatesFromYearBeginning from "../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDateSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimumSummaryDateSize - datesFromYearStart.length;

type SummaryProps = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[];

export function Home() {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryProps | null>(null);

  async function fetchData() {
    try {
      setLoading(true);

      const response = await api.get("/summary");

      setSummary(response.data);
    } catch (error) {
      Alert.alert("Ops", "Não foi possível carregar o sumário de hábitos");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="mt-6 mb-2 flex-row">
        {weekDays.map((weekDay) => (
          <Text
            key={faker.datatype.uuid()}
            className="mx-1 text-center text-xl font-bold text-zinc-400"
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {summary && (
          <View className="flex-row flex-wrap">
            {datesFromYearStart.map((date) => {
              const dayWithHabits = summary.find((day) => {
                return dayjs(date).isSame(day.date, "day");
              });

              return (
                <HabitDay
                  key={faker.datatype.uuid()}
                  date={date}
                  amount={dayWithHabits?.amount}
                  completed={dayWithHabits?.completed}
                  onPress={() => navigate("habit", { date: date.toISOString() })}
                />
              );
            })}

            {amountOfDaysToFill > 0 &&
              Array.from({ length: amountOfDaysToFill }).map(() => (
                <View
                  key={faker.datatype.uuid()}
                  className="m-1 rounded-lg border-2 border-zinc-800 bg-zinc-900 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
