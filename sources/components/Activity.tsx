import React from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';
// @ts-ignore
import { WaveIndicator } from 'react-native-indicators';

interface ActivityProps {
  activity?: boolean | undefined;
  size?: number;
  color?: ColorValue;
  style?: StyleProp<ViewStyle> | undefined;
}

export const Activity = ({
  activity,
  size = 50,
  color = 'white',
  style,
}: ActivityProps) => {
  return (
    <WaveIndicator
      animating={activity}
      size={size}
      color={color}
      style={style}
    />
  );
};
