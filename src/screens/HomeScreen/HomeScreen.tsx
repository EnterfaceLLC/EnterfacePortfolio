import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';
import colors from '../../theme/colors';

//***HOMESCREEN CODE BELOW***//
const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <LinearGradient
        colors={['rgba(51,70,111,1)', 'transparent']}
        style={styles.bg}
      />
      <View style={styles.header}>
        <Text style={styles.title}>!!Welcome!!</Text>
        <Image source={require('./Media/JRZ_Profile.jpg')} style={styles.img} />
      </View>
    </View>
  );
};

export default HomeScreen;
