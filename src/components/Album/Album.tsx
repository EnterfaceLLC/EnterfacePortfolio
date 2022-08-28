import { View, Image } from 'react-native'

//***DATA IMPORT BELOW***//
import {IAlbum} from '../../types/models';

//***STYLES IMPORT BELOW***//
import { styles } from './styles';

//***ALBUM CODE BELOW***//
interface IImage {
  album: IAlbum;
}

const Album = ({album}: IImage) => {
  return (
    <View style={styles.page}>
      <Image style={styles.imgs}
        source={{uri: album.pic}}
      />
    </View>
  );
};

export default Album;