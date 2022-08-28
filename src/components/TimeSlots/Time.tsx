import { View, Text } from 'react-native'

//***DATA IMPORT BELOW***//
import {IPost} from '../../types/models';

//***STYLES IMPORT BELOW***//
import { styles } from './styles';

//***TIME CODE BELOW***//
interface IData {
  post: IPost;
}

const Time = ({post}: IData) => {
  return (
    <View style={styles.contain}>
      <Text style={styles.dayList}>{post.day}</Text>
      <Text style={styles.timeList}>{post.time}</Text>
      <Text style={styles.dateList}>{post.date}</Text>
    </View>
  );
};

export default Time;