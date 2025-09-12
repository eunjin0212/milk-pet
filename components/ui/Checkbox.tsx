import CheckboxIcon from '@/assets/icons/CheckboxIcon';
import React from "react";
import { Pressable, Text, View } from "react-native";

interface CheckboxProps {
  checked: boolean;
  onToggle?: () => void;
  label: string;
  required?: boolean;
  full?: boolean;
};

const Checkbox = ({ checked, onToggle, label, required, full }: CheckboxProps) => {
  return (
    <Pressable
      onPress={onToggle}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      className="inline-flex flex-row items-center justify-center gap-base"
    >
      <View className={`inline-flex items-center justify-center w-6 h-6${full ? ` rounded-full border border-gray-light ${checked ? 'border-main bg-main' : ''}` : ''}`}>
        <CheckboxIcon className={`${full && checked ? 'text-white' : !full && checked ? 'text-main' : 'text-gray-light'}`} />
      </View>
      <Text className='text-base font-medium leading-6 ml-2.5 -tracking-tighter text-gray-dark'>{label}{required ? ' (필수)' : ''}</Text>
    </Pressable>
  );
};

export default Checkbox;
