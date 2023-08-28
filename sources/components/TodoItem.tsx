import React, { memo } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  AnimatedStyleProp,
  FadeInDown,
} from 'react-native-reanimated';
// @ts-ignore
import { PulseIndicator } from 'react-native-indicators';

import { Icon } from '~/components/Icon';
import { useTodoItem } from '~/store/hooks';
import { hitSlop } from '~/helpers/miscellaneous';
import type { Todo } from '~/store/types';

interface TodoItemProps extends Todo {
  index: number;
  style?: AnimatedStyleProp<ViewStyle> | undefined;
  onPress?: (id: string) => void;
}

export const TodoItem = memo(
  ({ index, id, title, completed, style, onPress }: TodoItemProps) => {
    const { check, remove, isChecking, isRemoving } = useTodoItem(id);

    return (
      <Animated.View
        entering={FadeInDown.duration(250).delay(index * 40)}
        style={[styles.wrapper, style]}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          disabled={isRemoving}
          style={[
            styles.container,
            completed && styles.completed,
            isRemoving && styles.removing,
          ]}
          //
          onPress={() => onPress?.(id)}
        >
          {/* Checkbox */}
          <TouchableOpacity
            hitSlop={hitSlop}
            activeOpacity={0.7}
            style={[styles.checkbox, completed && styles.completed]}
            //
            onPress={() => check(!completed)}
          >
            <PulseIndicator
              color="#121224"
              animating={isChecking}
              size={44}
              style={styles.indicator}
            />
          </TouchableOpacity>

          {/* Title */}
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={[styles.text, styles.id]}>
              {id}
            </Text>
            {!!title && (
              <Text numberOfLines={2} style={[styles.text, styles.title]}>
                {title}
              </Text>
            )}
          </View>

          {/* Remove button */}
          <TouchableOpacity
            activeOpacity={0.7}
            hitSlop={hitSlop}
            disabled={isRemoving}
            style={styles.deleteButton}
            //
            onPress={remove}
          >
            <Icon.Remove />
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Tint */}
        <View pointerEvents="none" style={styles.tint} />
      </Animated.View>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 12,
    borderRadius: 40,
    backgroundColor: '#F6ECC9',
  },

  completed: {
    backgroundColor: '#A8D672',
  },

  tint: {
    position: 'absolute',
    width: '100%',
    height: 4,
    bottom: 0,
    backgroundColor: '#0002',
  },

  removing: {
    opacity: 0.5,
  },

  indicator: {
    position: 'absolute',
  },

  checkbox: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    borderWidth: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFF',
  },

  titleContainer: {
    flex: 1,
    marginBottom: 10,
    gap: 2,
  },

  text: {
    fontFamily: 'Overpass-Medium',
    textAlignVertical: 'center',
    includeFontPadding: false,
    color: '#111',
  },

  id: {
    fontSize: 11,
    color: '#0004',
  },

  title: {
    fontSize: 20,
  },

  deleteButton: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EB7A53',
  },
});
