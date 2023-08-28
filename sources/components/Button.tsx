import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Activity } from './Activity';
import { hitSlop } from '~/helpers/miscellaneous';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  activity?: boolean | undefined;
}

export const Button = ({
  title,
  activity = false,
  disabled,
  style,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      hitSlop={hitSlop}
      disabled={disabled}
      style={[styles.container, style]}
      {...props}
    >
      {!!title && (
        <Text
          numberOfLines={1}
          style={[styles.title, disabled && styles.disabledTitle]}
        >
          {title}
        </Text>
      )}
      <Activity activity={activity} size={30} style={styles.activity} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    padding: 10,
    borderRadius: 8,
    borderBottomWidth: 4,
    borderColor: '#93BD64',
    backgroundColor: '#A8D672',
  },

  title: {
    marginTop: 5,
    fontFamily: 'Overpass-SemiBold',
    textAlignVertical: 'center',
    includeFontPadding: false,
    fontSize: 18,
    color: '#111',
  },

  disabledTitle: {
    color: '#7FA356',
  },

  activity: {
    position: 'absolute',
  },
});
