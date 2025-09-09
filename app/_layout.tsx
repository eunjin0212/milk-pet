import "@/styles/global.css";
import 'react-native-reanimated';

import { useFonts } from "expo-font";
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Pretendard: require("@/assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-Bold": require("@/assets/fonts/Pretendard-Bold.otf"),
    "Pretendard-Light": require("@/assets/fonts/Pretendard-Light.otf"),
    "Pretendard-Regular": require("@/assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-SemiBold": require("@/assets/fonts/Pretendard-SemiBold.otf"),
  });

  // Pretendard를 모든 Text 기본값으로 적용
  useEffect(() => {
    if (fontsLoaded) {
      (Text as any).defaultProps = {
        ...(Text as any).defaultProps,
        style: [{ fontFamily: "Pretendard" }],
      };
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="(auth)/sign-up" />
    <Stack.Screen name="home" />
  </Stack>
}
