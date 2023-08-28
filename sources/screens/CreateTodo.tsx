import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScrollableScene } from '~/scenes';
import { Button, Icon, Input, Label } from '~/components';
import { useAppDispatch } from '~/store';
import { addItem } from '~/store/features/todoListSlice';
import type { RootStackParamList } from '~/navigation/types';

type CreateTodoProps = NativeStackScreenProps<RootStackParamList, 'CreateTodo'>;

export const CreateTodo = ({ navigation }: CreateTodoProps) => {
  // Of course something like react-hook-forms should be used here
  const [valid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const textRef = useRef<string>('');
  const dispatch = useAppDispatch();

  const submit = () => {
    setLoading(true);
    dispatch(addItem({ title: textRef.current }))
      .unwrap()
      .then(navigation.goBack)
      .catch(() => setLoading(false));
  };

  const onChangeText = (text: string) => {
    const value = text.trim();
    textRef.current = value;
    setValid(value.length > 0);
  };

  return (
    <ScrollableScene>
      {/* Back */}
      <Animated.View entering={FadeInRight.delay(400)}>
        <TouchableOpacity activeOpacity={0.8} onPress={navigation.goBack}>
          <Icon.Back />
        </TouchableOpacity>
      </Animated.View>

      {/* Image */}
      <View style={styles.imagePlaceholder} />

      {/* Title */}
      <View>
        <Label size={30}>Todo:</Label>
      </View>

      {/* Input */}
      <Input
        placeholder="Tidy up the room..."
        maxLength={200}
        style={styles.input}
        //
        onChangeText={onChangeText}
      />

      {/* Submit */}
      <Button
        title="Add todo"
        activity={isLoading}
        disabled={!valid || isLoading}
        //
        onPress={submit}
      />
    </ScrollableScene>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },

  imagePlaceholder: {
    width: '50%',
    height: '33%',
    minHeight: 180,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 1.8,
    borderStyle: 'dashed',
    borderRadius: 8,
    borderColor: '#0004',
  },
});
