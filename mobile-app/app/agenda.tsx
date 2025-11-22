import { HeaderAgenda } from "@/components/headers/HeaderAgenda";
import { BottomBar } from "@/components/main/BottomBar";
import { MoveLeft, MoveRight } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const SWIPE_THRESHOLD = 50;

export default function AgendaScreen() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [currentYear, setCurrentYear] = useState<number>(
    currentMonth.getFullYear()
  );
  const [currentDay, setCurrentDay] = useState<number>(currentMonth.getDate());

  // const position = useSharedValue(0);

  const handlePreviousMonth = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );
    setCurrentMonth(prevMonth);
    setCurrentYear(prevMonth.getFullYear());
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );
    setCurrentMonth(nextMonth);
    setCurrentYear(nextMonth.getFullYear());
  };

  // ✋ Definição do Gesto de Pan
  // const panGesture = Gesture.Pan()
  //   .onUpdate((e) => {})
  //   .onEnd((e) => {
  //     const translationX = e.translationX;

  //     if (translationX > SWIPE_THRESHOLD) {
  //       handlePreviousMonth();
  //       console.log("⬅️ SWIPE DETECTADO: Mês Anterior");
  //     } else if (translationX < -SWIPE_THRESHOLD) {
  //       handleNextMonth();
  //       console.log("➡️ SWIPE DETECTADO: Próximo Mês");
  //     }
  //   });

  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-[#141414]">
        {/* Header bar */}
        <HeaderAgenda />

        {/* Main content */}
        <View className="flex-1">
          <View className="px-4">
            <View className="flex flex-row justify-between items-center px-4 my-10">
              <TouchableOpacity
                className="p-2 rounded-full bg-white/10"
                onPress={handlePreviousMonth}
              >
                <MoveLeft size={14} color="#FFD700" strokeWidth={1} />
              </TouchableOpacity>

              <Text className="text-white text-lg font-kaiseiBold uppercase">
                {currentMonth.toLocaleString("pt-BR", { month: "long" })}{" "}
                {currentYear}
              </Text>

              <TouchableOpacity
                className="p-2 rounded-full bg-white/10"
                onPress={handleNextMonth}
              >
                <MoveRight size={14} color="#FFD700" strokeWidth={1} />
              </TouchableOpacity>
            </View>

            <View className="w-full bg-neutral-800 py-2 rounded-lg flex flex-row items-center justify-between px-4">
              <Text className="text-white mr-1">Dom</Text>
              <Text className="text-white mr-1">Seg</Text>
              <Text className="text-white mr-1">Ter</Text>
              <Text className="text-white mr-1">Qua</Text>
              <Text className="text-white mr-1">Qui</Text>
              <Text className="text-white mr-1">Sex</Text>
              <Text className="text-white">Sáb</Text>
            </View>

            <View className="w-full bg-neutral-800/20 rounded-lg gap-1 mt-4 p-2 flex-row flex-wrap items-stretch justify-stretch">
            {
              Array.from({ length: 3 }, (_, i) => (
                <View
                  key={i}
                  className="w-[54px] h-[54px] flex items-center justify-center mr-1"
                >
                  <Text className="text-neutral-600">{""}</Text>
                </View>
              ))}
             
              {getCalendarDays(currentMonth).map((day, index) => (
                <ButtonCalendar
                  key={index}
                  value={day.date ? day.date : 0} // Assume que `day.date` é o número do dia
                  // isDummy={day.isDummy} // Se for um dia do mês anterior/próximo
                  onPress={setSelectedDate}
                />
              ))}
            </View>

            <View>
              {selectedDate ? (
                <View className="mt-4 border border-[#FFD700] p-4 rounded-lg ">
                  <Text className="text-[#FFD700] font-kaiseiBold">
                    Data Selecionada: {selectedDate} /{" "}
                    {currentMonth.getMonth() + 1} / {currentYear}
                  </Text>
                  <Text className="text-gray-400 mt-2">
                    Disponível para agendamento.
                  </Text>
                </View>
              ) : (
                <Text className="text-white mt-4">
                  Seleciona uma data no calendário acima.
                </Text>
              )}
            </View>
          </View>
        </View>

        {/* Bottom Bar */}
        <BottomBar />
      </View>
    </GestureHandlerRootView>
  );
}

// ... ButtonCalendar (mantido) ...
// (Lembre-se de importar ButtonCalendar ou garantir que ele esteja no mesmo arquivo ou importado)
interface ButtonCalendarProps {
  value: number;
  onPress: (value: number) => void;
}
export const ButtonCalendar = ({ value, onPress }: ButtonCalendarProps) => {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    console.log("Pressed", value);
    setPressed(!pressed);
    onPress(value);
  };
  if (value === 0) return;

  return (
    <TouchableOpacity
      className={`w-[54px] h-[54px] border rounded-lg flex items-center justify-center mr-1 ${
        pressed ? "border-[#FFD700]/50" : "border-neutral-600/30"
      }`}
      onPress={handlePress}
    >
      <Text
        className={`${
          pressed
            ? "font-kaiseiBold text-[#FFD700] text-[16px]"
            : "font-kaisei text-white"
        }`}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

interface CalendarDay {
  date: number | null;
  isDummy: boolean;
}

const getCalendarDays = (date: Date): CalendarDay[] => {
  const year = date.getFullYear();
  const month = date.getMonth();

  // 1. Dias do mês anterior para preenchimento
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0=Dom, 1=Seg...
  const prevMonthDays = Array.from({ length: firstDayOfMonth }, () => ({
    date: null,
    isDummy: true,
  }));

  // 2. Dias do mês atual
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
    date: i + 1,
    isDummy: false,
  }));

  const allDays = [...prevMonthDays, ...currentMonthDays];

  // 3. Dias do próximo mês para preenchimento (Garantir que seja um múltiplo de 7)
  const remainingDays = (7 - (allDays.length % 7)) % 7;
  const nextMonthDays = Array.from({ length: remainingDays }, () => ({
    date: null,
    isDummy: true,
  }));

  return [...allDays, ...nextMonthDays];
};
