import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{
          minHeight: "100%",
          paddingHorizontal: 24,
          paddingTop: 24,
          paddingBottom: 24,
          justifyContent: "space-between",
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {/* ====== 상단 콘텐츠 ====== */}
        <View style={{ alignItems: "center", gap: 20 }}>
          {/* logo */}
          <Image
            source={require("@/assets/images/logo.svg")}
            style={{ width: 200, height: 200, resizeMode: "contain" }}
          />

          <Text
            className='text-xl font-bold leading-normal tracking-tighter text-center text-neutral-800'
          >
            우리집 같은 옆집,{'\n'}
            믿을 수 있는 케어
          </Text>

          <Text
            className='text-xl font-bold leading-normal tracking-tighter text-center text-neutral-800'
          >
            우리집 막내의 두번째 집,{'\n'}
            우유펫에서 만나요
          </Text>
        </View>

        <View style={{ gap: 12 }}>
          <Pressable
            onPress={() => router.push("/home")} // API 없이 UI 전환만
            style={{
              backgroundColor: "#3B82F6", // 파란색
              paddingVertical: 16,
              borderRadius: 16,
              alignItems: "center",
            }}
            accessibilityRole="button"
            accessibilityLabel="본인 인증하기"
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
              본인 인증하기
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
