import { Bell, User } from "lucide-react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <View className="border-b-[1px] border-[#FFD700]/20 h-[45px] px-4 mt-[40px] flex flex-row items-center justify-between">
      <View className="flex flex-row items-center gap-2">
        <Image
          source={require("@/assets/images/logo.png")}
          resizeMode="contain"
          className="w-[20px] h-[20px]"
        />
        <Text className="text-white text-lg font-kaisei text-[10px]">
          FASHIONTOP
        </Text>
      </View>

      <View className="flex flex-row items-center gap-2">
        <TouchableOpacity className="p-2 rounded-full">
          <Bell className="style" size={14} color="#FFFFFF" strokeWidth={1} />
        </TouchableOpacity>

        <TouchableOpacity className="p-2 rounded-full">
          <User className="style" size={14} color="#FFFFFF" strokeWidth={1} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
