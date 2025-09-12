import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Easing, Modal, Pressable, View } from "react-native";

type Props = {
  open: boolean;
  onClose: () => void;
  heightRatio?: number; // 기본 0.66 (2/3)
  children: React.ReactNode;
};

const { height: SCREEN_H } = Dimensions.get("window");

export default function BottomSheet({ open, onClose, heightRatio = 0.66, children }: Props) {
  const SHEET_H = Math.round(SCREEN_H * heightRatio);
  const anim = useRef(new Animated.Value(0)).current; // 0=닫힘, 1=열림

  useEffect(() => {
    Animated.timing(anim, {
      toValue: open ? 1 : 0,
      duration: open ? 260 : 220,
      easing: open ? Easing.out(Easing.cubic) : Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [open, anim]);

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [SHEET_H + 24, 0],
  });

  return (
    <Modal
      visible={open}
      transparent
      statusBarTranslucent
      animationType="none"
      onRequestClose={onClose}
    >
      <View className='flex-1 justify-center bg-[#00000099]'>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <Animated.View
          style={{
            height: SHEET_H,
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 10,
            transform: [{ translateY }],
          }}
        >
          {/* 핸들바 */}
          <View style={{ alignItems: "center", marginBottom: 12 }}>
            <View style={{ width: 44, height: 4, borderRadius: 999, backgroundColor: "#E5E7EB" }} />
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
}
