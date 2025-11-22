import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ScreenStart() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900 relative">
      <Image
        source={require("@/assets/images/bg.jpg")}
        resizeMode="cover"
        className="absolute top-0 left-0 w-full h-full opacity-[64%]"
      />
      <View className="flex flex-col p-8 rounded-lg items-center justify-between h-full">
        <View>
          <Text className="text-lg font-light text-white mb-4"></Text>
        </View>
        <View className="flex-1 justify-center items-center">
         <Text className="text-[60px] text-white mb-4 font-kaiseiBold">
            FASHION TOP
          </Text>
        </View>
        <View className="w-full mb-16 gap-10 flex flex-col justify-center">
          <TouchableOpacity 
          onPress={() => {
            router.push("/home");
          }}
          className="w-[300px] h-[40px] bg-[#FFD700] px-2 py-3 rounded-[8px] shadow-black shadow-lg">
            <Text className="text-black text-center font-space text-[14px]">
              INICIAR SESSÃO
            </Text>
          </TouchableOpacity>

           <TouchableOpacity className="w-[300px] h-[40px] bg-black px-2 py-3 border-[#FFD700] border-[1px] rounded-[8px] shadow-black shadow-lg">
            <Text className="text-[#FFD700] text-center font-space text-[14px]">
              REGISTRAR-SE
            </Text>
          </TouchableOpacity>

          
        </View>
      </View>
    </View>
  );
}
