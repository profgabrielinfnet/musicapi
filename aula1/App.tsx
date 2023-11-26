import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import Login from './src/screens/Login';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Login />
    </NativeBaseProvider>
  );
}
