import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type ScrollableSceneProps = ScrollViewProps;

export const ScrollableScene = ({
  contentContainerStyle,
  ...props
}: ScrollableSceneProps) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      style={styles.wrapper}
    >
      <ScrollView
        automaticallyAdjustContentInsets={false}
        automaticallyAdjustKeyboardInsets={false}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={[styles.container, { marginTop: top * 1.5 }]}
        contentContainerStyle={[
          styles.contentContainer,
          contentContainerStyle,
          { paddingBottom: bottom },
        ]}
        {...props}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#121224',
  },

  container: {
    backgroundColor: '#F6ECC9',
  },

  contentContainer: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 30,
  },
});
