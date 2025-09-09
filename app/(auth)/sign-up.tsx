import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const router = useRouter();

  const TEXT_CLASS = 'text-xl font-bold leading-normal tracking-tighter text-center text-neutral-800'
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={{
          minHeight: "100%",
          paddingHorizontal: 10,
          justifyContent: "center",
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {/* ====== 상단 콘텐츠 ====== */}
        <View style={{ alignItems: "center", gap: 20 }}>
          {/* logo */}
          <Image
            source={require("@/assets/images/logo.svg")}
            className='w-[9.313rem] h-[10.875rem] mb-[3.75rem]'
            resizeMode='contain'
          />

          <Text
            className={`${TEXT_CLASS} mb-[1.875rem]`}
          >
            우리집 같은 옆집,{'\n'}
            믿을 수 있는 케어
          </Text>

          <Text
            className={`${TEXT_CLASS} mb-[7rem]`}
          >
            우리집 막내의 두번째 집,{'\n'}
            우유펫에서 만나요
          </Text>
        </View>

        <Pressable
          onPress={() => router.push("/home")}
          className='w-full h-[3.125rem] bg-main rounded-base flex items-center justify-center max-w-[21.25rem] mx-auto'
          accessibilityRole="button"
          accessibilityLabel="본인 인증하기"
        >
          <Text className='font-bold tracking-tight text-center text-white'>
            본인 인증하기
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
