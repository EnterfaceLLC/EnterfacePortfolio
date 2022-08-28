import { View, Text, Image, ScrollView } from 'react-native';

//***STYLES IMPORT BELOW***//
import { styles } from './style';

//***ICON IMPORT BELOW***//
import { Entypo } from '@expo/vector-icons';

//***THEME IMPORT BELOW***//
import colors from '../../theme/colors';

const Service = () => {
  return (
    <ScrollView style={styles.modalPg}>
      <View style={styles.titleContain}>
        <Text style={styles.serviceTitle}>Joe's <Text style={styles.highlight}>Services</Text></Text>
      </View>
      <Image
        style={styles.serviceImg} 
        source={require('./Media/barber.jpg')}
      />
      <View style={styles.serviceInfo}>

        <View style={styles.serviceBanner}>
          <View style={styles.banner}>
          <Text style={styles.bannerTxt}>1234 Gage Blvd. Topeka,KS</Text>
          <Text style={styles.bannerTxt}>785-806-76666</Text>
          </View>
        </View>

        <View style={styles.serviceContain}>
          <View style={styles.serviceTask}>
            <Text style={styles.serviceTxt}>Haircut</Text>
            <Text style={styles.serviceTxt}>Haircut & Beard</Text>
            <Text style={styles.serviceTxt}>Kids Haircut</Text>
            <Text style={styles.serviceTxt}>Beard Trim</Text>
            <Text style={styles.serviceTxt}>Line-Up</Text>
            <Text style={styles.serviceTxt}>Shave</Text>
          </View>

          <View style={styles.servicePrice}>
            <Text style={styles.servicePriceTxt}>$ 25.00</Text>
            <Text style={styles.servicePriceTxt}>$ 35.00</Text>
            <Text style={styles.servicePriceTxt}>$ 20.00</Text>
            <Text style={styles.servicePriceTxt}>$ 15.00</Text>
            <Text style={styles.servicePriceTxt}>$ 15.00</Text>
            <Text style={styles.servicePriceTxt}>$ 20.00</Text>
          </View>

          <View style={styles.serviceLinks}>
            <Entypo name="facebook-with-circle" size={50} color={colors.ccthird} />
            <Entypo name="twitter-with-circle" size={50} color={colors.ccthird} />
            <Entypo name="instagram-with-circle" size={50} color={colors.ccthird} />
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default Service;