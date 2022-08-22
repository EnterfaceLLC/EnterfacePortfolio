//***COMPONENTS IMPORT BELOW***//
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ClassicCuts from '../screens/ClassicCuts';

//***THEME IMPORT BELOW***//
import colors from '../theme/colors';

//***ICON IMPORTS BELOW***//
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

//***NAVIGATION CODE BELOW***//
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerTabs = () => {
  return (
    <Drawer.Navigator 
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTintColor: colors.accent,
        drawerActiveTintColor: colors.tertiary,
        drawerInactiveTintColor: colors.white,
        drawerActiveBackgroundColor: colors.white,
        drawerStyle: {
          backgroundColor: colors.tertiary, 
          width: '65%',
        },
        headerStyle: { backgroundColor: colors.tertiary, borderBottomWidth: 7, borderBottomColor: colors.accent},
        headerTitleStyle: {color: colors.accent}
      }}
    >

    <Drawer.Screen options={{drawerIcon: ({focused}) => <Ionicons name="home" size={28} color={focused ? colors.tertiary : colors.white} />}} name="Home" component={HomeScreen} />

    <Drawer.Screen
        name="Classic Cuts"
        component={ClassicCuts}
        options={{
          drawerIcon: ({focused}) => 
            <Ionicons 
              name="md-cut-sharp" 
              size={28} 
              color={focused ? colors.tertiary : colors.white} 
            />,
          headerStyle: {backgroundColor: 'white', borderBottomWidth: 7, borderBottomColor: '#58111A'},
          headerTitleStyle: {color: '#58111A'},
          headerTintColor: '#58111A',
        }}
      />



    </Drawer.Navigator>
  );
};

const Root = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={DrawerTabs} options={{headerShown: false}}/>
      {/* <Stack.Screen options={{headerStyle:{backgroundColor: 'red'}}} name='FirstStack' component={null} /> */}
    </Stack.Navigator>
  );
};

export default Root;