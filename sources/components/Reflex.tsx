import React, { memo } from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import { Defs, Ellipse, RadialGradient, Stop, Svg } from 'react-native-svg';

interface Reflex {
  color: ColorValue | undefined;
}

export const Reflex = memo(({ color }: Reflex) => (
  <Svg style={styles.container}>
    <Ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill="url(#gradient)" />
    <Defs>
      <RadialGradient
        id="gradient"
        cx="50%"
        cy="50%"
        rx="50%"
        ry="50%"
        fx="50%"
        fy="10%"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0.1" stopColor={color} stopOpacity="0.07" />
        <Stop offset="1.0" stopColor={color} stopOpacity="0" />
      </RadialGradient>
    </Defs>
  </Svg>
));

const styles = StyleSheet.create({
  container: {
    top: -5,
    height: 40,
  },
});
