import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { RootStack, rootStackNavigationOptions } from '~/navigation';
import { CreateTodo, TodoList } from '~/screens';
import { persistor, store } from '~/store';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={rootStackNavigationOptions}>
            <RootStack.Screen name="TodoList" component={TodoList} />
            <RootStack.Screen name="CreateTodo" component={CreateTodo} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
