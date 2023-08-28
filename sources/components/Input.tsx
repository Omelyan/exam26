import React, { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  //
}

export const Input = forwardRef<TextInput, TextInputProps>(
  ({ style, ...props }: InputProps, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.container, style]}
        placeholderTextColor="#1245"
        {...props}
      />
    );
  },
);

const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingTop: 15,
    paddingBottom: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1.8,
    fontFamily: 'Overpass-Medium',
    textAlignVertical: 'center',
    includeFontPadding: false,
    fontSize: 16,
    color: '#111',
    borderColor: '#111',
    backgroundColor: '#FFFE',
  },
});
