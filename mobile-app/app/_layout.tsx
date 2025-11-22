import "@/global.css"; // Importe no topo, antes de qualquer componente
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { XOctagon } from "lucide-react-native";
import { cssInterop } from "nativewind";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

cssInterop(XOctagon, { className: "style" });

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    KaiseiTokumin: require("../assets/fonts/KaiseiTokumin-Regular.ttf"),
    KaiseiTokuminBold: require("../assets/fonts/KaiseiTokumin-Bold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false, animation: "flip" }} />
        <Stack.Screen name="home" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="agenda" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="galery" options={{ headerShown: false, animation: "none" }} />
        <Stack.Screen name="events" options={{ headerShown: false, animation: "none" }} />
      </Stack>
    </ThemeProvider>
  );
}
