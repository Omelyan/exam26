import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { ZoomInRotate } from 'react-native-reanimated';
import { Defs, LinearGradient, Rect, Stop, Svg } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { hitSlop } from '~/helpers/miscellaneous';

import { RadioButton } from './RadioButton';
import { Icon } from './Icon';

interface ListHeaderProps {
  filter?: boolean | undefined;
  onPressAdd?: () => void;
  onSetFilter?: (filter: boolean | undefined) => void;
}

export const ListHeader = ({
  filter,
  onPressAdd,
  onSetFilter,
}: ListHeaderProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, { marginTop: top }]}>
        {/* Title container */}
        <View style={styles.titleContainer}>
          {/* Title */}
          <Text numberOfLines={1} style={styles.title}>
            Today
          </Text>

          {/* Add button */}
          <Animated.View
            entering={ZoomInRotate.delay(400)
              .springify()
              .damping(3.0)
              .mass(0.2)
              .stiffness(80)}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              hitSlop={hitSlop}
              style={styles.addButton}
              //
              onPress={onPressAdd}
            >
              <Icon.Add />
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {/* Here should be kinda Radio Button Group */}
          <RadioButton
            title="All"
            selected={filter === undefined}
            color="#98B7DB"
            //
            onPress={() => onSetFilter?.(undefined)}
          />
          <RadioButton
            title="Completed"
            selected={filter === true}
            color="#A8D672"
            //
            onPress={() => onSetFilter?.(true)}
          />
          <RadioButton
            title="Uncompleted"
            selected={filter === false}
            color="#F6ECC9"
            //
            onPress={() => onSetFilter?.(false)}
          />
        </View>
      </View>

      <Svg style={styles.gradient}>
        <Rect width="100%" height="100%" fill="url(#gradient)" />
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="1" x2="0" y2="0">
            <Stop offset="0" stopColor="#98B7DB" stopOpacity="0.1" />
            <Stop offset="1" stopColor="#98B7DB" stopOpacity="0" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
    borderColor: '#F7D44C',
    backgroundColor: '#121224',
  },

  contentContainer: {
    padding: 20,
    gap: 18,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  title: {
    flexGrow: 1,
    fontFamily: 'Overpass-SemiBold',
    fontSize: 42,
    color: '#FFF',
  },

  addButton: {
    borderRadius: 50,
    padding: 14,
    backgroundColor: '#98B7DB14',
  },

  gradient: {
    position: 'absolute',
    width: '100%',
    height: 120,
    bottom: 0,
    zIndex: -1,
  },
});
