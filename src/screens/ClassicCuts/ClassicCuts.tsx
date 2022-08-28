import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  Button, 
  FlatList, 
  Modal 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

//***COMPONENT IMPORT BELOW***//
import Time from '../../components/TimeSlots/Time';
import Album from '../../components/Album/Album';

//***SCREEN IMPORT BELOW***//
import Service from './Service';

//***STYLES IMPORT BELOW***//
import { styles } from './style';

//***DATA IMPORT BELOW***//
import timeslots from '../../../assets/data/timeslots.json';
import barberAlbum from '../../../assets/data/barberAlbum.json';

//***CLASSIC CUTS CODE BELOW***//
const ClassicCuts = () => {
  const [modalServOn, setModalServOn] = useState(false);
  const [modalPortOn, setModalPortOn] = useState(false);

  return (
    <ScrollView style={styles.page}>
      <LinearGradient
        colors={['transparent','rgba(0,0,0,.4)']}
        style={styles.linear}
      />

      <View style={styles.header}>
        <Text style={styles.title}><Text style={styles.highlight}>Classic</Text> Cutz</Text>
        <Image
          style={styles.img} 
          resizeMode='contain'
          source={require('./Media/cclogo.jpg')} 
        />
        <Text style={styles.address}>
          1234 Gage Blvd. Topeka, KS
        </Text>
        <Text style={styles.phone}>785-806-8666</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>Joe <Text style={styles.highlight}>'Cool'</Text> Adams</Text>
        <Image 
          style={styles.barber}
          source= {
            require('./Media/barber1.jpg')
          }
        />
        <Text style={styles.bioTitle}>About Joe Cool</Text>
        <Text style={styles.bio}>Joe has been providing quality haircuts in the Topeka area for over 10 years. sit amet consectetur, adipisicing elit. Aspernatur quae voluptates saepe eos quas itaque debitis aliquid repellat id error? Laborum dolorum dolores maiores totam ullam, consequatur similique modi minima pariatur ducimus corporis nesciunt laboriosam possimus earum saepe, ad cupiditate quasi!</Text>
        <View style={styles.button}>
          <Modal
            animationType='slide'
            visible={modalServOn}
            onRequestClose={() =>setModalServOn(false)}
          >
            <Service/>
          </Modal>

          <Modal
            animationType='slide'
            visible={modalPortOn}
            onRequestClose={() =>setModalPortOn(false)}
          >
            <View style={{flex:1, backgroundColor: '#97233F'}}>
            <FlatList
              data={barberAlbum}
              renderItem={({item}) => <Album album={item} />}
              showsHorizontalScrollIndicator={false}
            />
            </View>
          </Modal>

          <Button 
            title='Services' 
            color={'#97233F'} 
            onPress={()=> setModalServOn(true)}
          />
          <Text></Text>
          <Button 
            title='Portfolio' 
            color={'#97233F'}
            onPress={()=> setModalPortOn(true)}
          />
        </View>
      </View>

      <View style={styles.foot}>
        <Text style={styles.schedule}>Schedule Now</Text>
        <FlatList
          data={timeslots}
          renderItem={({item}) => <Time post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

    </ScrollView>
  );
};

export default ClassicCuts;