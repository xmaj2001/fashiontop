import { router } from "expo-router";
import { Filter, ListFilter, MoveLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderGaleryProps {}

export const HeaderGalery = ({}: HeaderGaleryProps) => {
  return (
    <View className="border-b-[1px] border-[#FFD700]/20 h-[45px] px-4 mt-[40px] flex flex-row items-center justify-between">
      <TouchableOpacity className="p-2 rounded-full"
      onPress={() => {
       router.back();
      }}>
        <MoveLeft color="#FFD700" />
      </TouchableOpacity>

      <Text className="text-[#FFD700] text-lg font-kaisei text-[10px]">
        GALERIA
      </Text>

      <View className="flex flex-row items-center gap-2">
        <TouchableOpacity className="p-2 rounded-full">
          <Filter className="style" size={14} color="#FFFFFF" fill={"#FFD700"} strokeWidth={1} />
        </TouchableOpacity>

        <TouchableOpacity className="p-2 rounded-full">
          <ListFilter className="style" size={14} color="#FFD700" strokeWidth={1} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
