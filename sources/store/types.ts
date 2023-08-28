import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface TodoDocument extends FirebaseFirestoreTypes.DocumentData {
  title: string;
  completed: boolean;
}

export interface Todo extends TodoDocument {
  id: string;
}
