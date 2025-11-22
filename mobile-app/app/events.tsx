import { Header } from "@/components/headers/Header";
import { BottomBar } from "@/components/main/BottomBar";
import { Text, View } from "react-native";

export default function EventsScreen() {
  return (
    <View className="flex-1 bg-[#141414]">
      <Header />
      <View className="flex-1 items-center justify-center space-y-4">
        <Text className="text-white">Events Screen</Text>
        <Text className="text-white">Welcome to the events screen!</Text>
      </View>
      <BottomBar />
    </View>
  );
}
