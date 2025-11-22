import { Href, router, usePathname } from "expo-router";
import { Calendar, Globe, Home, LayoutGrid, Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

interface BottomBarProps {}

export const BottomBar = ({}: BottomBarProps) => {
  const route = usePathname();

  const handlePress = (screen: Href) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`Navigating to: ${screen}`);
    }
    if (route === screen) {
      if (process.env.NODE_ENV === "development") {
        console.log(`Already on ${screen}, no navigation needed.`);
      }
      return;
    }
    router.push(screen);
  };

  const isActive = (screen: string) => {
    return route === screen;
  };

  const getForegroundColor = (screen: string) => {
    return isActive(screen) ? "#FFD700" : "#706C6C";
  };

  const getBackgroundColor = (screen: string) => {
    return isActive(screen) ? "#FFD700" : "#141414";
  };

  return (
    <View className="bg-[#141414] border-t-[1px] border-[#FFD700]/40 h-[50px] px-4 pt-2 flex flex-row items-center justify-between mb-14">
      <TouchableOpacity
        className="p-2 rounded-full justify-center items-center"
        onPress={() => handlePress("/home")}
      >
        <Home
          className="style"
          size={20}
          color={getForegroundColor("/home")}
          fill={getBackgroundColor("/home")}
          strokeWidth={1}
        />
        <Text
          className={`text-[${getForegroundColor(
            "/home"
          )}] text-[8px] font-light`}
        >
          HOME
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="p-2 rounded-full justify-center items-center"
        onPress={() => handlePress("/agenda")}
      >
        <Calendar
          className="style"
          size={20}
          color={getForegroundColor("/agenda")}
          fill={getBackgroundColor("/agenda")}
          strokeWidth={1}
        />
        <Text
          className={`text-[${getForegroundColor(
            "/agenda"
          )}] text-[8px] font-light`}
        >
          AGENDA
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="p-2 w-[50px] rounded-full justify-center items-center bg-[#FFD700] border-black border-[1px]">
        <Plus className="style" size={20} color="#706C6C" strokeWidth={1} />
      </TouchableOpacity>

      <TouchableOpacity
        className="p-2 rounded-full justify-center items-center"
        onPress={() => handlePress("/events")}
      >
        <Globe
          className="style"
          size={20}
          color={getForegroundColor("/events")}
          fill={getBackgroundColor("/events")}
          strokeWidth={1}
        />
        <Text
          className={`text-[${getForegroundColor(
            "/events"
          )}] text-[8px] font-light`}
        >
          EVENTOS
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="p-2 rounded-full justify-center items-center"
        onPress={() => handlePress("/galery")}
      >
        <LayoutGrid
          className="style"
          size={20}
          color={getForegroundColor("/galery")}
          fill={getBackgroundColor("/galery")}
          strokeWidth={1}
        />
        <Text
          className={`text-[${getForegroundColor(
            "/galery"
          )}] text-[8px] font-light`}
        >
          GALERIA
        </Text>
      </TouchableOpacity>
    </View>
  );
};
