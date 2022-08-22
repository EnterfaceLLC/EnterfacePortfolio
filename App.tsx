import { StatusBar as ExpoStatusBar} from 'expo-status-bar';

//***COMPONENTS IMPORT BELOW***//
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation';

//***APP CODE BELOW***//
export default function App() {
  return (
    <NavigationContainer>
      <Root/>

      <ExpoStatusBar/>
    </NavigationContainer>
  );
};