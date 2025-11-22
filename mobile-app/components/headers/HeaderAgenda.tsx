import { router } from "expo-router";
import { History, MoveLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderAgendaProps {}

export const HeaderAgenda = ({}: HeaderAgendaProps) => {
  return (
    <View className="border-b-[1px] border-[#FFD700]/20 h-[45px] px-4 mt-[40px] flex flex-row items-center justify-between">
      <TouchableOpacity className="p-2 rounded-full"
      onPress={() => {
       router.back();
      }}>
        <MoveLeft color="#FFD700" />
      </TouchableOpacity>

      <Text className="text-[#FFD700] text-lg font-kaisei text-[10px]">
        Calendário de Disponibilidade
      </Text>

      <View className="flex flex-row items-center gap-2">

        <TouchableOpacity className="p-2 rounded-full">
          <History className="style" size={14} color="#FFD700" strokeWidth={1} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
