import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { hitSlop } from '~/helpers/miscellaneous';

interface RadioButtonProps {
  title?: string;
  selected?: boolean;
  color?: string;
  onPress?: () => void;
}

export const RadioButton = ({
  title,
  selected,
  color,
  onPress,
}: RadioButtonProps) => {
  return (
    <TouchableOpacity
      disabled={selected}
      activeOpacity={0.7}
      hitSlop={hitSlop}
      style={[
        styles.container,
        { backgroundColor: color ?? '#F6ECC9' },
        selected && styles.selectedContainer,
      ]}
      //
      onPress={onPress}
    >
      <Text
        numberOfLines={2}
        style={[styles.title, selected && styles.selectedTitle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    paddingHorizontal: 8,
    paddingTop: 6,
    paddingBottom: 4,
    borderRadius: 5,
  },

  selectedContainer: {
    backgroundColor: '#FFF2',
  },

  title: {
    flexShrink: 1,
    fontFamily: 'Overpass-Medium',
    textAlignVertical: 'center',
    includeFontPadding: false,
    color: '#111',
  },

  selectedTitle: {
    color: '#FFFA',
  },
});
