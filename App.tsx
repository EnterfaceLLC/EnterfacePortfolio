import { StatusBar as ExpoStatusBar} from 'expo-status-bar';

//***COMPONENTS IMPORT BELOW***//
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/navigation';

//***FONTS IMPORT BELOW***//
import { useFonts,
  Amita_400Regular,
  Amita_700Bold 
} from '@expo-google-fonts/amita'
// import { 
//   Arizonia_400Regular, useFonts 
// } from '@expo-google-fonts/arizonia';

//***APP CODE BELOW***//
export default function App() {

  const [amitaLoaded] = useFonts({
    Amita_400Regular,
    Amita_700Bold 
  });

  if (!amitaLoaded) {
    return null;
  };

  return (
    <NavigationContainer>
      <Root/>

      <ExpoStatusBar/>
    </NavigationContainer>
  );
};