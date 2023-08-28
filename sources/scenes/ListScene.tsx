import React from 'react';
import { FlatList, FlatListProps, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Activity } from '~/components';

type ListSceneProps<ItemT> = FlatListProps<ItemT> & {
  activity?: boolean | undefined;
};

export const ListScene = <ItemT,>({
  activity,
  contentContainerStyle,
  ...props
}: ListSceneProps<ItemT>) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <FlatList
        automaticallyAdjustContentInsets={false}
        automaticallyAdjustKeyboardInsets={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        stickyHeaderIndices={[0]}
        style={styles.container}
        contentContainerStyle={[
          styles.contentContainer,
          contentContainerStyle,
          { paddingBottom: bottom },
        ]}
        ListHeaderComponentStyle={styles.headerContainer}
        {...props}
      />

      {activity && (
        <Animated.View
          pointerEvents="none"
          entering={FadeIn.delay(500)}
          exiting={FadeOut.delay(250)}
          style={styles.activityContainer}
        >
          <Activity />
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121224',
  },

  contentContainer: {
    padding: 20,
    gap: 18,
  },

  headerContainer: {
    margin: -20,
    marginBottom: 12,
  },

  activityContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#0002',
  },
});
