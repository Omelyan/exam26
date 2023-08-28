import React from 'react';
import { ColorValue, StyleSheet, Text, TextProps } from 'react-native';

interface LabelProps extends TextProps {
  size?: number;
  color?: ColorValue;
}

export const Label = ({ size, color, style, ...props }: LabelProps) => {
  return (
    <Text
      style={[
        styles.text,
        !!size && { fontSize: size },
        !!color && { color },
        style,
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Overpass-Medium',
    fontSize: 14,
    color: '#111',
  },
});
